// Benchmark-owned helper (not from the Papra repository) for the share-link-lifetime-long tests.
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';
import { createInMemoryStorageService } from '../../storage/storage.test-utils';

export const userId = 'usr_111111111111111111111111';
export const organizationId = 'org_222222222222222222222222';
export const documentId = 'doc_333333333333333333333333';
export const legacyShareLinkId = 'dsl_444444444444444444444444';
export const DAY_MS = 24 * 60 * 60 * 1000;

export async function createShareLinkTestApp() {
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
