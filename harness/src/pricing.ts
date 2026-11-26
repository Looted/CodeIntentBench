// List prices per million tokens, used only to cross-check the cost Claude Code reports and to
// estimate the cost of a session that ended without a result event (killed on timeout).
// Override or extend with FENCEBENCH_MODEL_PRICING='{"model":{"input":2,"output":10,"cache_read":0.1,"cache_write_5m":2.5,"cache_write_1h":4}}'.
export interface ModelPrice { input: number; output: number; cache_read: number; cache_write_5m: number; cache_write_1h: number }

const DEFAULT_PRICES: Record<string, ModelPrice> = {
  'claude-sonnet-5-5': { input: 2, output: 10, cache_read: 0.1, cache_write_5m: 2.5, cache_write_1h: 4 },
};

export function priceFor(model: string): ModelPrice | undefined {
  let extra: Record<string, ModelPrice> = {};
  try { extra = process.env.FENCEBENCH_MODEL_PRICING ? JSON.parse(process.env.FENCEBENCH_MODEL_PRICING) : {}; } catch { /* ignored: bad override */ }
  const table = { ...DEFAULT_PRICES, ...extra };
  return table[model] ?? table[model.replace(/\[.*\]$/, '')] ?? Object.entries(table).find(([k]) => model.startsWith(k))?.[1];
}

export interface TokenCounts { input: number; output: number; cache_read: number; cache_write_5m: number; cache_write_1h: number }

/** Cost at list price, or undefined when the model has no price. */
export function priceTokens(model: string, t: TokenCounts): number | undefined {
  const p = priceFor(model);
  if (!p) return undefined;
  return (t.input * p.input + t.output * p.output + t.cache_read * p.cache_read + t.cache_write_5m * p.cache_write_5m + t.cache_write_1h * p.cache_write_1h) / 1e6;
}

// Context windows in tokens, used only by the agents-md arm's size guard. The current Claude models
// take one million tokens; override or extend with FENCEBENCH_MODEL_CONTEXT_TOKENS='{"model":200000}'.
const DEFAULT_CONTEXT_TOKENS = 1_000_000;
const CONTEXT_TOKENS: Record<string, number> = { 'claude-haiku-4-5': 200_000 };

export function contextTokensFor(model: string | undefined): number {
  let extra: Record<string, number> = {};
  try { extra = process.env.FENCEBENCH_MODEL_CONTEXT_TOKENS ? JSON.parse(process.env.FENCEBENCH_MODEL_CONTEXT_TOKENS) : {}; } catch { /* ignored: bad override */ }
  const table = { ...CONTEXT_TOKENS, ...extra };
  if (!model) return DEFAULT_CONTEXT_TOKENS;
  return table[model] ?? Object.entries(table).find(([k]) => model.startsWith(k))?.[1] ?? DEFAULT_CONTEXT_TOKENS;
}

/** A rough token count for prose and identifiers: four bytes per token. The agents-md guard reports the bytes beside it. */
export function estimateTokens(text: string): number {
  return Math.ceil(Buffer.byteLength(text, 'utf8') / 4);
}
