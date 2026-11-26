// Before a read or an edit: the decision files in docs/decisions whose Where section names the file.
// Each file's decisions are shown once per session for reads and once for edits. Silent when none match.
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { isAbsolute, join, relative } from 'node:path';

const MAX = 5;
let input;
try { input = JSON.parse(readFileSync(0, 'utf8')); } catch { process.exit(0); }
const cwd = input.cwd || process.cwd();
const file = String(input.tool_input?.file_path ?? input.tool_input?.notebook_path ?? '');
if (!file) process.exit(0);
const rel = (isAbsolute(file) ? relative(cwd, file) : file).replace(/\\/g, '/');
const dir = join(cwd, 'docs', 'decisions');
if (!rel || rel.startsWith('..') || rel.startsWith('docs/decisions/') || !existsSync(dir)) process.exit(0);

const kind = input.tool_name === 'Read' ? 'read' : 'edit';
const statePath = join(tmpdir(), `docs-decisions-${String(input.session_id ?? 'none').replace(/[^\w-]/g, '')}.json`);
let state = {};
try { state = JSON.parse(readFileSync(statePath, 'utf8')); } catch { /* first call */ }
const key = `${kind}:${rel}`;
if (state[key]) process.exit(0);

const section = (text, name) => {
  const m = text.match(new RegExp(`^## ${name}\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))`, 'm'));
  return m ? m[1].trim() : '';
};
const hits = [];
for (const f of readdirSync(dir).filter((n) => n.endsWith('.md') && n !== 'README.md').sort()) {
  const text = readFileSync(join(dir, f), 'utf8');
  const where = section(text, 'Where');
  if (!where.split('\n').some((l) => l.replace(/^- /, '').split(' (')[0].trim() === rel)) continue;
  const status = (text.match(/^- Status: (.*)$/m) ?? [])[1] ?? '';
  const firmness = (text.match(/^- Firmness: (\w+)/m) ?? [])[1] ?? '';
  const decision = section(text, 'Decision').replace(/\s+/g, ' ');
  hits.push({ f, current: !/not current/.test(status), line: `- docs/decisions/${f}: ${decision.length > 220 ? `${decision.slice(0, 220)}…` : decision}${status || firmness ? ` (${[status && `Status: ${status}`, firmness && `Firmness: ${firmness}`].filter(Boolean).join('; ')})` : ''}` });
}
state[key] = true;
try { writeFileSync(statePath, JSON.stringify(state)); } catch { /* best effort */ }
if (hits.length === 0) process.exit(0);
hits.sort((a, b) => Number(b.current) - Number(a.current));
const shown = hits.slice(0, MAX);
const more = hits.length - shown.length;
const text = [`Decisions in docs/decisions that name ${rel}:`, ...shown.map((h) => h.line), ...(more ? [`… and ${more} more: ${hits.slice(MAX).map((h) => h.f).join(', ')}`] : []), 'Read the full file before changing the behaviour it describes.'].join('\n');
process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: 'PreToolUse', additionalContext: text } }));
