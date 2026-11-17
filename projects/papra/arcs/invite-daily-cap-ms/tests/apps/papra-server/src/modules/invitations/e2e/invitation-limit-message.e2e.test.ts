// Benchmark-owned test (not from the Papra repository). s5 of invite-daily-cap-ms: the refusal at
// the daily invitation limit says what the limit is.
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

describe('the refusal at the daily invitation limit', () => {
  test('says what the limit is', async () => {
    const { invite } = await createInvitationTestApp();

    for (const n of [1, 2, 3]) {
      await invite(`person${n}@example.com`);
    }
    const response = await invite('person4@example.com');

    expect(response.status).toBe(429);
    const { error } = (await response.json()) as { error: { message: string; code: string } };
    expect(error.message).toMatch(/\b3\b/);
  });
});
