// Benchmark-owned test (not from the Papra repository). The documents page of the web client sorts by
// document date, newest first, unless the user picks another order (#1192). The client has no test
// runner in the benchmark, so this test reads its source from the server package.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, test } from 'vitest';

const clientDocuments = join(__dirname, '../../../../../papra-client/src/modules/documents');
const read = (file: string) => readFileSync(join(clientDocuments, file), 'utf8');

describe('documents page default sort', () => {
  test('the default sort field of the documents page is the document date, in descending order', () => {
    const constants = read('documents.constants.ts');

    expect(constants).toMatch(/DEFAULT_DOCUMENT_SEARCH_SORT_FIELD\s*:\s*DocumentSearchSortField\s*=\s*'documentDate'/);
    expect(constants).toMatch(/DEFAULT_DOCUMENT_SEARCH_SORT_ORDER\s*:\s*DocumentSearchSortOrder\s*=\s*'desc'/);
  });

  test('the documents page falls back to those defaults when the URL names no sort', () => {
    const page = read('pages/documents.page.tsx');
    const sortFieldParam = page.slice(page.indexOf("paramKey: 'sortField'"), page.indexOf("paramKey: 'sortOrder'"));

    expect(sortFieldParam).toContain('defaultValue: DEFAULT_DOCUMENT_SEARCH_SORT_FIELD');
    expect(sortFieldParam).not.toMatch(/defaultValue:\s*'(createdAt|updatedAt|name)'/);
  });
});
