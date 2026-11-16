import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, isAbsolute } from 'node:path';
import { ARMS_DIR, HARNESS_DIR } from './config.ts';
import { stream } from './shell.ts';
import { priceTokens } from './pricing.ts';
import type { AgentConfig, ArmHost, ModelTokens, SurfacePoint, Usage } from './types.ts';
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
  /** Claude Code's session id, used to resume the session with the scripted user's reply. */
  session_id?: string;
  /** The scripted user's replies, in order, with the agent message each answered. */
  user_turns?: Array<{ agent_said: string; reply: string; why?: string; cost_usd: number }>;
  /** What the agent was shown about recorded decisions: results of lookups in a decision store and context injected by hooks, truncated. The judge reads these; the agent's other tool results are not kept. */
  evidence?: Array<{ turn: number; kind: 'lookup' | 'hook'; name: string; text: string }>;
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
export function buildEnv(dir: string, arm: string, host: ArmHost, hostDir = dir, keepConfig = false): NodeJS.ProcessEnv {
  const env: NodeJS.ProcessEnv = { ...process.env };
  // The agent must not inherit the operator's session.
  for (const k of Object.keys(env)) {
    if (k === 'CLAUDECODE' || k === 'CLAUDE_CODE_SESSION_ID' || k === 'CLAUDE_CODE_ENTRYPOINT') delete env[k];
  }
  env.CLAUDE_CONFIG_DIR = keepConfig ? join(dir, 'claude-config') : isolatedConfigDir(dir);
  const prepend = hostPathPrepend(host, hostDir);
  if (prepend.length > 0) env.PATH = [...prepend, env.PATH ?? ''].join(':');
  for (const [k, v] of Object.entries(host.env ?? {})) env[k] = expandHostValue(v, hostDir, arm);
  return env;
}

export function buildArgs(agent: AgentConfig, dir: string, arm: string, host: ArmHost, prompt: string, hostDir = dir, resume?: string): string[] {
  const args = [
    '-p',
    '--output-format', 'stream-json',
    '--verbose',
    '--model', agent.model,
    '--max-turns', String(agent.max_turns),
  ];
  // Sessions persist (in the run's isolated config dir) so the scripted user's reply can resume them.
  if (resume) args.push('--resume', resume);
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
  // Headless, the AskUserQuestion tool is denied and the agent goes on without an answer. With it off, an
  // agent that wants to ask ends its turn with the question, and the scripted user answers in every arm.
  args.push('--disallowedTools', 'AskUserQuestion');
  if (agent.max_budget_usd) args.push('--max-budget-usd', String(agent.max_budget_usd));
  for (const p of host.plugin_dirs ?? []) {
    const expanded = expandHostValue(p, hostDir, arm);
    args.push('--plugin-dir', isAbsolute(expanded) ? expanded : join(ARMS_DIR, arm, expanded));
  }
  const mcp = host.mcp_config ? [expandHostValue(host.mcp_config, hostDir, arm)] : [];
  if (agent.user_permissions) mcp.push(join(dir, 'user-mcp.json'));
  // --mcp-config takes several files; a flag after it ends the list before the prompt.
  if (mcp.length) args.push('--mcp-config', ...mcp);
  if (host.mcp_config) args.push('--strict-mcp-config');
  if (agent.user_permissions) args.push('--permission-prompt-tool', 'mcp__approvals__permission');
  args.push(prompt);
  return args;
}

export async function runAgent(dir: string, arm: string, agent: AgentConfig, prompt: string): Promise<AgentResult> {
  const host = JSON.parse(readFileSync(join(ARMS_DIR, arm, 'host.json'), 'utf8').toString() || '{}') as ArmHost;
  return runAgentWithHost(dir, arm, agent, prompt, host);
}

export async function runAgentWithHost(dir: string, arm: string, agent: AgentConfig, prompt: string, host: ArmHost, workspace?: string, hostDir = dir, resume?: { session: string; round: number }): Promise<AgentResult> {
  const ws = workspace ?? workspaceDir(dir);
  const env = buildEnv(dir, arm, host, hostDir, Boolean(resume));
  const args = buildArgs(agent, dir, arm, host, prompt, hostDir, resume?.session);
  const sfx = resume ? `-reply${resume.round}` : '';
  if (agent.user_permissions) {
    writeFileSync(join(dir, 'user-mcp.json'), JSON.stringify({ mcpServers: { approvals: { command: process.execPath, args: [join(HARNESS_DIR, 'src', 'arm-tools', 'user-approver.ts'), '--dir', dir] } } }, null, 2));
  }
  writeFileSync(join(dir, `agent-command${sfx}.json`), JSON.stringify({ cmd: 'claude', args, env_overrides: host.env ?? {} }, null, 2));
  const r = await stream('claude', args, {
    cwd: ws,
    env,
    stdoutFile: join(dir, `transcript${sfx}.jsonl`),
    stderrFile: join(dir, `agent-stderr${sfx}.log`),
    timeoutMs: agent.timeout_minutes * 60_000,
  });
  const parsed = parseTranscript(readFileSync(join(dir, `transcript${sfx}.jsonl`), 'utf8'));
  parsed.usage.wall_seconds = Math.round(r.duration_ms / 1000);
  return { code: r.code, timed_out: r.timed_out, ...parsed };
}

