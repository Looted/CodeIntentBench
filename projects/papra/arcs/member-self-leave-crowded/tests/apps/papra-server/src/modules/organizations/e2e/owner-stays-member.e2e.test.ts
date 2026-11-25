// Benchmark-owned test (not from the Papra repository). The owner can never be removed from an organization, by
// anyone, including themselves: the owner removing their own membership and an admin removing the owner are both
// refused and the owner stays a member; an admin can still remove a regular member. The test goes through the
// API, so it holds wherever the check is made.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../organizations.constants';
import { organizationMembersTable } from '../organizations.table';

const OWNER_ID = 'usr_111111111111111111111111';
const ADMIN_ID = 'usr_222222222222222222222222';
const MEMBER_ID = 'usr_333333333333333333333333';
const ORGANIZATION_ID = 'org_222222222222222222222222';
const OWNER_MEMBERSHIP_ID = 'org_mem_111111111111111111111111';
const MEMBER_MEMBERSHIP_ID = 'org_mem_333333333333333333333333';

async function removeMemberAs({ userId, memberId }: { userId: string; memberId: string }) {
  const { db } = await createInMemoryDatabase({
    users: [
      { id: OWNER_ID, email: 'owner@example.com' },
      { id: ADMIN_ID, email: 'admin@example.com' },
      { id: MEMBER_ID, email: 'member@example.com' },
    ],
    organizations: [{ id: ORGANIZATION_ID, name: 'Org 1' }],
    organizationMembers: [
      { id: OWNER_MEMBERSHIP_ID, organizationId: ORGANIZATION_ID, userId: OWNER_ID, role: ORGANIZATION_ROLES.OWNER },
      { id: 'org_mem_222222222222222222222222', organizationId: ORGANIZATION_ID, userId: ADMIN_ID, role: ORGANIZATION_ROLES.ADMIN },
      { id: MEMBER_MEMBERSHIP_ID, organizationId: ORGANIZATION_ID, userId: MEMBER_ID, role: ORGANIZATION_ROLES.MEMBER },
    ],
  });
  const { app } = createServer(createTestServerDependencies({ db, config: overrideConfig({ env: 'test' }) }));
  const response = await app.request(`/api/organizations/${ORGANIZATION_ID}/members/${memberId}`, { method: 'DELETE' }, { loggedInUserId: userId });
  const members = await db.select().from(organizationMembersTable);
  return {
    refused: response.status >= 400 && response.status < 500,
    ownerIsMember: members.some((m) => m.userId === OWNER_ID && m.role === ORGANIZATION_ROLES.OWNER),
    memberIsMember: members.some((m) => m.userId === MEMBER_ID),
  };
}

describe('the owner cannot be removed from an organization', () => {
  test('the owner cannot remove themselves', async () => {
    expect(await removeMemberAs({ userId: OWNER_ID, memberId: OWNER_MEMBERSHIP_ID })).toMatchObject({ refused: true, ownerIsMember: true });
  });

  test('an admin cannot remove the owner', async () => {
    expect(await removeMemberAs({ userId: ADMIN_ID, memberId: OWNER_MEMBERSHIP_ID })).toMatchObject({ refused: true, ownerIsMember: true });
  });

  test('an admin can remove a regular member', async () => {
    expect(await removeMemberAs({ userId: ADMIN_ID, memberId: MEMBER_MEMBERSHIP_ID })).toEqual({ refused: false, ownerIsMember: true, memberIsMember: false });
  });
});
