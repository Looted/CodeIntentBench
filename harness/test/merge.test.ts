import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mergeAgentResults, type AgentResult } from '../src/agent.ts';

const part = (session: string, cost: number, cacheRead: number, turns: number): AgentResult => ({
  code: 0, timed_out: false, session_id: session, terminal_reason: 'end', final_answer: 'x', tools_available: [], tool_calls: [], permission_denials: 0,
  usage: {
    input_tokens: 10 * turns, output_tokens: 5 * turns, cache_read_input_tokens: cacheRead, cache_creation_input_tokens: 0,
    cost_usd: cost, tool_calls: turns, turns, wall_seconds: 1,
    by_model: { m: { input_tokens: 10 * turns, output_tokens: 5 * turns, cache_read_input_tokens: cacheRead, cache_creation_input_tokens: 0, cache_creation_5m_input_tokens: 0, cache_creation_1h_input_tokens: 0, cost_usd: cost } },
  },
} as AgentResult);

test('a resumed session adds only what it spent beyond the part before it', () => {
  // the reply's result event reports the session's cumulative usage: 0.81 after 0.79
  const merged = mergeAgentResults([part('s', 0.79, 1000, 43), part('s', 0.81, 1200, 1)]);
  assert.equal(Number(merged.usage.cost_usd.toFixed(4)), 0.81);
  assert.equal(merged.usage.cache_read_input_tokens, 1200);
  assert.equal(merged.usage.by_model!.m.cost_usd.toFixed(4), '0.8100');
  assert.equal(merged.usage.turns, 44);
});

test('separate sessions are summed', () => {
  const merged = mergeAgentResults([part('a', 0.5, 100, 2), part('b', 0.25, 50, 1)]);
  assert.equal(merged.usage.cost_usd, 0.75);
  assert.equal(merged.usage.cache_read_input_tokens, 150);
});
