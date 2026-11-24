// Benchmark-owned test (not from the Papra repository). Renaming an organization through the API leaves
// the stored files of its existing documents where they are, also with storage-key synchronization on
// and the organization name in the pattern.
import type { Document } from '../documents.types';
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';
import { createInMemoryStorageService } from '../../storage/storage.test-utils';
import { createDocumentsRepository } from '../documents.repository';

const userId = 'usr_111111111111111111111111';
const organizationId = 'org_222222222222222222222222';

async function setup() {
  const { db } = await createInMemoryDatabase({
    users: [{ id: userId, email: 'user@example.com' }],
    organizations: [{ id: organizationId, name: 'Acme' }],
    organizationMembers: [{ organizationId, userId, role: ORGANIZATION_ROLES.OWNER }],
  });
  const documentsStorageService = createInMemoryStorageService();
  const { app } = createServer(
    createTestServerDependencies({
      db,
      documentsStorageService,
      config: overrideConfig({
        env: 'test',
        documentsStorage: {
          driver: 'in-memory',
          pattern: {
            isStorageKeySyncEnabled: true,
            useLegacyStorageKeyDefinitionSystem: false,
            storageKeyPattern: '{{organization.name}}/{{document.name}}',
          },
        },
      }),
    }),
  );

  const upload = async (name: string, content: string) => {
    const formData = new FormData();
    formData.append('file', new File([content], name, { type: 'text/plain' }));
    const body = new Response(formData);
    const response = await app.request(
      `/api/organizations/${organizationId}/documents`,
      { method: 'POST', headers: Object.fromEntries(body.headers.entries()), body: await body.arrayBuffer() },
      { loggedInUserId: userId },
    );
    expect(response.status).to.eql(200);
    return ((await response.json()) as { document: Document }).document;
  };

  const documentsRepository = createDocumentsRepository({ db });

  return {
    app,
    upload,
    storedKeys: () => [...documentsStorageService._getStorage().keys()].sort(),
    getStorageKey: async (documentId: string) =>
      (await documentsRepository.getDocumentById({ documentId, organizationId })).document?.originalStorageKey,
  };
}

// Lets fire-and-forget work started by a request (event handlers, background moves) run before asserting.
const settle = async () => new Promise((resolve) => setTimeout(resolve, 150));

describe('organization rename and storage keys', () => {
  test('renaming an organization keeps the storage keys and stored files of its existing documents', async () => {
    const { app, upload, storedKeys, getStorageKey } = await setup();

    const invoice = await upload('invoice.txt', 'this is an invoice');
    const contract = await upload('contract.txt', 'this is a contract');
    await settle();

    expect(storedKeys()).to.eql(['Acme/contract.txt', 'Acme/invoice.txt']);

    const renameResponse = await app.request(
      `/api/organizations/${organizationId}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Acme Corporation' }),
      },
      { loggedInUserId: userId },
    );
    expect(renameResponse.status).to.eql(200);
    await settle();

    expect(storedKeys()).to.eql(['Acme/contract.txt', 'Acme/invoice.txt']);
    expect(await getStorageKey(invoice.id)).to.eql('Acme/invoice.txt');
    expect(await getStorageKey(contract.id)).to.eql('Acme/contract.txt');

    const fileResponse = await app.request(
      `/api/organizations/${organizationId}/documents/${invoice.id}/file`,
      { method: 'GET' },
      { loggedInUserId: userId },
    );
    expect(fileResponse.status).to.eql(200);
    expect(await fileResponse.text()).to.eql('this is an invoice');
  });

  test('a document uploaded after the rename is stored under the new organization name', async () => {
    const { app, upload, storedKeys } = await setup();

    await upload('invoice.txt', 'this is an invoice');
    await app.request(
      `/api/organizations/${organizationId}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Acme Corporation' }),
      },
      { loggedInUserId: userId },
    );
    await upload('contract.txt', 'this is a contract');
    await settle();

    expect(storedKeys()).to.eql(['Acme Corporation/contract.txt', 'Acme/invoice.txt']);
  });
});
