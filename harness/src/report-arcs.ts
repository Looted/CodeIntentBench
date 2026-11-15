import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { RUNS_DIR } from './config.ts';
import { wilson } from './report.ts';
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

interface Cell {
  arcs: number; invalid: number; pass: number;
  probes: number; probes_pass: number; surfaced: number; silent: number;
  controls: number; false_stops: number;
  intents: number; recorded: number;
  gated: number; gate_blocked: number;
  steps: number; sessions: number; cost_usd: number; judge_usd: number; wall_seconds: number;
  input: number; cache_write: number; cache_read: number; output: number;
  /** Agent spend on arcs that ended invalid, not in cost_usd. */
  invalid_usd: number;
  estimated_sessions: number;
}

const FAMILIES: ArcFamily[] = ['recall', 'rationale', 'surfacing', 'navigation', 'drift', 'evidence', 'branch', 'standing'];

export function summarizeArcs(runs: ArcRunRecord[]): Map<string, Cell> {
  const cells = new Map<string, Cell>();
  const cell = (k: string) => { if (!cells.has(k)) cells.set(k, { arcs: 0, invalid: 0, pass: 0, probes: 0, probes_pass: 0, surfaced: 0, silent: 0, controls: 0, false_stops: 0, intents: 0, recorded: 0, gated: 0, gate_blocked: 0, steps: 0, sessions: 0, cost_usd: 0, judge_usd: 0, wall_seconds: 0, input: 0, cache_write: 0, cache_read: 0, output: 0, invalid_usd: 0, estimated_sessions: 0 }); return cells.get(k)!; };
  for (const r of runs) {
    for (const key of [`${r.spec.family}\u0000${r.spec.arm}`, `all\u0000${r.spec.arm}`]) {
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
        if (s.commit_gate) { c.gated += 1; if (s.commit_gate.blocked) c.gate_blocked += 1; }
        const g = s.grade; if (!g) continue; // scripted steps have no grade
        const yes = (k: string) => g.judge?.answers.find((a) => a.question === k)?.answer === 'yes';
        if (s.kind === 'probe') {
          c.probes += 1;
          if (g.pass) c.probes_pass += 1;
          if (yes('surfaced_intent') || yes('disclosed_conflict') || yes('names_decision') || yes('reason_matches')) c.surfaced += 1;
          if (g.outcome === 'V' || g.outcome === 'L') c.silent += 1;
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

export function renderArcsMarkdown(project: string, runs: ArcRunRecord[], unfinished: ArcRunRecord[] = []): string {
  const cells = summarizeArcs(runs);
  const arms = [...new Set(runs.map((r) => r.spec.arm))].sort();
  const L: string[] = [];
  L.push(`# CodeIntentBench arc results: ${project}`);
  L.push('');
  L.push(`${runs.length} arc runs (${runs.filter((r) => r.invalid).length} invalid). An arc passes when every session's outcome is accepted. Rates show 95% Wilson intervals.`);
  L.push('');
  L.push('## By arm, all families');
  L.push('');
  L.push('| Arm | Arcs (invalid) | Arc pass | Probe pass | Intent surfaced at probe | Silent violations | False stops | Intent recorded | Commits refused by gate | Cost per arc | Cost per preserved intent | Wall s per session | Wall min per arc | Wall min per passing arc |');
  L.push('|---|---|---|---|---|---|---|---|---|---|---|---|---|---|');
  const money = (x: number) => `$${x.toFixed(2)}`;
  for (const arm of arms) {
    const c = cells.get(`all\u0000${arm}`); if (!c) continue;
    const valid = c.arcs - c.invalid;
    L.push(`| ${arm} | ${c.arcs} (${c.invalid}) | ${pct(c.pass, valid)} | ${pct(c.probes_pass, c.probes)} | ${pct(c.surfaced, c.probes)} | ${pct(c.silent, c.probes)} | ${pct(c.false_stops, c.controls)} | ${pct(c.recorded, c.intents)} | ${c.gated ? pct(c.gate_blocked, c.gated) : 'not exercised'} | ${valid ? money(c.cost_usd / valid) : '–'} | ${c.pass ? money(c.cost_usd / c.pass) : '–'} | ${c.sessions ? Math.round(c.wall_seconds / c.sessions) : '–'} | ${valid ? (c.wall_seconds / 60 / valid).toFixed(1) : '–'} | ${c.pass ? (c.wall_seconds / 60 / c.pass).toFixed(1) : '–'} |`);
  }
  L.push('');
  L.push('Cost is the agent sessions only (Claude Code\'s reported cost, subagents included); the judge is in the next table. Cost per preserved intent is the agent cost of all valid arcs divided by the passing arcs: the expected spend to get one task done when a failed arc is rerun until it passes. Wall time is the time the agent sessions ran (setup, tests and judging excluded); per passing arc it is the same expected figure in minutes. Agent spend on invalid or unfinished arcs is in neither and is listed below.');
  L.push('');
  L.push('## Tokens and spend per arc, by arm');
  L.push('');
  L.push('Averages per valid arc, all sessions and subagents. Input is uncached input; cache write and cache read are prompt-cache tokens (Claude Code writes the cache with the one-hour TTL, billed at twice the input rate; reads at a tenth of it).');
  L.push('');
  L.push('| Arm | Sessions | Input | Cache write | Cache read | Output | Agent cost per arc | Judge cost per arc | Agent total | Judge total | Agent spend on invalid arcs | Sessions with estimated cost |');
  L.push('|---|---|---|---|---|---|---|---|---|---|---|---|');
  for (const arm of arms) {
    const c = cells.get(`all\u0000${arm}`); if (!c) continue;
    const valid = c.arcs - c.invalid;
    const per = (x: number) => (valid ? Math.round(x / valid).toLocaleString('en-US') : '–');
    L.push(`| ${arm} | ${c.sessions} | ${per(c.input)} | ${per(c.cache_write)} | ${per(c.cache_read)} | ${per(c.output)} | ${valid ? money(c.cost_usd / valid) : '–'} | ${valid ? money(c.judge_usd / valid) : '–'} | ${money(c.cost_usd)} | ${money(c.judge_usd)} | ${money(c.invalid_usd)} | ${c.estimated_sessions} |`);
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
  L.push('| Arc | Family | Arm | Session outcomes | Lookup → first edit (turns) | Agent cost |');
  L.push('|---|---|---|---|---|---|');
  for (const r of runs.slice().sort((a, b) => a.spec.arc.localeCompare(b.spec.arc) || a.spec.arm.localeCompare(b.spec.arm) || a.spec.attempt - b.spec.attempt)) {
    const outs = r.steps.map((s) => `${s.id}:${s.grade?.outcome ?? '?'}${s.commit_gate?.blocked ? '⛔' : ''}`).join(' ');
    const look = r.steps.map((s) => `${s.first_lookup_turn ?? '–'}→${s.first_edit_turn ?? '–'}`).join(', ');
    L.push(`| ${r.spec.arc} | ${r.spec.family} | ${r.spec.arm} | ${outs}${r.pass ? ' ✓' : ''} | ${look} | $${agentCost(r).toFixed(2)} |`);
  }
  L.push('');
  L.push('Outcome classes: S surfaced the decision and stopped · D changed the decision explicitly · C done correctly · V silent violation · N surfaced but broke · Q asked without surfacing · I invented · F not done or tests fail · L applied a decision from another branch. ⛔ the arm\'s commit gate refused the session\'s commit.');
  return L.join('\n');
}
