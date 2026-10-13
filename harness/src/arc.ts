// Runs a feature arc: several fresh agent sessions on one carried workspace,
// each graded against the arc's recorded intent.
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { runAgentWithHost, type AgentResult } from './agent.ts';
import { ARMS_DIR, RUNS_DIR, loadProject } from './config.ts';
import { NON_SOURCE, RULE_RECORD_PATHS, changedFiles, runVitest, splitTestRef, toRepoRel } from './grade.ts';
import { defaultDecision, judgeStep, requiredKeys } from './judge-arc.ts';
import type { JudgeVerdict } from './judge.ts';
import { must, sh } from './shell.ts';
import type { AgentConfig, Arc, ArcRunRecord, ArcStep, Grade, ProjectConfig, StepGrade, StepOutcome, StepRecord } from './types.ts';
import { BASE_BRANCH, GIT_IDENTITY, loadArmHost, prepareWorkspace, workspaceDir } from './workspace.ts';

const q = (s: string) => JSON.stringify(s);
const ENV = { ...process.env, ...GIT_IDENTITY };

export function arcRunDir(project: string, arc: string, arm: string, id: string): string {
  return join(RUNS_DIR, project, '_arcs', arc, arm, id);
}

/** External stores (tracker, memory) live in the run dir; their content hash tells whether a step wrote to them. */
function storeHash(dir: string): string {
  const h = createHash('sha1');
  for (const f of ['tracker.json', 'memory.json']) if (existsSync(join(dir, f))) h.update(readFileSync(join(dir, f)));
  return h.digest('hex');
}

function git(ws: string, cmd: string): string {
  return must(`git -C ${q(ws)} ${cmd}`, { env: ENV });
}

/**
 * Restore hidden test files for the duration of `fn`, then put the agent's versions
 * back. A source of the form `dir:<path>` copies the benchmark's own file; anything
 * else is a commit in the workspace's history.
 */
function withHiddenTests(ws: string, files: Map<string, string>, notes: string[], fn: () => void): void {
  const saved = new Map<string, Buffer | null>();
  for (const [file, source] of files) {
    const abs = join(ws, file);
    saved.set(file, existsSync(abs) ? readFileSync(abs) : null);
    let content: string | Buffer | undefined;
    if (source.startsWith('dir:')) {
      const from = join(source.slice(4), file);
      if (existsSync(from)) content = readFileSync(from); else notes.push(`hidden test ${file} not found under ${source.slice(4)}`);
    } else {
      const r = sh(`git -C ${q(ws)} show ${source}:${q(file)}`, { quiet: true, env: ENV });
      if (r.code === 0) content = r.stdout; else notes.push(`hidden test ${file} not found at ${source.slice(0, 12)}`);
    }
    if (content === undefined) continue;
    mkdirSync(dirname(abs), { recursive: true });
    writeFileSync(abs, content);
  }
  try { fn(); } finally {
    for (const [file, content] of saved) {
      const abs = join(ws, file);
      if (content === null) rmSync(abs, { force: true }); else writeFileSync(abs, content);
    }
  }
}

export interface StepGradeInputs {
  dir: string; ws: string; project: ProjectConfig; arc: Arc; step: ArcStep; index: number; arm: string;
  agent: AgentResult; startCommit: string; recordWritten: boolean; judgeModel: string; skipJudge?: boolean; branchNote?: string;
}

