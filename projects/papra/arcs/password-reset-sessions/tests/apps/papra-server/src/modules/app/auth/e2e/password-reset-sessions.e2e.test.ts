// Benchmark-owned test (not from the Papra repository). Resetting a password revokes all of the user's
// sessions: a session opened before the reset no longer authenticates afterwards.
import { describe, expect, test } from 'vitest';
import { overrideConfig } from '../../../config/config.test-utils';
import { createInMemoryDatabase } from '../../database/database.test-utils';
import { createEventServices } from '../../events/events.services';
import { createServer } from '../../server';
import { createTestServerDependencies } from '../../server.test-utils';
import { getAuth } from '../auth.services';

const EMAIL = 'bob@example.com';
const PASSWORD = 'StrongPassword123!';

async function setup() {
  const { db } = await createInMemoryDatabase();
  const resetTokens: string[] = [];
  const authEmailsServices = {
    sendVerificationEmail: async () => {},
    sendPasswordResetEmail: async ({ token }: { token: string }) => { resetTokens.push(token); },
  };
  const config = overrideConfig({ auth: { isEmailVerificationRequired: false, isPasswordResetEnabled: true } });
  const { auth } = getAuth({ db, config, authEmailsServices: authEmailsServices as never, eventServices: createEventServices() });
  const { app } = createServer(createTestServerDependencies({ db, config, auth }));
  const json = (path: string, body: unknown, cookie?: string) => app.request(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(cookie ? { Cookie: cookie } : {}) },
    body: JSON.stringify(body),
  });
  const cookieOf = (r: Response) => r.headers.getSetCookie().map((c) => c.split(';')[0]).join('; ');
  const me = (cookie: string) => app.request('/api/users/me', { method: 'GET', headers: { Cookie: cookie } });
  return { json, cookieOf, me, resetTokens };
}

describe('password reset and sessions', () => {
  test('sessions opened before a password reset no longer authenticate after it', async () => {
    const { json, cookieOf, me, resetTokens } = await setup();
    expect((await json('/api/auth/sign-up/email', { email: EMAIL, password: PASSWORD, name: 'Bob' })).status).toBe(200);
    const laptop = cookieOf(await json('/api/auth/sign-in/email', { email: EMAIL, password: PASSWORD }));
    const phone = cookieOf(await json('/api/auth/sign-in/email', { email: EMAIL, password: PASSWORD }));
    expect((await me(laptop)).status).toBe(200);
    expect((await me(phone)).status).toBe(200);

    expect((await json('/api/auth/request-password-reset', { email: EMAIL, redirectTo: '/reset-password' })).status).toBe(200);
    expect(resetTokens).toHaveLength(1);
    expect((await json('/api/auth/reset-password', { token: resetTokens[0], newPassword: 'AnotherStrongPassword456!' })).status).toBe(200);

    expect((await me(laptop)).status).toBe(401);
    expect((await me(phone)).status).toBe(401);
  });

  test('without a reset, sessions keep authenticating', async () => {
    const { json, cookieOf, me } = await setup();
    expect((await json('/api/auth/sign-up/email', { email: EMAIL, password: PASSWORD, name: 'Bob' })).status).toBe(200);
    const laptop = cookieOf(await json('/api/auth/sign-in/email', { email: EMAIL, password: PASSWORD }));
    expect((await me(laptop)).status).toBe(200);
  });
});
