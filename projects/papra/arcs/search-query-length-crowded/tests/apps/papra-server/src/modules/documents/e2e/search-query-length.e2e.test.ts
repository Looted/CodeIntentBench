// Benchmark-owned test (not from the Papra repository). A search query is limited to 1024 characters:
// a longer one is refused by the documents search endpoint, one of 1024 characters is accepted.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';

const USER_ID = 'usr_111111111111111111111111';
const ORGANIZATION_ID = 'org_222222222222222222222222';

async function search(searchQuery: string) {
  const { db } = await createInMemoryDatabase({
    users: [{ id: USER_ID, email: 'user@example.com' }],
    organizations: [{ id: ORGANIZATION_ID, name: 'Org 1' }],
    organizationMembers: [{ organizationId: ORGANIZATION_ID, userId: USER_ID, role: ORGANIZATION_ROLES.OWNER }],
  });
  const { app } = createServer(createTestServerDependencies({ db, config: overrideConfig({ env: 'test' }) }));
  return app.request(`/api/organizations/${ORGANIZATION_ID}/documents?${new URLSearchParams({ searchQuery })}`, { method: 'GET' }, { loggedInUserId: USER_ID });
}

const query = (length: number) => Array.from({ length: Math.ceil(length / 8) }, () => 'invoice ').join('').slice(0, length);

describe('search query length', () => {
  test('a search query of 1025 characters is refused', async () => {
    const response = await search(query(1025));
    expect(response.status).toBe(400);
  });

  test('a search query of 1024 characters is accepted', async () => {
    const response = await search(query(1024));
    expect(response.status).toBe(200);
  });
});
