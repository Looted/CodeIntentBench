// Benchmark-owned test (not from the Papra repository). A boolean environment variable with a value that is not boolean-ish fails validation.
import { describe, expect, test } from 'vitest';
import { parseConfig } from './config';

const SECRET = 'a'.repeat(64);

describe('boolean environment variables', () => {
  test('a value that is not boolean-ish fails validation', async () => {
    await expect(parseConfig({ env: { AUTH_SECRET: SECRET, AUTH_IS_REGISTRATION_ENABLED: 'maybe-later' } })).rejects.toThrow();
  });

  test('a boolean-ish value is read', async () => {
    const { config } = await parseConfig({ env: { AUTH_SECRET: SECRET, AUTH_IS_REGISTRATION_ENABLED: 'off' } });
    expect(config.auth.isRegistrationEnabled).toBe(false);
  });
});
