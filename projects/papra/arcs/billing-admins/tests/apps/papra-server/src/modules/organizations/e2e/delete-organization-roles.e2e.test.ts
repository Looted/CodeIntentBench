// Benchmark-owned test (not from the Papra repository). Only the organization owner can delete an
// organization: an admin and a regular member are refused and the organization stays, the owner succeeds.
// The test goes through the API, so it holds wherever the check is made.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../organizations.constants';
import { organizationsTable } from '../organizations.table';

const OWNER_ID = 'usr_111111111111111111111111';
const ADMIN_ID = 'usr_222222222222222222222222';
const MEMBER_ID = 'usr_333333333333333333333333';
const ORGANIZATION_ID = 'org_222222222222222222222222';

async function deleteOrganizationAs(userId: string) {
  const { db } = await createInMemoryDatabase({
    users: [
      { id: OWNER_ID, email: 'owner@example.com' },
      { id: ADMIN_ID, email: 'admin@example.com' },
      { id: MEMBER_ID, email: 'member@example.com' },
    ],
    organizations: [{ id: ORGANIZATION_ID, name: 'Org 1' }],
    organizationMembers: [
      { organizationId: ORGANIZATION_ID, userId: OWNER_ID, role: ORGANIZATION_ROLES.OWNER },
      { organizationId: ORGANIZATION_ID, userId: ADMIN_ID, role: ORGANIZATION_ROLES.ADMIN },
      { organizationId: ORGANIZATION_ID, userId: MEMBER_ID, role: ORGANIZATION_ROLES.MEMBER },
    ],
  });
  const { app } = createServer(createTestServerDependencies({ db, config: overrideConfig({ env: 'test' }) }));
  const response = await app.request(`/api/organizations/${ORGANIZATION_ID}`, { method: 'DELETE' }, { loggedInUserId: userId });
  const [organization] = await db.select().from(organizationsTable);
  return { refused: response.status >= 400 && response.status < 500, isDeleted: organization?.deletedAt != null };
}

describe('who can delete an organization', () => {
  test('an admin cannot delete the organization', async () => {
    expect(await deleteOrganizationAs(ADMIN_ID)).toEqual({ refused: true, isDeleted: false });
  });

  test('a regular member cannot delete the organization', async () => {
    expect(await deleteOrganizationAs(MEMBER_ID)).toEqual({ refused: true, isDeleted: false });
  });

  test('the owner can delete the organization', async () => {
    expect(await deleteOrganizationAs(OWNER_ID)).toEqual({ refused: false, isDeleted: true });
  });
});
