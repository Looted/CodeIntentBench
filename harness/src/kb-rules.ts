// Reads a Kibi knowledge base (.kb/) into the benchmark's neutral rules, so the passive
// arms (docs, tracker, memory, agents-md) receive what Kibi holds, in their own container.
// One rule per requirement (and per ADR): the decision (semantic_text), its recorded reason
// (the `rationale` field, or the Context / Rationale / Why sections of the body), the code it
// applies to (files and symbols that `implements` it), the tests that verify it, and its
// standing: status, firmness, origin (who recorded it and when) and the supersession links
// in both directions. Every entity is exported, whatever its status: a superseded or closed
// decision is exported as superseded or closed, never dropped and never left unmarked.
// Nothing is rewritten; the prose is Kibi's own.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import YAML from 'yaml';
import type { Rule } from './types.ts';

interface Entity { id: string; type: string; front: Record<string, any>; body: string }
interface Rel { type: string; from: string; to: string }
interface Sym { id: string; title: string; sourceFile: string }

/** Statuses that say an entity no longer holds. Anything else (open, active, accepted, proposed) is current. */
export const NOT_CURRENT = /^(superseded|closed|retired|deprecated|rejected|archived)$/i;
const FIRMNESS_VALUES = ['firm', 'default', 'exploratory'];

/**
 * The firmness Kibi's own lookups show (effectiveFirmness in Kibi's packages/cli/src/decision-firmness.ts):
 * the authored value when it is one of firm, default, exploratory; otherwise `default` for an entry an
 * agent wrote (`origin.kind: agent`) and `firm` for every other one (a person's, imported, migrated, or
 * with no origin).
 */
export function effectiveFirmness(value: unknown, origin: unknown): string {
  if (typeof value === 'string' && FIRMNESS_VALUES.includes(value)) return value;
  const kind = origin && typeof origin === 'object' ? (origin as { kind?: unknown }).kind : undefined;
  return kind === 'agent' ? 'default' : 'firm';
}

export function isCurrent(rule: Pick<Rule, 'status'>): boolean {
  return !rule.status || !NOT_CURRENT.test(rule.status);
}

const iso = (v: unknown): string | undefined => {
  if (v === undefined || v === null || v === '') return undefined;
  if (v instanceof Date) return v.toISOString();
  return String(v);
};

export interface KbExport { rules: Rule[]; requirements: number; adrs: number; relationships: number; symbols: number }

