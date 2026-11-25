// Benchmark-owned test (not from the Papra repository). A visitor without an account who opens a disabled or an
// expired share link gets 410 Gone, for the document and for its file; an enabled link still works. The test goes
// through the public API, so it holds wherever the check is made.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';
import { createInMemoryStorageService } from '../../storage/storage.test-utils';
import { createReadableStream } from '../../shared/streams/readable-stream';

const USER_ID = 'usr_111111111111111111111111';
const ORGANIZATION_ID = 'org_222222222222222222222222';
const DOCUMENT_ID = 'doc_333333333333333333333333';
const config = overrideConfig({ env: 'test', auth: { secret: 'test-secret-that-is-at-least-32-chars-long' }, documentsStorage: { driver: 'in-memory' } });

async function createLink(update?: Record<string, unknown>) {
  const storageKey = `${ORGANIZATION_ID}/originals/${DOCUMENT_ID}.pdf`;
  const { db } = await createInMemoryDatabase({
    users: [{ id: USER_ID, email: 'user@example.com' }],
    organizations: [{ id: ORGANIZATION_ID, name: 'Org 1' }],
    organizationMembers: [{ organizationId: ORGANIZATION_ID, userId: USER_ID, role: ORGANIZATION_ROLES.OWNER }],
    documents: [{ id: DOCUMENT_ID, organizationId: ORGANIZATION_ID, name: 'invoice.pdf', originalName: 'invoice.pdf', originalSize: 1024, originalStorageKey: storageKey, originalSha256Hash: 'hash_1', mimeType: 'application/pdf' }],
  });
  const documentsStorageService = createInMemoryStorageService();
  await documentsStorageService.saveFile({ fileName: 'invoice.pdf', storageKey, mimeType: 'application/pdf', fileStream: createReadableStream({ content: 'File content.' }) });
  const { app } = createServer(createTestServerDependencies({ db, config, documentsStorageService }));

  const created = await app.request(`/api/organizations/${ORGANIZATION_ID}/documents/${DOCUMENT_ID}/share-links`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) }, { loggedInUserId: USER_ID });
  expect(created.status).toBe(201);
  const { shareLink } = (await created.json()) as { shareLink: { id: string; token: string } };
  if (update) {
    const updated = await app.request(`/api/organizations/${ORGANIZATION_ID}/share-links/${shareLink.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(update) }, { loggedInUserId: USER_ID });
    expect(updated.status).toBe(200);
  }
  return { app, token: shareLink.token };
}

async function visit(update?: Record<string, unknown>) {
  const { app, token } = await createLink(update);
  const document = await app.request(`/api/share-links/${token}/document`);
  const file = await app.request(`/api/share-links/${token}/document/file`);
  return { document: document.status, file: file.status };
}

describe('a visitor opening a share link that is not usable gets 410 Gone', () => {
  test('a disabled link answers 410 for the document and the file', async () => {
    expect(await visit({ isEnabled: false })).toEqual({ document: 410, file: 410 });
  });

  test('an expired link answers 410 for the document and the file', async () => {
    expect(await visit({ expiresAt: new Date(Date.now() - 60_000).toISOString() })).toEqual({ document: 410, file: 410 });
  });

  test('an enabled link without expiry works', async () => {
    expect(await visit()).toEqual({ document: 200, file: 200 });
  });
});
