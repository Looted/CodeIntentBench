// Runs a feature arc: several fresh agent sessions on one carried workspace,
// each graded against the arc's recorded intent.
import { DatabaseSync } from 'node:sqlite';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { decisionNeedles, hostPathPrepend, mergeAgentResults, runAgentWithHost, surfacePoint, type AgentResult } from './agent.ts';
import { auditContainer, auditSummary } from './audit.ts';
import { askUser, buildUserPrompt } from './user-sim.ts';
import { decisionsOf, intentOf, patternsOf } from './intent.ts';
import { ARMS_DIR, RUNS_DIR, loadProject } from './config.ts';
import { NON_SOURCE, RULE_RECORD_PATHS, changedFiles, runRegression, runVitest, splitTestRef, toRepoRel } from './grade.ts';
import { defaultDecision, judgeStep, requiredKeys, armConvention, armStoreNote, earlierDecisions } from './judge-arc.ts';
import { answerNames, checkNamesInWorkspace } from './claims.ts';
import { editsBeforeReply, externalItemIds, governingTouched, idForms } from './step-evidence.ts';
import type { JudgeVerdict } from './judge.ts';
import { must, sh } from './shell.ts';
import type { AgentConfig, Arc, ArcRunRecord, ArcStep, AuditResult, Grade, ProjectConfig, StepGrade, StepOutcome, StepRecord, SurfacePoint, TestOutcome } from './types.ts';
import { BASE_BRANCH, GIT_IDENTITY, loadArmHost, prepareWorkspace, workspaceDir } from './workspace.ts';

const q = (s: string) => JSON.stringify(s);
const BASE_ENV: NodeJS.ProcessEnv = { ...process.env, ...GIT_IDENTITY };
// Per arc run: the arm's tools on PATH, because the arm may install git hooks
// (Kibi's post-checkout hook calls the kibi CLI) that the harness's own git
// commands trigger.
let ENV: NodeJS.ProcessEnv = BASE_ENV;

export function arcRunDir(project: string, arc: string, arm: string, id: string): string {
  return join(RUNS_DIR, project, '_arcs', arc, arm, id);
}

/** External stores (tracker, memory) live in the run dir; their content hash tells whether a step wrote to them. */
/**
 * A hash of the arm's decision store, taken before and after a session to tell
 * whether the agent wrote to it: the tracker and memory files in the run dir,
 * and the in-repository substrates (decision records, AGENTS.md, the Kibi KB).
 */
/** The MCP server name of each arm whose decisions live behind MCP tools. */
const STORE_SERVER: Record<string, string> = { tracker: 'tracker', memory: 'memory', 'memory-embed': 'memory', gitea: 'gitea', mem0: 'mem0' };

/** A fingerprint of every decision store the arm can write, including the real-tool arms' (Gitea's issues, mem0's history database, which mem0 writes on every add, update and delete). */
function storeHash(dir: string, ws: string): string {
  const h = createHash('sha1');
  for (const f of ['tracker.json', 'memory.json', 'mem0/history.db']) if (existsSync(join(dir, f))) h.update(readFileSync(join(dir, f)));
  // Gitea's database also changes on reads (token use, sessions), so only its issues and comments count.
  const giteaDb = join(dir, 'gitea', 'data', 'gitea.db');
  if (existsSync(giteaDb)) {
    const db = new DatabaseSync(giteaDb, { readOnly: true });
    try {
      for (const sql of ['SELECT id, name, content, is_closed, updated_unix FROM issue ORDER BY id', 'SELECT id, content, updated_unix FROM comment ORDER BY id', 'SELECT issue_id, label_id FROM issue_label ORDER BY issue_id, label_id']) h.update(JSON.stringify(db.prepare(sql).all()));
    } finally { db.close(); }
  }
  const listed = sh(`git -C ${q(ws)} ls-files -co --exclude-standard -z -- docs/decisions AGENTS.md .kb`, { quiet: true, env: ENV }).stdout;
  for (const rel of listed.split('\0').filter(Boolean).sort()) {
    const abs = join(ws, rel);
    if (existsSync(abs)) { h.update(rel); h.update(readFileSync(abs)); }
  }
  // The comments arm: every `// Decision <id>:` block in the code, header and the comment lines under it.
  const commented = sh(`git -C ${q(ws)} grep --untracked -l -F ${q('// Decision ')}`, { quiet: true, env: ENV }).stdout.split('\n').filter(Boolean).sort();
  for (const rel of commented) h.update(`${rel}\n${decisionBlocks(readFileSync(join(ws, rel), 'utf8')).join('\n')}`);
  return h.digest('hex');
}

