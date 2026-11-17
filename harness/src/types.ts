export type TaskKind = 'history' | 'conflict' | 'governed' | 'ungoverned';
/** R: stopped and named the decision, but only after a user reply to a session that had already edited source against it. */
export type OutcomeClass = 'S' | 'R' | 'D' | 'C' | 'V' | 'N' | 'Q' | 'I' | 'F' | 'INVALID';

export interface ProjectConfig {
  name: string;
  repository: string;
  commit: string;
  license: string;
  description?: string;
  runtime?: { node?: string; package_manager?: string; bun?: string };
  /** Environment for every command the harness runs on a workspace (setup, tests) and for the agent; values may use ${RUN_DIR} and ${WORKSPACE}. */
  env?: Record<string, string>;
  setup: {
    install: string;
    build?: string;
    /** Project-specific preparation per arm, run in the workspace after install and before the arm's setup, with
     *  arguments <workspace> <arm> <rulesDir> <runDir>: strips the project's own tooling the arm must not have, or
     *  exports the project's recorded knowledge into the rules directory the arm seeds from. Relative to the project dir. */
    arm_prepare?: string;
  };
  tests: {
    /** Directory, relative to the repo root, in which the test commands run. */
    cwd?: string;
    /** Command that runs the whole hidden suite (regression tests). */
    all: string;
    /** Command that runs the given test files; file paths are appended. */
    files: string;
    /** Tests, as `<file>::<name>`, whose failure is recorded but does not fail a run: tests that cannot pass in the benchmark container (for example chmod-based tests under root). */
    ignore?: string[];
  };
  hidden?: {
    restore_tests?: boolean;
  };
  /**
   * Words of the project's own product vocabulary that arc prompts may use although the validator
   * otherwise reads them as naming a tool or hinting at a decision (for a project that is itself a
   * requirements tool: `requirement`). The project's name is always allowed.
   */
  product_terms?: string[];
}

export interface Rule {
  id: string;
  statement: string;
  rationale?: string;
  scope: { paths: string[]; symbols?: string[] };
  tests?: string[];
  // Standing, as the project's knowledge base records it. Absent on hand-written rule files.
  kind?: 'requirement' | 'adr';
  title?: string;
  /** The entity's status as recorded (open, active, accepted, closed, superseded, retired, ...). */
  status?: string;
  /** Why a retired entity was retired, when recorded. */
  status_reason?: string;
  /** The firmness Kibi's lookups show: `firm` (a person's; ask before changing it), `default` (an agent's choice; superseded only on evidence), `exploratory` (a guess). */
  firmness?: string;
  /** Who recorded it and when: the kind of author, who approved it, the source it cites, the dates. */
  origin?: { kind?: string; by?: string; ref?: string; recorded_at?: string; updated_at?: string };
  /** Ids of the entries this one replaces, and of the entries that replace it. */
  supersedes?: string[];
  superseded_by?: string[];
}

export interface Task {
  id: string;
  project: string;
  base_commit?: string;
  /** A patch (relative to the project directory) applied on the base commit; see Arc.base_patch. */
  base_patch?: string;
  kind: TaskKind;
  prompt: string;
  governing_rules?: string[];
  grading: {
    accept: Array<'S' | 'D' | 'C'>;
    task_tests?: string[];
    regression_tests?: string[];
    rule_tests?: string[];
    judge_notes?: string;
  };
  source?: { commit?: string; pull_request?: string };
}

export interface ArmHost {
  /** Extra `--plugin-dir` values, relative to the arm directory or absolute. */
  plugin_dirs?: string[];
  /** Environment variables added to the agent process. */
  env?: Record<string, string>;
  /** Directories (relative to the run dir) whose `node_modules/.bin` goes on PATH. */
  path_prepend?: string[];
  /** Tool patterns the arm's tools need under `--permissions accept-edits` (merged with --allowed-tools). */
  allowed_tools?: string[];
  /** An MCP configuration file passed with `--mcp-config` (and `--strict-mcp-config`); `${RUN_DIR}` expands. */
  mcp_config?: string;
}

export interface AgentConfig {
  host: 'claude-code';
  model: string;
  effort?: string;
  max_turns: number;
  max_budget_usd?: number;
  timeout_minutes: number;
  /** `bypass` (default: the workspace is disposable) or `accept-edits` with an allow-list of tools. */
  permissions?: 'bypass' | 'accept-edits';
  /** Tool patterns for `--allowedTools` when permissions is `accept-edits`. */
  allowed_tools?: string[];
  /** Permission prompts (a hook asking for confirmation) go to the scripted user through --permission-prompt-tool. */
  user_permissions?: boolean;
}

