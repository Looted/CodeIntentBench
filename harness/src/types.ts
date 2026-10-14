export type TaskKind = 'history' | 'conflict' | 'governed' | 'ungoverned';
export type OutcomeClass = 'S' | 'D' | 'C' | 'V' | 'N' | 'Q' | 'I' | 'F' | 'INVALID';

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
}

export interface Rule {
  id: string;
  statement: string;
  rationale?: string;
  scope: { paths: string[]; symbols?: string[] };
  tests?: string[];
}

export interface Task {
  id: string;
  project: string;
  base_commit?: string;
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
}

export interface RunSpec {
  project: string;
  task: string;
  arm: string;
  attempt: number;
  agent: AgentConfig;
}

export interface Usage {
  input_tokens: number;
  cache_read_input_tokens: number;
  cache_creation_input_tokens: number;
  output_tokens: number;
  cost_usd: number;
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
  judge?: { answers: JudgeAnswer[]; model: string; cost_usd: number };
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

export interface ArcIntent {
  /** The decision in one or two sentences, as ground truth for the judge. Never shown to the agent. */
  statement: string;
  reason: string;
  /** Code locations that enforce it once implemented, for the navigation family. */
  symbols?: string[];
  /** Hidden tests that verify it, as `<file>::<name>`; restored from `tests_commit`, or from the arc's own `tests/` directory when no commit is given, whenever a step checks the intent. */
  tests?: string[];
  tests_commit?: string;
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
  /** Decision procedure; defaults by kind and family. */
  decide?: StepDecision;
  /** Judge question keys that must all be `yes` for `require` steps. */
  require?: string[];
  /** Whether the intent's hidden tests run on this step (default: every step after the intent step). */
  check_intent?: boolean;
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
  intent: ArcIntent;
  steps: ArcStep[];
  notes?: string;
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
  grade?: StepGrade;
}

export type StepGrade = Omit<Grade, 'outcome'> & { outcome: StepOutcome };

export interface ArcRunRecord {
  id: string;
  spec: { project: string; arc: string; family: ArcFamily; arm: string; attempt: number; agent: AgentConfig };
  started_at: string;
  finished_at?: string;
  steps: StepRecord[];
  /** Every step's outcome is in its accept set. */
  pass?: boolean;
  invalid?: boolean;
  cost_usd?: number;
}