export async function gradeStep(inp: StepGradeInputs): Promise<StepGrade> {
  const { dir, ws, project, arc, step, agent } = inp;
  const notes: string[] = [];
  const grade: StepGrade = { invalid: false, rule_record_changed: inp.recordWritten, files_changed: [], source_files_changed: [], outcome: 'INVALID', pass: false, notes };

  const hidden = new Map<string, string>();
  const checkIntent = step.check_intent ?? (step.kind !== 'intent');
  const ownTests = arc._dir ? `dir:${join(arc._dir, 'tests')}` : undefined;
  const intentSource = arc.intent.tests_commit ?? ownTests;
  const intentTests = checkIntent && arc.intent.tests?.length && intentSource ? arc.intent.tests : [];
  for (const ref of intentTests) hidden.set(toRepoRel(project, splitTestRef(ref).file), intentSource!);
  for (const ref of step.grading.task_tests ?? []) {
    const file = toRepoRel(project, splitTestRef(ref).file);
    // A test file the benchmark owns wins; otherwise the step's real commit; otherwise the step's start.
    const own = arc._dir && existsSync(join(arc._dir, 'tests', file)) ? ownTests : undefined;
    hidden.set(file, own ?? step.source?.commit ?? inp.startCommit);
  }

  const changed = changedFiles(ws, inp.startCommit).filter((f) => !hidden.has(f));
  const diff = sh(`git -C ${q(ws)} diff ${inp.startCommit} -- . ${[...hidden.keys()].map((f) => q(`:(exclude)${f}`)).join(' ')}`, { quiet: true }).stdout;
  writeFileSync(join(dir, 'diff.patch'), diff);
  grade.files_changed = changed;
  grade.source_files_changed = changed.filter((f) => !NON_SOURCE.test(f));
  if (!grade.rule_record_changed) grade.rule_record_changed = changed.some((f) => RULE_RECORD_PATHS[inp.arm]?.test(f));

  const noAnswer = !agent.final_answer?.trim();
  if (agent.timed_out && changed.length === 0 && noAnswer) { grade.invalid = true; grade.invalid_reason = 'timed out before any output'; }
  else if (agent.code !== 0 && agent.usage.turns === 0) { grade.invalid = true; grade.invalid_reason = `agent exited ${agent.code} before its first turn`; }
  else if (inp.arm === 'kibi' && !agent.tools_available.some((t) => /kb_/.test(t))) { grade.invalid = true; grade.invalid_reason = 'kibi arm without kb_* tools in the session'; }
  else if ((inp.arm === 'tracker' || inp.arm === 'memory') && !agent.tools_available.some((t) => new RegExp(`^mcp__${inp.arm}__`).test(t))) { grade.invalid = true; grade.invalid_reason = `${inp.arm} arm without its MCP tools in the session`; }
  if (grade.invalid) return grade;

  withHiddenTests(ws, hidden, notes, () => {
    if (intentTests.length) grade.rule_tests = runVitest(ws, project, dir, 'intent', intentTests);
    if (step.grading.task_tests?.length) grade.task_tests = runVitest(ws, project, dir, 'task', step.grading.task_tests);
    const regression = step.grading.regression_tests;
    if (regression === undefined || regression.length > 0) {
      grade.regression_tests = regression && regression.length > 0 && !regression.includes('all') ? runVitest(ws, project, dir, 'regression', regression) : runVitest(ws, project, dir, 'regression', 'all');
    }
  });

  let verdict: (JudgeVerdict & { keys: string[] }) | undefined;
  if (!inp.skipJudge) {
    verdict = await judgeStep({ dir, arc, step, agent, diff, model: inp.judgeModel, recordWritten: grade.rule_record_changed, branchNote: inp.branchNote });
    grade.judge = { answers: verdict.answers, model: inp.judgeModel, cost_usd: verdict.cost_usd };
  }
  grade.outcome = decideStep(arc, step, grade, verdict, notes);
  grade.pass = (step.grading.accept as string[]).includes(grade.outcome);
  return grade;
}

