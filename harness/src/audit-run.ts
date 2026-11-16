// Runs the equivalence audit outside an arc run: for each base commit the arcs start from and
// each arm, check the project out, run the project's arm preparation and the arm's setup (the
// same scripts an arc run uses; the project's install and build are skipped, nothing is tested),
// and audit the container for every arc on that base. Then compare the arms with each other.
// No model is called.
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { NO_STORE_ARMS, auditContainer, auditSummary, crossArmMismatches } from './audit.ts';
import { RUNS_DIR, listArms, loadArcs, loadProject } from './config.ts';
import type { Arc, AuditResult } from './types.ts';
import { prepareWorkspace, workspaceDir } from './workspace.ts';

export interface ArcAudit { project: string; arc: string; base_commit: string; ok: boolean; arms: AuditResult[]; errors: string[] }

export interface AuditOptions { projects: string[]; arcs?: string[]; arms?: string[]; keep?: boolean; log: (s: string) => void }

export function runAudit(opts: AuditOptions): ArcAudit[] {
  const out: ArcAudit[] = [];
  const arms = (opts.arms ?? listArms()).filter((a) => !NO_STORE_ARMS.has(a)).sort();
  for (const p of opts.projects) {
    const project = loadProject(p);
    const arcs = loadArcs(p).filter((a) => !opts.arcs || opts.arcs.includes(a.id));
    const byBase = new Map<string, Arc[]>();
    const key = (a: Arc) => `${a.base_commit}\t${a.base_patch ?? ''}`;
    for (const a of arcs) byBase.set(key(a), [...(byBase.get(key(a)) ?? []), a]);
    for (const [k, group] of byBase) {
      const [base, patch] = k.split('\t');
      const results = new Map<string, ArcAudit>(group.map((a) => [a.id, { project: p, arc: a.id, base_commit: base, ok: true, arms: [], errors: [] }]));
      for (const arm of arms) {
        // One directory per project and arm, so what an arm installs beside the workspace (the Kibi packages) is reused across bases.
        const dir = join(RUNS_DIR, '_audit', p, arm);
        mkdirSync(dir, { recursive: true });
        try {
          prepareWorkspace(dir, project, { base_commit: base, base_patch: patch || undefined }, arm, (s) => opts.log(`${p}@${base.slice(0, 12)}/${arm}: ${s}`), { rules: 'none', convention: true, skipInstall: true });
          for (const a of group) results.get(a.id)!.arms.push(auditContainer(a, arm, workspaceDir(dir), dir));
        } catch (e) {
          const msg = `${arm}: setup failed, container not audited: ${(e as Error).message.split('\n')[0].slice(0, 400)}`;
          for (const a of group) results.get(a.id)!.errors.push(msg);
        } finally {
          if (!opts.keep) rmSync(workspaceDir(dir), { recursive: true, force: true });
        }
      }
      for (const r of results.values()) {
        r.errors.push(...crossArmMismatches(r.arms));
        r.ok = r.errors.length === 0 && r.arms.every((a) => a.ok);
        out.push(r);
      }
    }
    mkdirSync(join(RUNS_DIR, p), { recursive: true });
    writeFileSync(join(RUNS_DIR, p, 'audit.json'), JSON.stringify(out.filter((r) => r.project === p), null, 2));
  }
  return out;
}

export function renderAudit(results: ArcAudit[]): string {
  const L: string[] = [];
  for (const r of results) {
    L.push(`${r.ok ? 'ok  ' : 'FAIL'} ${r.project}/${r.arc} @ ${r.base_commit.slice(0, 12)}`);
    // One line per distinct finding, with the arms that share it.
    const lines = new Map<string, string[]>();
    for (const a of r.arms) for (const line of auditSummary(a)) {
      if (r.ok && !/\[|stated by the user/.test(line)) continue;
      const rest = line.slice(a.arm.length + 2);
      lines.set(rest, [...(lines.get(rest) ?? []), a.arm]);
    }
    for (const [rest, arms] of lines) L.push(`       ${arms.join(', ')}: ${rest}`);
    for (const e of r.errors) L.push(`       ${e}`);
  }
  const failed = results.filter((r) => !r.ok).length;
  L.push(`audit: ${results.length - failed}/${results.length} arcs pass${failed ? `; ${failed} cannot be scored` : ''}`);
  return L.join('\n');
}
