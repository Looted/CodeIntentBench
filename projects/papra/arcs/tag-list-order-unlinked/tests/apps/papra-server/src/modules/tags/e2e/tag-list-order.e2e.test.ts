// Benchmark-owned test (not from the Papra repository). The tag list is ordered by creation date, newest first.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';

const USER_ID = 'usr_111111111111111111111111';
const ORGANIZATION_ID = 'org_222222222222222222222222';

describe('the tag list', () => {
  test('is ordered by creation date, newest first', async () => {
    const tag = (n: number, name: string) => ({
      id: `tag_${String(n).padStart(24, '0')}`,
      name,
      normalizedName: name.toLowerCase(),
      color: '#000000',
      organizationId: ORGANIZATION_ID,
      createdAt: new Date(Date.UTC(2026, 0, n)),
    });
    const { db } = await createInMemoryDatabase({
      users: [{ id: USER_ID, email: 'user@example.com' }],
      organizations: [{ id: ORGANIZATION_ID, name: 'Org 1' }],
      organizationMembers: [{ organizationId: ORGANIZATION_ID, userId: USER_ID, role: ORGANIZATION_ROLES.OWNER }],
      tags: [tag(1, 'Banana'), tag(2, 'Apple'), tag(3, 'Cherry')],
    });
    const { app } = createServer(createTestServerDependencies({ db, config: overrideConfig({ env: 'test' }) }));
    const response = await app.request(`/api/organizations/${ORGANIZATION_ID}/tags`, { method: 'GET' }, { loggedInUserId: USER_ID });
    expect(response.status).toBe(200);
    const { tags } = (await response.json()) as { tags: Array<{ name: string }> };
    expect(tags.map((t) => t.name)).toEqual(['Cherry', 'Apple', 'Banana']);
  });
});
