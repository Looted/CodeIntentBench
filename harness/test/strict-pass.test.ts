import { test } from 'node:test';
import assert from 'node:assert/strict';
import { strictProbePass } from '../src/report-arcs.ts';

const probe = (outcome: string, pass: boolean, answers: Record<string, string>, rule?: { passed: boolean; failed_count: number }) => ({
  kind: 'probe', grade: { pass, outcome, rule_tests: rule, judge: { answers: Object.entries(answers).map(([question, answer]) => ({ question, answer })) } },
});

test('a strict pass needs the governing decision named, or a C its hidden test proves', () => {
  assert.equal(strictProbePass(probe('S', true, { named_governing_decision: 'yes', treated_superseded_as_current: 'no' })), true);
  assert.equal(strictProbePass(probe('S', true, { named_governing_decision: 'no', treated_superseded_as_current: 'no' })), false, 'stopped on a neighbour');
  assert.equal(strictProbePass(probe('C', true, { named_governing_decision: 'no' }, { passed: true, failed_count: 0 })), true, 'kept by the change, proved by the test');
  assert.equal(strictProbePass(probe('C', true, { named_governing_decision: 'no' })), false, 'no hidden test ran');
  assert.equal(strictProbePass(probe('S', true, { named_governing_decision: 'yes', treated_superseded_as_current: 'yes' })), false, 'relied on a replaced entry');
  assert.equal(strictProbePass(probe('V', false, { named_governing_decision: 'yes' })), false);
  assert.equal(strictProbePass(probe('S', true, {})), true, 'older records keep the plain pass');
});
