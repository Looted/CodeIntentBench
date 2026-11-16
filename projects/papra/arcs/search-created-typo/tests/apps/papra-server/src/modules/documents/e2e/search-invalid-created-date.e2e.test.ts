// Benchmark-owned test (not from the Papra repository). An invalid date in a created: filter is ignored
// rather than failing the whole search query: the search still answers 200 with a list of documents.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';
import { createDocumentSearchRepository } from '../document-search/database-fts5/database-fts5.repository';

const USER_ID = 'usr_111111111111111111111111';
const ORGANIZATION_ID = 'org_222222222222222222222222';

function makeDocument(id: string, name: string) {
  return { id, organizationId: ORGANIZATION_ID, name, originalName: name, content: '', mimeType: 'application/pdf', originalStorageKey: `documents/${id}`, originalSha256Hash: `hash-${id}`, createdBy: USER_ID, isDeleted: false };
}

async function search(searchQuery: string) {
  const documents = [makeDocument('doc_111111111111111111111111', 'invoice-march.pdf'), makeDocument('doc_222222222222222222222222', 'contract.pdf')];
  const { db } = await createInMemoryDatabase({
    users: [{ id: USER_ID, email: 'user@example.com' }],
    organizations: [{ id: ORGANIZATION_ID, name: 'Org 1' }],
    organizationMembers: [{ organizationId: ORGANIZATION_ID, userId: USER_ID, role: ORGANIZATION_ROLES.OWNER }],
    documents,
  });
  await createDocumentSearchRepository({ db }).indexDocuments({ documents });
  const { app } = createServer(createTestServerDependencies({ db, config: overrideConfig({ env: 'test' }) }));
  return app.request(`/api/organizations/${ORGANIZATION_ID}/documents?${new URLSearchParams({ searchQuery })}`, { method: 'GET' }, { loggedInUserId: USER_ID });
}

describe('an invalid created: date', () => {
  test('does not fail the search', async () => {
    for (const query of ['name:invoice created:2024-13-45', 'created:2024-13-45', 'created:>yesterday-ish']) {
      const response = await search(query);
      expect(response.status, query).toBe(200);
      const body = (await response.json()) as { documents: unknown[] };
      expect(Array.isArray(body.documents), query).toBe(true);
    }
  });

  test('a valid query still answers as before', async () => {
    const response = await search('name:invoice');
    expect(response.status).toBe(200);
    const { documents } = (await response.json()) as { documents: Array<{ name: string }> };
    expect(documents.map((d) => d.name)).toEqual(['invoice-march.pdf']);
  });
});
