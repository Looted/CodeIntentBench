// Usage: node kb-export.ts <workspace> <rulesDir> [--include adr]
// Exports a project's Kibi knowledge base (.kb/) into the benchmark's neutral rule files
// (see ../kb-rules.ts for what a rule carries). Every requirement (and ADR) is written,
// superseded and closed ones included, each with its status.
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import YAML from 'yaml';
import { exportKb, isCurrent } from '../kb-rules.ts';

const [ws, rulesDir, ...rest] = process.argv.slice(2);
if (!ws || !rulesDir) throw new Error('usage: kb-export.ts <workspace> <rulesDir> [--include adr]');
const includeAdr = rest.includes('--include') && rest[rest.indexOf('--include') + 1] === 'adr';
const out = exportKb(join(ws, '.kb'), { includeAdr });

rmSync(rulesDir, { recursive: true, force: true });
mkdirSync(rulesDir, { recursive: true });
let n = 0;
for (const rule of out.rules) writeFileSync(join(rulesDir, `${String(++n).padStart(4, '0')}-${rule.id}.yaml`), YAML.stringify(rule));
const withPaths = out.rules.filter((r) => r.scope.paths.length > 0).length;
const notCurrent = out.rules.filter((r) => !isCurrent(r)).length;
const firm = out.rules.filter((r) => r.firmness === 'firm').length;
console.log(`exported ${out.rules.length} entities (${out.requirements} requirements, ${out.adrs} ADRs) to ${rulesDir}; ${out.rules.length - notCurrent} current, ${notCurrent} superseded, closed or retired; ${firm} firm; ${withPaths} with code paths, ${out.relationships} relationships read, ${out.symbols} symbols`);
