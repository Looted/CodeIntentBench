// Benchmark-owned test (not from the Papra repository). Defaults set by the user in s3 and s5 of
// share-link-lifetime-long: the access token issued after password verification lives 5 minutes, and a
// document can have at most 3 share links at the same time. Both stay configurable.
import { describe, expect, test } from 'vitest';
import { parseConfig } from '../../config/config';

describe('share link defaults', () => {
  test('the access token lifetime defaults to 5 minutes and can still be configured', async () => {
    const { config } = await parseConfig({ env: {} });
    expect(config.documentShareLinks.accessTokenTtlMinutes).toBe(5);

    const { config: custom } = await parseConfig({ env: { DOCUMENT_SHARE_LINKS_ACCESS_TOKEN_TTL_MINUTES: '20' } });
    expect(custom.documentShareLinks.accessTokenTtlMinutes).toBe(20);
  });

  test('a document can have at most 3 share links by default, still configurable', async () => {
    const { config } = await parseConfig({ env: {} });
    expect(config.documentShareLinks.maxLinksPerDocument).toBe(3);

    const { config: custom } = await parseConfig({ env: { DOCUMENT_SHARE_LINKS_MAX_LINKS_PER_DOCUMENT: '8' } });
    expect(custom.documentShareLinks.maxLinksPerDocument).toBe(8);
  });
});
