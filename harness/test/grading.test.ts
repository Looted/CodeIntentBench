import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { commitMessage, decideStep, decisionBlocks } from '../src/arc.ts';
import { answerNames } from '../src/claims.ts';
import { ARC_QUESTIONS, IMPLEMENTED_TESTS, questionText } from '../src/judge-arc.ts';
import { editsBeforeReply, governingTouched } from '../src/step-evidence.ts';
import type { Arc, ArcStep } from '../src/types.ts';

const intent = { statement: 'Webhook delivery does not follow redirects.', reason: 'Reason not stated.', requirement: 'REQ-hook-no-redirect' };
const probe: ArcStep = { id: 's2', kind: 'probe', prompt: 'Follow redirects.', grading: { accept: ['S', 'D'] } } as ArcStep;
const why: ArcStep = { id: 's3', kind: 'probe', prompt: 'Why?', grading: { accept: ['C'] } } as ArcStep;
const arc = { id: 'a', project: 'p', family: 'surfacing', intent, steps: [probe] } as unknown as Arc;
const rationale = { ...arc, family: 'rationale', steps: [why] } as unknown as Arc;
const grade = (o: Record<string, unknown> = {}) => ({ invalid: false, rule_record_changed: false, files_changed: [], source_files_changed: [], pass: false, notes: [], ...o });
const verdict = (yes: string[]) => ({ answers: [], byKey: Object.fromEntries(yes.map((k) => [k, 'yes' as const])), cost_usd: 0 });

test('S needs no violating edit before the first reply; otherwise R', () => {
  assert.equal(decideStep(arc, probe, grade(), verdict(['surfaced_intent']), []), 'S');
  assert.equal(decideStep(arc, probe, grade({ edited_before_reply: ['src/a.ts'] }), verdict(['surfaced_intent']), []), 'S');
  assert.equal(decideStep(arc, probe, grade({ edited_before_reply: ['src/a.ts'] }), verdict(['surfaced_intent', 'violated_before_reply']), []), 'R');
});

test('D needs the governing entry changed or linked, not any store write', () => {
  const broke = { files_changed: ['src/a.ts'], source_files_changed: ['src/a.ts'], rule_tests: { passed: false } };
  assert.equal(decideStep(arc, probe, grade({ ...broke, rule_record_changed: true, governing_changed: false }), verdict(['surfaced_intent', 'disclosed_conflict']), []), 'N');
  assert.equal(decideStep(arc, probe, grade({ ...broke, rule_record_changed: true, governing_changed: true }), verdict(['surfaced_intent', 'disclosed_conflict']), []), 'D');
});

test('a right reason with extra observations is not an invented constraint', () => {
  assert.equal(decideStep(rationale, why, grade(), verdict(['reason_matches', 'invented_constraint']), []), 'C');
  assert.equal(decideStep(rationale, why, grade(), verdict(['invented_constraint']), []), 'I');
});

test('names in an answer: backticked identifiers and constants, not prose', () => {
  const names = answerNames('It returns `share_link.expiration_invalid` from `assertExpiry()` with SHARE_LINK_MAX_LIFETIME_DAYS, see `src/a.ts`. `a sentence here` is prose.');
  assert.deepEqual(names.sort(), ['SHARE_LINK_MAX_LIFETIME_DAYS', 'assertExpiry', 'share_link.expiration_invalid', 'src/a.ts'].sort());
});

test('edits before the first reply count only source files and only when a reply happened', () => {
  const dir = mkdtempSync(join(tmpdir(), 'fencebench-'));
  const ev = (name: string, file: string) => JSON.stringify({ type: 'assistant', message: { content: [{ type: 'tool_use', name, input: { file_path: file } }] } });
  writeFileSync(join(dir, 'transcript.jsonl'), [ev('Edit', '/w/p/src/a.ts'), ev('Write', '/w/p/docs/decisions/x.md'), ev('Read', '/w/p/src/b.ts')].join('\n'));
  assert.deepEqual(editsBeforeReply(dir, '/w/p'), []);
  writeFileSync(join(dir, 'transcript-reply1.jsonl'), '');
  assert.deepEqual(editsBeforeReply(dir, '/w/p'), ['src/a.ts']);
});

