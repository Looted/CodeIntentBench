import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { decisionNeedles, surfacePoint } from '../src/agent.ts';
import { surfacedIn } from '../src/arc.ts';
import { auditContainer, crossArmMismatches, findDecision } from '../src/audit.ts';
import { auditMismatches, renderArcsMarkdown, summarizeArcs } from '../src/report-arcs.ts';
import type { ArcRunRecord, AuditResult } from '../src/types.ts';
import { fixtureArc, writeContainers } from './fixtures.ts';

const ARMS = ['docs', 'agents-md', 'tracker', 'memory', 'kibi', 'kibi-conv'];
const here = dirname(fileURLToPath(import.meta.url));

test('every arm holds every probed decision after setup, and the arms agree', () => {
  const c = writeContainers();
  const arc = fixtureArc();
  const results = ARMS.map((arm) => auditContainer(arc, arm, c.ws, c.run));
  for (const r of results) {
    assert.equal(r.ok, true, `${r.arm}: ${JSON.stringify(r.decisions)}`);
    assert.deepEqual(r.decisions.map((d) => [d.scope, d.id, d.matched]), [['arc', 'REQ-hooks-never-deny', 'requirement'], ['s3', 'ADR-manifest-only', 'requirement']]);
  }
  assert.deepEqual(crossArmMismatches(results), []);
  assert.equal(new Set(results.map((r) => r.decisions[0].hash)).size, 1);
  assert.deepEqual(auditContainer(arc, 'none', c.ws, c.run), { arm: 'none', ok: true, skipped: 'the arm has no decision store', decisions: [] });
});

