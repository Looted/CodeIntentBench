// Benchmark-owned test (not from the Papra repository). HTML-like characters in a user's name are
// escaped in transactional emails, not removed (#1061, which replaced the sanitizing of #995). This
// test follows the name through the paths that store it (sign-up and the profile update) and checks only
// what the decision states: the email shows the name's characters escaped. How the name is stored is not
// recorded anywhere, so it is not asserted.
import { describe, expect, test } from 'vitest';
import { overrideConfig } from '../../../config/config.test-utils';
import { createUsersRepository } from '../../../users/users.repository';
import { createInMemoryDatabase } from '../../database/database.test-utils';
import { createEventServices } from '../../events/events.services';
import { createServer } from '../../server';
import { createTestServerDependencies } from '../../server.test-utils';
import { createAuthEmailsServices, sendPasswordResetEmail } from '../auth.emails.services';
import { getAuth } from '../auth.services';

const MARKUP_NAME = '<b>Bob</b> & "Co"';
const ESCAPED_NAME = '&lt;b&gt;Bob&lt;/b&gt; &amp; &quot;Co&quot;';

function createTestEmailServices() {
  const sent: Array<{ to: string; subject: string; html: string }> = [];
  return {
    name: 'test',
    sendEmail: async (email: { to: string; subject: string; html: string }) => {
      sent.push(email);
    },
    sent,
  };
}

async function setup({ isEmailVerificationRequired }: { isEmailVerificationRequired: boolean }) {
  const { db } = await createInMemoryDatabase();
  const emailsServices = createTestEmailServices();
  const config = overrideConfig({ auth: { isEmailVerificationRequired } });
  const authEmailsServices = createAuthEmailsServices({ emailsServices });
  const { auth } = getAuth({ db, config, authEmailsServices, eventServices: createEventServices() });
  const { app } = createServer(createTestServerDependencies({ db, config, auth }));

  const signUp = (name: string) => app.request('/api/auth/sign-up/email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'bob@example.com', password: 'StrongPassword123!', name }),
  });

  return { db, app, emailsServices, signUp };
}

describe('user names with markup characters', () => {
  test('a name given at sign-up is escaped in the verification email', async () => {
    const { db, emailsServices, signUp } = await setup({ isEmailVerificationRequired: true });

    const response = await signUp(MARKUP_NAME);
    expect(response.status).toBe(200);

    expect(emailsServices.sent).toHaveLength(1);
    expect(emailsServices.sent[0]!.html).toContain(`Hello ${ESCAPED_NAME},`);
    expect(emailsServices.sent[0]!.html).not.toContain('<b>Bob</b>');
  });

  test('a name saved from the profile is escaped in the password reset email', async () => {
    const { db, app, emailsServices, signUp } = await setup({ isEmailVerificationRequired: false });

    const signUpResponse = await signUp('Bob');
    expect(signUpResponse.status).toBe(200);
    const cookie = signUpResponse.headers.getSetCookie().map(c => c.split(';')[0]).join('; ');

    const updateResponse = await app.request('/api/users/me', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', 'Cookie': cookie },
      body: JSON.stringify({ name: MARKUP_NAME }),
    });
    expect(updateResponse.status).toBe(200);

    const { user } = await createUsersRepository({ db }).getUserByEmail({ email: 'bob@example.com' });

    await sendPasswordResetEmail({ user: user as never, url: 'https://papra.example/reset?token=t', token: 't', emailsServices: emailsServices as never });
    const resetEmail = emailsServices.sent.at(-1)!;
    expect(resetEmail.html).toContain(`Hello ${ESCAPED_NAME},`);
    expect(resetEmail.html).not.toContain('<b>Bob</b>');
  });
});
