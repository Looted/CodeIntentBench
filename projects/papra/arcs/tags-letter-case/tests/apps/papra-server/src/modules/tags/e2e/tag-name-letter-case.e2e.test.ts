// Benchmark-owned test (not from the Papra repository). Tag names are unique per organization regardless
// of letter case: creating "invoice" next to "Invoice" is refused, through the API a user calls.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';

const USER_ID = 'usr_111111111111111111111111';
const ORGANIZATION_ID = 'org_222222222222222222222222';

async function setup() {
  const { db } = await createInMemoryDatabase({
    users: [{ id: USER_ID, email: 'user@example.com' }],
    organizations: [{ id: ORGANIZATION_ID, name: 'Org 1' }],
    organizationMembers: [{ organizationId: ORGANIZATION_ID, userId: USER_ID, role: ORGANIZATION_ROLES.OWNER }],
  });
  const { app } = createServer(createTestServerDependencies({ db, config: overrideConfig({ env: 'test' }) }));
  const create = (name: string) => app.request(
    `/api/organizations/${ORGANIZATION_ID}/tags`,
    { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name, color: '#000000' }) },
    { loggedInUserId: USER_ID },
  );
  const list = async () => {
    const r = await app.request(`/api/organizations/${ORGANIZATION_ID}/tags`, { method: 'GET' }, { loggedInUserId: USER_ID });
    return ((await r.json()) as { tags: Array<{ name: string }> }).tags.map((t) => t.name);
  };
  return { create, list };
}

describe('tag names and letter case', () => {
  test('a tag whose name differs from an existing one only by letter case is refused', async () => {
    const { create, list } = await setup();
    expect((await create('Invoice')).status).toBe(200);
    const second = await create('invoice');
    expect(second.status).toBe(409);
    const third = await create('INVOICE');
    expect(third.status).toBe(409);
    expect(await list()).toEqual(['Invoice']);
  });

  test('tags with different names are both created', async () => {
    const { create, list } = await setup();
    expect((await create('Invoice')).status).toBe(200);
    expect((await create('Receipt')).status).toBe(200);
    expect((await list()).toSorted()).toEqual(['Invoice', 'Receipt']);
  });
});
