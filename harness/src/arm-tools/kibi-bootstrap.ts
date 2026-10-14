// Usage: node kibi-bootstrap.ts <workspace> <claims.json> <outDir> [--approve <planHash>] [--symbols <map.json>]
// Builds a Kibi knowledge base for a project checkout from harvested, cited intent claims,
// through Kibi's own bootstrap flow (the kibi-bootstrap skill): `kibi init`, a read-only
// `plan-bootstrap` preview written to <outDir>/plan.json with its hash and diagnostics, and,
// only when the caller passes the hash of that very plan as --approve (the human's approval
// step), one `apply-plan` with the unchanged plan, then `kibi check` and `kibi status`.
// `planOptions` in the claims file (maxCandidates, entityTypes, includeGenericMarkdown) are passed through to the preview.
// Claims carry a `since` date (when the behaviour and its source existed); only claims dated
// on or before the checkout's commit date are declared, so an older base commit gets the
// knowledge its contemporaries had. The pinned `kibi` must be on PATH.
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2);
function opt(name: string): string | undefined { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : undefined; }
const approve = opt('--approve');
const symbolsFile = opt('--symbols');
const positional: string[] = [];
for (let i = 0; i < args.length; i++) { if (args[i] === '--approve' || args[i] === '--symbols') { i++; continue; } positional.push(args[i]); }
const [ws, claimsFile, outDir] = positional;
if (!ws || !claimsFile || !outDir) throw new Error('usage: kibi-bootstrap.ts <workspace> <claims.json> <outDir> [--approve <planHash>] [--symbols <map.json>]');
mkdirSync(outDir, { recursive: true });

