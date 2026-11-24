// Benchmark-owned test (not from the Papra repository). The name: and content: search filters use contains
// matching, not exact equality: name:foo finds foobar.pdf and my-foo-document.pdf as well as foo.pdf (the
// examples of the advanced search guide), and content:budg finds a document that mentions the budget.
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
    makeDocument('doc_111111111111111111111111', 'foo.pdf', 'terms and conditions'),
    makeDocument('doc_222222222222222222222222', 'foobar.pdf', 'the yearly budget and the hiring plan'),
    makeDocument('doc_333333333333333333333333', 'my-foo-document.pdf', 'meeting notes'),
    makeDocument('doc_444444444444444444444444', 'contract.pdf', 'signed by both parties'),
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
  return ((await response.json()) as { documents: Array<{ name: string }> }).documents.map((d) => d.name).sort();
}

describe('name: and content: filters', () => {
  test('name:foo matches foo, foobar and my-foo-document', async () => {
    expect(await search('name:foo')).toEqual(['foo.pdf', 'foobar.pdf', 'my-foo-document.pdf']);
  });

  test('content: matches the beginning of a word among others', async () => {
    expect(await search('content:budg')).toEqual(['foobar.pdf']);
  });
});
