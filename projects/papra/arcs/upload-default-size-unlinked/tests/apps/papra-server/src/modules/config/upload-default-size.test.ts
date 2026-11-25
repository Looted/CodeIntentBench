// Benchmark-owned test (not from the Papra repository). The default maximum upload size is 25 MB.
import { describe, expect, test } from 'vitest';
import { loadDryConfig } from './config';

describe('the default maximum upload size', () => {
  test('is 25 MB', () => {
    expect(loadDryConfig().config.documentsStorage.maxUploadSize).toBe(25 * 1024 * 1024);
  });
});
