import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, join, relative } from 'node:path';
import { ARMS_DIR } from './config.ts';
import { judgeRun, type JudgeVerdict } from './judge.ts';
import { must, sh } from './shell.ts';
import type { AgentConfig, Grade, OutcomeClass, ProjectConfig, Rule, Task, TestOutcome } from './types.ts';
import type { AgentResult } from './agent.ts';
import { BASE_BRANCH, GIT_IDENTITY, workspaceDir } from './workspace.ts';

export const RULE_RECORD_PATHS: Record<string, RegExp> = {
  kibi: /^\.kb\//,
  'kibi-conv': /^\.kb\//,
  'agents-md': /^(AGENTS|CLAUDE)\.md$/,
  docs: /^docs\/decisions\//,
};

export const NON_SOURCE = /(\.test\.ts$|\.spec\.ts$|^\.kb\/|^(AGENTS|CLAUDE)\.md$|^docs\/|pnpm-lock\.yaml$|package-lock\.json$|yarn\.lock$|^\.claude\/)/;

export interface GradeInputs {
  dir: string;
  project: ProjectConfig;
  task: Task;
  rules: Rule[];
  arm: string;
  agent: AgentResult;
  judgeModel: string;
  skipJudge?: boolean;
}

function q(s: string): string {
  return JSON.stringify(s);
}

/** Paths in tasks and rules may be written relative to the repo root or to tests.cwd. */
export function splitTestRef(ref: string): { file: string; name?: string } {
  const [file, name] = ref.split('::');
  return { file, name };
}
export function toRepoRel(project: ProjectConfig, file: string): string {
  const cwd = project.tests.cwd?.replace(/\/$/, '');
  if (!cwd) return file;
  return file.startsWith(cwd + '/') ? file : `${cwd}/${file}`;
}
function toCwdRel(project: ProjectConfig, file: string): string {
  const cwd = project.tests.cwd?.replace(/\/$/, '');
  if (!cwd) return file;
  return file.startsWith(cwd + '/') ? file.slice(cwd.length + 1) : file;
}

export function changedFiles(ws: string, ref: string = BASE_BRANCH): string[] {
  must(`git -C ${q(ws)} add -A -N`, { env: { ...process.env, ...GIT_IDENTITY } });
  const out = sh(`git -C ${q(ws)} diff --name-only ${ref}`, { quiet: true }).stdout;
  return out.split('\n').map((s) => s.trim()).filter(Boolean);
}

/**
 * Put every hidden test file back to its pinned content: existing files from
 * the base commit, files that a history task introduced from its source commit.
 */
/** Repo-relative paths of every hidden test file, split by where its pinned content comes from. */
function hiddenTestFiles(project: ProjectConfig, task: Task, rules: Rule[]): { fromSource: Set<string>; fromBase: Set<string> } {
  const fromSource = new Set<string>();
  for (const ref of task.grading.task_tests ?? []) fromSource.add(toRepoRel(project, splitTestRef(ref).file));
  const fromBase = new Set<string>();
  for (const ref of task.grading.rule_tests ?? []) fromBase.add(toRepoRel(project, splitTestRef(ref).file));
  for (const id of task.governing_rules ?? []) {
    const rule = rules.find((r) => r.id === id);
    for (const ref of rule?.tests ?? []) fromBase.add(toRepoRel(project, splitTestRef(ref).file));
  }
  return { fromSource, fromBase };
}

function restoreHiddenTests(ws: string, project: ProjectConfig, task: Task, rules: Rule[], notes: string[]): void {
  const { fromSource, fromBase } = hiddenTestFiles(project, task, rules);
  const env = { ...process.env, ...GIT_IDENTITY };
  for (const file of fromSource) {
    const src = task.source?.commit ?? BASE_BRANCH;
    const r = sh(`git -C ${q(ws)} show ${src}:${q(file)}`, { quiet: true, env });
    if (r.code !== 0) { notes.push(`hidden test ${file} not found at ${src}`); continue; }
    mkdirSync(dirname(join(ws, file)), { recursive: true });
    writeFileSync(join(ws, file), r.stdout);
  }
  for (const file of fromBase) {
    if (fromSource.has(file)) continue;
    const r = sh(`git -C ${q(ws)} checkout ${BASE_BRANCH} -- ${q(file)}`, { quiet: true, env });
    if (r.code !== 0) notes.push(`hidden test ${file} not found at base`);
  }
}

interface VitestJson {
  numTotalTests: number;
  numPassedTests: number;
  numFailedTests: number;
  success: boolean;
  testResults: Array<{ name: string; status: string; message?: string; assertionResults: Array<{ fullName: string; title: string; status: string }> }>;
}

