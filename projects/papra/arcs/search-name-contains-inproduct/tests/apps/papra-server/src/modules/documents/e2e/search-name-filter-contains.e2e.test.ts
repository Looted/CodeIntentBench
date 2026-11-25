// Benchmark-owned test (not from the Papra repository). The name: and content: search filters use contains
// matching, not exact equality: name:report finds quarterly-report-final.pdf, content:budget finds a
// document whose content mentions the budget among other words.
import { describe, expect, test } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';
import { createDocumentSearchRepository } from '../document-search/database-fts5/database-fts5.repository';

const USER_ID = 'usr_111111111111111111111111';
const ORGANIZATION_ID = 'org_222222222222222222222222';

function makeDocument(id: string, name: string, content: string) {
  return { id, organizationId: ORGANIZATION_ID, name, originalName: name, content, mimeType: 'application/pdf', originalStorageKey: `documents/${id}`, originalSha256Hash: `hash-${id}`, createdBy: USER_ID, isDeleted: false };
}

async function search(searchQuery: string) {
  const documents = [
    makeDocument('doc_111111111111111111111111', 'quarterly-report-final.pdf', 'the yearly budget and the hiring plan'),
    makeDocument('doc_222222222222222222222222', 'contract.pdf', 'terms and conditions'),
  ];
  const { db } = await createInMemoryDatabase({
    users: [{ id: USER_ID, email: 'user@example.com' }],
    organizations: [{ id: ORGANIZATION_ID, name: 'Org 1' }],
    organizationMembers: [{ organizationId: ORGANIZATION_ID, userId: USER_ID, role: ORGANIZATION_ROLES.OWNER }],
    documents,
  });
  await createDocumentSearchRepository({ db }).indexDocuments({ documents });
  const { app } = createServer(createTestServerDependencies({ db, config: overrideConfig({ env: 'test' }) }));
  const response = await app.request(`/api/organizations/${ORGANIZATION_ID}/documents?${new URLSearchParams({ searchQuery })}`, { method: 'GET' }, { loggedInUserId: USER_ID });
  expect(response.status).toBe(200);
  return ((await response.json()) as { documents: Array<{ name: string }> }).documents.map((d) => d.name);
}

describe('name: and content: filters', () => {
  test('name: matches a part of the name', async () => {
    expect(await search('name:report')).toEqual(['quarterly-report-final.pdf']);
  });

  test('content: matches a word among others', async () => {
    expect(await search('content:budget')).toEqual(['quarterly-report-final.pdf']);
  });
});
