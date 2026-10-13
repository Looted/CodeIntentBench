import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, isAbsolute } from 'node:path';
import { ARMS_DIR } from './config.ts';
import { stream } from './shell.ts';
import type { AgentConfig, ArmHost, Usage } from './types.ts';
import { expandHostValue, workspaceDir } from './workspace.ts';

export interface AgentResult {
  code: number | null;
  timed_out: boolean;
  usage: Usage;
  terminal_reason?: string;
  final_answer?: string;
  tools_available: string[];
  tool_calls: Array<{ turn: number; name: string; input_summary: string }>;
  first_rule_lookup_turn?: number;
  first_edit_turn?: number;
  permission_denials: number;
}

const EDIT_TOOLS = new Set(['Edit', 'Write', 'MultiEdit', 'NotebookEdit']);
const BASH_WRITE = /(>>?|\bsed\s+-i|\btee\b|\bmv\b|\bcp\b|\brm\b|\bgit\s+(apply|checkout|commit|reset))/;

/**
 * A separate, empty Claude Code configuration directory per run, so no user
 * memory, global CLAUDE.md, marketplace plugin or MCP server of the operator
 * leaks into the agent. Only the stored credentials are copied.
 */
function isolatedConfigDir(dir: string): string {
  const cfg = join(dir, 'claude-config');
  mkdirSync(cfg, { recursive: true });
  const source = process.env.CLAUDE_CONFIG_DIR ?? join(homedir(), '.claude');
  for (const f of ['.credentials.json']) {
    if (existsSync(join(source, f))) copyFileSync(join(source, f), join(cfg, f));
  }
  // Skip first-run prompts in non-interactive mode.
  writeFileSync(join(cfg, '.claude.json'), JSON.stringify({ hasCompletedOnboarding: true, theme: 'dark' }, null, 2));
  return cfg;
}

/** The arm's `path_prepend` entries as node_modules/.bin directories (project-local tools such as the kibi CLI). */
export function hostPathPrepend(host: ArmHost, hostDir: string): string[] {
  return (host.path_prepend ?? []).map((p) => join(isAbsolute(p) ? p : join(hostDir, p), 'node_modules', '.bin'));
}

/** `dir` holds this session's config and transcript; `hostDir` is where the arm's setup put its files (`${RUN_DIR}`), the same as `dir` except in arcs, where one arm setup serves several sessions. */
export function buildEnv(dir: string, arm: string, host: ArmHost, hostDir = dir): NodeJS.ProcessEnv {
  const env: NodeJS.ProcessEnv = { ...process.env };
  // The agent must not inherit the operator's session.
  for (const k of Object.keys(env)) {
    if (k === 'CLAUDECODE' || k === 'CLAUDE_CODE_SESSION_ID' || k === 'CLAUDE_CODE_ENTRYPOINT') delete env[k];
  }
  env.CLAUDE_CONFIG_DIR = isolatedConfigDir(dir);
  const prepend = hostPathPrepend(host, hostDir);
  if (prepend.length > 0) env.PATH = [...prepend, env.PATH ?? ''].join(':');
  for (const [k, v] of Object.entries(host.env ?? {})) env[k] = expandHostValue(v, hostDir, arm);
  return env;
}

export function buildArgs(agent: AgentConfig, dir: string, arm: string, host: ArmHost, prompt: string, hostDir = dir): string[] {
  const args = [
    '-p',
    '--output-format', 'stream-json',
    '--verbose',
    '--model', agent.model,
    '--max-turns', String(agent.max_turns),
    '--no-session-persistence',
  ];
  if (agent.permissions === 'accept-edits') {
    // Edits are auto-accepted; other tools run only if allow-listed, denials are recorded.
    args.push('--permission-mode', 'acceptEdits');
    const allowed = [...(agent.allowed_tools ?? []), ...(host.allowed_tools ?? [])];
    if (allowed.length) args.push('--allowedTools', allowed.join(','));
  } else {
    // The workspace is disposable; nobody is there to answer a permission prompt.
    args.push('--permission-mode', 'bypassPermissions', '--allow-dangerously-skip-permissions');
  }
  if (agent.effort) args.push('--effort', agent.effort);
  if (agent.max_budget_usd) args.push('--max-budget-usd', String(agent.max_budget_usd));
  for (const p of host.plugin_dirs ?? []) {
    const expanded = expandHostValue(p, hostDir, arm);
    args.push('--plugin-dir', isAbsolute(expanded) ? expanded : join(ARMS_DIR, arm, expanded));
  }
  if (host.mcp_config) args.push('--mcp-config', expandHostValue(host.mcp_config, hostDir, arm), '--strict-mcp-config');
  args.push(prompt);
  return args;
}

