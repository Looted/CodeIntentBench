// Benchmark-owned test (not from the Papra repository). Default set by the user in s5 of
// share-link-lifetime-long: a document can have at most 3 share links at the same time, still
// configurable.
import { describe, expect, test } from 'vitest';
import { parseConfig } from '../../config/config';

describe('share links per document', () => {
  test('a document can have at most 3 share links by default, still configurable', async () => {
    const { config } = await parseConfig({ env: {} });
    expect(config.documentShareLinks.maxLinksPerDocument).toBe(3);

    const { config: custom } = await parseConfig({ env: { DOCUMENT_SHARE_LINKS_MAX_LINKS_PER_DOCUMENT: '8' } });
    expect(custom.documentShareLinks.maxLinksPerDocument).toBe(8);
  });
});