export function runVitest(ws: string, project: ProjectConfig, dir: string, label: string, refs: string[] | 'all'): TestOutcome {
  const cwd = join(ws, project.tests.cwd ?? '.');
  const report = join(dir, `tests-${label}.json`);
  const files = refs === 'all' ? [] : [...new Set(refs.map((r) => toCwdRel(project, splitTestRef(r).file)))];
  const base = refs === 'all' ? project.tests.all : project.tests.files;
  const command = `${base} --reporter=json --outputFile=${q(report)} ${files.map(q).join(' ')}`.trim();
  const r = sh(command, { cwd, quiet: true, timeoutMs: 30 * 60_000 });
  const outcome: TestOutcome = { command, passed: false, failed_tests: [], passed_count: 0, failed_count: 0, duration_ms: r.duration_ms };
  if (!existsSync(report)) {
    outcome.error = `no JSON report (exit ${r.code}): ${r.stderr.slice(-1500)}`;
    return outcome;
  }
  const json = JSON.parse(readFileSync(report, 'utf8')) as VitestJson;
  outcome.passed_count = json.numPassedTests;
  outcome.failed_count = json.numFailedTests;
  const wanted = refs === 'all' ? [] : refs.map(splitTestRef).filter((x) => x.name);
  const ignore = (project.tests.ignore ?? []).map(splitTestRef);
  const ignored = (file: string, t: { fullName: string; title: string }) => ignore.some((i) => i.name && (file.endsWith(toCwdRel(project, i.file)) || file.endsWith(i.file)) && (t.fullName.includes(i.name) || t.title === i.name));
  for (const file of json.testResults) {
    if (file.status !== 'passed' && file.assertionResults.length === 0) outcome.failed_tests.push(`${file.name}: ${file.message?.slice(0, 300) ?? file.status}`);
    for (const t of file.assertionResults) {
      if (t.status !== 'failed') continue;
      if (ignored(file.name, t)) { (outcome.ignored ??= []).push(`${file.name} :: ${t.fullName}`); outcome.failed_count = Math.max(0, outcome.failed_count - 1); continue; }
      outcome.failed_tests.push(`${file.name} :: ${t.fullName}`);
    }
  }
  // A named test that did not run (removed, renamed, file broken) counts as failed.
  for (const w of wanted) {
    const file = json.testResults.find((f) => f.name.endsWith(toCwdRel(project, w.file)) || f.name.endsWith(w.file));
    const found = file?.assertionResults.find((t) => t.fullName.includes(w.name!) || t.title === w.name);
    if (!found) outcome.failed_tests.push(`${w.file} :: ${w.name} (not found in report)`);
    else if (found.status !== 'passed') { /* already recorded */ }
  }
  outcome.passed = outcome.failed_tests.length === 0 && json.numTotalTests > 0;
  if (json.numTotalTests === 0) outcome.error = 'no tests ran';
  return outcome;
}

/**
 * The regression suite with one retry: when a full run fails, the failing files
 * are re-run alone once. A test that passes on the retry is recorded under
 * `flaked` and does not fail the step; a test that fails twice does. This
 * absorbs load-dependent timeouts in the project's own suite (several graders
 * run on one machine) without hiding a real regression.
 */
export function runRegression(ws: string, project: ProjectConfig, dir: string, refs: string[] | 'all'): TestOutcome {
  const first = runVitest(ws, project, dir, 'regression', refs);
  if (first.passed || first.failed_tests.length === 0) return first;
  const cwd = join(ws, project.tests.cwd ?? '.');
  const files = [...new Set(first.failed_tests.map((t) => t.split(' :: ')[0].split(': ')[0]).filter((f) => f.endsWith('.ts') || f.endsWith('.js')).map((f) => isAbsolute(f) ? relative(cwd, f) : f))];
  if (files.length === 0 || files.length > 5) return first;
  const retry = runVitest(ws, project, dir, 'regression-retry', files);
  if (!retry.passed) { first.failed_tests = retry.failed_tests.length ? retry.failed_tests : first.failed_tests; return first; }
  return { ...first, passed: true, failed_tests: [], failed_count: 0, flaked: first.failed_tests, duration_ms: first.duration_ms + retry.duration_ms };
}

