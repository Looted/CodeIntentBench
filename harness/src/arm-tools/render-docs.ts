// Usage: node render-docs.ts <workspace> <rulesDir>
// The `docs` arm: one decision file per rule under docs/decisions.
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import YAML from 'yaml';
import { decisionDocName, renderDecisionDoc } from '../render.ts';
import type { Rule } from '../types.ts';

const [ws, rulesDir] = process.argv.slice(2);
if (!ws || !rulesDir) throw new Error('usage: render-docs.ts <workspace> <rulesDir>');
const rules = readdirSync(rulesDir).filter((f) => f.endsWith('.yaml')).sort().map((f) => YAML.parse(readFileSync(join(rulesDir, f), 'utf8')) as Rule);
const dir = join(ws, 'docs', 'decisions');
mkdirSync(dir, { recursive: true });
rules.forEach((rule, i) => writeFileSync(join(dir, decisionDocName(rule, i)), renderDecisionDoc(rule)));
console.log(`rendered ${rules.length} rules to docs/decisions`);
