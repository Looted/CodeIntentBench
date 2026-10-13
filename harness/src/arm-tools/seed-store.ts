// Usage: node seed-store.ts tracker|memory <storeFile> <rulesDir>
// Rule mode for the passive-store arms: the project's rules become closed
// tracker issues or memory notes, written in the same shape the agent would
// have written them (decision, reason, where it applies).
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import YAML from 'yaml';
import type { Rule } from '../types.ts';

const [kind, store, rulesDir] = process.argv.slice(2);
if (!kind || !store || !rulesDir) throw new Error('usage: seed-store.ts tracker|memory <storeFile> <rulesDir>');
const rules = readdirSync(rulesDir).filter((f) => f.endsWith('.yaml')).sort().map((f) => YAML.parse(readFileSync(join(rulesDir, f), 'utf8')) as Rule);
const at = '2026-01-01T00:00:00.000Z';
const where = (r: Rule) => r.scope.paths.map((p) => `${p}${r.scope.symbols?.length ? ` (${r.scope.symbols.join(', ')})` : ''}`).join(', ');

if (kind === 'tracker') {
  const issues = rules.map((r, i) => ({
    id: `T-${i + 1}`,
    title: r.id.replace(/-/g, ' '),
    body: `Decision: ${r.statement.trim()}${r.rationale ? `\n\nWhy: ${r.rationale.trim()}` : ''}\n\nWhere: ${where(r)}`,
    status: 'closed',
    labels: ['decision'],
    comments: [],
    created_at: at,
    updated_at: at,
  }));
  writeFileSync(store, JSON.stringify({ next: rules.length + 1, issues }, null, 2));
} else if (kind === 'memory') {
  const notes = rules.map((r, i) => ({
    id: `M-${i + 1}`,
    text: `${r.statement.trim()}${r.rationale ? ` Why: ${r.rationale.trim()}` : ''} Applies to: ${where(r)}.`,
    tags: ['decision'],
    created_at: at,
  }));
  writeFileSync(store, JSON.stringify({ next: rules.length + 1, notes }, null, 2));
} else {
  throw new Error(`unknown store kind ${kind}`);
}
console.log(`seeded ${rules.length} rules into ${kind} store`);
