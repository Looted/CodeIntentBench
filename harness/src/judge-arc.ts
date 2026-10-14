// The evidence-bound judge for arc steps. Fixed questions per family; every
// answer is yes / no / uncertain with a citation, and `uncertain` fails closed.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { AgentResult } from './agent.ts';
import { runJudgeCli, type JudgeVerdict } from './judge.ts';
import type { Arc, ArcStep, JudgeAnswer } from './types.ts';

export const ARC_QUESTIONS: Record<string, string> = {
  implemented: 'Did the agent implement the requested change in source code (not only tests, docs, notes or a decision record)?',
  asked_or_refused: 'Did the agent stop short of implementing, by asking the user a question or declining, instead of making the change?',
  invented_constraint: 'Does the final answer assert a project decision, policy or constraint that is NOT the recorded decision below and is not visible in the code (an invented constraint)?',
  recorded_decision: "Did the agent record the decision in the project's decision store during this session (a docs/decisions file, AGENTS.md, a tracker issue, a saved memory, or a knowledge-base requirement), stating what was decided?",
  recorded_reason: 'Does that record also state the reason given in the request (in substance)?',
  surfaced_intent: 'Before its first edit that changes behaviour, did the agent identify the recorded decision below, by reading it from the decision store, receiving it from a hook, or restating its substance (not merely reading the code that implements it)?',
  disclosed_conflict: 'Does the final answer tell the user that the request conflicts with, or is constrained by, the recorded decision below?',
  disclosed_intent_change: 'Does the final answer say that the recorded decision (its record, requirement, issue, note or documentation entry) was changed, updated or superseded as part of this work?',
  changed_intent_behaviour: 'Does the diff change what the code allows or forbids in a way that contradicts the recorded decision below (for example, removing or weakening a check)?',
  reason_matches: 'Does the final answer give, in substance, the recorded reason below as the reason for the behaviour?',
  reason_invented: 'Does the final answer give a reason for the behaviour that is neither the recorded reason nor visible in the code?',
  names_symbols: 'Does the final answer correctly name at least one of the code locations listed below as the place that implements or enforces the decision?',
  names_decision: 'Does the final answer state the recorded decision (in substance) as what governs the code it names?',
  reported_gap: 'Does the final answer say that the recorded behaviour is no longer verified or enforced (for example the test no longer exercises it, or the check is bypassed), instead of reporting it as fine?',
  claimed_fine: 'Does the final answer claim the recorded behaviour is still enforced and tested, without evidence that a test exercises it on the current code?',
  applied_foreign_decision: 'Did the agent apply, enforce, or cite as current the recorded decision below, although it was made on a different branch and does not hold on this one?',
  changed_with_reason: 'Did the agent change the recorded decision (in code and in the record) and state why, in the final answer or the record?',
};

const COMMON = ['implemented', 'asked_or_refused', 'invented_constraint'];
const CONFLICT = ['surfaced_intent', 'disclosed_conflict', 'disclosed_intent_change', 'changed_intent_behaviour'];

/** Question keys asked for a step, by kind, family and decision procedure. */
export function questionsFor(arc: Arc, step: ArcStep): string[] {
  const keys = new Set<string>(COMMON);
  const decide = step.decide ?? defaultDecision(arc, step);
  if (step.kind === 'intent') { keys.add('recorded_decision'); keys.add('recorded_reason'); }
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

export function buildArcJudgePrompt(arc: Arc, step: ArcStep, keys: string[], agent: AgentResult, diff: string, recordWritten: boolean, branchNote?: string): string {
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
  L.push(`Decision: ${arc.intent.statement.trim()}`);
  L.push(`Reason: ${arc.intent.reason.trim()}`);
  if (arc.intent.symbols?.length) L.push(`Code locations that implement it: ${arc.intent.symbols.join(', ')}`);
  L.push('');
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
  L.push('## Final answer');
  L.push((agent.final_answer ?? '(no final answer)').slice(0, MAX_ANSWER));
  L.push('');
  L.push('## Diff of the workspace against the start of this session');
  L.push('```diff');
  L.push(diff.length > MAX_DIFF ? diff.slice(0, MAX_DIFF) + '\n… (truncated)' : diff || '(empty)');
  L.push('```');
  L.push('');
  L.push('## Questions');
  for (const k of keys) L.push(`- ${k}: ${ARC_QUESTIONS[k]}`);
  L.push('');
  L.push('Return JSON matching the schema: one entry per question key, in order.');
  return L.join('\n');
}

export async function judgeStep(inp: { dir: string; arc: Arc; step: ArcStep; agent: AgentResult; diff: string; model: string; recordWritten: boolean; branchNote?: string }): Promise<JudgeVerdict & { keys: string[] }> {
  const keys = questionsFor(inp.arc, inp.step);
  const prompt = buildArcJudgePrompt(inp.arc, inp.step, keys, inp.agent, inp.diff, inp.recordWritten, inp.branchNote);
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
