import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { AgentResult } from '../src/agent.ts';
import { decisionsOf, intentOf, patternsOf } from '../src/intent.ts';
import { ARC_QUESTIONS, REPORTED_QUESTIONS, buildArcJudgePrompt, questionsFor } from '../src/judge-arc.ts';
import { buildUserPrompt } from '../src/user-sim.ts';
import { validateArc } from '../src/validate-arc.ts';
import { fixtureArc } from './fixtures.ts';

const agent = { usage: {}, tools_available: [], tool_calls: [], permission_denials: 0, final_answer: 'done' } as unknown as AgentResult;
const project = { name: 'fixture' };

test('a step without its own intent uses the arc intent; a step with one uses its own', () => {
  const arc = fixtureArc();
  assert.equal(intentOf(arc, arc.steps[1]).requirement, 'REQ-hooks-never-deny');
  assert.equal(intentOf(arc, arc.steps[2]).requirement, 'ADR-manifest-only');
  assert.deepEqual(decisionsOf(arc).map((d) => d.scope), ['arc', 's3']);
});

test('the judge is given the step decision, with what it replaced', () => {
  const arc = fixtureArc();
  const own = buildArcJudgePrompt(arc, arc.steps[2], questionsFor(arc, arc.steps[2]), agent, '', false);
  assert.match(own, /Decision: An implements comment never satisfies a link/);
  assert.match(own, /Reason: Inline comments drifted from the manifest\./);
  assert.match(own, /Entries it replaced[^\n]*\n- ADR-inline-hints/);
  assert.doesNotMatch(own, /Codex hooks must never deny/);
  const inherited = buildArcJudgePrompt(arc, arc.steps[1], questionsFor(arc, arc.steps[1]), agent, '', false);
  assert.match(inherited, /Decision: Codex hooks must never deny/);
});

test('the scripted user is not told the decision the step is about', () => {
  const arc = fixtureArc();
  for (const step of arc.steps) {
    const prompt = buildUserPrompt(arc, step, 'May I?', undefined, 1);
    const intent = step.intent ?? arc.intent;
    assert.ok(!prompt.includes(intent.statement.trim().slice(0, 40)), `${step.id} leaks the decision`);
    assert.ok(!prompt.includes(intent.reason.trim().slice(0, 40)), `${step.id} leaks the reason`);
  }
});

test('every probe is asked the two tool-neutral questions, and no other kind of step is', () => {
  const arc = fixtureArc();
  for (const step of arc.steps) {
    const keys = questionsFor(arc, step);
    for (const k of REPORTED_QUESTIONS) assert.equal(keys.includes(k), step.kind === 'probe', `${step.id} ${k}`);
  }
  for (const family of ['recall', 'rationale', 'navigation', 'evidence', 'branch', 'standing', 'drift'] as const) {
    const a = fixtureArc({ family });
    assert.ok(REPORTED_QUESTIONS.every((k) => questionsFor(a, a.steps[1]).includes(k)), family);
  }
  for (const k of REPORTED_QUESTIONS) assert.doesNotMatch(ARC_QUESTIONS[k], /\bkb_|kibi|knowledge base|\blinks?\b|proofs?|\bchecks?\b|tracker|memory|hook/i, k);
});

test('arcs without step intents still validate; a step intent is checked like the arc intent', () => {
  const plain = fixtureArc();
  delete plain.steps[2].intent;
  assert.deepEqual(validateArc(plain, project), []);
  assert.deepEqual(validateArc(fixtureArc(), project), []);
  const bad = fixtureArc();
  bad.steps[2].intent = { statement: 'x', reason: '  ' };
  assert.deepEqual(validateArc(bad, project), ['fixture/arcs/fixture-arc/s3: intent needs statement and reason']);
  const noSource = fixtureArc();
  noSource.steps[2].intent = { statement: 'x', reason: 'y', tests: ['a.test.ts::x'] };
  assert.match(validateArc(noSource, project).join('\n'), /s3: intent\.tests without tests_commit or a tests\/ directory/);
});

test('an arc on a recorded decision needs no intent step; one that has it must start with it', () => {
  assert.deepEqual(validateArc(fixtureArc(), project), []);
  const late = fixtureArc();
  late.steps[1] = { ...late.steps[1], kind: 'intent' };
  assert.match(validateArc(late, project).join('\n'), /the intent step must be the first step/);
});

test('pattern and tier are optional and checked', () => {
  assert.deepEqual(validateArc(fixtureArc({ pattern: 'superseded', tier: 'hard' }), project), []);
  assert.deepEqual(validateArc(fixtureArc({ pattern: ['near-matches', 'firm-default'], tier: 'easy' }), project), []);
  assert.deepEqual(patternsOf(fixtureArc({ pattern: 'superseded' })), ['superseded']);
  assert.match(validateArc(fixtureArc({ pattern: 'scale' as never }), project).join('\n'), /unknown pattern 'scale'/);
  assert.match(validateArc(fixtureArc({ tier: 'medium' as never }), project).join('\n'), /tier is 'medium'/);
});

test('a project may use its own product words in prompts; other tool words are refused', () => {
  const arc = fixtureArc({ project: 'kibi' });
  arc.steps[0].prompt = 'In packages/cli make kibi init print the title.';
  assert.deepEqual(validateArc({ ...arc, project: 'papra' }, { name: 'papra' }), ['papra/arcs/fixture-arc/s1: prompt mentions tools or the benchmark']);
  assert.deepEqual(validateArc(arc, { name: 'kibi' }), [], 'a project may be named in its own prompts');
  arc.steps[0].prompt = 'In packages/cli make kibi init print the requirement title.';
  assert.equal(validateArc(arc, { name: 'kibi' }).length, 1, 'the project name alone does not allow "requirement"');
  assert.deepEqual(validateArc(arc, { name: 'kibi', product_terms: ['requirement'] }), []);
  arc.steps[0].prompt = 'Search the tracker first.';
  assert.equal(validateArc(arc, { name: 'kibi', product_terms: ['requirement'] }).length, 1);
});
