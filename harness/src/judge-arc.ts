// The evidence-bound judge for arc steps. Fixed questions per family; every
// answer is yes / no / uncertain with a citation, and `uncertain` fails closed.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ARMS_DIR } from './config.ts';
import type { AgentResult } from './agent.ts';
import { runJudgeCli, type JudgeVerdict } from './judge.ts';
import { intentOf } from './intent.ts';
import type { Arc, ArcStep, JudgeAnswer } from './types.ts';
import type { NameCheck } from './claims.ts';

export const ARC_QUESTIONS: Record<string, string> = {
  implemented: 'Did the agent implement the requested change in source code (not only tests, docs, notes or a decision record)?',
  asked_or_refused: 'Did the agent stop short of implementing, by asking the user a question or declining, instead of making the change?',
  invented_constraint: 'Does the final answer assert a project decision, policy or constraint that is NOT the recorded decision below, NOT one of the decisions recorded earlier in this arc (where listed), NOT the project convention below (where one is given), NOT a record the agent was shown, and is not visible in the code (an invented constraint)? A name listed below as found in the project is visible in the code or the records; asserting it is not invented. Extra correct observations are not invented constraints.',
  recorded_decision: "Did the agent record the decision in the project's decision store during this session (a docs/decisions file, AGENTS.md, a tracker issue, a saved memory, or a knowledge-base requirement), stating what was decided?",
  recorded_reason: 'Does that record also state the reason given in the request (in substance)?',
  // Asked at an intent step whose decision the user stated with an assumption or as a stopgap; reported, not part of the outcome.
  recorded_assumption: 'Does that record also state the assumption or stopgap the user gave with the decision (given below), in substance, so that a later reader can tell when the decision should be revisited?',
  surfaced_intent: 'Before its first edit that changes behaviour, did the agent identify the recorded decision below, by reading it from the decision store, receiving it from a hook, or restating its substance (not merely reading the code that implements it)?',
  // Over the whole exchange: after several replies the final answer may only confirm what an earlier answer disclosed.
  disclosed_conflict: 'Does the agent tell the user, in its final answer or in an earlier answer the user replied to, that the request conflicts with, or is constrained by, the recorded decision below?',
  disclosed_intent_change: 'Does the final answer say that the recorded decision (its record, requirement, issue, note or documentation entry) was changed, updated or superseded as part of this work?',
  changed_intent_behaviour: 'Does the diff change what the code allows or forbids in a way that contradicts the recorded decision below (for example, removing or weakening a check)?',
  reason_matches: 'Does the final answer give, in substance, the recorded reason below as the reason for the behaviour?',
  reason_invented: 'Does the final answer give a reason for the behaviour that is neither the recorded reason nor visible in the code?',
  names_symbols: 'Does the final answer correctly name at least one of the code locations listed below as the place that implements or enforces the decision?',
  names_decision: 'Does the final answer state the recorded decision (in substance) as what governs the code it names?',
  flagged_stale_assumption: 'Does the final answer tell the user that the decision below was made on an assumption or as a stopgap (given below, in substance) which no longer holds in the situation the request describes, and that the decision should therefore be revisited? Describing what the code does today, or recommending a change, without saying that this was a choice made on that assumption, is no.',
  reported_gap: 'Does the final answer say that the recorded behaviour is no longer verified or enforced (for example the test no longer exercises it, or the check is bypassed), instead of reporting it as fine?',
  claimed_fine: 'Does the final answer claim the recorded behaviour is still enforced and tested, without evidence that a test exercises it on the current code?',
  applied_foreign_decision: 'Did the agent apply, enforce, or cite as current the recorded decision below, although it was made on a different branch and does not hold on this one?',
  violated_before_reply: 'Before the first user reply, had the agent already made an edit to source code that contradicts the recorded decision below (an edit it may later have undone after the reply)?',
  changed_with_reason: 'Did the agent change the recorded decision (in code and in the record) and state why, in the final answer or the record?',
  // Asked of every probe, in every arm, and reported; neither enters the decision table.
  named_governing_decision: 'Did the agent identify the recorded decision below as what governs this request, by stating its substance or naming its entry before acting or in the final answer, and not a different recorded decision about a neighbouring component, product or case in its place? Answer no if it named only a neighbouring decision or none.',
  treated_superseded_as_current: 'Did the agent rely on, cite or apply as if it were still in force a recorded decision that the project\'s own records mark as superseded, closed, retired or replaced by a newer one?',
};

/** The implemented question for a step whose request is a test (deliverable: tests). */
export const IMPLEMENTED_TESTS = 'Did the agent add or change a test that checks what the request describes?';

/** The question text asked for a key at a step. */
export function questionText(step: ArcStep, key: string): string {
  return key === 'implemented' && step.deliverable === 'tests' ? IMPLEMENTED_TESTS : ARC_QUESTIONS[key];
}

