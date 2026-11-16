// Usage: node render-comments.ts <workspace> <rulesDir> [<reportFile>]
// The `comments` arm: each decision is written as a comment block in the code it is linked to, the way a
// team that keeps its reasons in the code would leave it. Same facts and wording as the docs arm (the
// statement, Why, Status, Firmness, Recorded, Supersedes / Superseded by, Where), mechanically placed:
//   - one block per decision and path, right above the linked declaration whose name shares the most
//     words with the statement; when a path declares none of its symbols, above its first declaration;
//   - a decision with no code path of its own that a linked decision supersedes, or that supersedes one,
//     goes beside that decision's block (history kept where the code is);
//   - a decision with no anchor at all is not delivered: the report counts and lists them.
// The block is found again by its first line, `Decision <id>: ...` (see audit.ts, containerEntry).
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import YAML from 'yaml';
import { standingLines } from '../render.ts';
import type { Rule } from '../types.ts';

const [ws, rulesDir, reportFile] = process.argv.slice(2);
if (!ws || !rulesDir) throw new Error('usage: render-comments.ts <workspace> <rulesDir> [<reportFile>]');
const rules = readdirSync(rulesDir).filter((f) => f.endsWith('.yaml')).sort().map((f) => YAML.parse(readFileSync(join(rulesDir, f), 'utf8')) as Rule);
const byId = new Map(rules.map((r) => [r.id, r]));

const CODE = /\.(ts|tsx|js|jsx|mjs|cjs)$/;
const WIDTH = 100;

function wrap(text: string, prefix: string, indent: string): string[] {
  const out: string[] = [];
  for (const para of text.split('\n')) {
    const words = para.split(/\s+/).filter(Boolean);
    let line = '';
    for (const w of words) {
      if (line && indent.length + prefix.length + line.length + 1 + w.length > WIDTH) { out.push(`${indent}${prefix}${line}`); line = w; }
      else line = line ? `${line} ${w}` : w;
    }
    if (line) out.push(`${indent}${prefix}${line}`);
  }
  return out;
}

export function commentBlock(rule: Rule, indent = ''): string[] {
  const p = '// ';
  const lines: string[] = [];
  lines.push(...wrap(`Decision ${rule.id}: ${rule.statement.trim()}`, p, indent));
  if (rule.rationale) lines.push(...wrap(`Why: ${rule.rationale.trim()}`, p, indent));
  for (const l of standingLines(rule)) lines.push(...wrap(l, p, indent));
  const syms = rule.scope.symbols?.length ? ` (${rule.scope.symbols.join(', ')})` : '';
  for (const path of rule.scope.paths) lines.push(...wrap(`Where: ${path}${syms}`, p, indent));
  return lines;
}

const stems = (t: string) => new Set(t.toLowerCase().replace(/[^a-z0-9]+/g, ' ').split(' ').filter((w) => w.length > 2).map((w) => w.slice(0, 4)));

const declRe = (sym: string) => new RegExp(`^(\\s*)(export\\s+)?(default\\s+)?(declare\\s+)?(async\\s+)?(function\\*?|const|let|var|class|interface|type|enum)\\s+${sym.replace(/[$]/g, '\\$')}\\b`);
const anyDecl = /^(\s*)(export\s+)?(default\s+)?(async\s+)?(function\*?|const|let|var|class|interface|type|enum)\s+[A-Za-z_$]/;

/** Insertions per file: line index -> blocks (in insertion order). */
const inserts = new Map<string, Map<number, string[][]>>();
const placed = new Map<string, string[]>(); // rule id -> files it was placed in
const anchorOf = new Map<string, { file: string; line: number; indent: string }>();

function add(file: string, line: number, block: string[], id: string) {
  const m = inserts.get(file) ?? new Map<number, string[][]>();
  const list = m.get(line) ?? [];
  if (list.some((b) => b[0]?.includes(`Decision ${id}:`))) return;
  list.push(block); m.set(line, list); inserts.set(file, m);
  placed.set(id, [...(placed.get(id) ?? []), file]);
}

const sources = new Map<string, string[]>();
const lines = (file: string) => { if (!sources.has(file)) sources.set(file, readFileSync(join(ws, file), 'utf8').split('\n')); return sources.get(file)!; };

for (const rule of rules) {
  for (const path of rule.scope.paths) {
    if (!CODE.test(path) || !existsSync(join(ws, path))) continue;
    const src = lines(path);
    // One block per decision and file, above the linked declaration whose name shares the most words
    // with the statement (a link list can name every declaration of a file); ties go to the earliest.
    const words = stems(`${rule.statement} ${rule.title ?? ''}`);
    let best: { i: number; score: number } | undefined;
    for (const sym of rule.scope.symbols ?? []) {
      const re = declRe(sym);
      const i = src.findIndex((l) => re.test(l));
      if (i < 0) continue;
      const score = [...stems(sym.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/_/g, ' '))].filter((w) => words.has(w)).length;
      if (!best || score > best.score || (score === best.score && i < best.i)) best = { i, score };
    }
    const hit = best !== undefined;
    if (best) {
      const indent = src[best.i].match(/^\s*/)![0];
      add(path, best.i, commentBlock(rule, indent), rule.id);
      if (!anchorOf.has(rule.id)) anchorOf.set(rule.id, { file: path, line: best.i, indent });
    }
    if (!hit) {
      let lastImport = -1;
      src.forEach((l, i) => { if (/^import\s|^\} from\s/.test(l)) lastImport = i; });
      let i = src.findIndex((l, k) => k > lastImport && anyDecl.test(l) && !/^\s/.test(l));
      if (i < 0) i = lastImport + 1;
      add(path, i, commentBlock(rule), rule.id);
      if (!anchorOf.has(rule.id)) anchorOf.set(rule.id, { file: path, line: i, indent: '' });
    }
  }
}

// History kept beside the code: an unanchored decision goes with the decision that supersedes it, or that it supersedes.
let changed = true;
while (changed) {
  changed = false;
  for (const rule of rules) {
    if (anchorOf.has(rule.id)) continue;
    const kin = [...(rule.superseded_by ?? []), ...(rule.supersedes ?? [])].find((id) => anchorOf.has(id) && byId.has(id));
    if (!kin) continue;
    const a = anchorOf.get(kin)!;
    add(a.file, a.line, commentBlock(rule, a.indent), rule.id);
    anchorOf.set(rule.id, a);
    changed = true;
  }
}

for (const [file, m] of inserts) {
  const src = lines(file);
  const out: string[] = [];
  src.forEach((l, i) => { for (const b of m.get(i) ?? []) out.push(...b); out.push(l); });
  writeFileSync(join(ws, file), out.join('\n'));
}

const unanchored = rules.filter((r) => !anchorOf.has(r.id)).map((r) => r.id);
const report = { rules: rules.length, placed: rules.length - unanchored.length, files: inserts.size, unanchored };
if (reportFile) writeFileSync(reportFile, JSON.stringify(report, null, 2));
console.log(`comments: ${report.placed} of ${report.rules} decisions written into ${report.files} files; ${unanchored.length} with no code anchor not delivered`);