function sh(cmd: string, cmdArgs: string[], input?: string) {
  const r = spawnSync(cmd, cmdArgs, { cwd: ws, input, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  return { code: r.status, out: r.stdout ?? '', err: r.stderr ?? '' };
}
function kibiJson(route: string, input: unknown, label: string): any {
  const r = sh('kibi', [route, '--input', '-'], JSON.stringify(input) + '\n');
  writeFileSync(join(outDir, `${label}.raw.txt`), r.out + (r.err ? `\n--- stderr\n${r.err}` : ''));
  const lines = r.out.trim().split('\n');
  let parsed: any;
  for (let i = lines.length - 1; i >= 0 && parsed === undefined; i--) { try { parsed = JSON.parse(lines.slice(i).join('\n')); } catch { /* keep looking */ } }
  if (parsed === undefined) throw new Error(`kibi ${route}: no JSON in output (exit ${r.code}); see ${label}.raw.txt`);
  writeFileSync(join(outDir, `${label}.json`), JSON.stringify(parsed, null, 2));
  return parsed;
}

const baseDate = sh('git', ['log', '-1', '--format=%cs', 'HEAD']).out.trim();
const baseSha = sh('git', ['rev-parse', 'HEAD']).out.trim();
const claims = JSON.parse(readFileSync(claimsFile, 'utf8'));
const at = (x: { since?: string }) => !x.since || x.since <= baseDate;
const strip = ({ since, ...rest }: any) => rest;
const bootstrapContext = {
  projectSummary: claims.projectSummary,
  // Answers to the plan's bounded context questions (sourceOfTruthPaths, sourceOfTruthNotes, priorityRoots, verificationAnchors).
  ...(claims.context ?? {}),
  knowledgeSources: claims.knowledgeSources,
  intentClaims: claims.claims.filter(at).map(strip),
  conflicts: (claims.conflicts ?? []).filter(at).map(strip),
};
const input = { ...(claims.planOptions ?? {}), bootstrapContext };
writeFileSync(join(outDir, 'bootstrap-input.json'), JSON.stringify(input, null, 2));
console.log(`base ${baseSha.slice(0, 12)} (${baseDate}): ${bootstrapContext.intentClaims.length}/${claims.claims.length} claims, ${bootstrapContext.conflicts.length} conflicts declared`);

if (!existsSync(join(ws, '.kb'))) {
  const init = sh('kibi', ['init']);
  writeFileSync(join(outDir, 'init.txt'), init.out + init.err);
  if (init.code !== 0) throw new Error(`kibi init failed: ${(init.out + init.err).slice(-2000)}`);
}
const plan = kibiJson('plan-bootstrap', input, 'plan');
const p = plan.data?.structuredContent?.plan ?? plan.data?.plan ?? plan.structuredContent?.plan;
if (plan.status !== 'success' || !p) throw new Error(`plan-bootstrap: status ${plan.status}; see plan.json`);
const hash = p.planHash;
const cands = p.candidates ?? [];
const byKind: Record<string, number> = {};
for (const c of cands) byKind[`${c.entityType ?? c.type}/${c.sourceKind ?? '?'}`] = (byKind[`${c.entityType ?? c.type}/${c.sourceKind ?? '?'}`] ?? 0) + 1;
console.log(`plan hash ${hash}; status ${p.status ?? plan.data?.status}; ${cands.length} candidates ${JSON.stringify(byKind)}; ${(p.actions ?? []).length} actions; ${(p.suppressedCandidates ?? []).length} suppressed; ${(p.diagnostics ?? []).length} diagnostics`);
for (const d of (p.diagnostics ?? []).slice(0, 80)) console.log(`  diag: ${typeof d === 'string' ? d : JSON.stringify(d)}`.slice(0, 400));
for (const s of (p.suppressedCandidates ?? []).slice(0, 40)) console.log(`  suppressed: ${JSON.stringify(s)}`.slice(0, 300));
for (const q of (plan.data?.questions ?? p.questions ?? [])) console.log(`  question: ${JSON.stringify(q)}`.slice(0, 300));

if (!approve) { console.log('preview only; re-run with --approve <hash> to apply'); process.exit(0); }
if (approve !== hash) throw new Error(`approved hash ${approve} does not match the plan hash ${hash}; nothing applied`);
const apply = kibiJson('apply-plan', { plan: p, approvedPlanHash: hash }, 'apply');
console.log(`apply: status ${apply.status} ${apply.data?.status ?? ''} ${apply.error ? JSON.stringify(apply.error).slice(0, 500) : ''}`);
if (apply.status !== 'success') process.exit(1);

// Deepen (skill step 11, "unplanned claims"): every intent claim the strict modeler could not ground
// is compiled with `compile-intent` (the route the plan's diagnostics name) and, because a compile plan
// with ontology gaps is not applicable, written with `upsert` carrying the compile plan's inventory
// contract, as the apply error and the kibi-usage skill prescribe. The claim keeps its statement, its
// reason as the source gave it (or "Reason not stated") and its cited excerpt, and is marked firm with an
// import origin naming the source, as the planned claims are.
const planned = new Set<string>();
for (const c of cands) for (const e of c.evidence ?? []) if (String(e).startsWith('intent_claim:')) planned.add(String(e).slice('intent_claim:'.length));
const sources = new Map<string, any>(claims.knowledgeSources.map((s: any) => [s.id, s]));
const authored: string[] = []; const failed: string[] = [];
const reqIdByRef = new Map<string, string>();
const reqMeta = new Map<string, { title: string; text_ref?: string }>();
for (const claim of bootstrapContext.intentClaims) {
  const ref = `${claim.sourceId}:${claim.reference}`;
  if (planned.has(ref) || (claim.kind ?? 'intent') !== 'intent') continue;
  const src = sources.get(claim.sourceId);
  const context = `${claim.rationale ?? 'Reason not stated.'}\n\nSource: ${src.title} (${src.kind}, ${src.authority}), ${claim.reference}.`;
  const label = `compile-${ref.replace(/[^A-Za-z0-9]+/g, '-')}`;
  let compiled: any;
  try {
    compiled = kibiJson('compile-intent', { intent: claim.statement, mode: 'create', context, sourceExcerpt: claim.excerpt, sourceReference: ref }, label);
  } catch (e) { failed.push(`${ref}: ${(e as Error).message}`); continue; }
  const steps: any[] = compiled.data?.steps ?? [];
  const step = steps.find((s: any) => s.type === 'req');
  if (compiled.status !== 'success' || !step) { failed.push(`${ref}: compile ${compiled.status} ${JSON.stringify(compiled.error ?? '').slice(0, 300)}`); continue; }
  const first = claim.statement.trim().split(/(?<=[.!?])\s+/)[0] ?? claim.statement.trim();
  const title = first.length > 160 ? first.slice(0, 157).trimEnd() + '…' : first;
  const body = [claim.statement.trim(), '', '## Context', '', claim.rationale ?? 'Reason not stated.', '', '## Source', '', ...String(claim.excerpt).split('\n').map((l: string) => `> ${l.trim()}`), '', `Source: ${src.title} - ${claim.reference}`, ''].join('\n');
  // The compile plan's steps are dependency-ordered: the strict facts it modelled (subjects, property
  // values, predicates) come before the requirement that links to them, and are written as proposed.
  let ok = true;
  for (const s of steps) {
    const payload = s.type === 'req'
      ? { type: 'req', id: s.id, properties: { ...s.properties, title, status: 'active', firmness: 'firm', origin: { kind: 'import', ref: `${src.title}: ${claim.reference}` }, ...(claim.rationale ? { rationale: claim.rationale } : {}), tags: ['bootstrap', `knowledge-source:${claim.sourceId}`, `component:${claim.component ?? src.component ?? 'unknown'}`] }, document: { body }, relationships: s.relationships ?? [] }
      : { type: s.type, id: s.id, properties: s.properties, relationships: s.relationships ?? [], ...(s.document ? { document: s.document } : {}) };
    let written: any;
    try { written = kibiJson('upsert', payload, `upsert-${s.id}`); } catch (e) { failed.push(`${ref}: ${(e as Error).message}`); ok = false; break; }
    if (written.status !== 'success') { failed.push(`${ref}: upsert ${s.id} ${written.status} ${JSON.stringify(written.error ?? '').slice(0, 400)}`); ok = false; break; }
  }
  if (!ok) continue;
  authored.push(`${step.id} <- ${ref} (${steps.length} steps)`);
  reqIdByRef.set(ref, step.id);
  reqMeta.set(step.id, { title });
}
// The requirements the bootstrap plan itself wrote come out as `status: open`, origin `agent` and no
// firmness (so `default`, which Kibi's agent skill treats as a decision the agent may supersede on its
// own), although each is a maintainer's cited decision. They are firmed up the way the authored ones are
// written: firm, import origin naming the source, active, with the reason as the source gave it.
const firmed: string[] = [];
for (const c of cands) {
  if (c.entityType !== 'req' || c.sourceKind !== 'intent_claim') continue;
  const ref = String((c.evidence ?? []).find((e: any) => String(e).startsWith('intent_claim:')) ?? '').slice('intent_claim:'.length);
  const claim = bootstrapContext.intentClaims.find((x: any) => `${x.sourceId}:${x.reference}` === ref);
  const action = (p.actions ?? []).find((a: any) => a.candidateId === (c.candidateId ?? c.id) && a.payload?.type === 'req');
  if (!claim || !action) { failed.push(`${ref}: planned requirement not found in the plan actions`); continue; }
  const src = sources.get(claim.sourceId);
  const body = [claim.statement.trim(), '', '## Context', '', claim.rationale ?? 'Reason not stated.', '', '## Source', '', ...String(claim.excerpt).split('\n').map((l: string) => `> ${l.trim()}`), '', `Source: ${src.title} - ${claim.reference}`, ''].join('\n');
  const payload = { type: 'req', id: action.payload.id, properties: { ...action.payload.properties, status: 'active', firmness: 'firm', origin: { kind: 'import', ref: `${src.title}: ${claim.reference}` }, ...(claim.rationale ? { rationale: claim.rationale } : {}), tags: [...(action.payload.properties.tags ?? []), 'bootstrap', `knowledge-source:${claim.sourceId}`, `component:${claim.component ?? src.component ?? 'unknown'}`] }, document: { body }, relationships: action.payload.relationships ?? [] };
  let written: any;
  try { written = kibiJson('upsert', payload, `firm-${action.payload.id}`); } catch (e) { failed.push(`${ref}: ${(e as Error).message}`); continue; }
  if (written.status !== 'success') { failed.push(`${ref}: firm-up upsert ${written.status} ${JSON.stringify(written.error ?? '').slice(0, 400)}`); continue; }
  firmed.push(`${action.payload.id} <- ${ref}`);
  reqIdByRef.set(ref, action.payload.id);
  reqMeta.set(action.payload.id, { title: action.payload.properties.title, text_ref: action.payload.properties.text_ref });
}
console.log(`deepen: ${firmed.length} planned requirements firmed up`);
console.log(`deepen: ${authored.length} claims authored through compile-intent + upsert, ${failed.length} failed`);
for (const f of failed) console.log(`  failed: ${f}`);
writeFileSync(join(outDir, 'deepen.json'), JSON.stringify({ planned: [...planned], firmed, authored, failed }, null, 2));
// Symbols and tests (skill step 11, kibi-usage): the functions that implement each requirement, authored
// in Kibi's symbol manifest (.kb/symbols.yaml, its documented authoring surface) with `implements` links,
// exactly as a Kibi user records where a decision lives in the code; coordinates come from `kibi sync`.
// Only symbols that exist in this checkout are written, so an older base links what it has. Existing
// test files that exercise a symbol (a *.test.ts in the same directory that names it) become TEST
// entities: the symbol is `covered_by` them and the requirement `verified_by` them, which is what Kibi's
// symbol-coverage check asks for; no test evidence is invented, so symbols without such a test stay
// uncovered and the check reports them.
let symbolCount = 0, symbolSkipped = 0, testCount = 0, uncovered = 0;
if (symbolsFile) {
  const map: any[] = JSON.parse(readFileSync(symbolsFile, 'utf8'));
  const manifestPath = join(ws, '.kb', 'symbols.yaml');
  const lines: string[] = [];
  const escape = (name: string) => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const declared = (path: string, name: string) => {
    const file = join(ws, path);
    if (!existsSync(file)) return false;
    return new RegExp(`^export (const|let|async function|function|class) ${escape(name)}\\b`, 'm').test(readFileSync(file, 'utf8'));
  };
  const testsFor = (path: string, name: string): string[] => {
    const dir = join(ws, path.split('/').slice(0, -1).join('/'));
    if (!existsSync(dir)) return [];
    const word = new RegExp(`\\b${escape(name)}\\b`);
    return readdirSync(dir).filter((f) => /\.test\.[cm]?[jt]sx?$/.test(f) && word.test(readFileSync(join(dir, f), 'utf8')))
      .map((f) => `${path.split('/').slice(0, -1).join('/')}/${f}`).sort();
  };
  const testIds = new Map<string, string>();
  const reqTests = new Map<string, Set<string>>();
  const ensureTest = (file: string, symbol: string): string | undefined => {
    const id = `TEST-${file.replace(/^apps\//, '').replace(/^packages\//, '').replace(/\.test\.[cm]?[jt]sx?$/, '').replace(/[^A-Za-z0-9]+/g, '-')}`;
    if (testIds.has(file)) return testIds.get(file);
    const r = kibiJson('upsert', { type: 'test', id, properties: { title: file.split('/').pop(), status: 'active', sourceFile: file, text_ref: file }, document: { body: `Existing unit test file ${file} from the project's own suite.\n\n## Context\n\nLinked at onboarding as the test evidence for the symbols it names (${symbol} and others in the same module); it exercises the module, not necessarily every clause of the requirements those symbols implement.` } }, `upsert-${id}`);
    if (r.status !== 'success') { failed.push(`${file}: test upsert ${JSON.stringify(r.error ?? '').slice(0, 300)}`); return undefined; }
    testIds.set(file, id); testCount++;
    return id;
  };
  for (const entry of map) {
    const ref = `${entry.sourceId}:${entry.reference}`;
    const reqId = reqIdByRef.get(ref);
    if (!reqId) continue;
    let n = 0;
    for (const sym of entry.symbols ?? []) {
      if (!declared(sym.path, sym.symbol)) { symbolSkipped++; continue; }
      n++;
      const id = `SYM-${reqId.replace(/^REQ-/, '')}-${n}`;
      const tests = testsFor(sym.path, sym.symbol).map((f) => ensureTest(f, sym.symbol)).filter((x): x is string => !!x);
      if (tests.length === 0) uncovered++;
      for (const t of tests) (reqTests.get(reqId) ?? reqTests.set(reqId, new Set()).get(reqId)!).add(t);
      lines.push(`  - id: ${id}`, `    title: ${sym.symbol}`, `    sourceFile: ${sym.path}`, `    status: active`, `    symbol_role: behavioral`, `    relationships:`, `      - type: implements`, `        target: ${reqId}`);
      for (const t of tests) lines.push(`      - type: covered_by`, `        target: ${t}`);
      symbolCount++;
    }
  }
  // The requirement side of the coverage path: verified_by its tests, with the stored title and status only.
  for (const [reqId, tests] of reqTests) {
    const meta = reqMeta.get(reqId)!;
    const r = kibiJson('upsert', { type: 'req', id: reqId, properties: { title: meta.title, status: 'active', ...(meta.text_ref ? { text_ref: meta.text_ref } : {}) }, relationships: [...tests].map((t) => ({ type: 'verified_by', from: reqId, to: t })) }, `verify-${reqId}`);
    if (r.status !== 'success') failed.push(`${reqId}: verified_by upsert ${JSON.stringify(r.error ?? '').slice(0, 300)}`);
  }
  const manifest = readFileSync(manifestPath, 'utf8').replace(/^symbols: \[\]\s*$/m, 'symbols:\n' + lines.join('\n') + '\n');
  writeFileSync(manifestPath, manifest);
  console.log(`symbols: ${symbolCount} authored with implements links (${symbolSkipped} not declared in this checkout); ${testCount} existing test files linked; ${uncovered} symbols without a test that names them`);
  for (const f of failed) console.log(`  failed: ${f}`);
}
// Kibi reads authored manifests from the staged Git snapshot.
sh('git', ['add', '-A', '--', '.kb']);
let sync = sh('kibi', ['sync', '--refresh-symbol-coordinates']);
let syncOut = sync.out + sync.err;
const missed = [...syncOut.matchAll(/^\s*failed (SYM-[^:]+):/gm)].map((m) => m[1]);
if (missed.length > 0 && symbolsFile) {
  // Declarations the AST extractor cannot locate opt into Kibi's documented whole-file fallback.
  const manifestPath = join(ws, '.kb', 'symbols.yaml');
  let m = readFileSync(manifestPath, 'utf8');
  for (const id of missed) m = m.replace(new RegExp(`(  - id: ${id}\\n(?:    .*\\n)*?    status: active\\n)`), '$1    granularity_reason: extractor-miss\n');
  writeFileSync(manifestPath, m);
  sh('git', ['add', '-A', '--', '.kb']);
  sync = sh('kibi', ['sync', '--refresh-symbol-coordinates']);
  syncOut += `\n=== after coarse fallback for ${missed.join(', ')}\n` + sync.out + sync.err;
  console.log(`symbols: ${missed.length} with coarse coordinates (extractor miss)`);
}
writeFileSync(join(outDir, 'sync.txt'), syncOut);
console.log(`sync exit ${sync.code}`);
const check = sh('kibi', ['check', '--format', 'json']);
writeFileSync(join(outDir, 'check.json'), check.out || check.err);
const status = sh('kibi', ['status']);
writeFileSync(join(outDir, 'status.txt'), status.out + status.err);
console.log(`check exit ${check.code}; status exit ${status.code}`);
console.log(status.out.split('\n').slice(0, 30).join('\n'));
