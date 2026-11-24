// Benchmark-owned test (not from the Papra repository). Decision stated by the user in s1 of
// share-link-lifetime-long: every new or updated public share link lapses within 90 days; a link
// without an end date, or with one further out, is refused with 400. Links that already exist are
// left alone.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';
import { createInMemoryStorageService } from '../../storage/storage.test-utils';

// Test app: a document and a share link without an end date seeded in the in-memory database.
const userId = 'usr_111111111111111111111111';
const organizationId = 'org_222222222222222222222222';
const documentId = 'doc_333333333333333333333333';
const legacyShareLinkId = 'dsl_444444444444444444444444';
const DAY_MS = 24 * 60 * 60 * 1000;

async function createShareLinkTestApp() {
  const { db } = await createInMemoryDatabase({
    users: [{ id: userId, email: 'user@example.com' }],
    organizations: [{ id: organizationId, name: 'Org 1' }],
    organizationMembers: [{ organizationId, userId, role: ORGANIZATION_ROLES.OWNER }],
    documents: [{
      id: documentId,
      organizationId,
      name: 'invoice.pdf',
      originalName: 'invoice.pdf',
      originalSize: 1024,
      originalStorageKey: `${organizationId}/originals/${documentId}.pdf`,
      originalSha256Hash: 'a'.repeat(64),
      mimeType: 'application/pdf',
    }],
    documentShareLinks: [{
      id: legacyShareLinkId,
      organizationId,
      documentId,
      token: 'b'.repeat(64),
      createdBy: userId,
      expiresAt: null,
    }],
  } as never);

  const { app } = createServer(createTestServerDependencies({
    db,
    documentsStorageService: createInMemoryStorageService(),
    config: overrideConfig({ env: 'test', auth: { secret: 'test-secret-that-is-at-least-32-chars-long' }, documentsStorage: { driver: 'in-memory' } }),
  }));

  const call = async (method: string, path: string, body?: unknown) => app.request(
    path,
    { method, headers: { 'Content-Type': 'application/json' }, body: body === undefined ? undefined : JSON.stringify(body) },
    { loggedInUserId: userId },
  );

  return {
    create: async (body: Record<string, unknown>) => call('POST', `/api/organizations/${organizationId}/documents/${documentId}/share-links`, body),
    update: async (shareLinkId: string, body: Record<string, unknown>) => call('PATCH', `/api/organizations/${organizationId}/share-links/${shareLinkId}`, body),
    inDays: (days: number) => new Date(Date.now() + days * DAY_MS).toISOString(),
  };
}

const password = 'correct-horse-battery';

describe('share link lifetime', () => {
  test('a link without an end date is refused', async () => {
    const { create } = await createShareLinkTestApp();

    expect((await create({ password })).status).toBe(400);
    expect((await create({ password, expiresAt: null })).status).toBe(400);
  });

  test('a link without an end date is refused also when it is asked to be permanent', async () => {
    const { create } = await createShareLinkTestApp();

    expect((await create({ password, permanent: true })).status).toBe(400);
    expect((await create({ password, expiresAt: null, permanent: true })).status).toBe(400);
  });

  test('a link that ends more than 90 days from now is refused, one within 90 days is created', async () => {
    const { create, inDays } = await createShareLinkTestApp();

    expect((await create({ password, expiresAt: inDays(91) })).status).toBe(400);
    expect((await create({ password, expiresAt: inDays(365) })).status).toBe(400);
    expect((await create({ password, expiresAt: inDays(30) })).status).toBe(201);
    expect((await create({ password, expiresAt: inDays(89.9) })).status).toBe(201);
  });

  test('a link cannot be updated to have no end date or one beyond 90 days', async () => {
    const { create, update, inDays } = await createShareLinkTestApp();
    const created = await create({ password, expiresAt: inDays(10) });
    const { shareLink } = (await created.json()) as { shareLink: { id: string } };

    expect((await update(shareLink.id, { expiresAt: null })).status).toBe(400);
    expect((await update(shareLink.id, { expiresAt: inDays(120) })).status).toBe(400);
    expect((await update(shareLink.id, { expiresAt: inDays(60) })).status).toBe(200);
  });

  test('a link that existed before without an end date can still be disabled', async () => {
    const { update } = await createShareLinkTestApp();

    expect((await update(legacyShareLinkId, { isEnabled: false })).status).toBe(200);
  });
});
