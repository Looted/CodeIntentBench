// Benchmark-owned test (not from the Papra repository). Deleting a tag returns 204 with no body, and 404 for a tag the organization does not have.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';

const USER_ID = 'usr_111111111111111111111111';
const ORGANIZATION_ID = 'org_222222222222222222222222';
const TAG_ID = 'tag_333333333333333333333333';

async function setup() {
  const { db } = await createInMemoryDatabase({
    users: [{ id: USER_ID, email: 'user@example.com' }],
    organizations: [{ id: ORGANIZATION_ID, name: 'Org 1' }],
    organizationMembers: [{ organizationId: ORGANIZATION_ID, userId: USER_ID, role: ORGANIZATION_ROLES.OWNER }],
    tags: [{ id: TAG_ID, name: 'Invoices', normalizedName: 'invoices', color: '#000000', organizationId: ORGANIZATION_ID }],
  });
  const { app } = createServer(createTestServerDependencies({ db, config: overrideConfig({ env: 'test' }) }));
  return { app };
}

describe('deleting a tag', () => {
  test('returns 204 with no body', async () => {
    const { app } = await setup();
    const response = await app.request(`/api/organizations/${ORGANIZATION_ID}/tags/${TAG_ID}`, { method: 'DELETE' }, { loggedInUserId: USER_ID });
    expect(response.status).toBe(204);
    expect(await response.text()).toBe('');
  });

  test('returns 404 for a tag the organization does not have', async () => {
    const { app } = await setup();
    const response = await app.request(`/api/organizations/${ORGANIZATION_ID}/tags/tag_444444444444444444444444`, { method: 'DELETE' }, { loggedInUserId: USER_ID });
    expect(response.status).toBe(404);
  });
});
