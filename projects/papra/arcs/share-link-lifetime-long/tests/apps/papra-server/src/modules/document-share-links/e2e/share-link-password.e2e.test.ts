// Benchmark-owned test (not from the Papra repository). Decision stated by the user in s2 of
// share-link-lifetime-long: a share link password set at creation or update has at least 12 characters.
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

describe('share link password length', () => {
  test('a password shorter than 12 characters is refused at creation, 12 characters are accepted', async () => {
    const { create, inDays } = await createShareLinkTestApp();

    expect((await create({ password: 'hunter2', expiresAt: inDays(7) })).status).toBe(400);
    expect((await create({ password: '12345678901', expiresAt: inDays(7) })).status).toBe(400);
    expect((await create({ password: '123456789012', expiresAt: inDays(7) })).status).toBe(201);
  });

  test('a password shorter than 12 characters is refused at update', async () => {
    const { create, update, inDays } = await createShareLinkTestApp();
    const created = await create({ password: 'a-long-enough-password', expiresAt: inDays(7) });
    const { shareLink } = (await created.json()) as { shareLink: { id: string } };

    expect((await update(shareLink.id, { password: 'short' })).status).toBe(400);
    expect((await update(shareLink.id, { password: 'another-long-password' })).status).toBe(200);
  });
});
