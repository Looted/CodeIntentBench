import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { RUNS_DIR } from './config.ts';
import { wilson } from './report.ts';
import { ARC_PATTERNS } from './types.ts';
import type { ArcFamily, ArcRunRecord } from './types.ts';

/**
 * Finished arc runs, the latest attempt per (arc, arm, attempt) when an arc was rerun (run ids start with a timestamp).
 * With `unfinished`, the runs that never finished instead (setup or harness errors), whose agent spend is reported apart.
 */
export function loadArcRuns(project: string, opts: { unfinished?: boolean } = {}): ArcRunRecord[] {
  const root = join(RUNS_DIR, project, '_arcs');
  if (!existsSync(root)) return [];
  const latest = new Map<string, ArcRunRecord>();
  const unfinished: ArcRunRecord[] = [];
  for (const arc of readdirSync(root)) {
    const adir = join(root, arc);
    if (!statSync(adir).isDirectory()) continue;
    for (const arm of readdirSync(adir)) {
      const mdir = join(adir, arm);
      if (!statSync(mdir).isDirectory()) continue;
      for (const id of readdirSync(mdir)) {
        const f = join(mdir, id, 'run.json');
        if (!existsSync(f)) continue;
        const r = JSON.parse(readFileSync(f, 'utf8')) as ArcRunRecord;
        if (!r.finished_at) { unfinished.push(r); continue; }
        const key = `${r.spec.arc}\u0000${r.spec.arm}\u0000${r.spec.attempt}`;
        const prev = latest.get(key);
        if (!prev || prev.id < r.id) latest.set(key, r);
      }
    }
  }
  return opts.unfinished ? unfinished : [...latest.values()];
}

/** Agent cost of a run: the sum of its sessions (older records folded the judge into cost_usd). */
export function agentCost(r: ArcRunRecord): number {
  return r.steps.reduce((a, s) => a + (s.usage?.cost_usd ?? 0), 0);
}

export function judgeCost(r: ArcRunRecord): number {
  return r.steps.reduce((a, s) => a + (s.grade?.judge?.cost_usd ?? 0), 0);
}

/**
 * The strict pass of a probe: accepted, and the agent named the decision that governs the request, and did not rely on
 * an entry the records mark as replaced. A probe kept by changing only the requested behaviour (C) needs no naming when
 * the decision's hidden test ran and passed: the test proves the decision was kept, so correct side-effect and two-path
 * work is not failed for staying quiet. Older records without the judge's naming answer fall back to the plain pass.
 */
export function strictProbePass(s: { kind: string; grade?: { pass: boolean; outcome: string; rule_tests?: { passed: boolean; failed_count: number }; judge?: { answers: Array<{ question: string; answer: string }> } } }): boolean {
  const g = s.grade;
  if (!g?.pass) return false;
  const answer = (k: string) => g.judge?.answers.find((a) => a.question === k)?.answer;
  if (answer('treated_superseded_as_current') === 'yes') return false;
  if (answer('named_governing_decision') === undefined) return true;
  if (answer('named_governing_decision') === 'yes') return true;
  return g.outcome === 'C' && !!g.rule_tests && g.rule_tests.passed && g.rule_tests.failed_count === 0;
}

interface Cell {
  arcs: number; invalid: number; pass: number;
  probes: number; probes_pass: number; probes_strict: number; surfaced: number; silent: number;
  controls: number; false_stops: number;
  intents: number; recorded: number;
  gated: number; gate_blocked: number;
  steps: number; sessions: number; cost_usd: number; judge_usd: number; wall_seconds: number;
  input: number; cache_write: number; cache_read: number; output: number;
  /** Agent spend on arcs that ended invalid, not in cost_usd. */
  invalid_usd: number;
  estimated_sessions: number;
  user_replies: number; user_usd: number;
  /** Permission prompts a hook raised and the scripted user answered, by answer. */
  prompts_allowed: number; prompts_declined: number;
  /** Probes where the judge was asked the two tool-neutral questions, and its yes answers. */
  named_asked: number; named: number; stale_asked: number; stale: number;
  /** Probes whose decision has a recorded entry to look for in the transcript; those where it was shown; the spend before it was. */
  surf_measured: number; surf_shown: number; surf_tokens: number[]; surf_cost: number[];
}

