// The equivalence audit: after an arm's setup, for each decision an arc is about, assert that
// the arm's container holds the same facts the knowledge base records for it: the statement,
// the reason, the status, the firmness and the code paths (and the supersession links where
// there are any). An arc that fails the audit in an arm is not scored there. No model is
// involved: the audit reads files.
//
// A decision is found by the id the arc names (`intent.requirement`), otherwise by its
// statement. A decision the user states in an intent step is in no container at setup and is
// not audited.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import YAML from 'yaml';
import { decisionsOf } from './intent.ts';
import { requiredKeys, defaultDecision } from './judge-arc.ts';
import { exportKb } from './kb-rules.ts';
import { sh } from './shell.ts';
import { statusLine, firmnessLine } from './render.ts';
import type { Arc, ArcIntent, ArcStep, AuditDecision, AuditResult, Rule } from './types.ts';

const norm = (t: string) => t.replace(/\s+/g, ' ').trim();

/** Arms that keep the knowledge base itself; every other arm with a store gets it rendered from the exported rule files. */
export const KB_ARMS = /^kibi/;
/** Arms that deliver nothing: there is no container to audit. */
export const NO_STORE_ARMS = new Set(['none']);

/** What the knowledge base records, as this arm's setup received it: the exported rule files, or for the Kibi arms the knowledge base in the workspace. */
export function referenceRules(arm: string, ws: string, runDir: string): Rule[] {
  if (KB_ARMS.test(arm)) return existsSync(join(ws, '.kb')) ? exportKb(join(ws, '.kb'), { includeAdr: true }).rules : [];
  const dir = join(runDir, 'rules');
  if (!existsSync(dir)) return [];
  return readdirSync(dir).filter((f) => f.endsWith('.yaml')).sort().map((f) => YAML.parse(readFileSync(join(dir, f), 'utf8')) as Rule);
}

/** The facts every arm must hold for a decision, hashed; equal hashes across arms mean the arms were given the same decision. */
export function factsHash(rule: Rule): string {
  const facts = [norm(rule.statement), norm(rule.rationale ?? ''), rule.status ?? '', rule.firmness ?? '', [...rule.scope.paths].sort(), [...(rule.supersedes ?? [])].sort(), [...(rule.superseded_by ?? [])].sort()];
  return createHash('sha1').update(JSON.stringify(facts)).digest('hex').slice(0, 16);
}

const STOP = new Set('a an and are as at be by for from in is it its must not of on or that the this to when with only never always may no'.split(' '));
const tokens = (t: string) => new Set(t.toLowerCase().replace(/[^a-z0-9_]+/g, ' ').split(' ').filter((w) => w.length > 2 && !STOP.has(w)));

/** Share of the wanted statement's content words that the candidate's statement and title contain. */
export function statementOverlap(wanted: string, rule: Rule): number {
  const w = tokens(wanted);
  if (w.size === 0) return 0;
  const have = tokens(`${rule.statement} ${rule.title ?? ''}`);
  let hit = 0;
  for (const t of w) if (have.has(t)) hit += 1;
  return hit / w.size;
}

export const MIN_OVERLAP = 0.6;
export const MIN_MARGIN = 0.1;

/**
 * Find the recorded entry a decision is. By id when the arc names one. Otherwise by statement:
 * the arc's statement equal to or contained in an entry's (or the reverse), or else the one entry
 * that shares at least 60% of its content words and leads the next by ten points. A neighbour that
 * is nearly as close makes the match ambiguous, and the arc must name the id.
 */
export function findDecision(intent: ArcIntent, rules: Rule[]): { rule?: Rule; matched: AuditDecision['matched']; note?: string } {
  if (intent.requirement) {
    const rule = rules.find((r) => r.id === intent.requirement);
    return rule ? { rule, matched: 'requirement' } : { matched: 'not-found', note: `no entry with id ${intent.requirement}` };
  }
  const wanted = norm(intent.statement).toLowerCase();
  const exact = rules.filter((r) => { const s = norm(r.statement).toLowerCase(); return s === wanted || (wanted.length >= 40 && s.includes(wanted)) || (s.length >= 40 && wanted.includes(s)); });
  if (exact.length === 1) return { rule: exact[0], matched: 'statement' };
  const ranked = rules.map((r) => ({ r, score: statementOverlap(intent.statement, r) })).sort((a, b) => b.score - a.score);
  const [first, second] = ranked;
  const near = ranked.slice(0, 3).map((x) => `${x.r.id} (${Math.round(100 * x.score)}%)`).join(', ');
  if (first && first.score >= MIN_OVERLAP && (!second || first.score - second.score >= MIN_MARGIN)) {
    return { rule: first.r, matched: 'statement', note: `matched by wording (${Math.round(100 * first.score)}% of the statement's words); name it with intent.requirement: ${first.r.id}` };
  }
  return { matched: 'not-found', note: `no entry matches the statement${near ? `; nearest: ${near}` : ''}. Name the entry with intent.requirement` };
}