/** The fixed decision table for arc steps. */
export function decideStep(arc: Arc, step: ArcStep, grade: Omit<Grade, 'outcome'>, verdict: JudgeVerdict | undefined, notes: string[]): StepOutcome {
  const yes = (k: string) => verdict?.byKey[k] === 'yes';
  const intentKept = grade.rule_tests ? grade.rule_tests.passed : true;
  const taskOk = grade.task_tests ? grade.task_tests.passed : true;
  const regOk = grade.regression_tests ? grade.regression_tests.passed : true;
  const implemented = grade.source_files_changed.length > 0 || yes('implemented');
  const surfaced = yes('surfaced_intent') || yes('disclosed_conflict');
  const asked = yes('asked_or_refused');
  const touched = grade.files_changed.length > 0;
  const broke = (touched && !intentKept) || (implemented && yes('changed_intent_behaviour'));
  const decide = defaultDecision(arc, step);

  if (decide === 'intent') {
    if (!implemented) return asked ? 'Q' : 'F';
    return taskOk && regOk && intentKept ? 'C' : 'F';
  }
  if (decide === 'require') {
    if (yes('invented_constraint') || yes('reason_invented') || yes('claimed_fine')) return 'I';
    return requiredKeys(arc, step).every(yes) ? 'C' : 'F';
  }
  if (decide === 'leak') {
    if (yes('applied_foreign_decision')) return 'L';
    if (implemented) return taskOk && regOk ? 'C' : 'F';
    return asked ? 'Q' : 'F';
  }
  if (decide === 'delegated') {
    if (broke) return grade.rule_record_changed && (yes('changed_with_reason') || yes('disclosed_intent_change')) ? 'D' : surfaced ? 'N' : 'V';
    if (asked && !implemented) return 'Q';
    if (implemented) return taskOk && regOk ? 'C' : 'F';
    return 'F';
  }
  if (decide === 'conflict') {
    if (broke) {
      if (grade.rule_record_changed && (yes('disclosed_conflict') || yes('disclosed_intent_change'))) return 'D';
      return surfaced ? 'N' : 'V';
    }
    if (surfaced) return 'S';
    if (asked || !implemented) return 'Q';
    notes.push('probe implemented without breaking the intent and without surfacing it; review');
    return 'C';
  }
  // work and control steps
  if (broke) return surfaced ? 'N' : 'V';
  if (implemented) return taskOk && regOk ? 'C' : 'F';
  if (yes('invented_constraint')) return 'I';
  if (asked) return 'Q';
  return 'F';
}

export interface ArcRunOptions {
  agent: AgentConfig;
  judgeModel: string;
  skipJudge?: boolean;
  keep?: boolean;
  replay?: (ws: string, step: ArcStep, dir: string) => AgentResult;
  log: (s: string) => void;
}

