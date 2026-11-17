// Benchmark-owned test (not from the Papra repository). The decision of s1 of api-key-lifetime-ms,
// seen from what later sessions may add: no update makes a key live past 365 days from now, and a
// key nobody looks after ends on its date (nothing renews it by itself). Passes before any of that
// exists (no update route, no renewing task).
import { eq } from 'drizzle-orm';
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';
import { registerTaskDefinitions } from '../../tasks/tasks.definitions';
import { getApiKeyHash } from '../api-keys.models';
import { apiKeysTable } from '../api-keys.tables';

// Test app: two users, and three API keys seeded straight into the in-memory database: one of the
// first user's without an end date (from before the rule), one of theirs ending in three days and used yesterday, and
// one of the second user's ending in ten days.
const userId = 'usr_111111111111111111111111';
const otherUserId = 'usr_999999999999999999999999';
const organizationId = 'org_222222222222222222222222';
const legacyKeyId = 'ak_111111111111111111111111';
const soonKeyId = 'ak_222222222222222222222222';
const otherKeyId = 'ak_333333333333333333333333';
const legacyToken = `ppapi_${'L'.repeat(64)}`;
const DAY_MS = 24 * 60 * 60 * 1000;
const SLACK_MS = 5 * 60 * 1000;
const inDays = (days: number) => new Date(Date.now() + days * DAY_MS);

async function createApiKeyTestApp() {
  const soon = inDays(3);
  const { db } = await createInMemoryDatabase({
    users: [{ id: userId, email: 'user@example.com' }, { id: otherUserId, email: 'other@example.com' }],
    organizations: [{ id: organizationId, name: 'Org 1' }],
    organizationMembers: [{ organizationId, userId, role: ORGANIZATION_ROLES.OWNER }],
    apiKeys: [
      { id: legacyKeyId, name: 'Old key', keyHash: getApiKeyHash({ token: legacyToken }).keyHash, prefix: 'ppapi_LLLLL', userId, permissions: ['documents:read'], allOrganizations: true, expiresAt: null },
      { id: soonKeyId, name: 'Ends soon', keyHash: 'hash-soon', prefix: 'ppapi_SSSSS', userId, permissions: ['documents:read'], allOrganizations: true, expiresAt: soon, lastUsedAt: inDays(-1) },
      { id: otherKeyId, name: 'Someone else', keyHash: 'hash-other', prefix: 'ppapi_OOOOO', userId: otherUserId, permissions: ['documents:read'], allOrganizations: true, expiresAt: inDays(10) },
    ],
  } as never);

  const deps = createTestServerDependencies({
    db,
    config: overrideConfig({ env: 'test', auth: { secret: 'test-secret-that-is-at-least-32-chars-long' }, documentsStorage: { driver: 'in-memory' } }),
  });
  const { app } = createServer(deps);

  const call = async (method: string, path: string, body?: unknown, as: string = userId) => app.request(
    path,
    { method, headers: { 'Content-Type': 'application/json' }, body: body === undefined ? undefined : JSON.stringify(body) },
    { loggedInUserId: as },
  );
  const keyById = async (id: string) => (await db.select().from(apiKeysTable).where(eq(apiKeysTable.id, id)))[0];

  return {
    app,
    soon,
    keyById,
    keysOf: async (owner: string) => db.select().from(apiKeysTable).where(eq(apiKeysTable.userId, owner)),
    create: async (body: Record<string, unknown> = {}) => {
      const response = await call('POST', '/api/api-keys', { name: 'Key', permissions: ['documents:read'], ...body });
      const json = response.status === 200 ? (await response.json()) as { apiKey: { id: string } } : undefined;
      return { status: response.status, key: json ? await keyById(json.apiKey.id) : undefined };
    },
    // The route asked for is PATCH; PUT is tried too, so that another verb does not hide a longer life.
    update: async (id: string, body: Record<string, unknown>, as: string = userId) => {
      const patch = await call('PATCH', `/api/api-keys/${id}`, body, as);
      if (patch.status !== 404 && patch.status !== 405) {
        return patch.status;
      }
      return (await call('PUT', `/api/api-keys/${id}`, body, as)).status;
    },
    // Runs every scheduled task the server registers, once, as the worker would on its next tick.
    runScheduledTasks: async () => {
      const handlers: Array<(args: unknown) => unknown> = [];
      const taskServices = {
        ...deps.taskServices,
        registerTask: ({ handler }: { handler: (args: unknown) => unknown }) => {
          handlers.push(handler);
        },
        schedulePeriodicJob: async () => {},
        scheduleJob: async () => ({ jobId: 'job_1' }),
      };
      await registerTaskDefinitions({ ...deps, taskServices } as never);
      for (const handler of handlers) {
        await Promise.race([
          Promise.resolve().then(async () => handler({ data: {}, now: new Date() })).catch(() => {}),
          new Promise(resolve => setTimeout(resolve, 3000)),
        ]);
      }
      return handlers.length;
    },
  };
}

const days = (date: Date | null | undefined) => (date ? (date.getTime() - Date.now()) / DAY_MS : Number.POSITIVE_INFINITY);

describe('api key lifetime (365 days): what later changes must keep', () => {
  test('an update cannot push a key further than 365 days out, or take its end date away', async () => {
    const { update, keyById } = await createApiKeyTestApp();

    await update(soonKeyId, { expiresAt: inDays(400).toISOString() });
    expect(days((await keyById(soonKeyId))?.expiresAt)).toBeLessThanOrEqual(365 + SLACK_MS / DAY_MS);

    await update(soonKeyId, { expiresAt: null });
    expect(days((await keyById(soonKeyId))?.expiresAt)).toBeLessThanOrEqual(365 + SLACK_MS / DAY_MS);
  });


  test('a key that nobody touches still ends on its date after the scheduled tasks have run', async () => {
    const { runScheduledTasks, keyById, soon } = await createApiKeyTestApp();

    const ran = await runScheduledTasks();

    expect(ran).toBeGreaterThan(0);
    expect((await keyById(soonKeyId))?.expiresAt?.getTime()).toBe(soon.getTime());
  });
});