export const tierOf = (r: ArcRunRecord): string => r.spec.tier ?? 'untiered';
export const patternsOfRun = (r: ArcRunRecord): string[] => (r.spec.pattern?.length ? r.spec.pattern : ['unlabelled']);
const TIERS = ['hard', 'easy', 'untiered'];

const FAMILIES: ArcFamily[] = ['recall', 'rationale', 'surfacing', 'navigation', 'drift', 'evidence', 'branch', 'standing'];

export function summarizeArcs(runs: ArcRunRecord[]): Map<string, Cell> {
  const cells = new Map<string, Cell>();
  const cell = (k: string) => { if (!cells.has(k)) cells.set(k, { arcs: 0, invalid: 0, pass: 0, probes: 0, probes_pass: 0, probes_strict: 0, surfaced: 0, silent: 0, controls: 0, false_stops: 0, intents: 0, recorded: 0, gated: 0, gate_blocked: 0, steps: 0, sessions: 0, cost_usd: 0, judge_usd: 0, wall_seconds: 0, input: 0, cache_write: 0, cache_read: 0, output: 0, invalid_usd: 0, estimated_sessions: 0, user_replies: 0, user_usd: 0, prompts_allowed: 0, prompts_declined: 0, named_asked: 0, named: 0, stale_asked: 0, stale: 0, surf_measured: 0, surf_shown: 0, surf_tokens: [], surf_cost: [] }); return cells.get(k)!; };
  for (const r of runs) {
    for (const key of [`${r.spec.family}\u0000${r.spec.arm}`, `all\u0000${r.spec.arm}`, `tier:${tierOf(r)}\u0000${r.spec.arm}`, ...patternsOfRun(r).map((p) => `pattern:${tierOf(r)}:${p}\u0000${r.spec.arm}`)]) {
      const c = cell(key);
      c.arcs += 1;
      if (r.invalid) { c.invalid += 1; c.invalid_usd += agentCost(r); continue; }
      if (r.pass) c.pass += 1;
      c.cost_usd += agentCost(r);
      c.judge_usd += judgeCost(r);
      for (const s of r.steps) {
        c.steps += 1;
        if (s.usage) {
          c.sessions += 1;
          c.wall_seconds += s.usage.wall_seconds ?? 0;
          c.input += s.usage.input_tokens; c.cache_write += s.usage.cache_creation_input_tokens; c.cache_read += s.usage.cache_read_input_tokens; c.output += s.usage.output_tokens;
          if (s.usage.cost_estimated) c.estimated_sessions += 1;
        }
        c.user_replies += (s.user_turns ?? []).filter((t) => t.reply).length;
        c.user_usd += (s.user_turns ?? []).reduce((x, t) => x + t.cost_usd, 0);
        for (const p of (s.user_permissions ?? []).filter((p) => p.reason !== undefined)) { if (p.decision === 'allow') c.prompts_allowed += 1; else c.prompts_declined += 1; c.user_usd += p.cost_usd; }
        if (s.commit_gate) { c.gated += 1; if (s.commit_gate.blocked) c.gate_blocked += 1; }
        const g = s.grade; if (!g) continue; // scripted steps have no grade
        const yes = (k: string) => g.judge?.answers.find((a) => a.question === k)?.answer === 'yes';
        if (s.kind === 'probe') {
          c.probes += 1;
          if (g.pass) c.probes_pass += 1;
          if (strictProbePass(s)) c.probes_strict += 1;
          if (yes('surfaced_intent') || yes('disclosed_conflict') || yes('names_decision') || yes('reason_matches')) c.surfaced += 1;
          if (g.outcome === 'V' || g.outcome === 'L') c.silent += 1;
          const asked = (k: string) => g.judge?.answers.some((a) => a.question === k);
          if (asked('named_governing_decision')) { c.named_asked += 1; if (yes('named_governing_decision')) c.named += 1; }
          if (asked('treated_superseded_as_current')) { c.stale_asked += 1; if (yes('treated_superseded_as_current')) c.stale += 1; }
          if (s.surfaced !== undefined) {
            c.surf_measured += 1;
            if (s.surfaced) { c.surf_shown += 1; c.surf_tokens.push(s.surfaced.tokens); if (s.surfaced.cost_usd !== undefined) c.surf_cost.push(s.surfaced.cost_usd); }
          }
        }
        if (s.kind === 'control' || s.kind === 'work') { c.controls += 1; if (g.outcome === 'Q' || g.outcome === 'I') c.false_stops += 1; }
        if (s.kind === 'intent') { c.intents += 1; if (s.record_written || yes('recorded_decision')) c.recorded += 1; }
      }
    }
  }
  return cells;
}

