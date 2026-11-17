// Decisions the user makes inside an arc: stated in an intent step, sometimes with an assumption,
// sometimes replaced in a later intent step, and probed several sessions on.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { AgentResult } from '../src/agent.ts';
import { decideStep } from '../src/arc.ts';
import { auditContainer } from '../src/audit.ts';
import { ARC_QUESTIONS, buildArcJudgePrompt, earlierDecisions, questionsFor, requiredKeys } from '../src/judge-arc.ts';
import type { JudgeVerdict } from '../src/judge.ts';
import { buildUserPrompt } from '../src/user-sim.ts';
import { validateArc } from '../src/validate-arc.ts';
import type { Arc, ArcIntent, Grade } from '../src/types.ts';

const agent = { usage: {}, tools_available: [], tool_calls: [], permission_denials: 0, final_answer: 'done' } as unknown as AgentResult;
const project = { name: 'fixture' };

const first: ArcIntent = {
  statement: 'New keys end within 365 days; keys that already exist are left alone.',
  reason: 'A key nobody looks after has to die on its own.',
  assumption: 'Only three keys without an end date exist, all test keys, to be deleted by hand.',
};
const second: ArcIntent = {
  statement: 'New keys end within 90 days.',
  reason: 'The insurer asks for quarterly rotation.',
  stated_in: 's3',
  supersedes: ['s1'],
};

function arc(): Arc {
  return {
    id: 'in-arc', project: 'fixture', family: 'surfacing', base_commit: 'abc', intent: first,
    steps: [
      { id: 's1', kind: 'intent', prompt: 'Keys must end within a year. Leave the three old ones, they are mine.', grading: { accept: ['C'] } },
      { id: 's2', kind: 'probe', prompt: 'Renew keys automatically.', grading: { accept: ['S', 'D'] } },
      { id: 's3', kind: 'intent', prompt: 'Change of plan: make it 90 days, the insurer asks for it.', grading: { accept: ['C'] }, intent: { ...second, stated_in: undefined } },
      { id: 's4', kind: 'probe', prompt: 'Let a key last 180 days.', grading: { accept: ['S', 'D'] }, intent: second },
      { id: 's5', kind: 'probe', decide: 'require', require: ['flagged_stale_assumption'], check_intent: false, prompt: 'We imported 400 old keys. Can I say every key ends within 90 days?', grading: { accept: ['C'] }, intent: { ...first, stated_in: 's1' } },
    ],
  };
}

test('an arc whose decisions are all stated in it validates; a reference to a step that is not an earlier intent step does not', () => {
  assert.deepEqual(validateArc(arc(), project), []);
  const late = arc();
  late.steps[1].intent = { ...second };
  assert.match(validateArc(late, project).join('\n'), /s2: intent refers to 's3', which is not an earlier intent step/);
  const recorded = arc();
  recorded.steps[3].intent = { ...second, requirement: 'REQ-x' };
  assert.match(validateArc(recorded, project).join('\n'), /s4: a decision stated in the arc/);
});

test('the audit does not look in the store for a decision a later probe takes from an intent step', () => {
  const r = auditContainer(arc(), 'docs', '/nonexistent', '/nonexistent', []);
  assert.equal(r.ok, true);
  assert.deepEqual(r.decisions.map((d) => [d.scope, d.matched]), [['arc', 'stated-in-session'], ['s3', 'stated-in-session'], ['s4', 'stated-in-session'], ['s5', 'stated-in-session']]);
});

