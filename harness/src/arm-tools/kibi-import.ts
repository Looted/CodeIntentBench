// Usage: node kibi-import.ts <workspace> <rulesDir> <runDir>
// Records the project's rules in a Kibi knowledge base through Kibi's own
// operations: one requirement per rule, one symbol per enforcing function,
// one test entity per hidden test, linked with implements / covered_by /
// verified_by. Nothing is written to `.kb/` by hand except the authored
// symbol manifest, which is Kibi's documented authoring surface.
import { readFileSync, readdirSync, writeFileSync, appendFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import YAML from 'yaml';
import type { Rule } from '../types.ts';

const [ws, rulesDir, runDir] = process.argv.slice(2);
if (!ws || !rulesDir || !runDir) throw new Error('usage: kibi-import.ts <workspace> <rulesDir> <runDir>');

const rules = readdirSync(rulesDir).filter((f) => f.endsWith('.yaml')).sort().map((f) => YAML.parse(readFileSync(join(rulesDir, f), 'utf8')) as Rule);
const log: string[] = [];

function kibi(route: string, input: unknown): any {
  const r = spawnSync('kibi', [route, '--input', '-'], { cwd: ws, input: JSON.stringify(input) + '\n', encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  const text = r.stdout.trim();
  let parsed: any;
  try { parsed = JSON.parse(text.split('\n').pop() ?? ''); } catch { parsed = { status: 'error', raw: text.slice(-2000), stderr: r.stderr.slice(-2000) }; }
  log.push(JSON.stringify({ route, id: (input as any).id, status: parsed.status, warnings: parsed.data?.warnings?.length ?? 0, error: parsed.error ?? parsed.raw }));
  if (parsed.status !== 'success') throw new Error(`kibi ${route} failed for ${(input as any).id}: ${JSON.stringify(parsed).slice(0, 1500)}`);
  return parsed;
}

const reqId = (r: Rule) => `REQ-${r.id}`;
const testId = (r: Rule, i: number) => `TEST-${r.id}${i ? `-${i + 1}` : ''}`;
const symId = (r: Rule, i: number) => `SYM-${r.id}${i ? `-${i + 1}` : ''}`;

/** First sentence of the statement, as the short title; the full prose goes to semantic_text. */
function titleOf(statement: string): string {
  const first = statement.trim().split(/(?<=[.!?])\s+/)[0] ?? statement.trim();
  return first.length > 160 ? first.slice(0, 157).trimEnd() + '…' : first;
}

// 1. Tests, then requirements with the proposition ledger Kibi's write path requires for
// multi-clause prose: analyze the statement, copy the inventory contract and
// the propositions into the payload. Clauses stay `missing` (not grounded in
// typed facts); kb_check reports that as a review diagnostic, not a violation.
for (const rule of rules) {
  const tests = rule.tests ?? [];
  const statement = rule.statement.trim();
  // Relationships are sent from the entity being written, so the tests go first
  // and the requirement carries the verified_by links.
  tests.forEach((ref, i) => {
    const [file, name] = ref.split('::');
    kibi('upsert', {
      type: 'test',
      id: testId(rule, i),
      properties: { title: name ?? file, status: 'active', sourceFile: file, text_ref: file },
      document: { body: `Unit test for ${reqId(rule)}: ${name ?? file}\n\n## Context\n\nAsserts the behaviour "${statement}" from the project's own test suite, in ${file}. It would pass falsely only if the guard moved out of the tested code path.` },
    });
  });
  const receipt = kibi('semantic-advisor', { text: statement, id: reqId(rule) }).data.receipt;
  const contract = receipt.inventory_contract;
  const inventory = (receipt.propositions ?? []).map((p: any) => ({ claim_key: p.claim_key, claim_text: p.claim_text, role: p.role, status: p.status, span: p.span }));
  const body = [
    statement,
    '',
    '## Context',
    '',
    rule.rationale?.trim() || 'Reason not stated.',
    '',
    `Recorded from the project's documented rules; asked for by the project maintainers. Source: the code and tests named below. Enforced in: ${rule.scope.paths.join(', ')}.`,
  ].join('\n');
  kibi('upsert', {
    type: 'req',
    id: reqId(rule),
    properties: {
      title: titleOf(statement),
      status: 'active',
      // The rules are decisions the maintainers made and enforce; Kibi's `firm`
      // firmness tells an agent to follow them and to ask before changing them
      // (an unmarked requirement is a `default` decision an agent may supersede
      // on its own).
      firmness: 'firm',
      origin: { kind: 'human', ref: 'project maintainers: documented product rule, enforced in the code and tests named in Context' },
      semantic_text: statement,
      semantic_inventory_version: contract.version,
      semantic_source_field: contract.source_field,
      semantic_source_hash: contract.source_hash,
      semantic_inventory: inventory,
      logic_claims: inventory.map((p: any) => p.claim_key),
    },
    document: { body },
    relationships: tests.map((_, i) => ({ type: 'verified_by', from: reqId(rule), to: testId(rule, i) })),
  });
}

// 3. Symbols: the functions that enforce each rule, linked to the requirement and its tests.
const manifestPath = join(ws, '.kb', 'symbols.yaml');
const manifest = YAML.parseDocument(readFileSync(manifestPath, 'utf8'));
const existing = (manifest.get('symbols') as any)?.toJSON?.() ?? [];
const symbols: any[] = Array.isArray(existing) ? existing : [];
for (const rule of rules) {
  const names = rule.scope.symbols ?? [];
  names.forEach((title, i) => {
    const sourceFile = rule.scope.paths[Math.min(i, rule.scope.paths.length - 1)];
    const relationships: any[] = [{ type: 'implements', target: reqId(rule) }];
    (rule.tests ?? []).forEach((_, ti) => relationships.push({ type: 'covered_by', target: testId(rule, ti) }));
    symbols.push({ id: symId(rule, i), title, sourceFile, status: 'active', symbol_role: 'behavioral', relationships });
  });
}
manifest.set('symbols', symbols);
writeFileSync(manifestPath, manifest.toString());

// 4. Compile and refresh symbol coordinates through the CLI. A symbol whose
// declaration the AST extractor cannot locate (nested function, exported const)
// gets no coordinates and is dropped; such symbols are opted into Kibi's
// documented whole-file fallback (granularity_reason) and the sync is repeated.
function runSync(label: string): { code: number | null; out: string } {
  const r = spawnSync('kibi', ['sync', '--refresh-symbol-coordinates'], { cwd: ws, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
  const out = `${r.stdout}\n${r.stderr}`;
  appendFileSync(join(runDir, 'kibi-sync.log'), `=== ${label}\n${out}\n`);
  log.push(JSON.stringify({ route: 'sync', label, code: r.status }));
  if (r.status !== 0) throw new Error(`kibi sync failed: ${out.slice(-4000)}`);
  return { code: r.status, out };
}
// Kibi reads authored manifests from the staged Git snapshot, so the files
// written above are staged before the compile.
spawnSync('git', ['add', '-A', '--', '.kb'], { cwd: ws, encoding: 'utf8' });
let sync = runSync('first');
const failed = [...sync.out.matchAll(/^\s*failed (SYM-[^:]+):/gm)].map((m) => m[1]);
if (failed.length > 0) {
  const doc = YAML.parseDocument(readFileSync(manifestPath, 'utf8'));
  const list = (doc.get('symbols') as any).toJSON() as any[];
  for (const s of list) if (failed.includes(s.id)) s.granularity_reason = 'extractor-miss';
  doc.set('symbols', list);
  writeFileSync(manifestPath, doc.toString());
  spawnSync('git', ['add', '-A', '--', '.kb'], { cwd: ws, encoding: 'utf8' });
  sync = runSync('after coarse fallback');
}
const check = spawnSync('kibi', ['check', '--format', 'json'], { cwd: ws, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });
writeFileSync(join(runDir, 'kibi-check-baseline.json'), check.stdout || JSON.stringify({ error: check.stderr.slice(-2000) }));
log.push(JSON.stringify({ route: 'check', code: check.status }));
appendFileSync(join(runDir, 'kibi-import.log'), log.join('\n') + '\n');
// Usage telemetry from the setup phase must not be attributed to the agent.
const usageLog = join(ws, '.kb', 'usage.log');
if (existsSync(usageLog)) writeFileSync(usageLog, '');
console.log(`imported ${rules.length} rules as requirements, ${symbols.length} symbols (${failed.length} with coarse coordinates), check exit ${check.status}`);