export interface RunSpec {
  project: string;
  task: string;
  arm: string;
  attempt: number;
  agent: AgentConfig;
}

export interface ModelTokens {
  input_tokens: number;
  output_tokens: number;
  cache_read_input_tokens: number;
  cache_creation_input_tokens: number;
  cache_creation_5m_input_tokens: number;
  cache_creation_1h_input_tokens: number;
  cost_usd: number;
}

export interface Usage {
  /** Uncached input tokens. All token counts cover the whole session, subagents included (summed over the result's per-model usage). */
  input_tokens: number;
  cache_read_input_tokens: number;
  /** Cache writes, both durations; split below when known. */
  cache_creation_input_tokens: number;
  cache_creation_5m_input_tokens?: number;
  cache_creation_1h_input_tokens?: number;
  output_tokens: number;
  /** Claude Code's total_cost_usd, or a list-price estimate when `cost_estimated`. */
  cost_usd: number;
  /** Per model, from the result event's modelUsage. */
  by_model?: Record<string, ModelTokens>;
  /** Where the token counts come from: `model_usage` (result event, whole session), `result_usage` (result event top level, main thread only: older CLIs), `messages` (no result event: summed from assistant messages, cost estimated). */
  source?: 'model_usage' | 'result_usage' | 'messages';
  /** The session ended without a result event (killed on timeout); cost is the list price of the tokens seen. */
  cost_estimated?: boolean;
  /** Reported cost differs from tokens at list price by more than 2% (`reported/listed`). */
  cost_mismatch?: string;
  tool_calls: number;
  turns: number;
  wall_seconds: number;
}

export interface TestOutcome {
  command: string;
  passed: boolean;
  failed_tests: string[];
  passed_count: number;
  failed_count: number;
  duration_ms: number;
  error?: string;
  /** Tests that failed on the first run and passed when their files were re-run alone. */
  flaked?: string[];
  /** Failures the project lists under tests.ignore: recorded, not counted. */
  ignored?: string[];
}

export interface JudgeAnswer {
  question: string;
  answer: 'yes' | 'no' | 'uncertain';
  evidence: string;
}

export interface Grade {
  invalid: boolean;
  invalid_reason?: string;
  task_tests?: TestOutcome;
  regression_tests?: TestOutcome;
  rule_tests?: TestOutcome;
  rule_record_changed: boolean;
  files_changed: string[];
  source_files_changed: string[];
  /** Source files edited before the user's first reply (sessions with a reply only). */
  edited_before_reply?: string[];
  /** The session changed the governing entry of the store, or wrote one that links to it. */
  governing_changed?: boolean;
  /** Names the final answer asserts, checked against the project. */
  name_check?: { found: string[]; missing: string[] };
  judge?: { answers: JudgeAnswer[]; model: string; cost_usd: number; tokens?: ModelTokens; earlier_passes?: Array<{ model: string; cost_usd: number }> };
  outcome: OutcomeClass;
  pass: boolean;
  notes: string[];
}

export interface RunRecord {
  id: string;
  spec: RunSpec;
  base_commit: string;
  started_at: string;
  finished_at?: string;
  usage?: Usage;
  terminal_reason?: string;
  final_answer?: string;
  grade?: Grade;
  hygiene?: unknown;
}

// ---------------------------------------------------------------------------
// Feature arcs: one feature revisited over several fresh sessions on a carried
// workspace. Each family tests one public claim of a memory tool.

export type ArcFamily = 'recall' | 'rationale' | 'surfacing' | 'navigation' | 'drift' | 'evidence' | 'branch' | 'standing';
export type StepKind = 'intent' | 'work' | 'control' | 'probe';
/** How a step's outcome is decided from tests and judge answers. */
export type StepDecision = 'intent' | 'work' | 'conflict' | 'require' | 'leak' | 'delegated';
/** Arc steps add L (a decision from another branch applied where it does not hold). */
export type StepOutcome = OutcomeClass | 'L';
/**
 * What makes an arc hard, for the report's headline (probe pass per pattern):
 * `near-matches` (a large store whose neighbours differ by host or standing), `superseded` (an old
 * and a new statement both exist), `quiet-contradiction` (the request never uses the decision's
 * words), `firm-default` (two neighbouring decisions with different standing), `long-capture`
 * (a reason stated in session 1 must survive unrelated sessions and a refactor), `indirect-reach`
 * (the decision is reached through code the request does not name), `evidence` (green is not proof),
 * `search-gap` (a search of the store with the request's words does not return the decision), `code-gap`
 * (nor does a search with the words of the code the change lands in; `code-gap-scan.ts` lists the links
 * where that holds), `unlinked-control` (the same kind of change where no decision governs),
 * `side-effect` (the request is about one topic and its simplest edit, in a helper two behaviours share,
 * breaks a recorded decision on another topic; changing only the requested behaviour keeps it, so C passes),
 * `crowded-store` (the store holds several times as many decisions on the same topics, about other products
 * and services, so a topic search returns look-alikes; the arc names the store with `kb_variant`),
 * `reason-over-letter` (a request that keeps the wording of a decision the user stated earlier in the arc
 * and defeats the reason the user gave for it), `stale-assumption` (the user stated the decision as a
 * stopgap resting on an assumption; a later session describes a situation in which it no longer holds).
 */
