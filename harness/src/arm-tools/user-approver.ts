// The scripted user at the permission prompt. Claude Code, run headless with
// --permission-prompt-tool, sends here every prompt a person would see: a hook asking for
// confirmation (Kibi asks before an edit of code that implements a firm requirement), or a
// tool call outside the allow-list. A prompt raised by a hook goes to the scripted user, who
// reads the hook's reason as a person would; any other prompt is denied, as it was before the
// scripted user existed (the allow-list stays the benchmark's). Usage: node user-approver.ts --dir STEP_DIR
import { appendFileSync, existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { serve } from './mcp-lite.ts';
import { askPermission } from '../user-sim.ts';

const dir = process.argv[process.argv.indexOf('--dir') + 1];
const log = (o: unknown) => appendFileSync(join(dir, 'user-permissions.jsonl'), JSON.stringify(o) + '\n');

/** The reason of the latest PreToolUse hook that asked, from the newest transcript of this session. */
function latestAsk(): string | undefined {
  const files = readdirSync(dir).filter((f) => /^transcript.*\.jsonl$/.test(f)).map((f) => join(dir, f)).sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs);
  if (!files.length) return undefined;
  const lines = readFileSync(files[0], 'utf8').trim().split('\n').reverse();
  for (const line of lines) {
    let ev: any; try { ev = JSON.parse(line); } catch { continue; }
    if (ev.type === 'assistant') return undefined; // the last thing before this prompt was the model, not a hook
    if (ev.type !== 'system' || !/hook/.test(String(ev.subtype))) continue;
    const raw = String(ev.output ?? ev.stdout ?? '');
    try {
      const o = JSON.parse(raw);
      const h = o?.hookSpecificOutput;
      if (h?.permissionDecision === 'ask') return String(h.permissionDecisionReason ?? 'A hook asked for confirmation.');
    } catch { /* not JSON */ }
  }
  return undefined;
}

serve('cib_user', '0.1.0', [{
  name: 'permission',
  description: 'Internal to the benchmark harness: answers permission prompts. Do not call it.',
  inputSchema: { type: 'object', properties: { tool_name: { type: 'string' }, input: { type: 'object' }, tool_use_id: { type: 'string' } } },
  handler: async (args) => {
    const tool = String(args.tool_name ?? '');
    if (!tool) return JSON.stringify({ behavior: 'deny', message: 'Not a tool for the agent.' });
    // The hook's event may land in the transcript a moment after the prompt is raised.
    let reason = latestAsk();
    for (let i = 0; i < 4 && reason === undefined; i++) { await new Promise((r) => setTimeout(r, 500)); reason = latestAsk(); }
    if (reason === undefined) {
      log({ tool, input: args.input, decision: 'deny', why: 'not raised by a hook: outside the allow-list', cost_usd: 0 });
      return JSON.stringify({ behavior: 'deny', message: `Permission to use ${tool} with these arguments has not been granted.` });
    }
    const ctxFile = join(dir, 'user-context.json');
    const ctx = existsSync(ctxFile) ? JSON.parse(readFileSync(ctxFile, 'utf8')) : {};
    const a = askPermission(dir, ctx, tool, args.input ?? {}, reason);
    log({ tool, input: args.input, reason, decision: a.allow ? 'allow' : 'deny', message: a.message, why: a.why, cost_usd: a.cost_usd });
    return JSON.stringify(a.allow ? { behavior: 'allow', updatedInput: args.input ?? {} } : { behavior: 'deny', message: a.message || 'The user declined.' });
  },
}]);