function pct(k: number, n: number): string {
  if (n === 0) return '–';
  const [lo, hi] = wilson(k, n);
  return `${Math.round((100 * k) / n)}% (${Math.round(100 * lo)}–${Math.round(100 * hi)})`;
}

function median(xs: number[]): number | undefined {
  if (xs.length === 0) return undefined;
  const s = xs.slice().sort((a, b) => a - b);
  return s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2;
}

const frac = (k: number, n: number) => (n === 0 ? '–' : `${k}/${n} (${Math.round((100 * k) / n)}%)`);

export function renderArcsMarkdown(project: string, runs: ArcRunRecord[], unfinished: ArcRunRecord[] = []): string {
  const cells = summarizeArcs(runs);
  const arms = [...new Set(runs.map((r) => r.spec.arm))].sort();
  const L: string[] = [];
  const money = (x: number) => `$${x.toFixed(2)}`;
  L.push(`# CodeIntentBench arc results: ${project}`);
  L.push('');
  L.push(`${runs.length} arc runs (${runs.filter((r) => r.invalid).length} invalid). The headline is the share of probe sessions passed, by the pattern the arc tests; whether every session of an arc passed comes second, because one slip in an unrelated session fails a long arc. Hard and easy arcs are reported apart. Rates show 95% Wilson intervals where given.`);
  L.push('');
  const tiers = TIERS.filter((t) => runs.some((r) => tierOf(r) === t));
  L.push('## Probe pass by pattern');
  for (const tier of tiers) {
    const patterns = [...ARC_PATTERNS as string[], 'unlabelled'].filter((p) => arms.some((a) => cells.has(`pattern:${tier}:${p}\u0000${a}`)));
    L.push('');
    L.push(`### ${tier === 'untiered' ? 'Arcs without a tier' : `${tier[0].toUpperCase()}${tier.slice(1)} tier`}`);
    L.push('');
    L.push(`| Arm | ${patterns.join(' | ')} | all probes |`);
    L.push(`|---|${patterns.map(() => '---').join('|')}|---|`);
    for (const arm of arms) {
      const all = cells.get(`tier:${tier}\u0000${arm}`);
      if (!all) continue;
      L.push(`| ${arm} | ${patterns.map((p) => { const c = cells.get(`pattern:${tier}:${p}\u0000${arm}`); return c ? frac(c.probes_pass, c.probes) : '–'; }).join(' | ')} | ${pct(all.probes_pass, all.probes)} |`);
    }
  }
  L.push('');
  L.push('Probes passed over probes run, in valid arcs. An arc that names two patterns counts under both, so the pattern columns can sum to more than "all probes".');
  for (const tier of [...tiers, 'all']) {
    if (tier === 'all' && tiers.length === 1) continue;
    L.push('');
    L.push(`## By arm, ${tier === 'all' ? 'all tiers' : tier === 'untiered' ? 'arcs without a tier' : `${tier} tier`}`);
    L.push('');
    L.push('| Arm | Arcs (invalid) | Probe pass | Strict probe pass | Arc pass | Named the governing decision | Treated a superseded entry as current | Intent surfaced at probe | Silent violations | False stops | Intent recorded | Commits refused by gate | Cost per arc | Cost per preserved intent | Wall s per session | Wall min per arc | Wall min per passing arc |');
    L.push('|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|');
    for (const arm of arms) {
      const c = cells.get(`${tier === 'all' ? 'all' : `tier:${tier}`}\u0000${arm}`); if (!c) continue;
      const valid = c.arcs - c.invalid;
      L.push(`| ${arm} | ${c.arcs} (${c.invalid}) | ${pct(c.probes_pass, c.probes)} | ${pct(c.probes_strict, c.probes)} | ${pct(c.pass, valid)} | ${c.named_asked ? pct(c.named, c.named_asked) : 'not asked'} | ${c.stale_asked ? pct(c.stale, c.stale_asked) : 'not asked'} | ${pct(c.surfaced, c.probes)} | ${pct(c.silent, c.probes)} | ${pct(c.false_stops, c.controls)} | ${pct(c.recorded, c.intents)} | ${c.gated ? pct(c.gate_blocked, c.gated) : 'not exercised'} | ${valid ? money(c.cost_usd / valid) : '–'} | ${c.pass ? money(c.cost_usd / c.pass) : '–'} | ${c.sessions ? Math.round(c.wall_seconds / c.sessions) : '–'} | ${valid ? (c.wall_seconds / 60 / valid).toFixed(1) : '–'} | ${c.pass ? (c.wall_seconds / 60 / c.pass).toFixed(1) : '–'} |`);
    }
  }
  L.push('');
  L.push('A strict probe pass is an accepted probe in which the agent also named the governing decision and did not treat a replaced entry as current; a probe kept by changing only the requested behaviour (C) counts without naming when the decision\'s hidden test passed. An arc passes when every session\'s outcome is accepted. "Named the governing decision" and "Treated a superseded entry as current" are the judge\'s answers to two questions asked of every probe in every arm (did the agent name the decision that governs the request, not a neighbour; did it rely on an entry the records mark as replaced); they are reported, not graded. Cost is the agent sessions only (Claude Code\'s reported cost, subagents included); the judge is in the tokens table. Cost per preserved intent is the agent cost of all valid arcs divided by the passing arcs: the expected spend to get one task done when a failed arc is rerun until it passes. Wall time is the time the agent sessions ran (setup, tests and judging excluded); per passing arc it is the same expected figure in minutes. Agent spend on invalid or unfinished arcs is in neither and is listed below.');
  L.push('');
  L.push('## Spend before the governing decision was shown');
  L.push('');
  if (!arms.some((arm) => cells.get(`all\u0000${arm}`)?.surf_measured)) L.push('Not measured in these runs: no probed decision had a recorded entry to look for in the transcripts (each was stated by the user inside its arc), or the runs predate the measure.');
  else L.push('| Arm | Probes measured | Decision shown | Median tokens before it was shown | Median cost before it was shown |');
  if (arms.some((arm) => cells.get(`all\u0000${arm}`)?.surf_measured)) L.push('|---|---|---|---|---|');
  for (const arm of arms) {
    const c = cells.get(`all\u0000${arm}`); if (!c || !arms.some((x) => cells.get(`all\u0000${x}`)?.surf_measured)) continue;
    const t = median(c.surf_tokens), d = median(c.surf_cost);
    L.push(`| ${arm} | ${c.surf_measured} of ${c.probes} | ${c.surf_measured ? frac(c.surf_shown, c.surf_measured) : '–'} | ${t === undefined ? '–' : Math.round(t).toLocaleString('en-US')} | ${d === undefined ? '–' : `$${d.toFixed(3)}`} |`);
  }
  L.push('');
  L.push('Read from the session transcripts, no judge involved. A decision counts as shown at the first result of a lookup in the arm\'s decision store, or the first context a hook injected, that contains the recorded entry\'s id or the opening of its statement; reading the code that implements it does not count. Tokens are every model call up to that point (input, cached or not, plus output; subagents included), and the cost is those calls at list price, so both are estimates from per-message usage rather than Claude Code\'s billed total. Measured only for probes whose decision has a recorded entry at setup: a decision the user states inside the arc has no id to look for, and the arm without a store has nothing to show. In the agents-md arm the whole file is in context before the first turn, so the figure is zero by construction and its cost is the larger context on every call, which the tokens table shows.');
  const sized = runs.filter((r) => r.agents_md);
  if (sized.length) {
    const groups = new Map<string, number>();
    for (const r of sized) { const k = `${r.agents_md!.rules} decisions, ${r.agents_md!.bytes.toLocaleString('en-US')} bytes, about ${r.agents_md!.estimated_tokens.toLocaleString('en-US')} tokens (budget ${r.agents_md!.token_budget.toLocaleString('en-US')}, ${r.agents_md!.budget_source}): ${r.agents_md!.fits ? 'fits' : 'DOES NOT FIT, not run'}`; groups.set(k, (groups.get(k) ?? 0) + 1); }
    L.push('');
    L.push('## Size of AGENTS.md in the agents-md arm');
    L.push('');
    for (const [k, n] of groups) L.push(`- ${n} arc run${n === 1 ? '' : 's'}: ${k}`);
    L.push('');
    L.push('The file is loaded whole into every session and is never truncated; tokens are estimated at four bytes each.');
  }
  const unscored = runs.filter((r) => r.invalid && r.invalid_reason);
  const mismatched = auditMismatches(runs);
  if (unscored.length || mismatched.length) {
    L.push('');
    L.push('## Arcs not scored');
    L.push('');
    for (const r of unscored) L.push(`- ${r.spec.arc} / ${r.spec.arm}: ${r.invalid_reason}`);
    for (const m of mismatched) L.push(`- ${m}`);
  }
  L.push('');
  L.push('## Tokens and spend per arc, by arm');
  L.push('');
  L.push('Averages per valid arc, all sessions and subagents. Input is uncached input; cache write and cache read are prompt-cache tokens (Claude Code writes the cache with the one-hour TTL, billed at twice the input rate; reads at a tenth of it).');
  L.push('');
  L.push('| Arm | Sessions | Input | Cache write | Cache read | Output | Agent cost per arc | Judge cost per arc | Agent total | Judge total | Agent spend on invalid arcs | Sessions with estimated cost | Questions answered per arc | Permission prompts per arc (allowed / declined) | Scripted-user cost |');
  L.push('|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|');
  for (const arm of arms) {
    const c = cells.get(`all\u0000${arm}`); if (!c) continue;
    const valid = c.arcs - c.invalid;
    const per = (x: number) => (valid ? Math.round(x / valid).toLocaleString('en-US') : '–');
    L.push(`| ${arm} | ${c.sessions} | ${per(c.input)} | ${per(c.cache_write)} | ${per(c.cache_read)} | ${per(c.output)} | ${valid ? money(c.cost_usd / valid) : '–'} | ${valid ? money(c.judge_usd / valid) : '–'} | ${money(c.cost_usd)} | ${money(c.judge_usd)} | ${money(c.invalid_usd)} | ${c.estimated_sessions} | ${valid ? (c.user_replies / valid).toFixed(2) : '–'} | ${valid ? ((c.prompts_allowed + c.prompts_declined) / valid).toFixed(2) + ` (${c.prompts_allowed} / ${c.prompts_declined})` : '–'} | ${money(c.user_usd)} |`);
  }
  if (unfinished.length) {
    L.push('');
    L.push(`Unfinished arc runs (setup or harness error, not counted): ${unfinished.length}, agent spend ${money(unfinished.reduce((a, r) => a + agentCost(r), 0))}: ${unfinished.map((r) => `${r.spec.arc}/${r.spec.arm}/${r.id}`).join(', ')}.`);
  }
  L.push('');
  L.push('## Arc pass by family (one claim per column)');
  L.push('');
  const present = FAMILIES.filter((f) => arms.some((a) => cells.has(`${f}\u0000${a}`)));
  L.push(`| Arm | ${present.join(' | ')} |`);
  L.push(`|---|${present.map(() => '---').join('|')}|`);
  for (const arm of arms) {
    L.push(`| ${arm} | ${present.map((f) => { const c = cells.get(`${f}\u0000${arm}`); return c ? `${c.pass}/${c.arcs - c.invalid}` : '–'; }).join(' | ')} |`);
  }
  L.push('');
  L.push('## Per arc');
  L.push('');
  L.push('| Arc | Tier | Pattern | Family | Arm | Session outcomes | Lookup → first edit (turns) | Agent cost |');
  L.push('|---|---|---|---|---|---|---|---|');
  for (const r of runs.slice().sort((a, b) => a.spec.arc.localeCompare(b.spec.arc) || a.spec.arm.localeCompare(b.spec.arm) || a.spec.attempt - b.spec.attempt)) {
    const outs = r.steps.map((s) => `${s.id}:${s.grade?.outcome ?? '?'}${s.commit_gate?.blocked ? '⛔' : ''}${'↩'.repeat((s.user_turns ?? []).filter((t) => t.reply).length)}`).join(' ');
    const look = r.steps.map((s) => `${s.first_lookup_turn ?? '–'}→${s.first_edit_turn ?? '–'}`).join(', ');
    L.push(`| ${r.spec.arc} | ${r.spec.tier ?? '–'} | ${r.spec.pattern?.join(', ') ?? '–'} | ${r.spec.family} | ${r.spec.arm} | ${r.invalid ? `not scored${r.invalid_reason ? `: ${r.invalid_reason.split(':')[0]}` : ''}` : `${outs}${r.pass ? ' ✓' : ''}`} | ${look} | $${agentCost(r).toFixed(2)} |`);
  }
  L.push('');
  L.push('Outcome classes: S surfaced the decision and stopped · D changed the decision explicitly · C done correctly · V silent violation · N surfaced but broke · Q asked without surfacing · I invented · F not done or tests fail · L applied a decision from another branch. ⛔ the arm\'s commit gate refused the session\'s commit. ↩ one reply from the scripted user.');
  return L.join('\n');
}

/** Arcs whose arms were audited as holding different facts for a decision: the same check `cib audit` makes, over the run records. */
export function auditMismatches(runs: ArcRunRecord[]): string[] {
  const out: string[] = [];
  const byArc = new Map<string, ArcRunRecord[]>();
  for (const r of runs) if (r.audit && !r.audit.skipped) byArc.set(r.spec.arc, [...(byArc.get(r.spec.arc) ?? []), r]);
  for (const [arc, rs] of byArc) {
    const scopes = new Set(rs.flatMap((r) => r.audit!.decisions.map((d) => d.scope)));
    for (const scope of scopes) {
      const seen = new Map<string, Set<string>>();
      for (const r of rs) { const d = r.audit!.decisions.find((x) => x.scope === scope); if (d?.hash) seen.set(`${d.id} ${d.hash}`, (seen.get(`${d.id} ${d.hash}`) ?? new Set()).add(r.spec.arm)); }
      if (seen.size > 1) out.push(`${arc} (${scope}): the arms were given different facts for the decision (${[...seen].map(([k, a]) => `${[...a].join('+')}: ${k}`).join('; ')}); compare these arms with care`);
    }
  }
  return out;
}