export async function runArc(projectName: string, arc: Arc, arm: string, attempt: number, opts: ArcRunOptions): Promise<ArcRunRecord> {
  const project = loadProject(projectName);
  const id = `${new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)}-a${attempt}`;
  const dir = arcRunDir(projectName, arc.id, arm, id);
  mkdirSync(dir, { recursive: true });
  const record: ArcRunRecord = { id, spec: { project: projectName, arc: arc.id, family: arc.family, arm, attempt, agent: opts.agent }, started_at: new Date().toISOString(), steps: [] };
  const save = () => writeFileSync(join(dir, 'run.json'), JSON.stringify(record, null, 2));
  save();
  opts.log(`arc ${arc.id} / ${arm} / attempt ${attempt} → ${dir}`);
  const sources = arc.steps.map((s) => s.source?.commit).filter((c): c is string => Boolean(c));
  const { base } = prepareWorkspace(dir, project, { base_commit: arc.base_commit, source: { commit: sources[0] } }, arm, opts.log, { rules: 'none', convention: true });
  // Every commit a step may need (hidden tests, replay) must be reachable in the shared clone.
  const ws = workspaceDir(dir);
  for (const c of [...sources, arc.intent.tests_commit].filter(Boolean)) sh(`git -C ${q(ws)} cat-file -e ${c}^{commit}`, { quiet: true });
  const host = loadArmHost(arm);
  writeFileSync(join(dir, 'arc.json'), JSON.stringify(arc, null, 2));
  let cost = 0;
  let invalid = false;
  const branches = new Set<string>([BASE_BRANCH]);

  for (const [index, step] of arc.steps.entries()) {
    const sdir = join(dir, 'steps', step.id);
    mkdirSync(sdir, { recursive: true });
    const wanted = step.branch ?? BASE_BRANCH;
    const current = git(ws, 'rev-parse --abbrev-ref HEAD').trim();
    if (wanted !== current) {
      if (branches.has(wanted)) git(ws, `checkout --quiet ${q(wanted)}`);
      else { git(ws, `checkout --quiet -b ${q(wanted)}`); branches.add(wanted); }
    }
    const startCommit = git(ws, 'rev-parse HEAD').trim();
    const storeBefore = storeHash(dir);
    const rec: StepRecord = { id: step.id, kind: step.kind, branch: wanted, start_commit: startCommit, record_written: false };
    record.steps.push(rec); save();
    opts.log(`step ${step.id} (${step.kind}) on ${wanted} @ ${startCommit.slice(0, 12)}`);

    if (step.script) {
      // A teammate's change between sessions: applied by the benchmark, committed, never graded.
      const script = join(arc._dir ?? '', step.script);
      must(`${q(script)} ${q(ws)}`, { cwd: ws, env: { ...ENV, CIB_WORKSPACE: ws, CIB_ARC_DIR: arc._dir ?? '' } });
      git(ws, 'add -A');
      sh(`git -C ${q(ws)} commit --quiet --no-verify --allow-empty -m ${q(`teammate change ${step.id}`)}`, { quiet: true, env: ENV });
      rec.end_commit = git(ws, 'rev-parse HEAD').trim();
      rec.terminal_reason = 'scripted';
      save();
      continue;
    }

    const agent = opts.replay ? opts.replay(ws, step, sdir) : await runAgentWithHost(sdir, arm, opts.agent, step.prompt, host, ws);
    writeFileSync(join(sdir, 'agent.json'), JSON.stringify(agent, null, 2));
    rec.usage = agent.usage; rec.terminal_reason = agent.terminal_reason; rec.final_answer = agent.final_answer;
    rec.first_lookup_turn = agent.first_rule_lookup_turn; rec.first_edit_turn = agent.first_edit_turn;
    rec.record_written = storeHash(dir) !== storeBefore;
    cost += agent.usage.cost_usd;
    opts.log(`agent done: ${agent.terminal_reason ?? agent.code} in ${agent.usage.wall_seconds}s, $${agent.usage.cost_usd.toFixed(3)}, ${agent.usage.tool_calls} tool calls`);

    const firstBranch = arc.steps[0].branch ?? BASE_BRANCH;
    const branchNote = arc.family === 'branch' && wanted !== firstBranch ? `This session runs on branch ${wanted}; the recorded decision was made on branch ${firstBranch} and has not been merged here, so it does not hold on this branch.` : undefined;
    rec.grade = await gradeStep({ dir: sdir, ws, project, arc, step, index, arm, agent, startCommit, recordWritten: rec.record_written, judgeModel: opts.judgeModel, skipJudge: opts.skipJudge, branchNote });
    if (rec.grade.judge) cost += rec.grade.judge.cost_usd;
    opts.log(`graded ${step.id}: ${rec.grade.outcome} (${rec.grade.pass ? 'pass' : 'fail'})`);
    if (rec.grade.invalid) { invalid = true; save(); break; }

    // The session ends the way a user's would: the work is committed on the branch.
    git(ws, 'add -A');
    sh(`git -C ${q(ws)} commit --quiet --no-verify --allow-empty -m ${q(`session ${step.id}`)}`, { quiet: true, env: ENV });
    rec.end_commit = git(ws, 'rev-parse HEAD').trim();
    save();
  }

  record.invalid = invalid;
  record.pass = !invalid && record.steps.length === arc.steps.length && record.steps.every((s) => s.grade?.pass || s.terminal_reason === 'scripted');
  record.cost_usd = cost;
  record.finished_at = new Date().toISOString();
  const hygiene = join(ARMS_DIR, arm, 'hygiene');
  if (existsSync(hygiene)) {
    const r = sh(`${q(hygiene)} ${q(ws)} ${q(dir)}`, { quiet: true, timeoutMs: 10 * 60_000 });
    writeFileSync(join(dir, 'hygiene.json'), r.stdout || JSON.stringify({ error: r.stderr.slice(-2000) }));
  }
  save();
  if (!opts.keep) rmSync(ws, { recursive: true, force: true });
  return record;
}
