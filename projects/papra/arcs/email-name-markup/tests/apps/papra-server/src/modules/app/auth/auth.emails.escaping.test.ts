// Benchmark-owned test (not from the Papra repository). HTML-like characters in a user's name are
// escaped in transactional emails, not removed (#1061, which replaced the sanitizing of #995).
import { describe, expect, test } from 'vitest';
import { sendPasswordResetEmail, sendVerificationEmail } from './auth.emails.services';

function captureEmails() {
  const sent: { to: string; subject: string; html: string }[] = [];
  const emailsServices = { sendEmail: async (email: { to: string; subject: string; html: string }) => { sent.push(email); } };
  return { sent, emailsServices: emailsServices as never };
}

const user = { id: 'usr_111111111111111111111111', email: 'bob@example.com', name: '<b>Bob</b> & "Co"' } as never;

describe('user names in auth emails', () => {
  test('the password reset email shows the name with its markup characters escaped', async () => {
    const { sent, emailsServices } = captureEmails();
    await sendPasswordResetEmail({ user, url: 'https://papra.example/reset?token=t', token: 't', emailsServices });

    expect(sent).toHaveLength(1);
    expect(sent[0]!.html).toContain('Hello &lt;b&gt;Bob&lt;/b&gt; &amp; &quot;Co&quot;,');
    expect(sent[0]!.html).not.toContain('<b>Bob</b>');
  });

  test('the verification email shows the name with its markup characters escaped', async () => {
    const { sent, emailsServices } = captureEmails();
    await sendVerificationEmail({ user, url: 'https://papra.example/verify?token=t', token: 't', emailsServices } as never);

    expect(sent).toHaveLength(1);
    expect(sent[0]!.html).toContain('Hello &lt;b&gt;Bob&lt;/b&gt; &amp; &quot;Co&quot;,');
  });
});
