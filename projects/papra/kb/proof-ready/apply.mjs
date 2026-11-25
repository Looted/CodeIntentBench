// Applies kb/proof-ready/spec.json to a Kibi workspace through Kibi's own CLI, the way a team that proves its
// requirements would have set them up: the proof integration `kibi proof inspect` proposes, then for each listed
// requirement the failure-side facts `kibi proof explain` suggests, a success scenario and one rejection
// scenario per claim, the test's proof contract and step file, coverage of the requirement's code by that test,
// and the tested floor. Each test is then proved against this checkout, so the receipts match the code.
// Usage: node apply.mjs <spec.json> <workspace> <runDir>
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [specPath, ws, run] = process.argv.slice(2);
const spec = JSON.parse(readFileSync(specPath, 'utf8'));
const log = (s) => console.log(`[proof-ready] ${s}`);

function kibi(args, input) {
  return execFileSync('kibi', args, { cwd: ws, input, encoding: 'utf8', maxBuffer: 1 << 28, stdio: ['pipe', 'pipe', 'pipe'] });
}
function kibiJson(args, input) {
  return JSON.parse(kibi(args, input));
}
function upsert(payload) {
  const out = kibiJson(['upsert', '--input', '-'], JSON.stringify(payload));
  if (out.status !== 'success') throw new Error(`upsert ${payload.id} failed: ${JSON.stringify(out.error ?? out).slice(0, 800)}`);
  return out;
}
function entity(type, id) {
  const rows = kibiJson(['query', type, '--id', id, '--json']);
  if (!rows[0]) throw new Error(`no ${type} ${id}`);
  return rows[0];
}
const base = (id) => id.replace(/^REQ-/, '');

// 1. The proof integration Kibi proposes for the detected runner, with the step runner as its command.
const inspect = kibiJson(['proof', 'inspect', '--command', JSON.stringify(spec.integration.command), '--json']);
const integrationId = inspect.proposedIntegration?.id ?? 'unit';
if ((inspect.currentIntegrations ?? []).length === 0) {
  const plan = inspect.integrationPlan;
  const applied = kibiJson(['apply-plan', '--input', '-'], JSON.stringify({ plan, approvedPlanHash: plan.planHash, approvedActionIds: plan.actions.map((a) => a.id) }));
  if (applied.status !== 'success') throw new Error(`apply-plan failed: ${JSON.stringify(applied.error ?? applied).slice(0, 800)}`);
  log(`proof integration '${integrationId}': ${spec.integration.command.join(' ')}`);
}