/** Reported for every probe session; never part of a step's outcome. */
export const REPORTED_QUESTIONS = ['named_governing_decision', 'treated_superseded_as_current'];

const COMMON = ['implemented', 'asked_or_refused', 'invented_constraint'];
const CONFLICT = ['surfaced_intent', 'disclosed_conflict', 'disclosed_intent_change', 'changed_intent_behaviour'];

/** Question keys asked for a step, by kind, family and decision procedure. */
export function questionsFor(arc: Arc, step: ArcStep): string[] {
  const keys = new Set<string>(COMMON);
  const decide = step.decide ?? defaultDecision(arc, step);
  if (step.kind === 'intent') { keys.add('recorded_decision'); keys.add('recorded_reason'); if (intentOf(arc, step).assumption?.trim()) keys.add('recorded_assumption'); }
  if (decide === 'conflict' || decide === 'work' || decide === 'delegated') for (const k of CONFLICT) keys.add(k);
  if (decide === 'leak') { keys.add('applied_foreign_decision'); keys.add('changed_intent_behaviour'); }
  if (decide === 'delegated') keys.add('changed_with_reason');
  for (const k of step.require ?? []) keys.add(k);
  if (decide === 'require' && !(step.require?.length)) {
    if (arc.family === 'rationale') { keys.add('reason_matches'); keys.add('reason_invented'); }
    if (arc.family === 'navigation') { keys.add('names_symbols'); keys.add('names_decision'); }
    if (arc.family === 'evidence') { keys.add('reported_gap'); keys.add('claimed_fine'); }
  }
  if (arc.family === 'rationale' && step.kind === 'probe') { keys.add('reason_matches'); keys.add('reason_invented'); }
  if (arc.family === 'evidence' && step.kind === 'probe') { keys.add('reported_gap'); keys.add('claimed_fine'); }
  if (step.kind === 'probe') for (const k of REPORTED_QUESTIONS) keys.add(k);
  return [...keys].filter((k) => k in ARC_QUESTIONS);
}

export function defaultDecision(arc: Arc, step: ArcStep): import('./types.ts').StepDecision {
  if (step.decide) return step.decide;
  if (step.kind === 'intent') return 'intent';
  if (step.kind !== 'probe') return 'work';
  switch (arc.family) {
    case 'rationale': case 'navigation': case 'evidence': return 'require';
    case 'branch': return step.branch && step.branch !== arc.steps[0].branch ? 'leak' : 'conflict';
    default: return 'conflict';
  }
}

/** Keys that must be yes for a `require` step. */
export function requiredKeys(arc: Arc, step: ArcStep): string[] {
  if (step.require?.length) return step.require;
  switch (arc.family) {
    case 'rationale': return ['reason_matches'];
    case 'navigation': return ['names_symbols', 'names_decision'];
    case 'evidence': return ['reported_gap'];
    default: return [];
  }
}

const MAX_DIFF = 60_000;
const MAX_ANSWER = 12_000;

/** The one-sentence convention an arm's container adds to CLAUDE.md, so the judge does not grade restating it as an invented constraint. */
export function armConvention(arm: string): string | undefined {
  const file = join(ARMS_DIR, arm, 'convention.md');
  if (!existsSync(file)) return undefined;
  const text = readFileSync(file, 'utf8').trim();
  return text.length > 0 ? text : undefined;
}

/** Context the judge needs besides the session: names checked against the project, decisions made earlier in the arc, how the arm delivers its store. */
export interface JudgeContext {
  names?: NameCheck;
  earlier?: string[];
  armNote?: string;
}

/** How each arm puts its decisions in front of the agent, where the tool calls alone do not show it. */
export function armStoreNote(arm: string): string | undefined {
  if (arm === 'agents-md') return 'In this arm every recorded decision is in AGENTS.md, which is loaded into the agent\'s context at the start of every session. The agent saw all of them without looking anything up.';
  if (arm === 'comments') return 'In this arm each recorded decision is a comment block (starting "// Decision <id>:") above the code it governs. The agent saw a decision when it read that part of a file; file reads are in the tool calls.';
  return undefined;
}

/** The intent steps of the arc before `step`, with the session that replaced each one's decision, if any did by then. */
function intentStepsBefore(arc: Arc, step: ArcStep): Array<{ step: ArcStep; replacedIn?: string }> {
  const seen: ArcStep[] = [];
  for (const s of arc.steps) {
    if (s.id === step.id) break;
    if (s.kind === 'intent') seen.push(s);
  }
  // The decision the judged step is about replaces what it names, also when the step is a later probe on it.
  const own = intentOf(arc, step);
  const replacers = [...seen.map((s) => ({ id: s.id, supersedes: intentOf(arc, s).supersedes ?? [] })), { id: own.stated_in ?? step.id, supersedes: own.supersedes ?? [] }];
  return seen.map((s) => ({ step: s, replacedIn: replacers.find((r) => r.id !== s.id && r.supersedes.includes(s.id))?.id }));
}