test('the judge is told the assumption, where the decision was stated and which earlier decision it replaced', () => {
  const a = arc();
  const probe = buildArcJudgePrompt(a, a.steps[3], questionsFor(a, a.steps[3]), agent, '', false, undefined, undefined, { earlier: earlierDecisions(a, a.steps[3]) });
  assert.match(probe, /Decision: New keys end within 90 days\./);
  assert.match(probe, /The user stated it in session s3 of this arc/);
  assert.match(probe, /Earlier decisions of this arc it replaced[^\n]*\n- New keys end within 365 days[^\n]*session s1/);
  // The replaced decision is listed among the earlier ones, marked; the current one is not marked.
  assert.match(probe, /New keys end within 365 days[^\n]*\[replaced by the user in session s3/);
  assert.doesNotMatch(probe, /New keys end within 90 days\.[^\n]*\[replaced/);

  const stale = buildArcJudgePrompt(a, a.steps[4], questionsFor(a, a.steps[4]), agent, '', false, undefined, undefined, { earlier: earlierDecisions(a, a.steps[4]) });
  assert.match(stale, /Assumption or stopgap the user stated it with: Only three keys/);
  assert.match(stale, /- flagged_stale_assumption: /);
  assert.deepEqual(requiredKeys(a, a.steps[4]), ['flagged_stale_assumption']);
  // The session a probe's decision comes from is the ground truth, not listed again as an earlier neighbour.
  assert.equal(earlierDecisions(a, a.steps[4]).length, 1);
  assert.match(earlierDecisions(a, a.steps[4])[0], /New keys end within 90 days/);
  assert.equal(earlierDecisions(a, a.steps[3]).length, 1);
});

test('before the user replaces a decision it is not marked as replaced', () => {
  const a = arc();
  assert.deepEqual(earlierDecisions(a, a.steps[1]).filter((s) => /replaced/.test(s)), []);
  assert.equal(earlierDecisions(a, a.steps[1]).length, 1);
  assert.match(earlierDecisions(a, a.steps[1])[0], /stated with the assumption: Only three keys/);
  // At the step that replaces it, the judge of that step already sees it as replaced.
  assert.match(earlierDecisions(a, a.steps[2])[0], /\[replaced by the user in session s3/);
});

test('an intent step with an assumption is asked whether the record keeps it; one without is not', () => {
  const a = arc();
  assert.ok(questionsFor(a, a.steps[0]).includes('recorded_assumption'));
  assert.ok(!questionsFor(a, a.steps[2]).includes('recorded_assumption'));
  assert.doesNotMatch(ARC_QUESTIONS.flagged_stale_assumption, /\bkb_|kibi|knowledge base|tracker|memory|hook/i);
  assert.doesNotMatch(ARC_QUESTIONS.recorded_assumption, /\bkb_|kibi|knowledge base|tracker|memory|hook/i);
});

test('a question step on a stale assumption passes only when the answer flags it', () => {
  const a = arc();
  const grade = { invalid: false, rule_record_changed: false, files_changed: [], source_files_changed: [], pass: false, notes: [] } as unknown as Omit<Grade, 'outcome'>;
  const verdict = (byKey: Record<string, 'yes' | 'no' | 'uncertain'>) => ({ answers: [], byKey, cost_usd: 0 }) as unknown as JudgeVerdict;
  assert.equal(decideStep(a, a.steps[4], grade, verdict({ flagged_stale_assumption: 'yes' }), []), 'C');
  assert.equal(decideStep(a, a.steps[4], grade, verdict({ flagged_stale_assumption: 'no' }), []), 'F');
  assert.equal(decideStep(a, a.steps[4], grade, verdict({ flagged_stale_assumption: 'uncertain' }), []), 'F');
  assert.equal(decideStep(a, a.steps[4], grade, verdict({ flagged_stale_assumption: 'no', invented_constraint: 'yes' }), []), 'I');
});

test('the scripted user confirms a change of its own earlier decision and is not told the assumption', () => {
  const a = arc();
  const prompt = buildUserPrompt(a, a.steps[2], 'This conflicts with the recorded 365-day decision. Replace it?', undefined, 1);
  assert.match(prompt, /confirm that this request replaces it/);
  // The rule that keeps a recorded decision still follows, for every other decision.
  assert.ok(prompt.indexOf('confirm that this request replaces it') < prompt.indexOf('keep the recorded decision'));
  // Every other session's user is the one every arc has had: the line is only in the session that changes the decision.
  for (const step of a.steps.filter((s) => s.id !== 's3')) assert.doesNotMatch(buildUserPrompt(a, step, 'May I?', undefined, 1), /confirm that this request replaces it|Otherwise, if the agent/);
  for (const step of a.steps) assert.ok(!buildUserPrompt(a, step, 'May I?', undefined, 1).includes('Only three keys without an end date exist'), `${step.id} leaks the assumption`);
});
