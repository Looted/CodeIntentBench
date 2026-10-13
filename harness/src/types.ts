export type TaskKind = 'history' | 'conflict' | 'governed' | 'ungoverned';
export type OutcomeClass = 'S' | 'D' | 'C' | 'V' | 'N' | 'Q' | 'I' | 'F' | 'INVALID';

export interface ProjectConfig {
  name: string;
  repository: string;
  commit: string;
  license: string;
  description?: string;
  runtime?: { node?: string; package_manager?: string };
  setup: {
    install: string;
    build?: string;
  };
  tests: {
    /** Directory, relative to the repo root, in which the test commands run. */
    cwd?: string;
    /** Command that runs the whole hidden suite (regression tests). */
    all: string;
    /** Command that runs the given test files; file paths are appended. */
    files: string;
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
