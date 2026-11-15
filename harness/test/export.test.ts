import assert from 'node:assert/strict';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { exportKb, isCurrent } from '../src/kb-rules.ts';
import { memoryNote, renderAgentsMd, renderDecisionDoc, trackerIssue } from '../src/render.ts';
import { writeKb } from './fixtures.ts';

const kb = writeKb(mkdtempSync(join(tmpdir(), 'cib-kb-')));
const out = exportKb(kb, { includeAdr: true });
const byId = (id: string) => out.rules.find((r) => r.id === id)!;

test('every entity is exported, whatever its status', () => {
  assert.equal(out.rules.length, 6);
  assert.deepEqual(out.rules.map((r) => r.status).sort(), ['accepted', 'closed', 'open', 'open', 'retired', 'superseded']);
  assert.equal(exportKb(kb).rules.length, 4, 'ADRs only when asked for');
});

test('a closed requirement that a newer one replaces is exported as closed, with the link both ways', () => {
  const old = byId('REQ-hooks-v1');
  assert.equal(old.status, 'closed');
  assert.equal(isCurrent(old), false);
  assert.deepEqual(old.superseded_by, ['REQ-hooks-never-deny']);
  assert.deepEqual(byId('REQ-hooks-never-deny').supersedes, ['REQ-hooks-v1']);
  // The code paths stay on the old entry: the same file now has an old and a new statement, and the status tells them apart.
  assert.deepEqual(old.scope.paths, ['packages/codex/src/hook-runner.ts']);
});

test('a superseded ADR is exported as superseded, not dropped', () => {
  const adr = byId('ADR-inline-hints');
  assert.equal(adr.kind, 'adr');
  assert.equal(adr.status, 'superseded');
  assert.deepEqual(adr.superseded_by, ['ADR-manifest-only']);
  assert.match(adr.rationale ?? '', /Practice diverged/);
});

test('firmness, origin and reason are carried', () => {
  const r = byId('REQ-hooks-never-deny');
  assert.equal(r.firmness, 'firm');
  assert.deepEqual(r.origin, { kind: 'agent', by: 'maintainer', ref: 'Maintainer decision, 2026-11-05', recorded_at: '2026-11-05T09:49:12.455Z' });
  assert.match(r.rationale ?? '', /Codex has no way to ask/);
  assert.equal(byId('REQ-cursor-hooks').firmness, 'default', 'no firmness recorded reads as default');
  assert.equal(byId('REQ-cursor-hooks').rationale, 'Reason not stated');
  assert.equal(byId('REQ-hooks-v1').origin?.recorded_at, '2026-02-18T13:12:25.067Z', 'the creation date wins over a migration stamp');
  assert.equal(byId('REQ-old-flag').status_reason, 'The flag was removed.');
});

test('every passive container states the standing', () => {
  const current = byId('REQ-hooks-never-deny');
  const old = byId('REQ-hooks-v1');
  const containers: Array<[string, (r: typeof current) => string]> = [
    ['docs', (r) => renderDecisionDoc(r)],
    ['agents-md', (r) => renderAgentsMd('p', [r])],
    ['tracker', (r) => { const i = trackerIssue(r, 0); return `${i.body}\n${i.labels.join(' ')}`; }],
    ['memory', (r) => memoryNote(r, 0).text],
  ];
  for (const [name, render] of containers) {
    const a = render(current);
    assert.match(a, /Status: open \(current\)/, name);
    assert.match(a, /Firmness: firm/, name);
    assert.match(a, /Recorded: 2026-11-05, by agent, approved by maintainer; source: Maintainer decision/, name);
    assert.match(a, /Supersedes: REQ-hooks-v1/, name);
    assert.match(a, /packages\/codex\/src\/hook-runner\.ts/, name);
    const b = render(old);
    assert.match(b, /Status: closed \(not current\)/, name);
    assert.match(b, /Superseded by: REQ-hooks-never-deny/, name);
  }
  assert.match(memoryNote(current, 0).text, /Id: REQ-hooks-never-deny\./);
  assert.deepEqual(trackerIssue(old, 0).labels, ['decision', 'decision-status:closed', 'firmness:default']);
});

test('a hand-written rule without standing renders as before', () => {
  const rule = { id: 'plain-rule', statement: 'Keep it.', rationale: 'Because.', scope: { paths: ['a.ts'] } };
  assert.equal(renderDecisionDoc(rule), '# plain-rule\n\n## Decision\n\nKeep it.\n\n## Why\n\nBecause.\n\n## Where\n\n- a.ts\n');
  assert.equal(memoryNote(rule, 0).text, 'Keep it. Why: Because. Applies to: a.ts.');
  assert.equal(trackerIssue(rule, 0).body, 'Decision: Keep it.\n\nWhy: Because.\n\nWhere: a.ts');
});