export type ArcPattern = 'near-matches' | 'superseded' | 'quiet-contradiction' | 'firm-default' | 'long-capture' | 'indirect-reach' | 'evidence' | 'search-gap' | 'unlinked-control' | 'code-gap' | 'side-effect' | 'crowded-store' | 'reason-over-letter' | 'stale-assumption';
export const ARC_PATTERNS: ArcPattern[] = ['near-matches', 'superseded', 'quiet-contradiction', 'firm-default', 'long-capture', 'indirect-reach', 'evidence', 'search-gap', 'unlinked-control', 'code-gap', 'side-effect', 'crowded-store', 'reason-over-letter', 'stale-assumption'];
/** `easy`: the calibration floor a notes file is expected to pass. `hard`: what the arms are compared on. */
export type ArcTier = 'easy' | 'hard';

export interface ArcIntent {
  /** The decision in one or two sentences, as ground truth for the judge. Never shown to the agent. */
  statement: string;
  reason: string;
  /**
   * The assumption or stopgap the user stated the decision with ("for now, because ..."), as ground
   * truth for the judge. Never shown to the agent or the scripted user.
   */
  assumption?: string;
  /**
   * The id of the intent step of this arc in which the user states this decision, when the step that
   * carries this block is a later one (a probe on a decision made in session k). The equivalence
   * audit does not look for such a decision in the store at setup.
   */
  stated_in?: string;
  /** Ids of earlier intent steps of this arc whose decision this one replaces (the user changed their mind in the arc). */
  supersedes?: string[];
  /** Code locations that enforce it once implemented, for the navigation family. */
  symbols?: string[];
  /** Hidden tests that verify it, as `<file>::<name>`; restored from `tests_commit`, or from the arc's own `tests/` directory when no commit is given, whenever a step checks the intent. */
  tests?: string[];
  tests_commit?: string;
  /**
   * The id of the recorded entry (requirement or ADR) this decision is, when the project's knowledge
   * base already holds it at the arc's base. The equivalence audit finds the decision by this id in
   * every arm's container; without it the audit matches by statement.
   */
  requirement?: string;
  /** Ground truth for the judge: ids or one-line statements of entries that were superseded by this decision and no longer hold. */
  superseded?: string[];
  /** Ground truth for the judge: ids or one-line statements of neighbouring decisions that do not govern this request. */
  neighbours?: string[];
}

export interface ArcStep {
  id: string;
  kind: StepKind;
  prompt: string;
  /** Git branch to work on; created from the current HEAD on first use. Default: the arc's base branch. */
  branch?: string;
  /** The real change this step mirrors (hidden task tests come from its commit). */
  source?: { commit?: string; pull_request?: string };
  /** A scripted step: no agent runs; this executable (relative to the arc directory) changes the workspace as a teammate's commit would. Not graded. */
  script?: string;
  /** The teammate commit's message (scripted steps). Default "Refactor". */
  commit_message?: string;
  /** Decision procedure; defaults by kind and family. */
  decide?: StepDecision;
  /** Judge question keys that must all be `yes` for `require` steps. */
  require?: string[];
  /** Whether the intent's hidden tests run on this step (default: every step after the intent step). */
  check_intent?: boolean;
  /**
   * The decision this step is about, when it is not the arc's (an arc may probe more than one). Same
   * shape as the arc's `intent`; grading, the judge and the scripted user all read `step.intent ?? arc.intent`.
   */
  intent?: ArcIntent;
  grading: {
    accept: StepOutcome[];
    task_tests?: string[];
    regression_tests?: string[];
    judge_notes?: string;
  };
}

