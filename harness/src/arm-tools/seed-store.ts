// Usage: node seed-store.ts tracker|memory <storeFile> <rulesDir>
// The passive-store arms: the project's rules become resolved tracker issues or memory
// notes, written in the shape the agent would have written them (decision, reason, where
// it applies) with the standing the knowledge base records (status, firmness, origin,
// supersession).
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import YAML from 'yaml';
import { memoryNote, trackerIssue } from '../render.ts';
import type { Rule } from '../types.ts';

const [kind, store, rulesDir] = process.argv.slice(2);
if (!kind || !store || !rulesDir) throw new Error('usage: seed-store.ts tracker|memory <storeFile> <rulesDir>');
const rules = readdirSync(rulesDir).filter((f) => f.endsWith('.yaml')).sort().map((f) => YAML.parse(readFileSync(join(rulesDir, f), 'utf8')) as Rule);

if (kind === 'tracker') {
  writeFileSync(store, JSON.stringify({ next: rules.length + 1, issues: rules.map(trackerIssue) }, null, 2));
} else if (kind === 'memory') {
  writeFileSync(store, JSON.stringify({ next: rules.length + 1, notes: rules.map(memoryNote) }, null, 2));
} else {
  throw new Error(`unknown store kind ${kind}`);
}
console.log(`seeded ${rules.length} rules into ${kind} store`);
