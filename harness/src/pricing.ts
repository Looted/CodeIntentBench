// List prices per million tokens, used only to cross-check the cost Claude Code reports and to
// estimate the cost of a session that ended without a result event (killed on timeout).
// Override or extend with CIB_MODEL_PRICING='{"model":{"input":2,"output":10,"cache_read":0.1,"cache_write_5m":2.5,"cache_write_1h":4}}'.
export interface ModelPrice { input: number; output: number; cache_read: number; cache_write_5m: number; cache_write_1h: number }

const DEFAULT_PRICES: Record<string, ModelPrice> = {
  'claude-sonnet-5-5': { input: 2, output: 10, cache_read: 0.1, cache_write_5m: 2.5, cache_write_1h: 4 },
};

export function priceFor(model: string): ModelPrice | undefined {
  let extra: Record<string, ModelPrice> = {};
  try { extra = process.env.CIB_MODEL_PRICING ? JSON.parse(process.env.CIB_MODEL_PRICING) : {}; } catch { /* ignored: bad override */ }
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
