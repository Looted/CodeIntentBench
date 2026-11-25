// Benchmark-owned test (not from the Papra repository). AUTH_SECRET must be at least 32 characters: 31 is refused, 32 accepted.
import { describe, expect, test } from 'vitest';
import { parseConfig } from './config';

describe('the length of AUTH_SECRET', () => {
  test('a secret of 31 characters is refused', async () => {
    await expect(parseConfig({ env: { NODE_ENV: 'production', AUTH_SECRET: 'a'.repeat(31) } })).rejects.toThrow();
  });

  test('a secret of 32 characters is accepted', async () => {
    const { config } = await parseConfig({ env: { NODE_ENV: 'production', AUTH_SECRET: 'a'.repeat(32) } });
    expect(config.auth.secret).toBe('a'.repeat(32));
  });
});