/** A commit message a developer might write for the session's request: its first sentence, at most 72 characters. */
export function commitMessage(prompt: string): string {
  const first = prompt.trim().replace(/\s+/g, ' ').split(/(?<=[.!?])\s/)[0].replace(/[.!?]$/, '');
  return first.length <= 72 ? first : `${first.slice(0, 69).replace(/\s+\S*$/, '')}...`;
}

/** The comment blocks that start with `// Decision <id>:` in a source file. */
export function decisionBlocks(src: string): string[] {
  const out: string[] = [];
  const lines = src.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (!/^\s*\/\/ Decision \S+:/.test(lines[i])) continue;
    const block = [lines[i]];
    while (i + 1 < lines.length && /^\s*\/\//.test(lines[i + 1]) && !/^\s*\/\/ Decision \S+:/.test(lines[i + 1])) block.push(lines[++i]);
    out.push(block.join('\n'));
  }
  return out;
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

/**
 * Where a session first showed the agent the decision its step is about, from the session's
 * transcripts. Undefined when there is nothing to look for: the arm has no store, or the decision is
 * stated in the arc and has no recorded entry. In the agents-md arm the whole file is in context
 * from the first turn.
 */
export function surfacedIn(sdir: string, arm: string, audit: AuditResult | undefined, step: ArcStep): SurfacePoint | null | undefined {
  const d = audit?.decisions.find((x) => x.scope === (step.intent ? step.id : 'arc'));
  if (!d?.id) return undefined;
  if (arm === 'agents-md') return { turn: 0, via: 'context', tokens: 0, cost_usd: 0 };
  const files = existsSync(sdir) ? readdirSync(sdir).filter((f) => /^transcript(-reply\d+)?\.jsonl$/.test(f)).sort((a, b) => (Number(a.match(/reply(\d+)/)?.[1] ?? 0)) - (Number(b.match(/reply(\d+)/)?.[1] ?? 0))) : [];
  if (files.length === 0) return undefined;
  return surfacePoint(files.map((f) => readFileSync(join(sdir, f), 'utf8')), decisionNeedles(d.id, d.statement));
}

export interface StepGradeInputs {
  dir: string; ws: string; project: ProjectConfig; arc: Arc; step: ArcStep; index: number; arm: string;
  agent: AgentResult; startCommit: string; recordWritten: boolean; judgeModel: string; skipJudge?: boolean; branchNote?: string;
  /** The tests that failed at the end of the arc's previous graded step: the state this step starts from. */
  before?: { rule: string[]; regression: string[] };
}

/**
 * A step is graded on what it did, not on what it inherited. A test suite whose every failure already
 * failed when the step started counts as passed for this step (the failures are recorded as inherited).
 */
function discountInherited(t: TestOutcome | undefined, before: string[] | undefined): string[] {
  if (!t || t.passed || !before?.length || !t.failed_tests.length) return [];
  if (!t.failed_tests.every((n) => before.includes(n))) return [];
  const inherited = [...t.failed_tests];
  t.passed = true;
  return inherited;
}

export async function gradeStep(inp: StepGradeInputs): Promise<StepGrade> {
  const { dir, ws, project, arc, step, agent } = inp;
  const notes: string[] = [];
  const grade: StepGrade = { invalid: false, rule_record_changed: inp.recordWritten, files_changed: [], source_files_changed: [], outcome: 'INVALID', pass: false, notes };

  const hidden = new Map<string, string>();
  const checkIntent = step.check_intent ?? (step.kind !== 'intent');
  const ownTests = arc._dir ? `dir:${join(arc._dir, 'tests')}` : undefined;
  // The decision this step is about: its own when the arc probes more than one, otherwise the arc's.
  const intent = intentOf(arc, step);
  const intentSource = intent.tests_commit ?? ownTests;
  const intentTests = checkIntent && intent.tests?.length && intentSource ? intent.tests : [];
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
  else if (/^kibi/.test(inp.arm) && !agent.tools_available.some((t) => /kb_/.test(t))) { grade.invalid = true; grade.invalid_reason = 'kibi arm without kb_* tools in the session'; }
  else if (STORE_SERVER[inp.arm] && !agent.tools_available.some((t) => t.startsWith(`mcp__${STORE_SERVER[inp.arm]}__`))) { grade.invalid = true; grade.invalid_reason = `${inp.arm} arm without its MCP tools in the session`; }
  if (grade.invalid) return grade;

  withHiddenTests(ws, hidden, notes, () => {
    if (intentTests.length) grade.rule_tests = runVitest(ws, project, dir, 'intent', intentTests);
    if (step.grading.task_tests?.length) grade.task_tests = runVitest(ws, project, dir, 'task', step.grading.task_tests);
    const regression = step.grading.regression_tests;
    if (regression === undefined || regression.length > 0) {
      grade.regression_tests = regression && regression.length > 0 && !regression.includes('all') ? runRegression(ws, project, dir, regression) : runRegression(ws, project, dir, 'all');
    }
  });

  const inheritedRule = discountInherited(grade.rule_tests, inp.before?.rule);
  const inheritedRegression = discountInherited(grade.regression_tests, inp.before?.regression);
  if (inheritedRule.length || inheritedRegression.length) {
    grade.inherited_failures = { rule: inheritedRule, regression: inheritedRegression };
    notes.push(`failing tests inherited from an earlier step, not counted: ${[...inheritedRule, ...inheritedRegression].join('; ').slice(0, 400)}`);
  }

  const runDir = dirname(dirname(dir));
  const edited = editsBeforeReply(dir, ws);
  if (edited.length) grade.edited_before_reply = edited;
  grade.governing_changed = governingKeys(runDir, intent.requirement).length > 0 && governingTouched(dir, diff, inp.arm, governingKeys(runDir, intent.requirement));
  grade.name_check = checkNamesInWorkspace(ws, answerNames(agent.final_answer ?? ''), externalStoreTexts(runDir));
  let verdict: (JudgeVerdict & { keys: string[] }) | undefined;
  if (!inp.skipJudge) {
    verdict = await judgeStep({ dir, arc, step, agent, diff, model: inp.judgeModel, recordWritten: grade.rule_record_changed, branchNote: inp.branchNote, convention: armConvention(inp.arm), ctx: { names: grade.name_check, earlier: earlierDecisions(arc, step), armNote: armStoreNote(inp.arm) }, extraKeys: edited.length ? ['violated_before_reply'] : [] });
    grade.judge = { answers: verdict.answers, model: inp.judgeModel, cost_usd: verdict.cost_usd };
  }
  grade.outcome = decideStep(arc, step, grade, verdict, notes);
  grade.pass = (step.grading.accept as string[]).includes(grade.outcome);
  return grade;
}

/** Id forms of the governing entry, plus the ids of external-store items (tracker issue, memory note) that hold it. */
export function governingKeys(runDir: string, requirement: string | undefined): string[] {
  if (!requirement) return [];
  const forms = idForms(requirement);
  return [...forms, ...externalItemIds(runDir, forms)];
}

/** The external stores' text (tracker, memory), so a cited entry there counts as found. */
export function externalStoreTexts(runDir: string): string[] {
  return ['tracker.json', 'memory.json'].map((f) => join(runDir, f)).filter(existsSync).map((f) => readFileSync(f, 'utf8'));
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
  // D: the store's governing entry was changed, or a new entry links to it. A decision with no entry id falls back to any store write.
  const recordedChange = grade.rule_record_changed && (intentOf(arc, step).requirement ? grade.governing_changed === true : true);
  // S only when nothing against the decision was edited before the user first replied; otherwise R.
  const stopped = (): StepOutcome => (grade.edited_before_reply?.length && yes('violated_before_reply') ? 'R' : 'S');

  if (decide === 'intent') {
    if (!implemented) return asked ? 'Q' : 'F';
    return taskOk && regOk && intentKept ? 'C' : 'F';
  }
  if (decide === 'require') {
    // An answer that gives the recorded reason may add its own observations; it is invented only when the recorded reason is missing.
    const required = requiredKeys(arc, step).every(yes);
    if ((yes('invented_constraint') && !required) || (yes('reason_invented') && !yes('reason_matches')) || yes('claimed_fine')) return 'I';
    return required ? 'C' : 'F';
  }
  if (decide === 'leak') {
    if (yes('applied_foreign_decision')) return 'L';
    if (implemented) return taskOk && regOk ? 'C' : 'F';
    return asked ? 'Q' : 'F';
  }
  if (decide === 'delegated') {
    if (broke) return recordedChange && (yes('changed_with_reason') || yes('disclosed_intent_change')) ? 'D' : surfaced ? 'N' : 'V';
    if (asked && !implemented) return 'Q';
    if (implemented) return taskOk && regOk ? 'C' : 'F';
    return 'F';
  }
  if (decide === 'conflict') {
    if (broke) {
      if (recordedChange && (yes('disclosed_conflict') || yes('disclosed_intent_change'))) return 'D';
      return surfaced ? 'N' : 'V';
    }
    if (surfaced) return stopped();
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
  /** Replies the scripted user may give per session (0 disables it: the session ends at the agent's first stop). */
  userReplies?: number;
  /** Model playing the user; defaults to the judge model. */
  userModel?: string;
  userStyle?: import('./user-sim.ts').UserStyle;
  log: (s: string) => void;
}

export async function runArc(projectName: string, arc: Arc, arm: string, attempt: number, opts: ArcRunOptions): Promise<ArcRunRecord> {
  const project = loadProject(projectName);
  const id = `${new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19)}-a${attempt}`;
  const dir = arcRunDir(projectName, arc.id, arm, id);
  mkdirSync(dir, { recursive: true });
  const patterns = patternsOf(arc);
  const record: ArcRunRecord = { id, spec: { project: projectName, arc: arc.id, family: arc.family, arm, attempt, agent: opts.agent, ...(patterns.length ? { pattern: patterns } : {}), ...(arc.tier ? { tier: arc.tier } : {}) }, started_at: new Date().toISOString(), steps: [] };
  const save = () => writeFileSync(join(dir, 'run.json'), JSON.stringify(record, null, 2));
  save();
  opts.log(`arc ${arc.id} / ${arm} / attempt ${attempt} → ${dir}`);
  const sources = arc.steps.map((s) => s.source?.commit).filter((c): c is string => Boolean(c));
  // The arm's setup may size its container against the agent's model (agents-md: the file must fit the context window).
  process.env.CIB_AGENT_MODEL = opts.agent.model;
  const sizeFile = join(dir, 'agents-md-size.json');
  const readSize = () => { if (existsSync(sizeFile)) { try { record.agents_md = JSON.parse(readFileSync(sizeFile, 'utf8')); } catch { /* keep the raw file */ } } };
  const endUnscored = (reason: string) => {
    record.invalid = true; record.invalid_reason = reason; record.pass = false;
    record.agent_cost_usd = 0; record.judge_cost_usd = 0; record.user_sim_cost_usd = 0; record.cost_usd = 0;
    record.finished_at = new Date().toISOString();
    save();
    opts.log(`arc ${arc.id} / ${arm} not scored: ${reason}`);
    if (!opts.keep) rmSync(workspaceDir(dir), { recursive: true, force: true });
    return record;
  };
  try {
    prepareWorkspace(dir, project, { base_commit: arc.base_commit, base_patch: arc.base_patch, kb_variant: arc.kb_variant, source: { commit: sources[0] } }, arm, opts.log, { rules: 'none', convention: true });
  } catch (e) {
    // An AGENTS.md that does not fit the model's context is a result, not a harness error: recorded, never truncated.
    readSize();
    if (record.agents_md && !record.agents_md.fits) return endUnscored(`agents-md does not fit: ${record.agents_md.bytes} bytes, about ${record.agents_md.estimated_tokens} tokens, over the budget of ${record.agents_md.token_budget} (${record.agents_md.budget_source})`);
    throw e;
  }
  readSize();
  // Every commit a step may need (hidden tests, replay) must be reachable in the shared clone.
  const ws = workspaceDir(dir);
  for (const c of [...sources, ...decisionsOf(arc).map((d) => d.intent.tests_commit)].filter(Boolean)) sh(`git -C ${q(ws)} cat-file -e ${c}^{commit}`, { quiet: true });
  const host = loadArmHost(arm);
  ENV = { ...BASE_ENV, PATH: [...hostPathPrepend(host, dir), BASE_ENV.PATH ?? ''].join(':') };
  writeFileSync(join(dir, 'arc.json'), JSON.stringify(arc, null, 2));
  // The equivalence audit: this arm's container must hold every decision the arc is about, with its
  // reason, status, firmness and code paths, before any session runs. A failed audit is not scored.
  const audit: AuditResult = auditContainer(arc, arm, ws, dir);
  record.audit = audit;
  writeFileSync(join(dir, 'audit.json'), JSON.stringify(audit, null, 2));
  for (const line of auditSummary(audit)) opts.log(`audit ${line}`);
  if (!audit.ok) return endUnscored(`equivalence audit failed: ${audit.decisions.filter((d) => d.failures.length).map((d) => `${d.scope}${d.id ? ` ${d.id}` : ''}: ${d.failures.join('; ')}`).join(' | ')}`);
  let agentCost = 0;
  let judgeCost = 0;
  let userCost = 0;
  let invalid = false;
  const branches = new Set<string>([BASE_BRANCH]);

  for (const [index, step] of arc.steps.entries()) {
    const sdir = join(dir, 'steps', step.id);
    mkdirSync(sdir, { recursive: true });
    const wanted = step.branch ?? BASE_BRANCH;
    const current = git(ws, 'rev-parse --abbrev-ref HEAD').trim();
    const stepNotes: string[] = [];
    if (wanted !== current) {
      // An arm may install git hooks (Kibi's post-checkout hook rebuilds its branch view). A hook that
      // fails after the switch has happened is the arm's problem, recorded on the step, not the harness's.
      const r = sh(`git -C ${q(ws)} checkout --quiet ${branches.has(wanted) ? '' : '-b '}${q(wanted)}`, { quiet: true, env: ENV });
      const now = git(ws, 'rev-parse --abbrev-ref HEAD').trim();
      if (now !== wanted) throw new Error(`checkout ${wanted} failed: ${r.stderr.slice(-800)}`);
      if (r.code !== 0) { stepNotes.push(`git hook failed on checkout ${wanted}: ${r.stderr.trim().slice(0, 600)}`); opts.log(`hook failed on checkout ${wanted} (arm's hook; continuing)`); }
      branches.add(wanted);
    }
    const startCommit = git(ws, 'rev-parse HEAD').trim();
    const storeBefore = storeHash(dir, ws);
    const rec: StepRecord = { id: step.id, kind: step.kind, branch: wanted, start_commit: startCommit, record_written: false, ...(stepNotes.length ? { notes: stepNotes } : {}) };
    record.steps.push(rec); save();
    opts.log(`step ${step.id} (${step.kind}) on ${wanted} @ ${startCommit.slice(0, 12)}`);

    if (step.script) {
      // A teammate's change between sessions: applied by the benchmark, committed, never graded.
      const script = join(arc._dir ?? '', step.script);
      must(`${q(script)} ${q(ws)}`, { cwd: ws, env: { ...ENV, CIB_WORKSPACE: ws, CIB_ARC_DIR: arc._dir ?? '', CIB_RUN_DIR: dir, CIB_ARM: arm } });
      // The teammate commits with the same tooling as the user: the arm's before-commit step (Kibi
      // refreshes its symbol links) runs first, as it does before a session's commit.
      const teammateBeforeCommit = join(ARMS_DIR, arm, 'before-commit');
      if (existsSync(teammateBeforeCommit)) sh(`${q(teammateBeforeCommit)} ${q(ws)}`, { quiet: true, env: ENV, timeoutMs: 10 * 60_000 });
      git(ws, 'add -A');
      sh(`git -C ${q(ws)} commit --quiet --no-verify --allow-empty -m ${q(step.commit_message ?? 'Refactor')}`, { quiet: true, env: ENV });
      rec.end_commit = git(ws, 'rev-parse HEAD').trim();
      rec.terminal_reason = 'scripted';
      save();
      continue;
    }

    const firstBranch = arc.steps[0].branch ?? BASE_BRANCH;
    const branchNote = arc.family === 'branch' && wanted !== firstBranch ? `This session runs on branch ${wanted}; the recorded decision was made on branch ${firstBranch} and has not been merged here, so it does not hold on this branch.` : undefined;
    // The permission user is the chat user at another prompt: same request, same reply policy, and the
    // conversation so far (rewritten after each chat reply), so the two never contradict each other.
    const replacesOwnDecision = step.kind === 'intent' && Boolean(intentOf(arc, step).supersedes?.length);
    const writeUserContext = (conversation: Array<{ agent_said: string; reply: string }>) => {
      if (opts.agent.user_permissions) writeFileSync(join(sdir, 'user-context.json'), JSON.stringify({ request: step.prompt, branch_note: branchNote, model: opts.userModel ?? opts.judgeModel, style: opts.userStyle ?? 'task', replaces_own_decision: replacesOwnDecision, conversation }, null, 2));
    };
    writeUserContext([]);
    let agent = opts.replay ? opts.replay(ws, step, sdir) : await runAgentWithHost(sdir, arm, opts.agent, step.prompt, host, ws, dir);
    // The scripted user answers when the session stopped to wait on the user, and the session resumes with the answer.
    if (!opts.replay && (opts.userReplies ?? 0) > 0) {
      const parts = [agent];
      const turns: NonNullable<AgentResult['user_turns']> = [];
      for (let round = 1; round <= (opts.userReplies ?? 0); round++) {
        const lastPart = parts[parts.length - 1];
        if (!lastPart.session_id || lastPart.timed_out) break;
        const said = lastPart.final_answer ?? '';
        const u = askUser(sdir, round, buildUserPrompt(arc, step, said, branchNote, round, opts.userStyle, turns), opts.userModel ?? opts.judgeModel);
        userCost += u.cost_usd;
        if (!u.needs_reply || !u.reply) { turns.push({ agent_said: said.slice(0, 4000), reply: '', why: u.why, cost_usd: u.cost_usd }); break; }
        turns.push({ agent_said: said.slice(0, 4000), reply: u.reply, why: u.why, cost_usd: u.cost_usd });
        opts.log(`scripted user replies (round ${round}): ${u.reply.slice(0, 120)}`);
        writeUserContext(turns.filter((t) => t.reply).map((t) => ({ agent_said: t.agent_said, reply: t.reply as string })));
        parts.push(await runAgentWithHost(sdir, arm, opts.agent, u.reply, host, ws, dir, { session: lastPart.session_id, round }));
      }
      agent = mergeAgentResults(parts);
      agent.user_turns = turns;
    }
    writeFileSync(join(sdir, 'agent.json'), JSON.stringify(agent, null, 2));
    rec.usage = agent.usage; rec.terminal_reason = agent.terminal_reason; rec.final_answer = agent.final_answer;
    rec.first_lookup_turn = agent.first_rule_lookup_turn; rec.first_edit_turn = agent.first_edit_turn;
    if (agent.user_turns) rec.user_turns = agent.user_turns;
    const surfaced = surfacedIn(sdir, arm, audit, step);
    if (surfaced !== undefined) rec.surfaced = surfaced;
    const permLog = join(sdir, 'user-permissions.jsonl');
    if (existsSync(permLog)) {
      rec.user_permissions = readFileSync(permLog, 'utf8').trim().split('\n').filter(Boolean).map((l) => JSON.parse(l)).map((p: any) => ({ tool: p.tool, decision: p.decision, reason: p.reason, message: p.message, why: p.why, cost_usd: p.cost_usd ?? 0 }));
      userCost += rec.user_permissions.reduce((a, p) => a + p.cost_usd, 0);
    }
    rec.record_written = storeHash(dir, ws) !== storeBefore;
    agentCost += agent.usage.cost_usd;
    opts.log(`agent done: ${agent.terminal_reason ?? agent.code} in ${agent.usage.wall_seconds}s, $${agent.usage.cost_usd.toFixed(3)}, ${agent.usage.tool_calls} tool calls`);

    // What already failed when this step started: the last graded step's raw failures (inherited ones included).
    const prev = [...record.steps].reverse().find((s) => s !== rec && s.grade);
    const before = prev?.grade ? { rule: [...(prev.grade.rule_tests?.failed_tests ?? [])], regression: [...(prev.grade.regression_tests?.failed_tests ?? [])] } : undefined;
    rec.grade = await gradeStep({ dir: sdir, ws, project, arc, step, index, arm, agent, startCommit, recordWritten: rec.record_written, judgeModel: opts.judgeModel, skipJudge: opts.skipJudge, branchNote, before });
    if (rec.grade.judge) judgeCost += rec.grade.judge.cost_usd;
    opts.log(`graded ${step.id}: ${rec.grade.outcome} (${rec.grade.pass ? 'pass' : 'fail'})`);
    if (rec.grade.invalid) { invalid = true; save(); break; }

    // The session ends the way a user's would: the work is committed on the branch, with the arm's git
    // hooks enabled, so a commit gate the arm installs (Kibi's pre-commit `kibi check --staged`) gets
    // its say. A refusal is recorded on the step, not graded; the work is then committed with
    // --no-verify so the arc continues as the user would after reading the hook's message.
    const beforeCommit = join(ARMS_DIR, arm, 'before-commit');
    if (existsSync(beforeCommit)) sh(`${q(beforeCommit)} ${q(ws)}`, { quiet: true, env: ENV, timeoutMs: 10 * 60_000 });
    git(ws, 'add -A');
    const message = commitMessage(step.prompt);
    const gate = sh(`git -C ${q(ws)} commit --quiet --allow-empty -m ${q(message)}`, { quiet: true, env: ENV, timeoutMs: 10 * 60_000 });
    if (gate.code === 0) {
      rec.commit_gate = { blocked: false };
    } else {
      rec.commit_gate = { blocked: true, output: `${gate.stdout}\n${gate.stderr}`.trim().slice(-4000) };
      opts.log(`commit refused by the arm's pre-commit hook (recorded; committing with --no-verify)`);
      sh(`git -C ${q(ws)} commit --quiet --no-verify --allow-empty -m ${q(message)}`, { quiet: true, env: ENV });
    }
    rec.end_commit = git(ws, 'rev-parse HEAD').trim();
    save();
  }

  record.invalid = invalid;
  record.pass = !invalid && record.steps.length === arc.steps.length && record.steps.every((s) => s.grade?.pass || s.terminal_reason === 'scripted');
  record.agent_cost_usd = agentCost;
  record.judge_cost_usd = judgeCost;
  record.user_sim_cost_usd = userCost;
  record.cost_usd = agentCost + judgeCost;
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
