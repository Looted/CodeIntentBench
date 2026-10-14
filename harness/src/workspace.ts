import { existsSync, mkdirSync, rmSync, writeFileSync, readFileSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { ARMS_DIR, CACHE_DIR, PROJECTS_DIR, RUNS_DIR, loadRules } from './config.ts';
import { must, sh } from './shell.ts';
import type { ArmHost, ProjectConfig, Rule, RunSpec, Task } from './types.ts';

export const BASE_BRANCH = 'cib-base';

export const GIT_IDENTITY = {
  GIT_AUTHOR_NAME: 'CodeIntentBench',
  GIT_AUTHOR_EMAIL: 'bench@codeintentbench.invalid',
  GIT_COMMITTER_NAME: 'CodeIntentBench',
  GIT_COMMITTER_EMAIL: 'bench@codeintentbench.invalid',
};

export function runDir(spec: RunSpec, id: string): string {
  return join(RUNS_DIR, spec.project, spec.task, spec.arm, id);
}

export function workspaceDir(dir: string): string {
  return join(dir, 'workspace');
}

/** A bare mirror of the project repository, fetched once and reused by every run. */
export function ensureMirror(project: ProjectConfig, commits: string[]): string {
  const mirror = join(CACHE_DIR, 'repos', `${project.name}.git`);
  if (!existsSync(mirror)) {
    mkdirSync(join(CACHE_DIR, 'repos'), { recursive: true });
    must(`git clone --quiet --mirror ${JSON.stringify(project.repository)} ${JSON.stringify(mirror)}`);
  }
  const missing = commits.filter((c) => sh(`git -C ${JSON.stringify(mirror)} cat-file -e ${c}^{commit}`, { quiet: true }).code !== 0);
  if (missing.length > 0) must(`git -C ${JSON.stringify(mirror)} fetch --quiet origin`);
  for (const c of commits) must(`git -C ${JSON.stringify(mirror)} cat-file -e ${c}^{commit}`);
  return mirror;
}

export function baseCommit(project: ProjectConfig, task: Task): string {
  return task.base_commit ?? project.commit;
}

/**
 * Create the agent's workspace: the project at the task's base commit, built,
 * with the arm applied and everything committed on `cib-base` so the agent's
 * own changes are exactly `git diff cib-base`.
 */
export interface PrepareOptions {
  /** `applicable` (default): the project's rules whose scope exists at the commit. `none`: no rules (arcs). */
  rules?: 'applicable' | 'none';
  /** Append the arm's `convention.md` to CLAUDE.md (arcs: the one sentence that says where decisions live). */
  convention?: boolean;
}

/** The project's `env` expanded for one run directory. */
export function projectEnv(project: ProjectConfig, dir: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(project.env ?? {})) out[k] = v.replaceAll('${RUN_DIR}', dir).replaceAll('${WORKSPACE}', workspaceDir(dir));
  return out;
}

