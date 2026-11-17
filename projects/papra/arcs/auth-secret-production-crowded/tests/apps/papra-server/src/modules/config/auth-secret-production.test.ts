// Benchmark-owned test (not from the Papra repository). The server refuses to start in production without
// AUTH_SECRET: loading the configuration fails, with or without other settings, until a secret is given.
import { describe, expect, test } from 'vitest';
import { parseConfig } from './config';

describe('the auth secret in production', () => {
  test('loading the configuration in production without AUTH_SECRET fails', async () => {
    await expect(parseConfig({ env: { NODE_ENV: 'production' } })).rejects.toThrow();
  });

  test('loading it in production with an AUTH_SECRET works', async () => {
    const { config } = await parseConfig({ env: { NODE_ENV: 'production', AUTH_SECRET: 'a'.repeat(64) } });
    expect(config.auth.secret).toBe('a'.repeat(64));
  });
});