const testsDone = new Map();
for (const r of spec.requirements) {
  const req = entity('req', r.id);
  const rels = kibiJson(['query', '--relationships', r.id, '--json']);
  const required = rels.filter((x) => x.type === 'requires_property' && x.from === r.id).map((x) => x.to);
  const explain = kibiJson(['proof', 'explain', r.id, '--json']);
  const negatives = explain.negativePath?.suggestedNegatives ?? [];
  const symbols = (explain.productionSymbols ?? []).map((s) => s.symbolId);

  // 2. A success scenario that assumes the facts the requirement requires.
  const scen = `SCEN-${base(r.id)}`;
  upsert({
    type: 'scenario', id: scen,
    properties: { title: req.title, status: 'active', expects: 'success', priority: 'must', origin: { kind: 'agent' } },
    document: { body: `Given the case ${r.id} describes, when the code runs it, then it behaves as stated: ${req.semantic_text ?? req.title}\n` },
    relationships: [...required.map((f) => ({ type: 'assumes', from: scen, to: f })), { type: 'verified_by', from: scen, to: r.test }],
  });
  // 3. One rejection scenario per claim, assuming the value the requirement forbids.
  const rejected = [];
  negatives.forEach((n, i) => {
    // factId names the claim's own fact; the forbidden value is a fact of its own beside it.
    const a = n.assumption;
    const factId = `${n.factId}-FORBIDDEN`;
    const value = a.value_type === 'bool' ? { value_bool: a.value } : a.value_type === 'int' ? { value_int: a.value } : { value_string: String(a.value) };
    upsert({
      type: 'fact', id: factId,
      properties: { title: `Forbidden by ${r.id}: ${a.subject_key} ${a.property_key} ${a.operator} ${JSON.stringify(a.value)}`, status: 'active', fact_kind: a.fact_kind, subject_key: a.subject_key, property_key: a.property_key, operator: a.operator, value_type: a.value_type, ...value, tags: ['negative-path'], origin: { kind: 'agent' } },
    });
    const id = `${scen}-rejected${negatives.length > 1 ? `-${i + 1}` : ''}`;
    upsert({
      type: 'scenario', id,
      properties: { title: `${req.title} (the forbidden case is refused)`, status: 'active', expects: 'rejection', priority: 'must', tags: ['negative-path'], origin: { kind: 'agent' } },
      document: { body: `Given ${a.subject_key} ${a.property_key} ${a.operator} ${JSON.stringify(a.value)}, which ${r.id} forbids, when the code meets it, then it is refused.\n` },
      relationships: [{ type: 'assumes', from: id, to: factId }, { type: 'verified_by', from: id, to: r.test }],
    });
    rejected.push(id);
  });

  // 4. The test: end to end, with a proof contract on its suite symbol and its step file.
  const test = entity('test', r.test);
  const suite = `SYM-test-${r.test.replace(/^TEST-/, '')}`;
  if (!testsDone.has(r.test)) {
    upsert({
      type: 'symbol', id: suite,
      properties: { title: `${test.title} suite`, status: 'active', sourceFile: `${spec.testsCwd}/${r.file}`, symbol_role: 'behavioral', granularity_reason: 'test-suite', origin: { kind: 'agent' } },
      relationships: [{ type: 'executable_for', from: suite, to: r.test }],
    });
    mkdirSync(join(ws, 'proof', 'steps'), { recursive: true });
    writeFileSync(join(ws, 'proof', 'steps', `${r.test}.json`), JSON.stringify({ test_id: r.test, steps: [['pnpm', '-C', spec.testsCwd, 'exec', 'vitest', 'run', r.file]] }, null, 2) + '\n');
    testsDone.set(r.test, []);
  }
  testsDone.get(r.test).push(r.id, scen, ...rejected);
  upsert({
    type: 'test', id: r.test,
    properties: {
      title: test.title, status: test.status ?? 'active', verification_scope: 'end_to_end',
      proof_contract: { version: 'kibi.proof-contract.v1', integration: integrationId, required_proofs: [{ symbol_id: suite, target: 'default' }], success_policy: 'all_required_first_attempt' },
    },
    relationships: testsDone.get(r.test).map((to) => ({ type: 'validates', from: r.test, to })),
  });
  // 5. The requirement's code is covered by that test.
  for (const s of symbols) {
    const sym = entity('symbol', s);
    upsert({ type: 'symbol', id: s, properties: { title: sym.title, status: sym.status, sourceFile: sym.sourceFile }, relationships: [{ type: 'covered_by', from: s, to: r.test }] });
  }
  // 6. The tested floor, specified by its scenarios.
  upsert({
    type: 'req', id: r.id,
    properties: { title: req.title, status: req.status, required_evidence: 'tested' },
    relationships: [scen, ...rejected].map((to) => ({ type: 'specified_by', from: r.id, to })),
  });
  log(`${r.id}: tested floor, ${rejected.length} rejection scenario(s), ${symbols.length} symbol(s) covered by ${r.test}`);
}

// 7. Prove each test against this checkout. A workspace prepared without installing (the equivalence audit)
// cannot run the tests: it gets the setup without receipts.
kibi(['sync']);
if (!existsSync(join(ws, spec.testsCwd, 'node_modules'))) {
  log('no node_modules: tests not proved (audit workspace)');
  process.exit(0);
}
for (const t of testsDone.keys()) {
  const out = kibi(['prove', '--test', t]);
  const last = out.trim().split('\n').pop();
  const res = JSON.parse(last);
  if (res.passed !== 1) throw new Error(`kibi prove --test ${t}: ${last.slice(0, 800)}`);
  log(`proved ${t}`);
}
// 8. The listed requirements now reach their floor.
for (const r of spec.requirements) {
  const e = kibiJson(['proof', 'explain', r.id, '--json']);
  log(`${r.id}: ${e.evidenceLevel} (${e.proofStatus}${e.proofGaps?.length ? `; gaps ${e.proofGaps.join(', ')}` : ''})`);
  if (e.evidenceLevel !== 'tested' && e.evidenceLevel !== 'proved') throw new Error(`${r.id} did not reach tested`);
}
writeFileSync(join(run, 'proof-ready.json'), JSON.stringify({ integration: integrationId, requirements: spec.requirements.map((r) => r.id), tests: [...testsDone.keys()] }, null, 2) + '\n');