export function prepareWorkspace(dir: string, project: ProjectConfig, task: Pick<Task, 'base_commit' | 'source'>, arm: string, log: (s: string) => void, opts: PrepareOptions = {}): { base: string; rules: Rule[] } {
  const ws = workspaceDir(dir);
  // The project's environment applies to this process from here on: setup, the arm scripts, grading and the agent all inherit it.
  Object.assign(process.env, projectEnv(project, dir));
  const base = task.base_commit ?? project.commit;
  const mirror = ensureMirror(project, [base, ...(task.source?.commit ? [task.source.commit] : [])]);
  if (existsSync(ws)) rmSync(ws, { recursive: true, force: true });
  mkdirSync(dir, { recursive: true });

  log(`checkout ${project.name}@${base.slice(0, 12)}`);
  must(`git clone --quiet --shared --no-checkout ${JSON.stringify(mirror)} ${JSON.stringify(ws)}`);
  const git = (cmd: string) => must(`git -C ${JSON.stringify(ws)} ${cmd}`, { env: { ...process.env, ...GIT_IDENTITY } });
  git(`checkout --quiet -B ${BASE_BRANCH} ${base}`);
  // The agent must not learn anything from the project's own history or remotes.
  git('remote remove origin');
  // Hooks the project installs on `prepare` (husky, lefthook) would interfere with grading commits.
  sh(`git -C ${JSON.stringify(ws)} config core.hooksPath /dev/null`, { quiet: true });

  log(`install: ${project.setup.install}`);
  must(project.setup.install, { cwd: ws });
  if (project.setup.build) {
    log(`build: ${project.setup.build}`);
    must(project.setup.build, { cwd: ws });
  }
  sh(`git -C ${JSON.stringify(ws)} config core.hooksPath ""`, { quiet: true });
  sh(`git -C ${JSON.stringify(ws)} config --unset core.hooksPath`, { quiet: true });

  // A task may start from an older commit than the project's pin. Only rules whose
  // scope exists at that commit are part of the rule set the arm delivers; the same
  // subset is what grading uses. Every arm receives the same files.
  const rulesDir = join(dir, 'rules');
  let rules: Rule[] = [];
  if (opts.rules === 'none') { rmSync(rulesDir, { recursive: true, force: true }); mkdirSync(rulesDir, { recursive: true }); }
  else rules = writeApplicableRules(ws, project, rulesDir, log);
  if (project.setup.arm_prepare) {
    const script = join(PROJECTS_DIR, project.name, project.setup.arm_prepare);
    log(`arm prepare: ${project.setup.arm_prepare} (${arm})`);
    must(`${JSON.stringify(script)} ${JSON.stringify(ws)} ${JSON.stringify(arm)} ${JSON.stringify(rulesDir)} ${JSON.stringify(dir)}`, {
      cwd: ws,
      env: { ...process.env, ...GIT_IDENTITY, CIB_RUN_DIR: dir, CIB_WORKSPACE: ws, CIB_RULES_DIR: rulesDir, CIB_PROJECT: project.name },
    });
  }
  const setup = join(ARMS_DIR, arm, 'setup');
  if (existsSync(setup)) {
    log(`arm setup: ${arm}`);
    must(`${JSON.stringify(setup)} ${JSON.stringify(ws)} ${JSON.stringify(rulesDir)} ${JSON.stringify(dir)}`, {
      cwd: ws,
      env: { ...process.env, ...GIT_IDENTITY, CIB_RUN_DIR: dir, CIB_WORKSPACE: ws, CIB_RULES_DIR: rulesDir, CIB_PROJECT: project.name },
    });
  }

  if (opts.convention) {
    const conv = join(ARMS_DIR, arm, 'convention.md');
    if (existsSync(conv)) {
      const claude = join(ws, 'CLAUDE.md');
      const existing = existsSync(claude) ? readFileSync(claude, 'utf8').trimEnd() + '\n\n' : '';
      writeFileSync(claude, existing + readFileSync(conv, 'utf8').trim() + '\n');
      log(`convention: ${arm}`);
    }
  }

  // Lock files and generated artifacts the install produced are part of the base state.
  git('add -A');
  const dirty = sh(`git -C ${JSON.stringify(ws)} diff --cached --quiet`, { quiet: true }).code !== 0;
  if (dirty) git(`commit --quiet --no-verify -m "benchmark base"`);
  const sha = git('rev-parse HEAD').trim();
  writeFileSync(join(dir, 'base.txt'), sha + '\n');
  return { base: sha, rules };
}

export function writeApplicableRules(ws: string, project: ProjectConfig, rulesDir: string, log: (s: string) => void): Rule[] {
  rmSync(rulesDir, { recursive: true, force: true });
  mkdirSync(rulesDir, { recursive: true });
  const all = loadRules(project.name);
  const kept: Rule[] = [];
  for (const rule of all) {
    const missing = rule.scope.paths.filter((p) => !existsSync(join(ws, p)));
    if (missing.length > 0) { log(`rule ${rule.id} not applicable at this commit (missing ${missing.join(', ')})`); continue; }
    copyFileSync(join(PROJECTS_DIR, project.name, 'rules', `${rule.id}.yaml`), join(rulesDir, `${rule.id}.yaml`));
    kept.push(rule);
  }
  log(`rules applicable: ${kept.length}/${all.length}`);
  return kept;
}

export function loadArmHost(arm: string): ArmHost {
  const path = join(ARMS_DIR, arm, 'host.json');
  if (!existsSync(path)) return {};
  return JSON.parse(readFileSync(path, 'utf8')) as ArmHost;
}

/** `${RUN_DIR}`, `${ARM_DIR}` and `${WORKSPACE}` in host.json values. */
export function expandHostValue(value: string, dir: string, arm: string): string {
  return value
    .replaceAll('${RUN_DIR}', dir)
    .replaceAll('${ARM_DIR}', join(ARMS_DIR, arm))
    .replaceAll('${WORKSPACE}', workspaceDir(dir));
}