export async function gradeRun(inp: GradeInputs): Promise<Grade> {
  const { dir, project, task, rules, arm, agent } = inp;
  const ws = workspaceDir(dir);
  const notes: string[] = [];
  const grade: Grade = { invalid: false, rule_record_changed: false, files_changed: [], source_files_changed: [], outcome: 'INVALID', pass: false, notes };

  // Hidden test files are restored by the grader, so their state is not the agent's
  // work (and a re-grade must see the same picture as the first grade).
  const hidden = hiddenTestFiles(project, task, rules);
  const isHidden = (f: string) => hidden.fromSource.has(f) || hidden.fromBase.has(f);
  const changed = changedFiles(ws).filter((f) => !isHidden(f));
  const diff = sh(`git -C ${q(ws)} diff ${BASE_BRANCH} -- . ${[...hidden.fromSource, ...hidden.fromBase].map((f) => q(`:(exclude)${f}`)).join(' ')}`, { quiet: true }).stdout;
  writeFileSync(join(dir, 'diff.patch'), diff);
  grade.files_changed = changed;
  grade.rule_record_changed = changed.some((f) => RULE_RECORD_PATHS[arm]?.test(f));
  grade.source_files_changed = changed.filter((f) => !NON_SOURCE.test(f));

  const noAnswer = !agent.final_answer?.trim();
  if (agent.timed_out && changed.length === 0 && noAnswer) {
    grade.invalid = true; grade.invalid_reason = 'timed out before any output';
  } else if (agent.code !== 0 && agent.usage.turns === 0) {
    grade.invalid = true; grade.invalid_reason = `agent exited ${agent.code} before its first turn`;
  } else if (/^kibi/.test(arm) && !agent.tools_available.some((t) => /kb_/.test(t))) {
    grade.invalid = true; grade.invalid_reason = 'kibi arm without kb_* tools in the session';
  }
  if (grade.invalid) { grade.outcome = 'INVALID'; return grade; }

  restoreHiddenTests(ws, project, task, rules, notes);

  const ruleRefs = [...(task.grading.rule_tests ?? [])];
  for (const id of task.governing_rules ?? []) {
    const rule = rules.find((r) => r.id === id);
    if (!rule) notes.push(`governing rule ${id} not found`);
    for (const t of rule?.tests ?? []) if (!ruleRefs.includes(t)) ruleRefs.push(t);
  }
  if (ruleRefs.length > 0) grade.rule_tests = runVitest(ws, project, dir, 'rule', ruleRefs);
  if (task.grading.task_tests?.length) grade.task_tests = runVitest(ws, project, dir, 'task', task.grading.task_tests);
  const regression = task.grading.regression_tests;
  if (regression === undefined || regression.length > 0) {
    grade.regression_tests = regression && regression.length > 0 && !regression.includes('all')
      ? runRegression(ws, project, dir, regression)
      : runRegression(ws, project, dir, 'all');
  }

  let verdict: JudgeVerdict | undefined;
  if (!inp.skipJudge) {
    verdict = await judgeRun({ dir, task, rules, arm, agent, diff, model: inp.judgeModel, ruleRecordChanged: grade.rule_record_changed });
    grade.judge = { answers: verdict.answers, model: inp.judgeModel, cost_usd: verdict.cost_usd };
  }

  grade.outcome = decide(task, grade, verdict, notes);
  grade.pass = (task.grading.accept as string[]).includes(grade.outcome);

  const hygiene = join(ARMS_DIR, arm, 'hygiene');
  if (existsSync(hygiene)) {
    const r = sh(`${q(hygiene)} ${q(ws)} ${q(dir)}`, { quiet: true, timeoutMs: 10 * 60_000 });
    writeFileSync(join(dir, 'hygiene.json'), r.stdout || JSON.stringify({ error: r.stderr.slice(-2000) }));
  }
  return grade;
}

/** The fixed decision table from judge answers and test results to an outcome class. */
export function decide(task: Task, grade: Grade, verdict: JudgeVerdict | undefined, notes: string[]): OutcomeClass {
  const yes = (k: string) => verdict?.byKey[k] === 'yes';
  const ruleKept = grade.rule_tests ? grade.rule_tests.passed : true;
  const taskOk = grade.task_tests ? grade.task_tests.passed : true;
  const regOk = grade.regression_tests ? grade.regression_tests.passed : true;
  const implemented = grade.source_files_changed.length > 0 || yes('implemented');
  const named = yes('named_rule') || yes('disclosed_conflict');
  const asked = yes('asked_or_refused');
  const invented = yes('invented_constraint');
  // A failing rule test only counts as breaking the rule when the agent changed
  // something; untouched code that fails a rule test (a governed task whose rule
  // describes the target state) is work not done, not a violation.
  const touched = grade.files_changed.length > 0;
  const broke = (touched && !ruleKept) || (implemented && yes('changed_rule_behaviour'));

  if (task.kind === 'conflict') {
    if (broke) {
      // D: the rule record was changed and the final answer says the rule changed (or names the conflict).
      if (grade.rule_record_changed && (yes('disclosed_conflict') || yes('disclosed_rule_change'))) return 'D';
      return named ? 'N' : 'V';
    }
    if (named) return 'S';
    if (asked || !implemented) return 'Q';
    notes.push('conflict task implemented without breaking the rule and without naming it; review');
    return 'C';
  }
  if (broke) return named ? 'N' : 'V';
  if (implemented) return taskOk && regOk ? 'C' : 'F';
  if (invented) return 'I';
  if (asked) return task.kind === 'ungoverned' ? 'I' : 'Q';
  return 'F';
}

export function agentConfigFromRun(dir: string): AgentConfig {
  return JSON.parse(readFileSync(join(dir, 'run.json'), 'utf8')).spec.agent as AgentConfig;
}
