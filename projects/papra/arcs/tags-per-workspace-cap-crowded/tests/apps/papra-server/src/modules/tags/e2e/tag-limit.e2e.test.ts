// Benchmark-owned test (not from the Papra repository). An organization can create at most
// MAX_TAGS_PER_ORGANIZATION tags, 200 by default: with the default configuration the 201st tag is refused.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';

const USER_ID = 'usr_111111111111111111111111';
const ORGANIZATION_ID = 'org_222222222222222222222222';

async function setup({ existing }: { existing: number }) {
  const tags = Array.from({ length: existing }, (_, i) => ({
    id: `tag_${String(i).padStart(24, '0')}`,
    name: `Tag ${i}`,
    normalizedName: `tag ${i}`,
    color: '#000000',
    organizationId: ORGANIZATION_ID,
  }));
  const { db } = await createInMemoryDatabase({
    users: [{ id: USER_ID, email: 'user@example.com' }],
    organizations: [{ id: ORGANIZATION_ID, name: 'Org 1' }],
    organizationMembers: [{ organizationId: ORGANIZATION_ID, userId: USER_ID, role: ORGANIZATION_ROLES.OWNER }],
    tags,
  });
  const { app } = createServer(createTestServerDependencies({ db, config: overrideConfig({ env: 'test' }) }));
  return app.request(
    `/api/organizations/${ORGANIZATION_ID}/tags`,
    { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name: 'One more', color: '#000000' }) },
    { loggedInUserId: USER_ID },
  );
}

describe('tags per organization', () => {
  test('with the default configuration, an organization that has 200 tags cannot create another', async () => {
    const response = await setup({ existing: 200 });
    expect(response.status).toBeGreaterThanOrEqual(400);
    expect(response.status).toBeLessThan(500);
  });

  test('with the default configuration, an organization that has 199 tags can create one more', async () => {
    const response = await setup({ existing: 199 });
    expect(response.status).toBe(200);
  });
});
