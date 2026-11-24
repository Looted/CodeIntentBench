// A minimal stdio MCP server: newline-delimited JSON-RPC, `initialize`,
// `tools/list`, `tools/call`, `ping`. No dependency, deterministic, enough for
// the benchmark's passive-store arms (tracker, memory). Not a general MCP library.
import { createInterface } from 'node:readline';

export interface ToolDef {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  handler: (args: Record<string, any>) => string | Promise<string>;
}

export function serve(name: string, version: string, tools: ToolDef[]): void {
  const byName = new Map(tools.map((t) => [t.name, t]));
  const write = (msg: unknown) => process.stdout.write(JSON.stringify(msg) + '\n');
  const rl = createInterface({ input: process.stdin, crlfDelay: Infinity });
  rl.on('line', async (line) => {
    if (!line.trim()) return;
    let req: any;
    try { req = JSON.parse(line); } catch { return; }
    const { id, method, params } = req;
    const reply = (result: unknown) => { if (id !== undefined) write({ jsonrpc: '2.0', id, result }); };
    const fail = (code: number, message: string) => { if (id !== undefined) write({ jsonrpc: '2.0', id, error: { code, message } }); };
    try {
      if (method === 'initialize') {
        reply({ protocolVersion: params?.protocolVersion ?? '2025-06-18', capabilities: { tools: {} }, serverInfo: { name, version } });
      } else if (method === 'notifications/initialized' || method === 'notifications/cancelled') {
        // nothing to do
      } else if (method === 'ping') {
        reply({});
      } else if (method === 'tools/list') {
        reply({ tools: tools.map((t) => ({ name: t.name, description: t.description, inputSchema: t.inputSchema })) });
      } else if (method === 'tools/call') {
        const tool = byName.get(params?.name);
        if (!tool) { reply({ content: [{ type: 'text', text: `unknown tool ${params?.name}` }], isError: true }); return; }
        // A missing required argument is an error, as real MCP servers answer it (schema validation).
        const args = params?.arguments ?? {};
        const missing = ((tool.inputSchema as { required?: string[] }).required ?? []).filter((k) => args[k] === undefined || args[k] === null || args[k] === '');
        if (missing.length) { reply({ content: [{ type: 'text', text: `Invalid arguments: missing required ${missing.map((k) => `'${k}'`).join(', ')}` }], isError: true }); return; }
        try {
          const text = await tool.handler(args);
          reply({ content: [{ type: 'text', text }] });
        } catch (e) {
          reply({ content: [{ type: 'text', text: (e as Error).message }], isError: true });
        }
      } else if (id !== undefined) {
        fail(-32601, `method not found: ${method}`);
      }
    } catch (e) {
      fail(-32603, (e as Error).message);
    }
  });
}

/** A light English suffix stemmer (plurals, -ing, -ed), as a search engine's default analyser applies: "redirects" finds "redirect". */
export function stem(t: string): string {
  if (t.length <= 4 || /\d/.test(t)) return t;
  if (t.endsWith('ies')) return `${t.slice(0, -3)}y`;
  if (t.endsWith('ing') && t.length > 5) return t.slice(0, -3);
  if (t.endsWith('ed') && t.length > 4) return t.slice(0, -2);
  if (t.endsWith('es') && /(ss|sh|ch|x|z)es$/.test(t)) return t.slice(0, -2);
  if (t.endsWith('s') && !t.endsWith('ss') && !t.endsWith('us') && !t.endsWith('is')) return t.slice(0, -1);
  return t;
}

/** Lower-case alphanumeric tokens, stemmed, for keyword ranking. */
export function tokens(s: string): string[] {
  return (s.toLowerCase().match(/[a-z0-9_]+/g) ?? []).filter((t) => t.length > 1).map(stem);
}

/** TF-IDF style score of a query against documents; returns indices with score > 0, best first. */
export function rank(query: string, docs: string[], limit: number): Array<{ index: number; score: number }> {
  const q = [...new Set(tokens(query))];
  if (q.length === 0) return [];
  const docTokens = docs.map(tokens);
  const n = docs.length;
  const df = new Map<string, number>();
  for (const dt of docTokens) for (const t of new Set(dt)) df.set(t, (df.get(t) ?? 0) + 1);
  const scored = docTokens.map((dt, index) => {
    let score = 0;
    for (const t of q) {
      const tf = dt.filter((x) => x === t).length;
      if (tf === 0) continue;
      score += (1 + Math.log(tf)) * Math.log(1 + n / (df.get(t) ?? 1));
    }
    return { index, score };
  });
  return scored.filter((s) => s.score > 0).sort((a, b) => b.score - a.score || a.index - b.index).slice(0, limit);
}

/** Argument after `--store`, the JSON file the server persists to. */
export function storePath(): string {
  const i = process.argv.indexOf('--store');
  if (i < 0 || !process.argv[i + 1]) throw new Error('--store <file> is required');
  return process.argv[i + 1];
}