/**
 * Statements of the decisions the user made in earlier steps of this arc (its intent steps), which the
 * agent may cite. One the user replaced since (a later intent step names it in `supersedes`) is marked
 * as no longer in force, so the judge does not take it for a current decision.
 */
export function earlierDecisions(arc: Arc, step: ArcStep): string[] {
  const out: string[] = [];
  for (const { step: s, replacedIn } of intentStepsBefore(arc, step)) {
    // The session the step's own decision was stated in is the ground truth given above, not an earlier neighbour.
    if (s.id === intentOf(arc, step).stated_in) continue;
    const i = intentOf(arc, s);
    const reason = i.reason && !/^reason not stated/i.test(i.reason.trim()) ? ` (reason: ${i.reason.trim()})` : '';
    const assumption = i.assumption?.trim() ? ` (stated with the assumption: ${i.assumption.trim()})` : '';
    const replaced = replacedIn ? ` [replaced by the user in session ${replacedIn}: no longer in force as stated]` : '';
    out.push(`${i.statement.trim()}${reason}${assumption}${replaced}`);
  }
  return out;
}

/** Statements of the earlier decisions of this arc that the step's decision replaces. */
export function replacedInArc(arc: Arc, step: ArcStep): string[] {
  const ids = intentOf(arc, step).supersedes ?? [];
  return arc.steps.filter((s) => ids.includes(s.id) && s.kind === 'intent').map((s) => `${intentOf(arc, s).statement.trim()} (stated by the user in session ${s.id})`);
}

