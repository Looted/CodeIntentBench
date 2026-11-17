// Benchmark-owned test (not from the Papra repository). The decision of s1 of invite-daily-cap-ms
// seen from outside, with the limit set to 3: the limit bounds how much invitation mail one account
// can make the server send in a day, counted per inviting user across all of their organizations.
// Passes before a reminder route exists (the reminders answer 404 and send nothing).
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';
import { organizationInvitationsTable } from '../../organizations/organizations.table';

// Test app: one user who owns two organizations, a daily invitation limit of 3, and an email
// service that records every email instead of sending it, so the tests count what would go out.
const userId = 'usr_111111111111111111111111';
const organizationId = 'org_222222222222222222222222';
const otherOrganizationId = 'org_333333333333333333333333';
const LIMIT = 3;

async function createInvitationTestApp() {
  const { db } = await createInMemoryDatabase({
    users: [{ id: userId, email: 'owner@example.com' }],
    organizations: [{ id: organizationId, name: 'Org 1' }, { id: otherOrganizationId, name: 'Org 2' }],
    organizationMembers: [
      { organizationId, userId, role: ORGANIZATION_ROLES.OWNER },
      { organizationId: otherOrganizationId, userId, role: ORGANIZATION_ROLES.OWNER },
    ],
  } as never);

  const emails: { to: string; subject: string }[] = [];
  const deps = createTestServerDependencies({
    db,
    emailsServices: { name: 'recorder', sendEmail: async ({ to, subject }: { to: string; subject: string }) => { emails.push({ to, subject }); } } as never,
    config: overrideConfig({
      env: 'test',
      auth: { secret: 'test-secret-that-is-at-least-32-chars-long' },
      documentsStorage: { driver: 'in-memory' },
      organizationPlans: { isFreePlanUnlimited: true },
      organizations: { maxUserInvitationsPerDay: LIMIT },
    }),
  });
  const { app } = createServer(deps);

  const call = async (method: string, path: string, body?: unknown) => app.request(
    path,
    { method, headers: { 'Content-Type': 'application/json' }, body: body === undefined ? undefined : JSON.stringify(body) },
    { loggedInUserId: userId },
  );

  return {
    emails,
    invite: async (email: string, organization: string = organizationId) => call('POST', `/api/organizations/${organization}/members/invitations`, { email, role: ORGANIZATION_ROLES.MEMBER }),
    remind: async (invitationId: string) => call('POST', `/api/invitations/${invitationId}/remind`),
    invitationIdOf: async (email: string) => (await db.select().from(organizationInvitationsTable)).find(invitation => invitation.email === email)?.id ?? 'inv_000000000000000000000000',
  };
}

describe('the daily invitation limit bounds the mail one account can make us send', () => {
  test('an inviter is stopped at the limit, with one email per invitation', async () => {
    const { invite, emails } = await createInvitationTestApp();

    for (const n of [1, 2, 3]) {
      expect((await invite(`person${n}@example.com`)).status).toBe(204);
    }
    expect((await invite('person4@example.com')).status).toBe(429);

    expect(emails.length).toBe(LIMIT);
  });

  test('the limit is counted per inviting user across their organizations', async () => {
    const { invite, emails } = await createInvitationTestApp();

    expect((await invite('person1@example.com')).status).toBe(204);
    expect((await invite('person2@example.com')).status).toBe(204);
    expect((await invite('person3@example.com', otherOrganizationId)).status).toBe(204);
    expect((await invite('person4@example.com', otherOrganizationId)).status).toBe(429);

    expect(emails.length).toBe(LIMIT);
  });

  test('reminding people of a pending invitation does not get more mail out than the limit', async () => {
    const { invite, remind, invitationIdOf, emails } = await createInvitationTestApp();

    expect((await invite('person1@example.com')).status).toBe(204);
    const invitationId = await invitationIdOf('person1@example.com');
    for (let i = 0; i < 6; i++) {
      await remind(invitationId);
    }

    expect(emails.length).toBeLessThanOrEqual(LIMIT);
  });
});
