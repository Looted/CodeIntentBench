// Benchmark-owned test (not from the Papra repository). A user can own at most a configured number of
// organizations, 10 by default: with the default configuration the 11th is refused.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../organizations.constants';

const USER_ID = 'usr_111111111111111111111111';

async function createOne({ owned }: { owned: number }) {
  const organizations = Array.from({ length: owned }, (_, i) => ({ id: `org_${String(i).padStart(24, '0')}`, name: `Org ${i}` }));
  const { db } = await createInMemoryDatabase({
    users: [{ id: USER_ID, email: 'user@example.com' }],
    organizations,
    organizationMembers: organizations.map((o) => ({ organizationId: o.id, userId: USER_ID, role: ORGANIZATION_ROLES.OWNER })),
  });
  const { app } = createServer(createTestServerDependencies({ db, config: overrideConfig({ env: 'test' }) }));
  return app.request('/api/organizations', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name: 'One more' }) }, { loggedInUserId: USER_ID });
}

describe('organizations a user owns', () => {
  test('with the default configuration, a user who owns 10 organizations cannot create another', async () => {
    const response = await createOne({ owned: 10 });
    expect(response.status).toBeGreaterThanOrEqual(400);
    expect(response.status).toBeLessThan(500);
  });

  test('with the default configuration, a user who owns 9 can create one more', async () => {
    expect((await createOne({ owned: 9 })).status).toBe(200);
  });
});