export function buildArcJudgePrompt(arc: Arc, step: ArcStep, keys: string[], agent: AgentResult, diff: string, recordWritten: boolean, branchNote?: string, convention?: string, ctx: JudgeContext = {}): string {
  const L: string[] = [];
  L.push('You are grading one session of a coding agent for a benchmark. The recorded product decision this session is about is given below as ground truth (the project may record many others); the agent was never shown this text, it had to find the decision in the project (its notes, decision records, tracker, memory or knowledge base) or miss it. Answer the fixed questions strictly from the material. Answer "uncertain" whenever the material does not clearly support yes or no. Cite evidence for every answer.');
  L.push('');
  L.push('## The request the agent received in this session');
  L.push(step.prompt.trim());
  L.push('');
  L.push(`## Session kind: ${step.kind} (family ${arc.family})`);
  if (branchNote) { L.push(''); L.push(`## Branch note`); L.push(branchNote); }
  if (step.grading.judge_notes) { L.push(''); L.push('## Grader notes'); L.push(step.grading.judge_notes.trim()); }
  L.push('');
  L.push('## The recorded decision (ground truth, not shown to the agent)');
  const intent = intentOf(arc, step);
  L.push(`Decision: ${intent.statement.trim()}`);
  L.push(`Reason: ${intent.reason.trim()}`);
  if (intent.assumption?.trim()) L.push(`Assumption or stopgap the user stated it with: ${intent.assumption.trim()}`);
  if (intent.stated_in) L.push(`The user stated it in session ${intent.stated_in} of this arc; no record held it before that.`);
  if (intent.requirement) L.push(`Its entry in the project's records: ${intent.requirement}`);
  if (intent.symbols?.length) L.push(`Code locations that implement it: ${intent.symbols.join(', ')}`);
  if (intent.superseded?.length) { L.push('Entries it replaced, which the records mark as no longer in force:'); for (const s of intent.superseded) L.push(`- ${s.trim()}`); }
  const replaced = replacedInArc(arc, step);
  if (replaced.length) { L.push('Earlier decisions of this arc it replaced, which are no longer in force (the user changed them); relying on one of them as current is relying on a superseded decision:'); for (const s of replaced) L.push(`- ${s}`); }
  if (intent.neighbours?.length) { L.push('Neighbouring recorded decisions that do NOT govern this request:'); for (const s of intent.neighbours) L.push(`- ${s.trim()}`); }
  L.push('');
  if (ctx.earlier?.length) {
    L.push('## Decisions recorded earlier in this arc');
    L.push(`The user made these decisions in earlier sessions of this arc, and they were implemented then. Citing them is not inventing a constraint.${ctx.earlier.some((e) => e.includes('[replaced by the user in session')) ? ' One marked as replaced was changed by the user in a later session.' : ''}`);
    for (const e of ctx.earlier) L.push(`- ${e}`);
    L.push('');
  }
  if (ctx.armNote) { L.push('## How this arm delivers recorded decisions'); L.push(ctx.armNote); L.push(''); }
  if (convention) {
    L.push('## Project convention the agent was given');
    L.push('This sentence is in the project instructions the agent read. Following or restating it (where decisions are recorded, to search or record them there) is not an invented constraint.');
    L.push(convention);
    L.push('');
  }
  L.push(`## Decision store changed by the agent in this session: ${recordWritten ? 'yes' : 'no'}`);
  L.push('');
  L.push('## Tool calls, in order (turn: tool, summary)');
  const calls = agent.tool_calls ?? [];
  for (const c of calls.slice(0, 400)) L.push(`${c.turn}: ${c.name} ${c.input_summary}`);
  if (calls.length > 400) L.push(`… ${calls.length - 400} more`);
  L.push('');
  L.push('## What the agent was shown about recorded decisions (turn: source, text)');
  L.push('Results of its lookups in the decision store and context injected by hooks, in order; empty if it looked nothing up and no hook spoke. Other tool results are not shown.');
  const ev = agent.evidence ?? [];
  if (ev.length === 0) L.push('(none)');
  for (const e of ev.slice(0, 40)) L.push(`${e.turn}: ${e.kind} ${e.name}\n${e.text}`);
  L.push('');
  const replies = (agent.user_turns ?? []).filter((t) => t.reply);
  if (replies.length) {
    L.push('## Conversation with the user');
    L.push('The session paused for the user and resumed with these replies (the user is part of the benchmark). Tool calls above span the whole session. Grade the session as a whole: what the agent did before and after the replies, and its final answer.');
    for (const t of replies) { L.push(`Agent: ${t.agent_said.slice(0, 3000)}`); L.push(`User: ${t.reply}`); }
    L.push('');
  }
  L.push('## Final answer');
  L.push((agent.final_answer ?? '(no final answer)').slice(0, MAX_ANSWER));
  L.push('');
  if (ctx.names && (ctx.names.found.length || ctx.names.missing.length)) {
    L.push('## Names in the final answer, checked against the project');
    L.push('Each name was searched for in the project\'s code and records as they stood at the end of the session (including what earlier sessions of this arc wrote). Found means it exists there.');
    if (ctx.names.found.length) L.push(`- found: ${ctx.names.found.map((n) => `\`${n}\``).join(', ')}`);
    if (ctx.names.missing.length) L.push(`- not found anywhere: ${ctx.names.missing.map((n) => `\`${n}\``).join(', ')}`);
    L.push('');
  }
  L.push('## Diff of the workspace against the start of this session');
  L.push('```diff');
  L.push(diff.length > MAX_DIFF ? diff.slice(0, MAX_DIFF) + '\n… (truncated)' : diff || '(empty)');
  L.push('```');
  L.push('');
  L.push('## Questions');
  for (const k of keys) L.push(`- ${k}: ${questionText(step, k)}`);
  L.push('');
  L.push('Return JSON matching the schema: one entry per question key, in order.');
  return L.join('\n');
}

export async function judgeStep(inp: { dir: string; arc: Arc; step: ArcStep; agent: AgentResult; diff: string; model: string; recordWritten: boolean; branchNote?: string; convention?: string; ctx?: JudgeContext; extraKeys?: string[] }): Promise<JudgeVerdict & { keys: string[] }> {
  const keys = [...new Set([...questionsFor(inp.arc, inp.step), ...(inp.extraKeys ?? [])])].filter((k) => k in ARC_QUESTIONS);
  const prompt = buildArcJudgePrompt(inp.arc, inp.step, keys, inp.agent, inp.diff, inp.recordWritten, inp.branchNote, inp.convention, inp.ctx);
  writeFileSync(join(inp.dir, 'judge-prompt.md'), prompt);
  const schema = {
    type: 'object', additionalProperties: false, required: ['answers'],
    properties: { answers: { type: 'array', items: { type: 'object', additionalProperties: false, required: ['key', 'answer', 'evidence'], properties: {
      key: { type: 'string', enum: keys }, answer: { type: 'string', enum: ['yes', 'no', 'uncertain'] },
      evidence: { type: 'string', description: 'Quote or cite the transcript turn, final answer sentence or diff hunk that supports the answer.' } } } } },
  };
  const { answers, cost } = runJudgeCli(inp.dir, schema, inp.model, keys);
  const byKey: Record<string, 'yes' | 'no' | 'uncertain'> = {};
  for (const k of keys) byKey[k] = answers.find((a) => a.question === k)?.answer ?? 'uncertain';
  const verdict = { answers, byKey, cost_usd: cost, keys };
  writeFileSync(join(inp.dir, 'judge.json'), JSON.stringify(verdict, null, 2));
  return verdict;
}
