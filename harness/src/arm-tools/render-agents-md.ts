// Usage: node render-agents-md.ts <workspace> <rulesDir> <projectName>
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';
import YAML from 'yaml';
import { renderAgentsMd, renderClaudeMdPointer } from '../render.ts';
import type { Rule } from '../types.ts';

const [ws, rulesDir, projectName] = process.argv.slice(2);
if (!ws || !rulesDir) throw new Error('usage: render-agents-md.ts <workspace> <rulesDir> [projectName]');
const rules = readdirSync(rulesDir).filter((f) => f.endsWith('.yaml')).sort().map((f) => YAML.parse(readFileSync(join(rulesDir, f), 'utf8')) as Rule);
writeFileSync(join(ws, 'AGENTS.md'), renderAgentsMd(projectName ?? basename(ws), rules));
// Claude Code reads CLAUDE.md; the import keeps one source of truth.
const claudeMd = join(ws, 'CLAUDE.md');
if (!existsSync(claudeMd)) writeFileSync(claudeMd, renderClaudeMdPointer());
else writeFileSync(claudeMd, readFileSync(claudeMd, 'utf8').trimEnd() + '\n\n' + renderClaudeMdPointer());
console.log(`rendered ${rules.length} rules to AGENTS.md`);
