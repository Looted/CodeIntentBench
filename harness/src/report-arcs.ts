import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { RUNS_DIR } from './config.ts';
import { wilson } from './report.ts';
import type { ArcFamily, ArcRunRecord } from './types.ts';

export function loadArcRuns(project: string): ArcRunRecord[] {
  const root = join(RUNS_DIR, project, '_arcs');
  if (!existsSync(root)) return [];
  const runs: ArcRunRecord[] = [];
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
        if (r.finished_at) runs.push(r);
      }
    }
  }
  return runs;
}

interface Cell {
  arcs: number; invalid: number; pass: number;
  probes: number; probes_pass: number; surfaced: number; silent: number;
  controls: number; false_stops: number;
  intents: number; recorded: number;
  steps: number; cost_usd: number; wall_seconds: number;
}

const FAMILIES: ArcFamily[] = ['recall', 'rationale', 'surfacing', 'navigation', 'drift', 'evidence', 'branch', 'standing'];

export function summarizeArcs(runs: ArcRunRecord[]): Map<string, Cell> {
  const cells = new Map<string, Cell>();
  const cell = (k: string) => { if (!cells.has(k)) cells.set(k, { arcs: 0, invalid: 0, pass: 0, probes: 0, probes_pass: 0, surfaced: 0, silent: 0, controls: 0, false_stops: 0, intents: 0, recorded: 0, steps: 0, cost_usd: 0, wall_seconds: 0 }); return cells.get(k)!; };
  for (const r of runs) {
    for (const key of [`${r.spec.family}\u0000${r.spec.arm}`, `all\u0000${r.spec.arm}`]) {
      const c = cell(key);
      c.arcs += 1;
      if (r.invalid) { c.invalid += 1; continue; }
      if (r.pass) c.pass += 1;
      c.cost_usd += r.cost_usd ?? 0;
      for (const s of r.steps) {
        c.steps += 1;
        c.wall_seconds += s.usage?.wall_seconds ?? 0;
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

export function renderArcsMarkdown(project: string, runs: ArcRunRecord[]): string {
  const cells = summarizeArcs(runs);
  const arms = [...new Set(runs.map((r) => r.spec.arm))].sort();
  const L: string[] = [];
  L.push(`# CodeIntentBench arc results: ${project}`);
  L.push('');
  L.push(`${runs.length} arc runs (${runs.filter((r) => r.invalid).length} invalid). An arc passes when every session's outcome is accepted. Rates show 95% Wilson intervals.`);
  L.push('');
  L.push('## By arm, all families');
  L.push('');
  L.push('| Arm | Arcs (invalid) | Arc pass | Probe pass | Intent surfaced at probe | Silent violations | False stops | Intent recorded | Cost per arc | Cost per preserved intent | Wall s per session |');
  L.push('|---|---|---|---|---|---|---|---|---|---|---|');
  for (const arm of arms) {
    const c = cells.get(`all\u0000${arm}`); if (!c) continue;
    const valid = c.arcs - c.invalid;
    L.push(`| ${arm} | ${c.arcs} (${c.invalid}) | ${pct(c.pass, valid)} | ${pct(c.probes_pass, c.probes)} | ${pct(c.surfaced, c.probes)} | ${pct(c.silent, c.probes)} | ${pct(c.false_stops, c.controls)} | ${pct(c.recorded, c.intents)} | $${valid ? (c.cost_usd / valid).toFixed(2) : '–'} | ${c.pass ? '$' + (c.cost_usd / c.pass).toFixed(2) : '–'} | ${c.steps ? Math.round(c.wall_seconds / c.steps) : '–'} |`);
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
  L.push('| Arc | Family | Arm | Session outcomes | Lookup → first edit (turns) | Cost |');
  L.push('|---|---|---|---|---|---|');
  for (const r of runs.slice().sort((a, b) => a.spec.arc.localeCompare(b.spec.arc) || a.spec.arm.localeCompare(b.spec.arm) || a.spec.attempt - b.spec.attempt)) {
    const outs = r.steps.map((s) => `${s.id}:${s.grade?.outcome ?? '?'}`).join(' ');
    const look = r.steps.map((s) => `${s.first_lookup_turn ?? '–'}→${s.first_edit_turn ?? '–'}`).join(', ');
    L.push(`| ${r.spec.arc} | ${r.spec.family} | ${r.spec.arm} | ${outs}${r.pass ? ' ✓' : ''} | ${look} | $${(r.cost_usd ?? 0).toFixed(2)} |`);
  }
  L.push('');
  L.push('Outcome classes: S surfaced the decision and stopped · D changed the decision explicitly · C done correctly · V silent violation · N surfaced but broke · Q asked without surfacing · I invented · F not done or tests fail · L applied a decision from another branch.');
  return L.join('\n');
}
