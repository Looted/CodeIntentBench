// Benchmark-owned test (not from the Papra repository). Default set by the user in s3 of
// share-link-lifetime-long: the access token issued after password verification lives 5 minutes, still
// configurable.
import { describe, expect, test } from 'vitest';
import { parseConfig } from '../../config/config';

describe('share link access token lifetime', () => {
  test('the access token lifetime defaults to 5 minutes and can still be configured', async () => {
    const { config } = await parseConfig({ env: {} });
    expect(config.documentShareLinks.accessTokenTtlMinutes).toBe(5);

    const { config: custom } = await parseConfig({ env: { DOCUMENT_SHARE_LINKS_ACCESS_TOKEN_TTL_MINUTES: '20' } });
    expect(custom.documentShareLinks.accessTokenTtlMinutes).toBe(20);
  });
});
