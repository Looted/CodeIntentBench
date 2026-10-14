// Usage: node kb-export.ts <workspace> <rulesDir> [--include adr]
// Exports a project's Kibi knowledge base (.kb/) into the benchmark's neutral rule
// files, so the passive arms (docs, tracker, memory, agents-md) receive the same
// knowledge Kibi holds, in their own container. One rule per requirement (and per
// ADR): the decision (semantic_text), its recorded reason (Context / Rationale /
// Why sections of the body), the code it applies to (files and symbols that
// `implements` it) and the tests that verify it (test files `executable_for` the
// TEST entities it is `verified_by` or `covered_by`). Nothing is rewritten; the
// prose is Kibi's own.
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import YAML from 'yaml';
import type { Rule } from '../types.ts';

const [ws, rulesDir, ...rest] = process.argv.slice(2);
if (!ws || !rulesDir) throw new Error('usage: kb-export.ts <workspace> <rulesDir> [--include adr]');
const includeAdr = rest.includes('--include') && rest[rest.indexOf('--include') + 1] === 'adr';
const kb = join(ws, '.kb');

interface Entity { id: string; type: string; front: Record<string, any>; body: string }
function readEntities(sub: string): Entity[] {
  const dir = join(kb, sub);
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => f.endsWith('.md')).sort().map((f) => {
    const text = readFileSync(join(dir, f), 'utf8');
    const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    const front = m ? (YAML.parse(m[1]) ?? {}) : {};
    return { id: String(front.id ?? f.replace(/\.md$/, '')), type: String(front.type ?? sub), front, body: m ? m[2] : text };
  });
}

interface Rel { type: string; from: string; to: string }
const rels: Rel[] = [];
const relDir = join(kb, 'relationships');
if (existsSync(relDir)) {
  for (const f of readdirSync(relDir).filter((x) => x.endsWith('.yaml')).sort()) {
    const doc = YAML.parse(readFileSync(join(relDir, f), 'utf8')) ?? {};
    for (const r of doc.relationships ?? []) if (r?.type && r?.from && r?.to) rels.push({ type: r.type, from: r.from, to: r.to });
  }
}
interface Sym { id: string; title: string; sourceFile: string }
const symbols = new Map<string, Sym>();
const symFile = join(kb, 'symbols.yaml');
if (existsSync(symFile)) {
  const doc = YAML.parse(readFileSync(symFile, 'utf8')) ?? {};
  for (const s of doc.symbols ?? []) {
    if (!s?.id) continue;
    symbols.set(s.id, { id: s.id, title: String(s.title ?? s.id), sourceFile: String(s.sourceFile ?? '') });
    for (const r of s.relationships ?? []) if (r?.type && r?.target) rels.push({ type: r.type, from: s.id, to: r.target });
  }
}
// Relationships declared inline on entities (`relationships:` lists) count too.
function inlineRels(e: Entity) {
  for (const r of e.front.relationships ?? []) if (r?.type && (r?.to ?? r?.target)) rels.push({ type: r.type, from: r.from ?? e.id, to: r.to ?? r.target });
}

const reqs = readEntities('requirements');
const adrs = includeAdr ? readEntities('adr') : [];
const tests = readEntities('tests');
for (const e of [...reqs, ...adrs, ...tests]) inlineRels(e);

const byTo = new Map<string, Rel[]>();
const byFrom = new Map<string, Rel[]>();
for (const r of rels) {
  (byTo.get(r.to) ?? byTo.set(r.to, []).get(r.to)!).push(r);
  (byFrom.get(r.from) ?? byFrom.set(r.from, []).get(r.from)!).push(r);
}

