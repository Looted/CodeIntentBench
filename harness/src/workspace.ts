import { existsSync, mkdirSync, rmSync, writeFileSync, readFileSync, copyFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { isAbsolute, join, relative, resolve, sep } from 'node:path';
import { ARMS_DIR, CACHE_DIR, PROJECTS_DIR, RUNS_DIR, loadRules } from './config.ts';
import { must, sh } from './shell.ts';
import type { ArmHost, ProjectConfig, Rule, RunSpec, Task } from './types.ts';

export const BASE_BRANCH = 'main';

/** A neutral developer identity: the agent can read `git log`, and the name must not say it is in a benchmark. */
export const GIT_IDENTITY = {
  GIT_AUTHOR_NAME: 'Alex Morgan',
  GIT_AUTHOR_EMAIL: 'alex.morgan@example.com',
  GIT_COMMITTER_NAME: 'Alex Morgan',
  GIT_COMMITTER_EMAIL: 'alex.morgan@example.com',
};

export function runDir(spec: RunSpec, id: string): string {
  return join(RUNS_DIR, spec.project, spec.task, spec.arm, id);
}

/**
 * Where a run's workspace lives. Not inside the run dir: that path names the arc and the arm
 * (runs/<project>/_arcs/<arc>/<arm>/<id>), and the agent sees its working directory. The workspace is
 * `<runs>/_w/<hash of the run dir>/<project>`, the way a checkout of the project would be named.
 * The run dir's `workspace.txt` points at it.
 */
export function workspaceDir(dir: string): string {
  const abs = resolve(dir);
  const rel = relative(RUNS_DIR, abs);
  const project = rel && !rel.startsWith('..') && !isAbsolute(rel) ? rel.split(sep)[0] : 'project';
  return join(RUNS_DIR, '_w', createHash('sha1').update(abs).digest('hex').slice(0, 12), project);
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

/** The name a base is stored under (the knowledge base of an arm is keyed by it): the commit's first 12 characters, plus the patch's file name. */
export function baseKey(task: Pick<Task, 'base_commit' | 'base_patch'>, fallback = ''): string {
  const commit = (task.base_commit ?? fallback).slice(0, 12);
  if (!task.base_patch) return commit;
  return `${commit}-${task.base_patch.split('/').pop()!.replace(/\.(patch|diff)$/, '')}`;
}

export function baseCommit(project: ProjectConfig, task: Task): string {
  return task.base_commit ?? project.commit;
}

/**
 * Create the agent's workspace: the project at the task's base commit, built,
 * with the arm applied and everything committed on `main` (BASE_BRANCH) so the agent's
 * own changes are exactly `git diff main`.
 */
export interface PrepareOptions {
  /** `applicable` (default): the project's rules whose scope exists at the commit. `none`: no rules (arcs). */
  rules?: 'applicable' | 'none';
  /** Append the arm's `convention.md` to CLAUDE.md (arcs: the one sentence that says where decisions live). */
  convention?: boolean;
  /** Skip the project's install and build: enough to inspect what an arm's setup puts in its container (the audit), not to run tests. */
  skipInstall?: boolean;
}

/** The project's `env` expanded for one run directory. */
export function projectEnv(project: ProjectConfig, dir: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(project.env ?? {})) out[k] = v.replaceAll('${RUN_DIR}', dir).replaceAll('${WORKSPACE}', workspaceDir(dir)).replaceAll('${CACHE_DIR}', CACHE_DIR);
  return out;
}

export function prepareWorkspace(dir: string, project: ProjectConfig, task: Pick<Task, 'base_commit' | 'base_patch' | 'source'>, arm: string, log: (s: string) => void, opts: PrepareOptions = {}): { base: string; rules: Rule[] } {
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
  if (task.base_patch) {
    const patch = join(PROJECTS_DIR, project.name, task.base_patch);
    log(`base patch: ${task.base_patch}`);
    git(`apply --whitespace=nowarn ${JSON.stringify(patch)}`);
    // One commit with the patched tree and nothing else: no project history, branches or tags to read the patch or the decisions back from.
    git('checkout --quiet --orphan scratch-orphan');
    git('add -A');
    git('commit --quiet --no-verify -m "Initial commit"');
    git(`branch --quiet -M scratch-orphan ${BASE_BRANCH}`);
    const refs = git(`for-each-ref '--format=%(refname)'`).split('\n').map((r) => r.trim()).filter((r) => r && r !== `refs/heads/${BASE_BRANCH}`);
    for (const r of refs) git(`update-ref -d ${JSON.stringify(r)}`);
    git('reflog expire --expire=now --all');
  }
  // Hooks the project installs on `prepare` (husky, lefthook) would interfere with grading commits.
  sh(`git -C ${JSON.stringify(ws)} config core.hooksPath /dev/null`, { quiet: true });

  if (!opts.skipInstall) {
    log(`install: ${project.setup.install}`);
    must(project.setup.install, { cwd: ws });
  }
  if (project.setup.build && !opts.skipInstall) {
    log(`build: ${project.setup.build}`);
    must(project.setup.build, { cwd: ws });
  }
  sh(`git -C ${JSON.stringify(ws)} config core.hooksPath ""`, { quiet: true });
  sh(`git -C ${JSON.stringify(ws)} config --unset core.hooksPath`, { quiet: true });

  // A task may start from an older commit than the project's pin. Only rules whose
  // scope exists at that commit are part of the rule set the arm delivers; the same
  // subset is what grading uses. Every arm receives the same files.
  const rulesDir = join(dir, 'rules');
  // `CIB_MODE` tells the project's arm_prepare and the arm setup whether this is a rule-mode task or an arc.
  const mode = opts.rules === 'none' ? 'arc' : 'task';
  let rules: Rule[] = [];
  if (opts.rules === 'none') { rmSync(rulesDir, { recursive: true, force: true }); mkdirSync(rulesDir, { recursive: true }); }
  else rules = writeApplicableRules(ws, project, rulesDir, log);
  if (project.setup.arm_prepare) {
    const script = join(PROJECTS_DIR, project.name, project.setup.arm_prepare);
    log(`arm prepare: ${project.setup.arm_prepare} (${arm})`);
    must(`${JSON.stringify(script)} ${JSON.stringify(ws)} ${JSON.stringify(arm)} ${JSON.stringify(rulesDir)} ${JSON.stringify(dir)}`, {
      cwd: ws,
      env: { ...process.env, ...GIT_IDENTITY, CIB_RUN_DIR: dir, CIB_WORKSPACE: ws, CIB_RULES_DIR: rulesDir, CIB_PROJECT: project.name, CIB_CACHE_DIR: CACHE_DIR, CIB_MODE: mode, CIB_BASE_COMMIT: base, CIB_BASE_KEY: baseKey({ base_commit: base, base_patch: task.base_patch }) },
    });
  }
  const setup = join(ARMS_DIR, arm, 'setup');
  if (existsSync(setup)) {
    log(`arm setup: ${arm}`);
    must(`${JSON.stringify(setup)} ${JSON.stringify(ws)} ${JSON.stringify(rulesDir)} ${JSON.stringify(dir)}`, {
      cwd: ws,
      env: { ...process.env, ...GIT_IDENTITY, CIB_RUN_DIR: dir, CIB_WORKSPACE: ws, CIB_RULES_DIR: rulesDir, CIB_PROJECT: project.name, CIB_CACHE_DIR: CACHE_DIR, CIB_MODE: mode, CIB_BASE_COMMIT: base, CIB_BASE_KEY: baseKey({ base_commit: base, base_patch: task.base_patch }) },
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
  if (dirty) git(`commit --quiet --no-verify -m "Set up project tooling"`);
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