/**
 * A lookup in any arm's decision store: Kibi tools, tracker or memory tools, or reading docs/decisions or AGENTS.md.
 * The workspace path itself may contain an arm's name (runs/<arc>/kibi/…), so paths are matched on the store's own files, not on the word.
 */
export function isDecisionLookup(name: string, input: Record<string, any>): boolean {
  const target = String(input.command ?? input.file_path ?? input.path ?? '');
  return /kb_|tracker_|memory_/i.test(name)
    || (name === 'Bash' && /(^|[\s;&|(])kibi\s/.test(String(input.command ?? '')))
    || (/^(Bash|Read|Grep|Glob)$/.test(name) && /(^|\/)\.kb\/|docs\/decisions|AGENTS\.md/.test(target));
}

/** How a recorded entry shows up in what an agent is shown: its id (as written, or with spaces as the tracker titles it) or the opening of its statement. */
export function decisionNeedles(id: string | undefined, statement: string | undefined): string[] {
  const out: string[] = [];
  if (id) { out.push(id.toLowerCase()); if (id.includes('-')) out.push(id.replace(/-/g, ' ').toLowerCase()); }
  const s = (statement ?? '').replace(/\s+/g, ' ').trim().toLowerCase();
  if (s.length >= 30) out.push(s.slice(0, 60));
  return out;
}

/**
 * Where a session first showed the agent a given decision, and what the session had spent by then.
 * `transcripts` are the session's stream-json transcripts in order (the first run, then each
 * resumption). The decision counts as shown when a result of a lookup in the decision store, or
 * context a hook injected, contains one of the needles. Reading the code that implements it does
 * not count. Spend is every model call seen up to that point, subagents included: input (cached or
 * not) plus output tokens, and the same at list price. Returns null when it was never shown.
 */
export function surfacePoint(transcripts: string[], needles: string[]): SurfacePoint | null {
  if (needles.length === 0) return null;
  const has = (t: unknown) => { const s = (typeof t === 'string' ? t : JSON.stringify(t ?? '')).replace(/\s+/g, ' ').toLowerCase(); return needles.some((n) => s.includes(n)); };
  const messages = new Map<string, { model: string; u: any }>();
  const pending = new Set<string>();
  let turn = 0;
  const spent = (via: SurfacePoint['via']): SurfacePoint => {
    let tokens = 0; let cost = 0; let priced = true;
    for (const { model, u } of messages.values()) {
      const w = u.cache_creation_input_tokens ?? 0;
      const w5 = u.cache_creation?.ephemeral_5m_input_tokens ?? 0, w1 = u.cache_creation?.ephemeral_1h_input_tokens ?? 0;
      const t = { input: u.input_tokens ?? 0, output: u.output_tokens ?? 0, cache_read: u.cache_read_input_tokens ?? 0, cache_write_5m: w5, cache_write_1h: w5 + w1 > 0 ? w1 : w };
      tokens += t.input + t.output + t.cache_read + t.cache_write_5m + t.cache_write_1h;
      const c = priceTokens(model, t);
      if (c === undefined) priced = false; else cost += c;
    }
    return { turn, via, tokens, ...(priced ? { cost_usd: cost } : {}) };
  };
  for (const text of transcripts) {
    for (const line of text.split('\n')) {
      if (!line.trim()) continue;
      let ev: any;
      try { ev = JSON.parse(line); } catch { continue; }
      if (ev.type === 'system' && ev.subtype === 'hook_response') {
        let ctx = '';
        try { const o = JSON.parse(ev.output ?? ev.stdout ?? ''); ctx = o?.hookSpecificOutput?.additionalContext ?? o?.additionalContext ?? o?.systemMessage ?? o?.hookSpecificOutput?.permissionDecisionReason ?? ''; } catch { ctx = String(ev.output ?? ''); }
        if (ctx && has(ctx)) return spent('hook');
      }
      if (ev.type === 'assistant' && ev.message?.usage && ev.message?.id) messages.set(ev.message.id, { model: String(ev.message.model ?? 'unknown'), u: ev.message.usage });
      if (ev.type === 'assistant' && !ev.parent_tool_use_id) {
        turn += 1;
        for (const block of ev.message?.content ?? []) if (block.type === 'tool_use' && typeof block.id === 'string' && isDecisionLookup(String(block.name ?? ''), block.input ?? {})) pending.add(block.id);
      }
      if (ev.type === 'user') {
        for (const block of ev.message?.content ?? []) {
          if (block.type !== 'tool_result' || !pending.has(block.tool_use_id)) continue;
          pending.delete(block.tool_use_id);
          const content = Array.isArray(block.content) ? block.content.map((c: any) => c.text ?? '').join('\n') : block.content;
          if (has(content)) return spent('lookup');
        }
      }
    }
  }
  return null;
}

export function parseTranscript(text: string): Omit<AgentResult, 'code' | 'timed_out'> {
  const usage: Usage = { input_tokens: 0, cache_read_input_tokens: 0, cache_creation_input_tokens: 0, output_tokens: 0, cost_usd: 0, tool_calls: 0, turns: 0, wall_seconds: 0 };
  const out: Omit<AgentResult, 'code' | 'timed_out'> = { usage, tools_available: [], tool_calls: [], permission_denials: 0 };
  let turn = 0;
  // Per-message usage, last seen per message id (a message's content blocks arrive as separate events carrying the same usage).
  const messages = new Map<string, { model: string; u: any }>();
  let sawResult = false;
  const evidence: NonNullable<AgentResult['evidence']> = [];
  const pendingLookups = new Map<string, string>(); // tool_use id → tool name, for lookups awaiting their result
  const clip = (t: unknown, n = 2000) => { const str = typeof t === 'string' ? t : JSON.stringify(t); return str.length > n ? str.slice(0, n) + ' …' : str; };
  for (const line of text.split('\n')) {
    if (!line.trim()) continue;
    let ev: any;
    try { ev = JSON.parse(line); } catch { continue; }
    if (ev.type === 'system' && ev.subtype === 'init') { out.tools_available = ev.tools ?? []; if (ev.session_id) out.session_id = ev.session_id; }
    if (ev.type === 'system' && ev.subtype === 'hook_response') {
      // Context a hook injected (Kibi's requirement snippets, session-start summaries); "{}" or empty output injects nothing.
      let ctx = '';
      try { const o = JSON.parse(ev.output ?? ev.stdout ?? ''); ctx = o?.hookSpecificOutput?.additionalContext ?? o?.additionalContext ?? o?.systemMessage ?? ''; } catch { ctx = String(ev.output ?? '').trim(); if (ctx === '{}') ctx = ''; }
      if (ctx) evidence.push({ turn, kind: 'hook', name: String(ev.hook_name ?? 'hook'), text: clip(ctx) });
    }
    if (ev.type === 'user') {
      for (const block of ev.message?.content ?? []) {
        if (block.type !== 'tool_result') continue;
        const name = pendingLookups.get(block.tool_use_id);
        if (!name) continue;
        pendingLookups.delete(block.tool_use_id);
        const content = Array.isArray(block.content) ? block.content.map((c: any) => c.text ?? '').join('\n') : block.content;
        evidence.push({ turn, kind: 'lookup', name, text: clip(content) });
      }
    }
    if (ev.type === 'assistant' && ev.message?.usage && ev.message?.id) messages.set(ev.message.id, { model: String(ev.message.model ?? 'unknown'), u: ev.message.usage });
    // Subagent (sidechain) messages carry parent_tool_use_id; they are not turns of the session itself.
    if (ev.type === 'assistant' && !ev.parent_tool_use_id) {
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
        const isRuleLookup = isDecisionLookup(name, input);
        if (isRuleLookup && out.first_rule_lookup_turn === undefined) out.first_rule_lookup_turn = turn;
        if (isRuleLookup && typeof block.id === 'string') pendingLookups.set(block.id, name);
        const isEdit = EDIT_TOOLS.has(name) || (name === 'Bash' && BASH_WRITE.test(String(input.command ?? '')));
        if (isEdit && out.first_edit_turn === undefined) out.first_edit_turn = turn;
      }
    }
    if (ev.type === 'result') {
      sawResult = true;
      const u = ev.usage ?? {};
      const mu = ev.modelUsage && typeof ev.modelUsage === 'object' ? ev.modelUsage as Record<string, any> : undefined;
      if (mu && Object.keys(mu).length > 0) {
        // modelUsage covers the whole session, subagents included; the top-level usage covers the main thread's last segment only.
        usage.by_model = {};
        for (const [model, m] of Object.entries(mu)) {
          const t: ModelTokens = {
            input_tokens: m.inputTokens ?? 0, output_tokens: m.outputTokens ?? 0, cache_read_input_tokens: m.cacheReadInputTokens ?? 0,
            cache_creation_input_tokens: m.cacheCreationInputTokens ?? 0,
            cache_creation_5m_input_tokens: m.cacheCreationEphemeral5mInputTokens ?? 0, cache_creation_1h_input_tokens: m.cacheCreationEphemeral1hInputTokens ?? 0,
            cost_usd: m.costUSD ?? 0,
          };
          // Older CLIs report only the total cache write; Claude Code writes with the 1-hour TTL by default.
          if (t.cache_creation_5m_input_tokens + t.cache_creation_1h_input_tokens === 0) t.cache_creation_1h_input_tokens = t.cache_creation_input_tokens;
          usage.by_model[model] = t;
        }
        sumModels(usage);
        usage.source = 'model_usage';
      } else {
        usage.input_tokens = u.input_tokens ?? 0;
        usage.cache_read_input_tokens = u.cache_read_input_tokens ?? 0;
        usage.cache_creation_input_tokens = u.cache_creation_input_tokens ?? 0;
        usage.cache_creation_5m_input_tokens = u.cache_creation?.ephemeral_5m_input_tokens;
        usage.cache_creation_1h_input_tokens = u.cache_creation?.ephemeral_1h_input_tokens;
        usage.output_tokens = u.output_tokens ?? 0;
        usage.source = 'result_usage';
      }
      usage.cost_usd = ev.total_cost_usd ?? 0;
      usage.turns = ev.num_turns ?? turn;
      out.terminal_reason = ev.terminal_reason ?? ev.subtype;
      out.final_answer = typeof ev.result === 'string' ? ev.result : undefined;
      out.permission_denials = (ev.permission_denials ?? []).length;
    }
  }
  if (!sawResult && messages.size > 0) {
    // Killed before Claude Code wrote its result (timeout): rebuild the tokens from the messages seen and price them.
    usage.by_model = {};
    for (const { model, u } of messages.values()) {
      const t = (usage.by_model[model] ??= { input_tokens: 0, output_tokens: 0, cache_read_input_tokens: 0, cache_creation_input_tokens: 0, cache_creation_5m_input_tokens: 0, cache_creation_1h_input_tokens: 0, cost_usd: 0 });
      t.input_tokens += u.input_tokens ?? 0; t.output_tokens += u.output_tokens ?? 0; t.cache_read_input_tokens += u.cache_read_input_tokens ?? 0;
      const w = u.cache_creation_input_tokens ?? 0; t.cache_creation_input_tokens += w;
      const w5 = u.cache_creation?.ephemeral_5m_input_tokens ?? 0, w1 = u.cache_creation?.ephemeral_1h_input_tokens ?? 0;
      if (w5 + w1 > 0) { t.cache_creation_5m_input_tokens += w5; t.cache_creation_1h_input_tokens += w1; } else t.cache_creation_1h_input_tokens += w;
    }
    for (const [model, t] of Object.entries(usage.by_model)) t.cost_usd = priceTokens(model, tokenCounts(t)) ?? 0;
    sumModels(usage);
    usage.cost_usd = Object.values(usage.by_model).reduce((a, t) => a + t.cost_usd, 0);
    usage.source = 'messages';
    usage.cost_estimated = true;
    out.terminal_reason ??= 'killed_without_result';
  }
  if (usage.by_model && !usage.cost_estimated) {
    const listed = Object.entries(usage.by_model).map(([m, t]) => priceTokens(m, tokenCounts(t)));
    if (listed.every((x) => x !== undefined)) {
      const sum = (listed as number[]).reduce((a, b) => a + b, 0);
      if (sum > 0 && Math.abs(usage.cost_usd - sum) / sum > 0.02) usage.cost_mismatch = `${usage.cost_usd.toFixed(4)}/${sum.toFixed(4)}`;
    }
  }
  if (usage.turns === 0) usage.turns = turn;
  if (evidence.length) out.evidence = evidence.slice(0, 60);
  return out;
}