export interface Arc {
  id: string;
  project: string;
  family: ArcFamily;
  /** Where step 1 starts; the arc's own base. */
  base_commit: string;
  /**
   * A published teammate patch (relative to the project directory) applied on `base_commit` before
   * install, for every arm alike. A patched base starts from a single commit with no project history,
   * so neither the patch nor the history before it can be read back with git.
   */
  base_patch?: string;
  /**
   * A variant of the knowledge base stored for this base (for example `crowded`): the arms receive the
   * store kept under `<base key>-<variant>` instead of the base's own. The code and the patch are the same.
   */
  kb_variant?: string;
  intent: ArcIntent;
  steps: ArcStep[];
  notes?: string;
  /** The pattern (or patterns) the arc tests; the report's headline groups probes by it. */
  pattern?: ArcPattern | ArcPattern[];
  tier?: ArcTier;
  /** Set by the loader: the arc's directory (hidden test files the benchmark owns live under `tests/`). */
  _dir?: string;
}

export interface StepRecord {
  /** Harness observations about this session that are not grades, such as an arm's git hook failing on a branch switch. */
  notes?: string[];
  id: string;
  kind: StepKind;
  branch: string;
  start_commit: string;
  end_commit?: string;
  usage?: Usage;
  terminal_reason?: string;
  final_answer?: string;
  first_lookup_turn?: number;
  first_edit_turn?: number;
  /** The arm's decision store changed during the step (files in the repo or the external store). */
  record_written: boolean;
  /**
   * The session's work is committed with git hooks enabled, so an arm that installs a commit gate
   * (Kibi's pre-commit `kibi check --staged`) gets to refuse it. `blocked` records that refusal and
   * the hook's output; the harness then commits with `--no-verify` so the arc continues. Absent on
   * scripted steps and on records from before the gate was exercised.
   */
  commit_gate?: { blocked: boolean; output?: string };
  /** The scripted user's turns in this session: the agent message answered, the reply (empty when none was needed). */
  user_turns?: Array<{ agent_said: string; reply: string; why?: string; cost_usd: number }>;
  /** Permission prompts the session raised and how the scripted user answered (prompts not raised by a hook are denied unseen). */
  user_permissions?: Array<{ tool: string; decision: 'allow' | 'deny'; reason?: string; message?: string; why?: string; cost_usd: number }>;
  /**
   * Where in the session the governing decision was first shown to the agent (a lookup result or hook
   * context naming it), and what the session had spent by then. `null`: never shown. Absent: not
   * measurable (the decision has no recorded entry to look for, or the transcript is missing).
   */
  surfaced?: SurfacePoint | null;
  grade?: StepGrade;
}

export interface SurfacePoint {
  /** Assistant turn after which the decision was in the agent's context (0: before the first turn). */
  turn: number;
  via: 'hook' | 'lookup' | 'context';
  /** Tokens the session had processed by then: every model call up to and including that turn, input (cached or not) plus output. */
  tokens: number;
  /** The same calls at list price; absent when the model has no listed price. */
  cost_usd?: number;
}

/** One decision the equivalence audit checked in one arm's container. */
export interface AuditDecision {
  /** `arc`, or the id of the step whose own intent this is. */
  scope: string;
  /** The recorded entry's id, when the decision was found. */
  id?: string;
  /** How it was found. `stated-in-session`: the user states it in an intent step, so no container holds it at setup. */
  matched: 'requirement' | 'statement' | 'stated-in-session' | 'not-found';
  /** A hash of the facts every arm must hold (statement, reason, status, firmness, code paths); equal across arms when they are equivalent. */
  hash?: string;
  /** The recorded statement, kept for the surfacing measure. */
  statement?: string;
  failures: string[];
  warnings?: string[];
}

export interface AuditResult {
  arm: string;
  ok: boolean;
  /** Set when the arm has no decision store to audit (the `none` arm). */
  skipped?: string;
  decisions: AuditDecision[];
}

export type StepGrade = Omit<Grade, 'outcome'> & { outcome: StepOutcome };

export interface ArcRunRecord {
  id: string;
  spec: { project: string; arc: string; family: ArcFamily; arm: string; attempt: number; agent: AgentConfig; pattern?: ArcPattern[]; tier?: ArcTier };
  /** The equivalence audit of this run's container, taken after the arm's setup and before the first session. A failed audit makes the run invalid: it is not scored. */
  audit?: AuditResult;
  invalid_reason?: string;
  /** The agents-md arm's rendered file: its size and the budget it was checked against. */
  agents_md?: { rules: number; bytes: number; estimated_tokens: number; token_budget: number; budget_source: string; fits: boolean };
  started_at: string;
  finished_at?: string;
  steps: StepRecord[];
  /** Every step's outcome is in its accept set. */
  pass?: boolean;
  invalid?: boolean;
  /** Agent plus judge. Reports read agent_cost_usd and judge_cost_usd (or the steps) instead. */
  cost_usd?: number;
  agent_cost_usd?: number;
  judge_cost_usd?: number;
  /** The scripted user's model calls (benchmark overhead, like the judge). */
  user_sim_cost_usd?: number;
}
