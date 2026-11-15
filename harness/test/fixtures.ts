// A small knowledge base in Kibi's file layout, and the arm containers rendered from it.
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import YAML from 'yaml';
import { exportKb } from '../src/kb-rules.ts';
import { decisionDocName, memoryNote, renderAgentsMd, renderDecisionDoc, trackerIssue } from '../src/render.ts';
import type { Arc, Rule } from '../src/types.ts';

const entity = (front: Record<string, unknown>, body: string) => `---\n${YAML.stringify(front)}---\n${body}\n`;

/** Writes a .kb with a current firm requirement, the closed one it replaced, a retired one, a default neighbour and a superseded ADR. */
export function writeKb(root: string): string {
  const kb = join(root, '.kb');
  for (const d of ['requirements', 'adr', 'relationships']) mkdirSync(join(kb, d), { recursive: true });
  writeFileSync(join(kb, 'requirements', 'REQ-hooks-never-deny.md'), entity({
    id: 'REQ-hooks-never-deny', type: 'req', title: 'Codex hooks never deny', status: 'open', firmness: 'firm',
    semantic_text: 'Codex hooks must never deny a tool call: they add reminders and warnings.',
    origin: { kind: 'agent', approved_by: 'maintainer', ref: 'Maintainer decision, 2026-11-05', recorded_at: '2026-11-05T09:49:12.455Z' },
  }, 'Codex hooks must never deny a tool call: they add reminders and warnings.\n\n## Context\n\nHooks only advise, because Codex has no way to ask the person.'));
  writeFileSync(join(kb, 'requirements', 'REQ-hooks-v1.md'), entity({
    id: 'REQ-hooks-v1', type: 'req', title: 'Hooks may block', status: 'closed', created_at: '2026-02-18T13:12:25.067Z',
    semantic_text: 'A hook may block a tool call that edits firm code.', origin: { kind: 'migration', recorded_at: '2026-10-04T00:00:00.000Z' },
  }, 'A hook may block a tool call that edits firm code.'));
  writeFileSync(join(kb, 'requirements', 'REQ-cursor-hooks.md'), entity({
    id: 'REQ-cursor-hooks', type: 'req', title: 'Cursor hooks never deny', status: 'open',
    semantic_text: 'Cursor hooks must never deny a tool call: they add reminders and notices.', rationale: 'Reason not stated',
    origin: { kind: 'human', recorded_at: '2026-10-20T00:00:00.000Z' },
  }, 'Cursor hooks must never deny a tool call: they add reminders and notices.'));
  writeFileSync(join(kb, 'requirements', 'REQ-old-flag.md'), entity({
    id: 'REQ-old-flag', type: 'req', title: 'Old flag', status: 'retired', retired_reason: 'The flag was removed.', semantic_text: 'The --old flag prints a notice.',
  }, ''));
  writeFileSync(join(kb, 'adr', 'ADR-inline-hints.md'), entity({
    id: 'ADR-inline-hints', type: 'adr', title: 'Inline implements comments are hints', status: 'superseded', origin: { kind: 'agent', recorded_at: '2026-10-04T03:16:07.018Z' },
  }, '# Inline comments are hints\n\n## Context\n\nPractice diverged from the manifest.\n\n## Decision\n\nComments are accepted as hints.'));
  writeFileSync(join(kb, 'adr', 'ADR-manifest-only.md'), entity({
    id: 'ADR-manifest-only', type: 'adr', title: 'An implements comment never satisfies a link', status: 'accepted', firmness: 'firm', origin: { kind: 'human', recorded_at: '2026-11-10T00:00:00.000Z' },
  }, '## Context\n\nInline comments drifted from the manifest.'));
  writeFileSync(join(kb, 'relationships', '00.yaml'), YAML.stringify({ relationships: [
    { type: 'supersedes', from: 'REQ-hooks-never-deny', to: 'REQ-hooks-v1' },
    { type: 'supersedes', from: 'ADR-manifest-only', to: 'ADR-inline-hints' },
  ] }));
  writeFileSync(join(kb, 'symbols.yaml'), YAML.stringify({ symbols: [
    { id: 'SYM-main', title: 'main', sourceFile: 'packages/codex/src/hook-runner.ts', relationships: [{ type: 'implements', target: 'REQ-hooks-never-deny' }, { type: 'implements', target: 'REQ-hooks-v1' }] },
    { id: 'SYM-cursor', title: 'run', sourceFile: 'packages/cursor/src/hook-runner.ts', relationships: [{ type: 'implements', target: 'REQ-cursor-hooks' }] },
  ] }));
  return kb;
}

export interface Containers { root: string; ws: string; run: string; rules: Rule[] }

/** A workspace and run directory holding every passive arm's container, rendered from the fixture knowledge base as the arm setups render them. */
export function writeContainers(): Containers {
  const root = mkdtempSync(join(tmpdir(), 'cib-test-'));
  const ws = join(root, 'workspace'); const run = root;
  mkdirSync(join(ws, 'docs', 'decisions'), { recursive: true });
  mkdirSync(join(run, 'rules'), { recursive: true });
  writeKb(ws);
  const rules = exportKb(join(ws, '.kb'), { includeAdr: true }).rules;
  rules.forEach((r, i) => {
    writeFileSync(join(run, 'rules', `${String(i + 1).padStart(4, '0')}-${r.id}.yaml`), YAML.stringify(r));
    writeFileSync(join(ws, 'docs', 'decisions', decisionDocName(r, i)), renderDecisionDoc(r));
  });
  writeFileSync(join(ws, 'AGENTS.md'), renderAgentsMd('fixture', rules));
  writeFileSync(join(run, 'tracker.json'), JSON.stringify({ next: rules.length + 1, issues: rules.map(trackerIssue) }));
  writeFileSync(join(run, 'memory.json'), JSON.stringify({ next: rules.length + 1, notes: rules.map(memoryNote) }));
  return { root, ws, run, rules };
}

/** An arc on recorded decisions: a control on the arc's decision and a probe on a second one. */
export function fixtureArc(over: Partial<Arc> = {}): Arc {
  return {
    id: 'fixture-arc', project: 'fixture', family: 'surfacing', base_commit: 'abc',
    intent: { statement: 'Codex hooks must never deny a tool call: they add reminders and warnings.', reason: 'Hooks only advise.', requirement: 'REQ-hooks-never-deny' },
    steps: [
      { id: 's1', kind: 'control', prompt: 'Add the title to the notice.', grading: { accept: ['C'] } },
      { id: 's2', kind: 'probe', prompt: 'Make the hook block the edit.', grading: { accept: ['S'] } },
      { id: 's3', kind: 'probe', prompt: 'Let comments count as links.', grading: { accept: ['S'] },
        intent: { statement: 'An implements comment never satisfies a link', reason: 'Inline comments drifted from the manifest.', requirement: 'ADR-manifest-only', superseded: ['ADR-inline-hints'], tests: ['a.test.ts::x'], tests_commit: 'def' } },
    ],
    ...over,
  };
}