export async function runAgent(dir: string, arm: string, agent: AgentConfig, prompt: string): Promise<AgentResult> {
  const host = JSON.parse(readFileSync(join(ARMS_DIR, arm, 'host.json'), 'utf8').toString() || '{}') as ArmHost;
  return runAgentWithHost(dir, arm, agent, prompt, host);
}

export async function runAgentWithHost(dir: string, arm: string, agent: AgentConfig, prompt: string, host: ArmHost, workspace?: string, hostDir = dir): Promise<AgentResult> {
  const ws = workspace ?? workspaceDir(dir);
  const env = buildEnv(dir, arm, host, hostDir);
  const args = buildArgs(agent, dir, arm, host, prompt, hostDir);
  writeFileSync(join(dir, 'agent-command.json'), JSON.stringify({ cmd: 'claude', args, env_overrides: host.env ?? {} }, null, 2));
  const r = await stream('claude', args, {
    cwd: ws,
    env,
    stdoutFile: join(dir, 'transcript.jsonl'),
    stderrFile: join(dir, 'agent-stderr.log'),
    timeoutMs: agent.timeout_minutes * 60_000,
  });
  const parsed = parseTranscript(readFileSync(join(dir, 'transcript.jsonl'), 'utf8'));
  parsed.usage.wall_seconds = Math.round(r.duration_ms / 1000);
  return { code: r.code, timed_out: r.timed_out, ...parsed };
}

export function parseTranscript(text: string): Omit<AgentResult, 'code' | 'timed_out'> {
  const usage: Usage = { input_tokens: 0, cache_read_input_tokens: 0, cache_creation_input_tokens: 0, output_tokens: 0, cost_usd: 0, tool_calls: 0, turns: 0, wall_seconds: 0 };
  const out: Omit<AgentResult, 'code' | 'timed_out'> = { usage, tools_available: [], tool_calls: [], permission_denials: 0 };
  let turn = 0;
  for (const line of text.split('\n')) {
    if (!line.trim()) continue;
    let ev: any;
    try { ev = JSON.parse(line); } catch { continue; }
    if (ev.type === 'system' && ev.subtype === 'init') out.tools_available = ev.tools ?? [];
    if (ev.type === 'assistant') {
      turn += 1;
      for (const block of ev.message?.content ?? []) {
        if (block.type !== 'tool_use') continue;
        usage.tool_calls += 1;
        const name: string = block.name ?? '';
        const input = block.input ?? {};
        const summary = typeof input.command === 'string' ? input.command.slice(0, 200)
          : typeof input.file_path === 'string' ? input.file_path
          : typeof input.query === 'string' ? input.query.slice(0, 200)
          : JSON.stringify(input).slice(0, 200);
        out.tool_calls.push({ turn, name, input_summary: summary });
        // A lookup in any arm's decision store: Kibi tools, tracker or memory tools, or reading docs/decisions or AGENTS.md.
        const target = String(input.command ?? input.file_path ?? input.path ?? '');
        const isRuleLookup = /kb_|kibi|tracker_|memory_/i.test(name) || (/^(Bash|Read|Grep|Glob)$/.test(name) && /\bkibi\b|docs\/decisions|AGENTS\.md/.test(target));
        if (isRuleLookup && out.first_rule_lookup_turn === undefined) out.first_rule_lookup_turn = turn;
        const isEdit = EDIT_TOOLS.has(name) || (name === 'Bash' && BASH_WRITE.test(String(input.command ?? '')));
        if (isEdit && out.first_edit_turn === undefined) out.first_edit_turn = turn;
      }
    }
    if (ev.type === 'result') {
      const u = ev.usage ?? {};
      usage.input_tokens = u.input_tokens ?? 0;
      usage.cache_read_input_tokens = u.cache_read_input_tokens ?? 0;
      usage.cache_creation_input_tokens = u.cache_creation_input_tokens ?? 0;
      usage.output_tokens = u.output_tokens ?? 0;
      usage.cost_usd = ev.total_cost_usd ?? 0;
      usage.turns = ev.num_turns ?? turn;
      out.terminal_reason = ev.terminal_reason ?? ev.subtype;
      out.final_answer = typeof ev.result === 'string' ? ev.result : undefined;
      out.permission_denials = (ev.permission_denials ?? []).length;
    }
  }
  if (usage.turns === 0) usage.turns = turn;
  return out;
}