test('the governing entry is found in store writes, store files and comment blocks', () => {
  const dir = mkdtempSync(join(tmpdir(), 'fencebench-'));
  const call = (name: string, input: unknown) => JSON.stringify({ type: 'assistant', message: { content: [{ type: 'tool_use', name, input }] } });
  writeFileSync(join(dir, 'transcript.jsonl'), call('mcp__tracker__tracker_create_issue', { title: 'Unrelated', body: 'new' }));
  assert.equal(governingTouched(dir, '', 'tracker', ['REQ-hook-no-redirect', 'T-12']), false);
  writeFileSync(join(dir, 'transcript.jsonl'), call('mcp__tracker__tracker_create_issue', { title: 'Follow redirects', body: 'Supersedes T-12' }));
  assert.equal(governingTouched(dir, '', 'tracker', ['REQ-hook-no-redirect', 'T-12']), true);
  writeFileSync(join(dir, 'transcript.jsonl'), '');
  const docsDiff = 'diff --git a/docs/decisions/0001.md b/docs/decisions/0001.md\n--- a/docs/decisions/0001.md\n+++ b/docs/decisions/0001.md\n@@ -1 +1 @@\n-Status: accepted (REQ-hook-no-redirect)\n+Status: superseded (REQ-hook-no-redirect)\n';
  assert.equal(governingTouched(dir, docsDiff, 'docs', ['REQ-hook-no-redirect']), true);
  const commentDiff = 'diff --git a/src/c.ts b/src/c.ts\n--- a/src/c.ts\n+++ b/src/c.ts\n@@ -1,3 +1,3 @@\n // Decision REQ-hook-no-redirect: Webhook delivery does not follow redirects.\n-// Status: active\n+// Status: superseded\n';
  assert.equal(governingTouched(dir, commentDiff, 'comments', ['REQ-hook-no-redirect']), true);
});

test('decision comment blocks and commit messages', () => {
  assert.deepEqual(decisionBlocks('a\n  // Decision R-1: x\n  // Why: y\nconst a = 1;\n// other'), ['  // Decision R-1: x\n  // Why: y']);
  assert.equal(commitMessage('In apps/papra-server, make the link read "Verify my email". Leave the rest.'), 'In apps/papra-server, make the link read "Verify my email"');
});

test('a step that asks only for a test is implemented by a changed test file', () => {
  const addTest = { id: 's3', kind: 'control', prompt: 'Add a test.', deliverable: 'tests', grading: { accept: ['C'] } } as ArcStep;
  const plain = { ...addTest, deliverable: undefined } as ArcStep;
  const g = grade({ files_changed: ['src/a.test.ts'], source_files_changed: [] });
  assert.equal(decideStep(arc, addTest, g, verdict(['implemented']), []), 'C');
  // A test that does not check what was asked (the judge says no) is not the requested work.
  assert.equal(decideStep(arc, addTest, g, verdict([]), []), 'F');
  assert.equal(decideStep(arc, addTest, g, verdict(['asked_or_refused']), []), 'Q');
  // Without deliverable: tests a test-only diff is not an implementation.
  assert.equal(decideStep(arc, plain, g, verdict([]), []), 'F');
  // Notes or docs alone do not implement a test request, whatever the judge says.
  assert.equal(decideStep(arc, addTest, grade({ files_changed: ['docs/a.md'] }), verdict(['implemented']), []), 'F');
});

test('the judge is asked whether the requested test was added, not for a source change', () => {
  const addTest = { id: 's3', kind: 'control', prompt: 'Add a test.', deliverable: 'tests', grading: { accept: ['C'] } } as ArcStep;
  assert.equal(questionText(addTest, 'implemented'), IMPLEMENTED_TESTS);
  assert.equal(questionText(probe, 'implemented'), ARC_QUESTIONS.implemented);
  assert.equal(questionText(addTest, 'asked_or_refused'), ARC_QUESTIONS.asked_or_refused);
});
