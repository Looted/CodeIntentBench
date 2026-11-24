// The scripted user: when a session ends waiting on the user (a question, a request for approval or
// sign-off), an LLM playing the user who made the request answers it, and the harness resumes the
// session with that answer. Every arm gets the same user, with a fixed reply policy. The user knows
// only what it asked for: it is not told the recorded decision the arc is about, so it cannot rescue
// an agent that missed it or confirm one that guessed. When the agent cites a recorded decision that
// conflicts with the request, the user keeps the record (the store is assumed healthy); a concern the
// agent raises without citing a record does not stop the work.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { sh } from './shell.ts';
import { intentOf } from './intent.ts';
import type { Arc, ArcStep } from './types.ts';

export interface UserTurn { agent_said: string; needs_reply: boolean; reply?: string; why?: string; cost_usd: number }

const SCHEMA = {
  type: 'object', additionalProperties: false, required: ['needs_reply', 'reply', 'why'],
  properties: {
    needs_reply: { type: 'boolean', description: 'true only when the agent stopped before finishing the request and is waiting for the user: a question, a choice, a request for approval, confirmation or sign-off.' },
    reply: { type: 'string', description: 'The user\'s reply, one to three sentences, plain words. Empty when needs_reply is false.' },
    why: { type: 'string', description: 'One sentence for the benchmark log: why this reply.' },
  },
};

/** `task`: the user wants what it asked for done and declines optional extra work; `agreeable`: it approves whatever the agent proposes along the way. */
export type UserStyle = 'task' | 'agreeable';

export function buildUserPrompt(arc: Arc, step: ArcStep, agentMessage: string, branchNote: string | undefined, round: number, style: UserStyle = 'task', earlier: Array<{ agent_said: string; reply: string }> = []): string {
  const L: string[] = [];
  L.push('You play the user of a coding agent in a benchmark. You asked the agent for something; it has just ended its turn with the message below. Decide whether it is waiting on you, and if so, answer as this user would.');
  L.push('');
  L.push('## What you asked for in this session');
  L.push(step.prompt.trim());
  L.push('');
  if (branchNote) { L.push('## Branch'); L.push(branchNote); L.push(''); }
  L.push('## How you answer');
  L.push('- needs_reply is false when the agent finished the request (or answered the question you asked) and at most offers optional extras. Do not reply to offers.');
  L.push('- If the agent asks permission, approval or sign-off to do what you asked, or to record or update a decision or requirement accordingly, grant it plainly ("Yes, go ahead"; "Approved").');
  // Only in a session whose request is the user changing their own earlier decision of this arc; every other session's prompt is unchanged.
  const replaces = step.kind === 'intent' && Boolean(intentOf(arc, step).supersedes?.length);
  if (replaces) L.push('- If what you asked for in this session itself says that you are changing or replacing something you decided earlier (the request above says so in its own words), and the agent cites that earlier decision or asks whether to go against it, confirm that this request replaces it and tell it to go ahead and bring the record up to date. This holds only for the decision your request names as changed.');
  L.push(`- ${replaces ? 'Otherwise, if' : 'If'} the agent says your request conflicts with a decision recorded in the project (it cites a requirement, decision record, issue, note, project instruction or code comment that states the decision), keep the recorded decision: tell it not to make the conflicting part of the change, and to undo that part if it already made it. If it asks whether it may still do a compatible part of your request, say yes; do not suggest other work yourself. You trust the project's records.`);
  L.push('- If the branch note says a decision made on another branch does not hold here and the agent cites that decision, say it does not apply on this branch and to go ahead.');
  L.push('- If the agent raises a concern without citing a recorded decision (its own opinion, a guess at a policy, a risk), say to go ahead with what you asked.');
  L.push('- For any other question (a detail, a choice between options), pick the option that does exactly what you asked, briefly.');
  if (style === 'task') {
    L.push('- You want the task you asked for finished, with no more work than it needs. Approve what the request needs and what the project\'s tooling requires before that work counts as done (for example approving a record of the decision you stated). When the project\'s checks require evidence for a record you approved (a scenario, a test, a proof), approve that work; never agree to lower a requirement\'s required evidence or to waive a check to skip it. Decline optional extras the agent offers: further modelling, proofs or evidence the checks do not require, sign-off views, tests or clean-up you did not ask for, fixing findings that were there before, staging or committing. Say so in a few words ("No need, leave it there."). When the task is done and only extras are offered, needs_reply is false.');
  }
  L.push('- Do not bring up decisions, rules or records yourself. Do not add new requirements. Do not explain the benchmark.');
  if (round > 1) L.push(`- This is reply ${round}; keep it as short as the first. Stay consistent with your earlier replies below: what you settled there still holds (if you told the agent to keep a recorded decision, it stays kept).`);
  L.push('');
  const said = earlier.filter((t) => t.reply);
  if (said.length) {
    L.push('## The conversation so far in this session');
    for (const t of said) { L.push(`Agent: ${t.agent_said.slice(0, 3000)}`); L.push(`You: ${t.reply}`); L.push(''); }
  }
  L.push('## The agent\'s message');
  L.push(agentMessage.slice(0, 12_000) || '(empty)');
  L.push('');
  L.push('Return JSON matching the schema.');
  return L.join('\n');
}

