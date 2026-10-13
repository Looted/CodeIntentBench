import { defineConfig } from 'figue';
import { describe, expect, test } from 'vitest';
import { configDefinition } from '../config/config';

describe('intake emails webhook secret', () => {
  test('a webhook secret shorter than 16 characters is rejected by the config', () => {
    expect(() => defineConfig(configDefinition, { envSource: { INTAKE_EMAILS_WEBHOOK_SECRET: 'short' } })).toThrow();
  });

  test('a webhook secret longer than 128 characters is rejected by the config', () => {
    expect(() => defineConfig(configDefinition, { envSource: { INTAKE_EMAILS_WEBHOOK_SECRET: 'a'.repeat(129) } })).toThrow();
  });

  test('a 32-character webhook secret is accepted', () => {
    const { config } = defineConfig(configDefinition, { envSource: { INTAKE_EMAILS_WEBHOOK_SECRET: 'a'.repeat(32) } });
    expect(config.intakeEmails.webhookSecret).toBe('a'.repeat(32));
  });

  test('the default webhook secret satisfies the length rule', () => {
    const { config } = defineConfig(configDefinition, { envSource: {} });
    expect(config.intakeEmails.webhookSecret.length).toBeGreaterThanOrEqual(16);
    expect(config.intakeEmails.webhookSecret.length).toBeLessThanOrEqual(128);
  });
});