/** The text of one decision's entry in an arm's container, or undefined when the container has no such entry. */
export function containerEntry(arm: string, ws: string, runDir: string, rule: Rule): string | undefined {
  if (arm === 'docs') {
    const dir = join(ws, 'docs', 'decisions');
    if (!existsSync(dir)) return undefined;
    const file = readdirSync(dir).find((f) => f.replace(/^\d+-/, '') === `${rule.id}.md`);
    return file ? readFileSync(join(dir, file), 'utf8') : undefined;
  }
  if (arm === 'agents-md') {
    const file = join(ws, 'AGENTS.md');
    if (!existsSync(file)) return undefined;
    const text = readFileSync(file, 'utf8');
    const start = text.indexOf(`\n## ${rule.id}\n`);
    if (start < 0) return undefined;
    const end = text.indexOf('\n## ', start + 1);
    return text.slice(start, end < 0 ? undefined : end);
  }
  if (arm === 'tracker') {
    const file = join(runDir, 'tracker.json');
    if (!existsSync(file)) return undefined;
    const issue = (JSON.parse(readFileSync(file, 'utf8')).issues ?? []).find((i: any) => i.title === rule.id.replace(/-/g, ' '));
    return issue ? `${issue.title}\n${issue.body}\n${(issue.labels ?? []).join(' ')}` : undefined;
  }
  if (arm === 'comments') {
    // The block that starts `// Decision <id>:` in any tracked source file, its comment lines joined.
    const files = sh(`git -C ${JSON.stringify(ws)} grep -l -F ${JSON.stringify(`// Decision ${rule.id}:`)}`, { quiet: true }).stdout.split('\n').filter(Boolean);
    for (const f of files) {
      const src = readFileSync(join(ws, f), 'utf8').split('\n');
      const i = src.findIndex((l) => l.trim().startsWith(`// Decision ${rule.id}:`));
      if (i < 0) continue;
      const block: string[] = [src[i].trim().slice(3)];
      for (let k = i + 1; k < src.length && src[k].trim().startsWith('// ') && !src[k].trim().startsWith('// Decision '); k += 1) block.push(src[k].trim().slice(3));
      return block.join('\n').replace(/\n(?!(Why|Status|Firmness|Recorded|Supersedes|Superseded by|Where):)/g, ' ');
    }
    return undefined;
  }
  if (arm === 'memory') {
    const file = join(runDir, 'memory.json');
    if (!existsSync(file)) return undefined;
    const notes: any[] = JSON.parse(readFileSync(file, 'utf8')).notes ?? [];
    const note = notes.find((n) => String(n.text).includes(`Id: ${rule.id}.`)) ?? notes.find((n) => norm(String(n.text)).startsWith(norm(rule.statement)));
    return note ? `${note.text}\n${(note.tags ?? []).join(' ')}` : undefined;
  }
  return undefined;
}

const NO_REASON = /^\W*(reason|rationale)\s+not\s+stated\W*$/i;

/** Whether a step's grading depends on the agent giving the recorded reason. */
function probesReason(arc: Arc, step: ArcStep): boolean {
  return step.require?.includes('reason_matches') || (defaultDecision(arc, step) === 'require' && requiredKeys(arc, step).includes('reason_matches'));
}

/** Check one decision's entry text for each fact. */
export function checkEntry(arm: string, rule: Rule, entry: string | undefined): string[] {
  const failures: string[] = [];
  if (!rule.status) failures.push('the knowledge base records no status for it');
  if (!rule.firmness) failures.push('the knowledge base records no firmness for it');
  if (KB_ARMS.test(arm)) return failures; // the knowledge base itself is the container; the facts were read from it
  if (entry === undefined) return [`no entry for ${rule.id} in the ${arm} container`];
  const text = norm(entry);
  if (!text.includes(norm(rule.statement))) failures.push('statement missing');
  if (rule.rationale && !text.includes(norm(rule.rationale))) failures.push('reason missing');
  const status = statusLine(rule);
  if (status && !text.includes(norm(status))) failures.push(`status missing (expected "${status}")`);
  const firmness = firmnessLine(rule);
  if (firmness && !text.includes(norm(firmness))) failures.push(`firmness missing (expected "${firmness}")`);
  const missingPaths = rule.scope.paths.filter((p) => !text.includes(p));
  if (missingPaths.length) failures.push(`code paths missing: ${missingPaths.join(', ')}`);
  for (const id of rule.supersedes ?? []) if (!new RegExp(`Supersedes: [^\\n]*${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(entry)) failures.push(`"supersedes ${id}" missing`);
  for (const id of rule.superseded_by ?? []) if (!new RegExp(`Superseded by: [^\\n]*${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(entry)) failures.push(`"superseded by ${id}" missing`);
  return failures;
}

/** Audit one arm's container, after its setup, for every decision the arc is about. */
export function auditContainer(arc: Arc, arm: string, ws: string, runDir: string, reference?: Rule[]): AuditResult {
  if (NO_STORE_ARMS.has(arm)) return { arm, ok: true, skipped: 'the arm has no decision store', decisions: [] };
  const rules = reference ?? referenceRules(arm, ws, runDir);
  const hasIntentStep = (arc.steps ?? []).some((s) => s.kind === 'intent' && !s.intent);
  const decisions: AuditDecision[] = [];
  for (const d of decisionsOf(arc)) {
    const stated = !d.intent.requirement && (d.step ? d.step.kind === 'intent' : hasIntentStep);
    if (stated) { decisions.push({ scope: d.scope, matched: 'stated-in-session', failures: [] }); continue; }
    const found = findDecision(d.intent, rules);
    const out: AuditDecision = { scope: d.scope, matched: found.matched, failures: [], warnings: [] };
    if (!found.rule) { out.failures.push(found.note ?? 'decision not found'); decisions.push(out); continue; }
    if (found.note) out.warnings!.push(found.note);
    const rule = found.rule;
    out.id = rule.id; out.hash = factsHash(rule); out.statement = rule.statement;
    out.failures.push(...checkEntry(arm, rule, containerEntry(arm, ws, runDir, rule)));
    // No reason, no rationale probe: a step may ask for the reason only where one is recorded.
    const steps = (arc.steps ?? []).filter((s) => (d.step ? s === d.step : !s.intent) && !s.script && probesReason(arc, s));
    const noReason = !rule.rationale || NO_REASON.test(rule.rationale);
    if (noReason && steps.length) out.failures.push(`no reason is recorded, yet ${steps.map((s) => s.id).join(', ')} grade${steps.length === 1 ? 's' : ''} the reason`);
    else if (noReason) out.warnings!.push('no reason is recorded: recall only');
    if (rule.scope.paths.length === 0) out.warnings!.push('no code paths are recorded for it in any arm');
    if (!out.warnings!.length) delete out.warnings;
    decisions.push(out);
  }
  return { arm, ok: decisions.every((d) => d.failures.length === 0), decisions };
}

/** Decisions whose facts differ between arms: the arms were not given the same thing. */
export function crossArmMismatches(results: AuditResult[]): string[] {
  const out: string[] = [];
  const scopes = new Set(results.flatMap((r) => r.decisions.map((d) => d.scope)));
  for (const scope of scopes) {
    const seen = new Map<string, string[]>();
    for (const r of results) {
      if (r.skipped) continue;
      const d = r.decisions.find((x) => x.scope === scope);
      if (!d?.hash) continue;
      const key = `${d.id} ${d.hash}`;
      seen.set(key, [...(seen.get(key) ?? []), r.arm]);
    }
    if (seen.size > 1) out.push(`${scope}: the arms hold different facts (${[...seen].map(([k, arms]) => `${arms.join('+')}: ${k}`).join('; ')})`);
  }
  return out;
}

export function auditSummary(result: AuditResult): string[] {
  if (result.skipped) return [`${result.arm}: skipped (${result.skipped})`];
  return result.decisions.map((d) => {
    const head = `${result.arm}: ${d.scope}${d.id ? ` ${d.id}` : ''}`;
    if (d.matched === 'stated-in-session') return `${head}: stated by the user in the arc, not in the store at setup`;
    const warn = d.warnings?.length ? ` [${d.warnings.join('; ')}]` : '';
    return d.failures.length ? `${head}: FAIL ${d.failures.join('; ')}${warn}` : `${head}: ok${warn}`;
  });
}
