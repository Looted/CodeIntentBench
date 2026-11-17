// Benchmark-owned test (not from the Papra repository). When an allowed-domain list is configured, only
// emails whose domain is exactly in the list may sign up; subdomains are not implicitly allowed.
import { describe, expect, test } from 'vitest';
import { overrideConfig } from '../../../config/config.test-utils';
import { createInMemoryDatabase } from '../../database/database.test-utils';
import { createServer } from '../../server';
import { createTestServerDependencies } from '../../server.test-utils';

async function signUp(email: string) {
  const { db } = await createInMemoryDatabase();
  const config = overrideConfig({ auth: { isEmailVerificationRequired: false } });
  // The configuration holds the list as a Set (parsed from AUTH_ALLOWED_EMAIL_DOMAINS); set it after the merge.
  config.auth.allowedEmailDomains = new Set(['acme.com']);
  const { app } = createServer(createTestServerDependencies({ db, config }));
  return app.request('/api/auth/sign-up/email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password: 'StrongPassword123!', name: 'Ana' }),
  });
}

describe('sign-up with an allowed-domain list', () => {
  test('an address on a listed domain may sign up', async () => {
    expect((await signUp('ana@acme.com')).status).toBe(200);
  });

  test('an address on a subdomain of a listed domain may not', async () => {
    for (const email of ['ana@lisbon.acme.com', 'ana@eu.lisbon.acme.com']) {
      const response = await signUp(email);
      expect(response.status, email).toBeGreaterThanOrEqual(400);
      expect(response.status, email).toBeLessThan(500);
    }
  });

  test('an address on another domain may not', async () => {
    const response = await signUp('ana@notacme.com');
    expect(response.status).toBeGreaterThanOrEqual(400);
  });
});