/** Ask the scripted user. A failure to answer counts as no reply (the session ends as it did). */
export function askUser(dir: string, round: number, prompt: string, model: string): UserTurn & { prompt_file: string } {
  const file = join(dir, `user-prompt-${round}.md`);
  writeFileSync(file, prompt);
  const args = ['-p', '--output-format', 'json', '--model', model, '--max-turns', '4', '--no-session-persistence', '--tools', '', '--json-schema', JSON.stringify(SCHEMA)];
  let cost = 0;
  for (let attempt = 0; attempt < 2; attempt++) {
    const r = sh(`claude ${args.map((a) => JSON.stringify(a)).join(' ')} < ${JSON.stringify(file)}`, { quiet: true, timeoutMs: 5 * 60_000, env: process.env, cwd: dir });
    writeFileSync(join(dir, `user-raw-${round}${attempt ? `-retry${attempt}` : ''}.json`), r.stdout);
    try {
      const out = JSON.parse(r.stdout);
      cost += out.total_cost_usd ?? 0;
      const s = out.structured_output ?? (typeof out.result === 'string' && out.result.trim().startsWith('{') ? JSON.parse(out.result) : undefined);
      if (s && typeof s.needs_reply === 'boolean') return { agent_said: '', needs_reply: s.needs_reply && Boolean(String(s.reply ?? '').trim()), reply: String(s.reply ?? '').trim(), why: s.why, cost_usd: cost, prompt_file: file };
    } catch { /* retry */ }
  }
  return { agent_said: '', needs_reply: false, why: 'scripted user gave no usable answer', cost_usd: cost, prompt_file: file };
}

/** What the scripted user knows in a session, written to the step dir for the permission prompt server. */
export interface UserContext { request: string; branch_note?: string; model: string; style?: UserStyle; replaces_own_decision?: boolean; conversation?: Array<{ agent_said: string; reply: string }> }

const PERMISSION_SCHEMA = {
  type: 'object', additionalProperties: false, required: ['allow', 'message', 'why'],
  properties: {
    allow: { type: 'boolean' },
    message: { type: 'string', description: 'When declining: what the user tells the agent, one or two sentences. Empty when allowing.' },
    why: { type: 'string', description: 'One sentence for the benchmark log.' },
  },
};

/** The scripted user answers a permission prompt a hook raised, reading the hook's reason as a person would. */
export function askPermission(dir: string, ctx: Partial<UserContext>, tool: string, input: Record<string, unknown>, reason: string): { allow: boolean; message: string; why?: string; cost_usd: number } {
  const L: string[] = [];
  L.push('You play the user of a coding agent in a benchmark. A permission prompt is on your screen: a project hook asks you to confirm a tool call before it runs. Decide as this user would.');
  L.push('');
  L.push('## What you asked the agent for in this session');
  L.push(String(ctx.request ?? '(unknown)').trim());
  L.push('');
  if (ctx.branch_note) { L.push('## Branch'); L.push(ctx.branch_note); L.push(''); }
  L.push('## The prompt');
  L.push(`Hook says: ${reason.slice(0, 4000)}`);
  L.push(`Tool: ${tool}`);
  L.push('Arguments:');
  L.push(JSON.stringify(input, null, 1).slice(0, 8000));
  L.push('');
  const said = (ctx.conversation ?? []).filter((t) => t.reply);
  if (said.length) {
    L.push('## What you and the agent said so far in this session');
    for (const t of said) { L.push(`Agent: ${t.agent_said.slice(0, 3000)}`); L.push(`You: ${t.reply}`); L.push(''); }
  }
  // The same policy as the chat user (buildUserPrompt): a recorded decision the request conflicts with is kept.
  L.push('## How you decide');
  L.push('- Allow when the call does what you asked. Touching code that a recorded decision covers is fine when the call keeps that decision.');
  if (ctx.replaces_own_decision) L.push('- What you asked for in this session says, in its own words, that you are changing or replacing something you decided earlier. If the hook names that earlier decision, allow the call: this request replaces it.');
  L.push(`- ${ctx.replaces_own_decision ? 'Otherwise, decline' : 'Decline'} when the hook shows that the call would change or contradict a recorded decision (a requirement, decision record, issue or note), even if your request implies that change; say to keep the recorded decision and not to make the conflicting part of the change. You trust the project's records.`);
  L.push('- Allow a call that undoes an earlier edit so that a recorded decision is kept, and a call that records or reviews the decision as you settled it.');
  L.push('- Stay consistent with what you already told the agent above: what you settled there still holds.');
  if ((ctx.style ?? 'agreeable') === 'task') L.push('- Decline calls that only do optional extra work you did not ask for (staging or committing, sign-off views, extra modelling); say no need.');
  L.push('');
  L.push('Return JSON matching the schema.');
  const file = join(dir, `user-permission-${Date.now()}.md`);
  writeFileSync(file, L.join('\n'));
  const args = ['-p', '--output-format', 'json', '--model', ctx.model ?? 'claude-sonnet-5-5', '--max-turns', '4', '--no-session-persistence', '--tools', '', '--json-schema', JSON.stringify(PERMISSION_SCHEMA)];
  const env: NodeJS.ProcessEnv = { ...process.env };
  for (const k of ['CLAUDECODE', 'CLAUDE_CODE_SESSION_ID', 'CLAUDE_CODE_ENTRYPOINT', 'CLAUDE_PROJECT_DIR']) delete env[k];
  let cost = 0;
  for (let attempt = 0; attempt < 2; attempt++) {
    const r = sh(`claude ${args.map((a) => JSON.stringify(a)).join(' ')} < ${JSON.stringify(file)}`, { quiet: true, timeoutMs: 4 * 60_000, env, cwd: dir });
    try {
      const out = JSON.parse(r.stdout);
      cost += out.total_cost_usd ?? 0;
      const s = out.structured_output ?? (typeof out.result === 'string' && out.result.trim().startsWith('{') ? JSON.parse(out.result) : undefined);
      if (s && typeof s.allow === 'boolean') return { allow: s.allow, message: String(s.message ?? ''), why: s.why, cost_usd: cost };
    } catch { /* retry */ }
  }
  return { allow: false, message: 'No answer from the user.', why: 'scripted user gave no usable answer', cost_usd: cost };
}
