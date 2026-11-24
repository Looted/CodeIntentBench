// Benchmark-owned test (not from the Papra repository). An organization with a live paid subscription
// cannot be deleted: a subscription that is active, in trial or past due blocks the deletion, and one
// that is canceled does not. The test goes through the API, so it holds wherever the check is made.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../organizations.constants';
import { organizationsTable } from '../organizations.table';

const USER_ID = 'usr_111111111111111111111111';
const ORGANIZATION_ID = 'org_222222222222222222222222';

async function deleteOrganizationWithSubscription(status: string) {
  const { db } = await createInMemoryDatabase({
    users: [{ id: USER_ID, email: 'owner@example.com' }],
    organizations: [{ id: ORGANIZATION_ID, name: 'Org 1', customerId: 'cus_123' }],
    organizationMembers: [{ organizationId: ORGANIZATION_ID, userId: USER_ID, role: ORGANIZATION_ROLES.OWNER }],
    organizationSubscriptions: [
      {
        id: 'sub_123',
        organizationId: ORGANIZATION_ID,
        customerId: 'cus_123',
        planId: 'plan_pro',
        status,
        seatsCount: 5,
        currentPeriodStart: new Date('2026-10-01'),
        currentPeriodEnd: new Date('2026-11-01'),
        cancelAtPeriodEnd: false,
      },
    ],
  });
  const { app } = createServer(createTestServerDependencies({ db, config: overrideConfig({ env: 'test' }) }));
  const response = await app.request(`/api/organizations/${ORGANIZATION_ID}`, { method: 'DELETE' }, { loggedInUserId: USER_ID });
  const [organization] = await db.select().from(organizationsTable);
  return { status: response.status, isDeleted: organization?.deletedAt != null };
}

describe('deleting an organization that has a subscription', () => {
  test('a past due subscription blocks the deletion', async () => {
    expect(await deleteOrganizationWithSubscription('past_due')).toEqual({ status: 403, isDeleted: false });
  });

  test('an active subscription blocks the deletion', async () => {
    expect(await deleteOrganizationWithSubscription('active')).toEqual({ status: 403, isDeleted: false });
  });

  test('a trialing subscription blocks the deletion', async () => {
    expect(await deleteOrganizationWithSubscription('trialing')).toEqual({ status: 403, isDeleted: false });
  });

  test('a canceled subscription does not block the deletion', async () => {
    expect(await deleteOrganizationWithSubscription('canceled')).toEqual({ status: 204, isDeleted: true });
  });
});
