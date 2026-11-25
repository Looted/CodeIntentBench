// Benchmark-owned test (not from the Papra repository). Docling, Mistral OCR and Azure DI requests default to a 5-minute timeout.
import { describe, expect, test } from 'vitest';
import { loadDryConfig } from './config';

describe('the timeout of external extraction services', () => {
  test('Docling, Mistral OCR and Azure DI default to 5 minutes', () => {
    const { strategy } = loadDryConfig().config.documentContentExtraction;
    expect(strategy.docling.timeoutMs).toBe(5 * 60 * 1000);
    expect(strategy.mistralOcr.timeoutMs).toBe(5 * 60 * 1000);
    expect(strategy.azureDi.timeoutMs).toBe(5 * 60 * 1000);
  });
});