function tokenCounts(t: ModelTokens) {
  return { input: t.input_tokens, output: t.output_tokens, cache_read: t.cache_read_input_tokens, cache_write_5m: t.cache_creation_5m_input_tokens, cache_write_1h: t.cache_creation_1h_input_tokens };
}

function sumModels(usage: Usage): void {
  const ms = Object.values(usage.by_model ?? {});
  const sum = (f: (t: ModelTokens) => number) => ms.reduce((a, t) => a + f(t), 0);
  usage.input_tokens = sum((t) => t.input_tokens);
  usage.output_tokens = sum((t) => t.output_tokens);
  usage.cache_read_input_tokens = sum((t) => t.cache_read_input_tokens);
  usage.cache_creation_input_tokens = sum((t) => t.cache_creation_input_tokens);
  usage.cache_creation_5m_input_tokens = sum((t) => t.cache_creation_5m_input_tokens);
  usage.cache_creation_1h_input_tokens = sum((t) => t.cache_creation_1h_input_tokens);
}

/** One session made of the first run and its resumptions: usage summed, tool calls and evidence in order, the last answer. */
export function mergeAgentResults(parts: AgentResult[]): AgentResult {
  if (parts.length === 1) return parts[0];
  const [first] = parts;
  const out: AgentResult = { ...first, usage: { ...first.usage, by_model: undefined }, tool_calls: [], evidence: [] };
  const byModel: Record<string, ModelTokens> = {};
  let offset = 0;
  const u = out.usage;
  u.input_tokens = u.output_tokens = u.cache_read_input_tokens = u.cache_creation_input_tokens = u.cost_usd = u.tool_calls = u.turns = u.wall_seconds = 0;
  u.cache_creation_5m_input_tokens = u.cache_creation_1h_input_tokens = 0;
  // A resumed session's result event reports the session's cumulative tokens and cost so far (its turn
  // count is its own). Each resumption therefore adds only what it spent beyond the part before it in the
  // same session; summing the parts as they are counts every earlier part again.
  let prev: AgentResult | undefined;
  for (const p of parts) {
    const resumed = prev !== undefined && p.session_id !== undefined && p.session_id === prev.session_id;
    const base = resumed ? prev!.usage : undefined;
    const delta = (now: number | undefined, before: number | undefined) => Math.max(0, (now ?? 0) - (resumed ? (before ?? 0) : 0));
    for (const [m, t] of Object.entries(p.usage.by_model ?? {})) {
      const acc = (byModel[m] ??= { input_tokens: 0, output_tokens: 0, cache_read_input_tokens: 0, cache_creation_input_tokens: 0, cache_creation_5m_input_tokens: 0, cache_creation_1h_input_tokens: 0, cost_usd: 0 });
      const was = base?.by_model?.[m];
      for (const k of Object.keys(acc) as (keyof ModelTokens)[]) acc[k] += delta(t[k], was?.[k]);
    }
    u.input_tokens += delta(p.usage.input_tokens, base?.input_tokens); u.output_tokens += delta(p.usage.output_tokens, base?.output_tokens);
    u.cache_read_input_tokens += delta(p.usage.cache_read_input_tokens, base?.cache_read_input_tokens); u.cache_creation_input_tokens += delta(p.usage.cache_creation_input_tokens, base?.cache_creation_input_tokens);
    u.cache_creation_5m_input_tokens += delta(p.usage.cache_creation_5m_input_tokens, base?.cache_creation_5m_input_tokens); u.cache_creation_1h_input_tokens += delta(p.usage.cache_creation_1h_input_tokens, base?.cache_creation_1h_input_tokens);
    u.cost_usd += delta(p.usage.cost_usd, base?.cost_usd);
    prev = p;
    u.tool_calls += p.usage.tool_calls; u.wall_seconds += p.usage.wall_seconds; u.turns += p.usage.turns;
    if (p.usage.cost_estimated) u.cost_estimated = true;
    if (p.usage.cost_mismatch) u.cost_mismatch = [u.cost_mismatch, p.usage.cost_mismatch].filter(Boolean).join('; ');
    out.tool_calls.push(...p.tool_calls.map((c) => ({ ...c, turn: c.turn + offset })));
    out.evidence!.push(...(p.evidence ?? []).map((e) => ({ ...e, turn: e.turn + offset })));
    if (out.first_rule_lookup_turn === undefined && p.first_rule_lookup_turn !== undefined) out.first_rule_lookup_turn = p.first_rule_lookup_turn + offset;
    if (out.first_edit_turn === undefined && p.first_edit_turn !== undefined) out.first_edit_turn = p.first_edit_turn + offset;
    offset += p.usage.turns;
  }
  const last = parts[parts.length - 1];
  u.by_model = byModel;
  out.permission_denials = parts.reduce((a, p) => a + p.permission_denials, 0);
  out.timed_out = parts.some((p) => p.timed_out);
  out.code = last.code; out.terminal_reason = last.terminal_reason; out.final_answer = last.final_answer;
  out.evidence = out.evidence!.slice(0, 60);
  return out;
}
