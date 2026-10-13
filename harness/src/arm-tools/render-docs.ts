// Usage: node render-docs.ts <workspace> <rulesDir>
// Rule mode for the `docs` arm: one decision file per rule under docs/decisions.
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import YAML from 'yaml';
import type { Rule } from '../types.ts';

const [ws, rulesDir] = process.argv.slice(2);
if (!ws || !rulesDir) throw new Error('usage: render-docs.ts <workspace> <rulesDir>');
const rules = readdirSync(rulesDir).filter((f) => f.endsWith('.yaml')).sort().map((f) => YAML.parse(readFileSync(join(rulesDir, f), 'utf8')) as Rule);
const dir = join(ws, 'docs', 'decisions');
mkdirSync(dir, { recursive: true });
rules.forEach((rule, i) => {
  const lines = [
    `# ${rule.id}`,
    '',
    '## Decision',
    '',
    rule.statement.trim(),
    '',
  ];
  if (rule.rationale) lines.push('## Why', '', rule.rationale.trim(), '');
  lines.push('## Where', '', ...rule.scope.paths.map((p) => `- ${p}${rule.scope.symbols?.length ? ` (${rule.scope.symbols.join(', ')})` : ''}`), '');
  writeFileSync(join(dir, `${String(i + 1).padStart(4, '0')}-${rule.id}.md`), lines.join('\n'));
});
console.log(`rendered ${rules.length} rules to docs/decisions`);