/** Sections of the body that record the reason: Context, Rationale, Why, Intent, Why this changed. */
function reasonOf(e: Entity, statement: string): string | undefined {
  const body = e.body.replace(/^#\s[^\n]*\n/, '').trim();
  if (!body) return undefined;
  const sections = body.split(/\n(?=##\s)/);
  const wanted = sections.filter((s) => /^##\s+(Context|Rationale|Why|Intent|Why this changed|Decision)\b/i.test(s));
  const text = (wanted.length ? wanted : sections.filter((s) => !/^##\s+(Source|Normative claims|Acceptance Criteria)\b/i.test(s))).join('\n\n').trim();
  const cleaned = text.replace(/^##\s+[^\n]*\n/gm, '').trim();
  const norm = (t: string) => t.replace(/\s+/g, ' ').trim();
  // A body that only restates the statement records no reason.
  if (!cleaned || norm(cleaned) === norm(statement) || norm(statement).includes(norm(cleaned))) return undefined;
  return cleaned.length > 2500 ? cleaned.slice(0, 2500).trimEnd() + ' …' : cleaned;
}

function testFilesOf(ids: string[]): string[] {
  const files = new Set<string>();
  for (const id of ids) {
    for (const r of byTo.get(id) ?? []) if (r.type === 'executable_for') { const s = symbols.get(r.from); if (s?.sourceFile) files.add(s.sourceFile); }
    const t = tests.find((x) => x.id === id);
    for (const p of t?.front.test_files ?? t?.front.files ?? []) files.add(String(p));
  }
  // Helpers and fixtures reached through the same symbols are not tests.
  return [...files].filter((f) => /\.(test|spec)\.[cm]?[jt]sx?$/.test(f)).sort();
}

function ruleOf(e: Entity): Rule {
  const statement = String(e.front.semantic_text ?? e.front.statement ?? e.front.title ?? e.id).trim();
  const implementers = (byTo.get(e.id) ?? []).filter((r) => r.type === 'implements').map((r) => symbols.get(r.from)).filter((s): s is Sym => !!s);
  const paths = [...new Set(implementers.map((s) => s.sourceFile).filter(Boolean))].sort();
  const syms = [...new Set(implementers.map((s) => s.title))].sort();
  const testIds = [...(byFrom.get(e.id) ?? []).filter((r) => r.type === 'verified_by' || r.type === 'specified_by').map((r) => r.to),
    ...(byTo.get(e.id) ?? []).filter((r) => r.type === 'validates').map((r) => r.from)];
  // Scenarios verified by tests: follow one more hop.
  const viaScen = testIds.flatMap((id) => (byFrom.get(id) ?? []).filter((r) => r.type === 'verified_by').map((r) => r.to));
  const testFiles = testFilesOf([...testIds, ...viaScen, ...implementers.flatMap((s) => (byFrom.get(s.id) ?? []).filter((r) => r.type === 'covered_by').map((r) => r.to))]);
  const rule: Rule = { id: e.id, statement, scope: { paths, ...(syms.length ? { symbols: syms } : {}) } };
  const reason = reasonOf(e, statement);
  if (reason) rule.rationale = reason;
  if (testFiles.length) rule.tests = testFiles;
  return rule;
}

rmSync(rulesDir, { recursive: true, force: true });
mkdirSync(rulesDir, { recursive: true });
const entities = [...reqs.filter((r) => !/^(superseded|retired|deprecated)$/i.test(String(r.front.status ?? ''))), ...adrs.filter((a) => !/^(superseded|deprecated|rejected)$/i.test(String(a.front.status ?? '')))];
let n = 0;
for (const e of entities) {
  const rule = ruleOf(e);
  writeFileSync(join(rulesDir, `${String(++n).padStart(4, '0')}-${e.id}.yaml`), YAML.stringify(rule));
}
const withPaths = entities.filter((e) => ruleOf(e).scope.paths.length > 0).length;
console.log(`exported ${entities.length} entities (${reqs.length} requirements, ${adrs.length} ADRs) to ${rulesDir}; ${withPaths} with code paths, ${rels.length} relationships read, ${symbols.size} symbols`);
