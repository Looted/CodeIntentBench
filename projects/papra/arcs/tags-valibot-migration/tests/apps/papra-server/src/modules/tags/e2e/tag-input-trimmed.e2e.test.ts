// Benchmark-owned test (not from the Papra repository). Tag names and descriptions are trimmed on creation and
// update, and the API rejects an invalid colour on both: the server's schema is the guard, not the client's form.
// The test goes through the API, so it holds whichever validation library the routes use.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';
import { tagsTable } from '../tags.table';

const USER_ID = 'usr_111111111111111111111111';
const ORGANIZATION_ID = 'org_222222222222222222222222';
const json = (method: string, body: unknown) => ({ method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });

async function createApp() {
  const { db } = await createInMemoryDatabase({
    users: [{ id: USER_ID, email: 'user@example.com' }],
    organizations: [{ id: ORGANIZATION_ID, name: 'Org 1' }],
    organizationMembers: [{ organizationId: ORGANIZATION_ID, userId: USER_ID, role: ORGANIZATION_ROLES.OWNER }],
  });
  const { app } = createServer(createTestServerDependencies({ db, config: overrideConfig({ env: 'test' }) }));
  const request = (path: string, init: RequestInit) => app.request(`/api/organizations/${ORGANIZATION_ID}${path}`, init, { loggedInUserId: USER_ID });
  return { db, request };
}

describe('tag input is trimmed and validated by the server', () => {
  test('a new tag keeps its name and description without surrounding spaces', async () => {
    const { db, request } = await createApp();
    const response = await request('/tags', json('POST', { name: '  Invoices  ', color: '#AABBCC', description: '  Paid and unpaid  ' }));
    expect(response.status).toBeLessThan(300);
    const [tag] = await db.select().from(tagsTable);
    expect({ name: tag?.name, description: tag?.description }).toEqual({ name: 'Invoices', description: 'Paid and unpaid' });
  });

  test('an updated tag keeps its name and description without surrounding spaces', async () => {
    const { db, request } = await createApp();
    await request('/tags', json('POST', { name: 'Invoices', color: '#AABBCC' }));
    const [created] = await db.select().from(tagsTable);
    const response = await request(`/tags/${created!.id}`, json('PUT', { name: '  Receipts ', description: ' Kept for taxes ' }));
    expect(response.status).toBeLessThan(300);
    const [tag] = await db.select().from(tagsTable);
    expect({ name: tag?.name, description: tag?.description }).toEqual({ name: 'Receipts', description: 'Kept for taxes' });
  });

  test('a name made only of spaces is refused', async () => {
    const { db, request } = await createApp();
    const response = await request('/tags', json('POST', { name: '   ', color: '#AABBCC' }));
    expect(response.status).toBe(400);
    expect(await db.select().from(tagsTable)).toHaveLength(0);
  });

  test('an invalid colour is refused on creation and on update', async () => {
    const { db, request } = await createApp();
    expect((await request('/tags', json('POST', { name: 'Invoices', color: 'blue' }))).status).toBe(400);
    await request('/tags', json('POST', { name: 'Invoices', color: '#AABBCC' }));
    const [created] = await db.select().from(tagsTable);
    expect((await request(`/tags/${created!.id}`, json('PUT', { color: 'not-a-colour' }))).status).toBe(400);
    const [tag] = await db.select().from(tagsTable);
    expect(tag?.color).toBe('#AABBCC');
  });
});