export function exportKb(kb: string, opts: { includeAdr?: boolean } = {}): KbExport {
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

  const rels: Rel[] = [];
  const relDir = join(kb, 'relationships');
  if (existsSync(relDir)) {
    for (const f of readdirSync(relDir).filter((x) => x.endsWith('.yaml')).sort()) {
      const doc = YAML.parse(readFileSync(join(relDir, f), 'utf8')) ?? {};
      for (const r of doc.relationships ?? []) if (r?.type && r?.from && r?.to) rels.push({ type: r.type, from: r.from, to: r.to });
    }
  }
  const symbols = new Map<string, Sym>();
  const symFile = join(kb, 'symbols.yaml');
  if (existsSync(symFile)) {
    const doc = YAML.parse(readFileSync(symFile, 'utf8')) ?? {};
    for (const s of doc.symbols ?? []) {
      if (!s?.id) continue;
      symbols.set(s.id, { id: s.id, title: String(s.title ?? s.id), sourceFile: String(s.sourceFile ?? '') });
      for (const r of [...(s.relationships ?? []), ...(s.links ?? [])]) if (r?.type && r?.target) rels.push({ type: r.type, from: s.id, to: r.target });
    }
  }
  // Relationships declared inline on entities (`relationships:` or `links:` lists) count too.
  function inlineRels(e: Entity) {
    for (const key of ['relationships', 'links']) {
      const list = e.front[key];
      if (!Array.isArray(list)) continue;
      for (const r of list) if (r?.type && (r?.to ?? r?.target)) rels.push({ type: r.type, from: r.from ?? e.id, to: r.to ?? r.target });
    }
  }

  const reqs = readEntities('requirements');
  const adrs = opts.includeAdr ? readEntities('adr') : [];
  const tests = readEntities('tests');
  for (const e of [...reqs, ...adrs, ...tests]) inlineRels(e);

  const byTo = new Map<string, Rel[]>();
  const byFrom = new Map<string, Rel[]>();
  for (const r of rels) {
    (byTo.get(r.to) ?? byTo.set(r.to, []).get(r.to)!).push(r);
    (byFrom.get(r.from) ?? byFrom.set(r.from, []).get(r.from)!).push(r);
  }

  /** The recorded reason: the `rationale` field, and the Context, Rationale, Why, Intent, Decision and Why-this-changed sections of the body. */
  function reasonOf(e: Entity, statement: string): string | undefined {
    const norm = (t: string) => t.replace(/\s+/g, ' ').trim();
    const clip = (t: string) => (t.length > 2500 ? t.slice(0, 2500).trimEnd() + ' …' : t);
    const body = e.body.replace(/^\s*#\s[^\n]*\n/, '').trim();
    const sections = body ? body.split(/\n(?=##\s)/) : [];
    const wanted = sections.filter((s) => /^##\s+(Context|Rationale|Why|Intent|Why this changed|Decision)\b/i.test(s));
    const text = (wanted.length ? wanted : sections.filter((s) => !/^##\s+(Source|Normative claims|Acceptance Criteria)\b/i.test(s))).join('\n\n').trim();
    const cleaned = text.replace(/^##\s+[^\n]*\n/gm, '').trim();
    // A body that only restates the statement records no reason.
    const fromBody = !cleaned || norm(cleaned) === norm(statement) || norm(statement).includes(norm(cleaned)) ? undefined : cleaned;
    const field = typeof e.front.rationale === 'string' && e.front.rationale.trim() ? e.front.rationale.trim() : undefined;
    if (field && fromBody && !norm(fromBody).includes(norm(field))) return clip(`${field}\n\n${fromBody}`);
    return fromBody ? clip(fromBody) : field ? clip(field) : undefined;
  }

  function testFilesOf(ids: string[]): string[] {
    const files = new Set<string>();
    for (const id of ids) {
      for (const r of byTo.get(id) ?? []) if (r.type === 'executable_for') { const s = symbols.get(r.from); if (s?.sourceFile) files.add(s.sourceFile); }
      const t = tests.find((x) => x.id === id);
      for (const p of t?.front.test_files ?? t?.front.files ?? []) files.add(String(p));
      if (t?.front.sourceFile) files.add(String(t.front.sourceFile));
    }
    // Helpers and fixtures reached through the same symbols are not tests.
    return [...files].filter((f) => /\.(test|spec)\.[cm]?[jt]sx?$/.test(f)).sort();
  }

  function ruleOf(e: Entity, kind: 'requirement' | 'adr'): Rule {
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
    rule.kind = kind;
    const title = typeof e.front.title === 'string' ? e.front.title.trim() : '';
    if (title && title !== statement) rule.title = title;
    if (e.front.status !== undefined && e.front.status !== null && String(e.front.status).trim()) rule.status = String(e.front.status).trim();
    rule.firmness = effectiveFirmness(e.front.firmness, e.front.origin);
    const o = e.front.origin && typeof e.front.origin === 'object' ? e.front.origin : {};
    const origin: NonNullable<Rule['origin']> = {};
    if (o.kind) origin.kind = String(o.kind);
    const by = o.approved_by ?? e.front.owner;
    if (by) origin.by = String(by);
    const ref = o.ref ?? e.front.text_ref ?? e.front.source;
    if (ref) origin.ref = String(ref).trim();
    // When it was first written: the entity's own creation date where it has one (a migration re-stamps origin.recorded_at).
    const at = iso(e.front.created_at) ?? iso(o.recorded_at);
    if (at) origin.recorded_at = at;
    const updated = iso(e.front.updated_at);
    if (updated && at && Date.parse(updated) > Date.parse(at)) origin.updated_at = updated;
    if (Object.keys(origin).length) rule.origin = origin;
    const supersedes = [...new Set((byFrom.get(e.id) ?? []).filter((r) => r.type === 'supersedes').map((r) => r.to))].sort();
    const supersededBy = [...new Set((byTo.get(e.id) ?? []).filter((r) => r.type === 'supersedes').map((r) => r.from))].sort();
    if (supersedes.length) rule.supersedes = supersedes;
    if (supersededBy.length) rule.superseded_by = supersededBy;
    if (typeof e.front.retired_reason === 'string' && e.front.retired_reason.trim()) rule.status_reason = e.front.retired_reason.trim();
    return rule;
  }

  const rules = [...reqs.map((e) => ruleOf(e, 'requirement')), ...adrs.map((e) => ruleOf(e, 'adr'))];
  return { rules, requirements: reqs.length, adrs: adrs.length, relationships: rels.length, symbols: symbols.size };
}
