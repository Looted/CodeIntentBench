// Usage: node seed-store.ts tracker|memory|beads <storeFile> <rulesDir>
//        node seed-store.ts basic-memory|claude-memory <outDir> <rulesDir>
// The passive-store arms: the project's rules become resolved tracker issues or memory
// notes, written in the shape the agent would have written them (decision, reason, where
// it applies) with the standing the knowledge base records (status, firmness, origin,
// supersession).
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import YAML from 'yaml';
import { basicMemoryNote, claudeMemoryFiles, memoryNote, trackerIssue } from '../render.ts';
import type { Rule } from '../types.ts';

const [kind, store, rulesDir] = process.argv.slice(2);
if (!kind || !store || !rulesDir) throw new Error('usage: seed-store.ts tracker|memory <storeFile> <rulesDir>');
const rules = readdirSync(rulesDir).filter((f) => f.endsWith('.yaml')).sort().map((f) => YAML.parse(readFileSync(join(rulesDir, f), 'utf8')) as Rule);

if (kind === 'tracker') {
  writeFileSync(store, JSON.stringify({ next: rules.length + 1, issues: rules.map(trackerIssue) }, null, 2));
} else if (kind === 'memory') {
  writeFileSync(store, JSON.stringify({ next: rules.length + 1, notes: rules.map(memoryNote) }, null, 2));
} else if (kind === 'beads') {
  // beads' own JSONL interchange format (bd export / bd import): one closed decision issue per rule.
  const lines = rules.map(trackerIssue).map((t, i) => JSON.stringify({ _type: 'issue', id: `papra-d${i + 1}`, title: t.title, description: t.body, status: 'closed', priority: 2, issue_type: 'decision', labels: t.labels, created_at: t.created_at, updated_at: t.updated_at, closed_at: t.updated_at }));
  writeFileSync(store, lines.join('\n') + (lines.length ? '\n' : ''));
} else if (kind === 'basic-memory' || kind === 'claude-memory') {
  const files = kind === 'basic-memory' ? rules.map(basicMemoryNote) : claudeMemoryFiles(rules);
  for (const f of files) { mkdirSync(dirname(join(store, f.path)), { recursive: true }); writeFileSync(join(store, f.path), f.text); }
} else {
  throw new Error(`unknown store kind ${kind}`);
}
console.log(`seeded ${rules.length} rules into ${kind} store`);