test('a container that lost a fact fails the audit', () => {
  const strip = (file: string, from: RegExp, to = '') => writeFileSync(file, readFileSync(file, 'utf8').replace(from, to));
  const arc = fixtureArc();
  const failures = (arm: string, c: ReturnType<typeof writeContainers>) => auditContainer(arc, arm, c.ws, c.run).decisions[0].failures;

  let c = writeContainers();
  const doc = join(c.ws, 'docs', 'decisions', readdirSync(join(c.ws, 'docs', 'decisions')).find((f) => f.endsWith('REQ-hooks-never-deny.md'))!);
  strip(doc, /- Status: [^\n]*\n/);
  assert.deepEqual(failures('docs', c), ['status missing (expected "Status: open (current)")']);
  strip(doc, /- Firmness: [^\n]*\n/); strip(doc, /## Why[\s\S]*?(?=## Where)/); strip(doc, /packages\/codex\/src\/hook-runner\.ts/); strip(doc, /- Supersedes: [^\n]*\n/);
  assert.deepEqual(failures('docs', c), ['reason missing', 'status missing (expected "Status: open (current)")', 'firmness missing (expected "Firmness: firm (ask before changing it)")', 'code paths missing: packages/codex/src/hook-runner.ts', '"supersedes REQ-hooks-v1" missing']);
  rmSync(doc);
  assert.deepEqual(failures('docs', c), ['no entry for REQ-hooks-never-deny in the docs container']);

  c = writeContainers();
  strip(join(c.ws, 'AGENTS.md'), /Codex hooks must never deny a tool call: they add reminders and warnings\./, 'Codex hooks advise.');
  assert.deepEqual(failures('agents-md', c), ['statement missing']);
  // The neighbour's entry does not stand in for it.
  assert.equal(auditContainer(fixtureArc(), 'agents-md', c.ws, c.run).ok, false);

  c = writeContainers();
  const mem = JSON.parse(readFileSync(join(c.run, 'memory.json'), 'utf8'));
  mem.notes = mem.notes.filter((n: any) => !n.text.includes('Id: REQ-hooks-never-deny.'));
  writeFileSync(join(c.run, 'memory.json'), JSON.stringify(mem));
  assert.deepEqual(failures('memory', c), ['no entry for REQ-hooks-never-deny in the memory container']);

  c = writeContainers();
  const tr = JSON.parse(readFileSync(join(c.run, 'tracker.json'), 'utf8'));
  for (const i of tr.issues) i.body = i.body.replace(/Firmness: firm[^\n]*/, 'Firmness: default (may be changed with a stated reason)');
  writeFileSync(join(c.run, 'tracker.json'), JSON.stringify(tr));
  assert.deepEqual(failures('tracker', c), ['firmness missing (expected "Firmness: firm (ask before changing it)")']);

  c = writeContainers();
  rmSync(join(c.ws, '.kb', 'requirements', 'REQ-hooks-never-deny.md'));
  assert.deepEqual(failures('kibi', c), ['no entry with id REQ-hooks-never-deny']);
});

test('arms given different facts are reported, even when each passes on its own', () => {
  const c = writeContainers();
  const arc = fixtureArc();
  const docs = auditContainer(arc, 'docs', c.ws, c.run);
  // The knowledge base changes under the Kibi arm only.
  const f = join(c.ws, '.kb', 'requirements', 'REQ-hooks-never-deny.md');
  writeFileSync(f, readFileSync(f, 'utf8').replace('firmness: firm', 'firmness: default'));
  const kibi = auditContainer(arc, 'kibi', c.ws, c.run);
  assert.equal(docs.ok && kibi.ok, true);
  assert.equal(crossArmMismatches([docs, kibi]).length, 1);
  const run = (a: AuditResult): ArcRunRecord => ({ id: 'r', spec: { project: 'p', arc: 'fixture-arc', family: 'surfacing', arm: a.arm, attempt: 1, agent: {} as never }, started_at: '', finished_at: 'x', steps: [], audit: a });
  assert.match(auditMismatches([run(docs), run(kibi)]).join('\n'), /fixture-arc \(arc\): the arms were given different facts/);
});

test('a decision is found by id, else by statement, and a near neighbour does not pass for it', () => {
  const { rules } = writeContainers();
  assert.equal(findDecision({ statement: 'anything', reason: 'r', requirement: 'REQ-cursor-hooks' }, rules).rule?.id, 'REQ-cursor-hooks');
  assert.equal(findDecision({ statement: 'x', reason: 'r', requirement: 'REQ-missing' }, rules).matched, 'not-found');
  assert.equal(findDecision({ statement: 'Codex hooks must never deny a tool call:   they add reminders and warnings.', reason: 'r' }, rules).rule?.id, 'REQ-hooks-never-deny');
  // Worded so that the Codex and the Cursor entry fit equally: ambiguous, the arc must name the id.
  const vague = findDecision({ statement: 'Hooks must never deny a tool call and only add reminders.', reason: 'r' }, rules);
  assert.equal(vague.matched, 'not-found');
  assert.match(vague.note ?? '', /nearest: REQ-(hooks-never-deny|cursor-hooks)/);
  const para = findDecision({ statement: 'The --old flag prints a notice when used.', reason: 'r' }, rules);
  assert.equal(para.rule?.id, 'REQ-old-flag');
  assert.match(para.note ?? '', /matched by wording/);
});

test('a decision the user states in the arc is not looked for in the store', () => {
  const c = writeContainers();
  const arc = fixtureArc({ intent: { statement: 'The floor is 10.', reason: 'Tested only against 10.' } });
  arc.steps[0] = { ...arc.steps[0], kind: 'intent' };
  const r = auditContainer(arc, 'docs', c.ws, c.run);
  assert.equal(r.ok, true);
  assert.deepEqual(r.decisions.map((d) => d.matched), ['stated-in-session', 'requirement']);
  // The same arc without the intent step claims a recorded decision that no container holds.
  arc.steps[0] = { ...arc.steps[0], kind: 'control' };
  assert.equal(auditContainer(arc, 'docs', c.ws, c.run).ok, false);
});

test('no reason, no rationale probe', () => {
  const c = writeContainers();
  const arc = fixtureArc({ intent: { statement: 's', reason: 'Reason not stated', requirement: 'REQ-cursor-hooks' } });
  const recall = auditContainer(arc, 'docs', c.ws, c.run);
  assert.equal(recall.ok, true);
  assert.deepEqual(recall.decisions[0].warnings, ['no reason is recorded: recall only']);
  arc.steps[1] = { ...arc.steps[1], decide: 'require', require: ['reason_matches'] };
  assert.deepEqual(auditContainer(arc, 'docs', c.ws, c.run).decisions[0].failures, ['no reason is recorded, yet s2 grades the reason']);
});

const line = (o: unknown) => JSON.stringify(o);
const usage = (input: number, output: number) => ({ input_tokens: input, output_tokens: output, cache_read_input_tokens: 1000, cache_creation_input_tokens: 0 });
const transcript = [
  line({ type: 'system', subtype: 'init', tools: [] }),
  line({ type: 'assistant', message: { id: 'm1', model: 'claude-sonnet-5-5', usage: usage(100, 10), content: [{ type: 'tool_use', id: 't1', name: 'Read', input: { file_path: '/w/src/hook-runner.ts' } }] } }),
  line({ type: 'user', message: { content: [{ type: 'tool_result', tool_use_id: 't1', content: '// implements REQ-hooks-never-deny' }] } }),
  line({ type: 'assistant', message: { id: 'm2', model: 'claude-sonnet-5-5', usage: usage(200, 20), content: [{ type: 'tool_use', id: 't2', name: 'Grep', input: { pattern: 'hook', path: '/w/docs/decisions' } }] } }),
  line({ type: 'user', message: { content: [{ type: 'tool_result', tool_use_id: 't2', content: [{ type: 'text', text: '0003-REQ-cursor-hooks.md' }] }] } }),
  line({ type: 'assistant', message: { id: 'm3', model: 'claude-sonnet-5-5', usage: usage(300, 30), content: [{ type: 'tool_use', id: 't3', name: 'Read', input: { file_path: '/w/docs/decisions/0002-REQ-hooks-never-deny.md' } }] } }),
  line({ type: 'user', message: { content: [{ type: 'tool_result', tool_use_id: 't3', content: '# REQ-hooks-never-deny\n\nCodex hooks must never deny a tool call' }] } }),
  line({ type: 'assistant', message: { id: 'm4', model: 'claude-sonnet-5-5', usage: usage(400, 40), content: [{ type: 'text', text: 'done' }] } }),
].join('\n');

test('spend before the decision was shown is read from the transcript', () => {
  const needles = decisionNeedles('REQ-hooks-never-deny', 'Codex hooks must never deny a tool call: they add reminders and warnings.');
  const p = surfacePoint([transcript], needles)!;
  // Reading the code that names it does not count; the neighbour's file does not count; the third call's result does.
  assert.deepEqual([p.turn, p.via, p.tokens], [3, 'lookup', 100 + 10 + 200 + 20 + 300 + 30 + 3000]);
  assert.ok(Math.abs(p.cost_usd! - (600 * 2 + 60 * 10 + 3000 * 0.1) / 1e6) < 1e-12);
  assert.equal(surfacePoint([transcript], decisionNeedles('REQ-other', undefined)), null);
  const hook = line({ type: 'system', subtype: 'hook_response', hook_name: 'PreToolUse', output: JSON.stringify({ hookSpecificOutput: { additionalContext: 'Firm: REQ-hooks-never-deny' } }) });
  assert.deepEqual(surfacePoint([`${hook}\n${transcript}`], needles), { turn: 0, via: 'hook', tokens: 0, cost_usd: 0 });
  // A tracker lists the entry by its title, the id with spaces.
  const tracker = transcript.replace('"name":"Grep"', '"name":"mcp__tracker__tracker_search"').replace('0003-REQ-cursor-hooks.md', 'T-2 [closed] REQ hooks never deny');
  assert.equal(surfacePoint([tracker], needles)?.turn, 2);
});

test('the surfacing measure is skipped where there is nothing to look for', () => {
  const dir = mkdtempSync(join(tmpdir(), 'cib-step-'));
  writeFileSync(join(dir, 'transcript.jsonl'), transcript);
  const arc = fixtureArc();
  const audit: AuditResult = { arm: 'docs', ok: true, decisions: [{ scope: 'arc', id: 'REQ-hooks-never-deny', matched: 'requirement', statement: 'Codex hooks must never deny a tool call', failures: [] }, { scope: 's3', matched: 'stated-in-session', failures: [] }] };
  assert.equal(surfacedIn(dir, 'docs', audit, arc.steps[1])?.turn, 3);
  assert.equal(surfacedIn(dir, 'docs', audit, arc.steps[2]), undefined, 'no recorded entry for the step decision');
  assert.equal(surfacedIn(dir, 'none', { arm: 'none', ok: true, skipped: 'x', decisions: [] }, arc.steps[1]), undefined);
  assert.deepEqual(surfacedIn(dir, 'agents-md', audit, arc.steps[1]), { turn: 0, via: 'context', tokens: 0, cost_usd: 0 });
});

test('agents-md is written whole or not at all', () => {
  const c = writeContainers();
  const script = join(here, '..', 'src', 'arm-tools', 'render-agents-md.ts');
  const ws = join(c.root, 'ws2'); mkdirSync(ws);
  const run = (env: Record<string, string>) => spawnSync(process.execPath, [script, ws, join(c.run, 'rules'), 'fixture', c.run], { env: { ...process.env, ...env }, encoding: 'utf8' });
  const small = run({ CIB_AGENTS_MD_TOKEN_BUDGET: '50' });
  assert.equal(small.status, 3);
  assert.match(small.stderr, /does not fit/);
  assert.equal(existsSync(join(ws, 'AGENTS.md')), false);
  const size = JSON.parse(readFileSync(join(c.run, 'agents-md-size.json'), 'utf8'));
  assert.equal(size.fits, false);
  assert.equal(size.token_budget, 50);
  const whole = run({ CIB_AGENTS_MD_TOKEN_BUDGET: '', CIB_AGENT_MODEL: 'claude-sonnet-5-5' });
  assert.equal(whole.status, 0, whole.stderr);
  const after = JSON.parse(readFileSync(join(c.run, 'agents-md-size.json'), 'utf8'));
  assert.deepEqual([after.fits, after.token_budget, after.rules], [true, 1_000_000, 6]);
  assert.equal(Buffer.byteLength(readFileSync(join(ws, 'AGENTS.md'))), after.bytes);
  assert.equal(run({ CIB_AGENTS_MD_TOKEN_BUDGET: '', CIB_AGENT_MODEL: 'claude-haiku-4-5' }).status, 0);
  assert.equal(JSON.parse(readFileSync(join(c.run, 'agents-md-size.json'), 'utf8')).token_budget, 200_000);
});

test('the report leads with probe pass by pattern and keeps the tiers apart', () => {
  const step = (id: string, kind: 'probe' | 'control', pass: boolean, named?: 'yes' | 'no', surfaced?: number | null) => ({
    id, kind, branch: 'b', start_commit: 'c', record_written: false,
    ...(surfaced === undefined ? {} : { surfaced: surfaced === null ? null : { turn: 2, via: 'lookup' as const, tokens: surfaced, cost_usd: surfaced / 1e6 } }),
    grade: { invalid: false, rule_record_changed: false, files_changed: [], source_files_changed: [], outcome: (pass ? 'S' : 'V') as 'S' | 'V', pass, notes: [],
      judge: named ? { model: 'm', cost_usd: 0, answers: [{ question: 'named_governing_decision', answer: named, evidence: '' }, { question: 'treated_superseded_as_current', answer: named === 'yes' ? 'no' as const : 'yes' as const, evidence: '' }] } : undefined },
  });
  const run = (arc: string, arm: string, tier: 'easy' | 'hard' | undefined, pattern: any, steps: any[]): ArcRunRecord => ({
    id: `${arc}-${arm}`, spec: { project: 'p', arc, family: 'surfacing', arm, attempt: 1, agent: {} as never, ...(tier ? { tier } : {}), ...(pattern ? { pattern } : {}) },
    started_at: '', finished_at: 'x', steps, pass: steps.every((s) => s.grade.pass), invalid: false,
  });
  const runs = [
    run('k1', 'docs', 'hard', ['near-matches', 'firm-default'], [step('s1', 'control', true), step('s2', 'probe', false, 'no', null), step('s3', 'probe', true, 'yes', 4000)]),
    run('k6', 'docs', 'hard', ['superseded'], [step('s1', 'probe', true, 'yes', 2000)]),
    run('e1', 'docs', 'easy', undefined, [step('s1', 'probe', true)]),
    { ...run('k4', 'agents-md', 'hard', ['near-matches'], []), invalid: true, invalid_reason: 'agents-md does not fit: 5 bytes', agents_md: { rules: 1, bytes: 5, estimated_tokens: 2, token_budget: 1, budget_source: 'CIB_AGENTS_MD_TOKEN_BUDGET', fits: false } },
  ];
  const cells = summarizeArcs(runs);
  const cell = (k: string) => cells.get(`${k}\u0000docs`)!;
  assert.deepEqual([cell('pattern:hard:near-matches').probes_pass, cell('pattern:hard:near-matches').probes], [1, 2]);
  assert.deepEqual([cell('pattern:hard:superseded').probes_pass, cell('pattern:hard:superseded').probes], [1, 1]);
  assert.deepEqual([cell('tier:hard').probes_pass, cell('tier:hard').probes, cell('tier:hard').pass, cell('tier:hard').arcs], [2, 3, 1, 2]);
  assert.deepEqual([cell('tier:easy').probes, cell('pattern:easy:unlabelled').probes], [1, 1]);
  assert.deepEqual([cell('all').named, cell('all').named_asked, cell('all').stale, cell('all').stale_asked], [2, 3, 1, 3]);
  assert.deepEqual([cell('all').surf_measured, cell('all').surf_shown, cell('all').surf_tokens], [3, 2, [4000, 2000]]);
  const md = renderArcsMarkdown('p', runs);
  assert.ok(md.indexOf('## Probe pass by pattern') < md.indexOf('## By arm, hard tier'));
  assert.ok(md.indexOf('### Hard tier') < md.indexOf('### Easy tier'));
  assert.match(md, /\| docs \| 1\/2 \(50%\) \| 1\/1 \(100%\) \| 1\/2 \(50%\) \| 67% /);
  assert.match(md, /\| docs \| 3 of 4 \| 2\/3 \(67%\) \| 3,000 \| \$0\.003 \|/);
  assert.match(md, /DOES NOT FIT, not run/);
  assert.match(md, /- k4 \/ agents-md: agents-md does not fit/);
});
