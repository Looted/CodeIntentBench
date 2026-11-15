// Benchmark-owned test (not from the Papra repository). The intake email webhook secret has no built-in
// value: with intake emails enabled and no secret configured the server does not start.
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import process from 'node:process';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { loadDryConfig, parseConfig } from '../config/config';

const emptyConfigDir = () => mkdtempSync(join(tmpdir(), 'papra-config-'));

function trapProcessExit() {
  return vi.spyOn(process, 'exit').mockImplementation(((code?: number) => {
    throw new Error(`process.exit(${code})`);
  }) as never);
}

describe('intake email webhook secret', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('the configuration has no built-in webhook secret', () => {
    const { config } = loadDryConfig();

    expect(config.intakeEmails.webhookSecret).to.eql(undefined);
  });

  test('with intake emails enabled and no secret set, the configuration is refused at startup', async () => {
    const exit = trapProcessExit();

    await expect(
      parseConfig({ env: { INTAKE_EMAILS_IS_ENABLED: 'true', PAPRA_CONFIG_DIR: emptyConfigDir() } }),
    ).rejects.toThrow('process.exit(1)');
    expect(exit).toHaveBeenCalledWith(1);
  });

  test('with intake emails enabled and a secret set, the configuration loads with that secret', async () => {
    const exit = trapProcessExit();

    const { config } = await parseConfig({
      env: {
        INTAKE_EMAILS_IS_ENABLED: 'true',
        INTAKE_EMAILS_WEBHOOK_SECRET: 'a-secret-of-more-than-16-chars',
        PAPRA_CONFIG_DIR: emptyConfigDir(),
      },
    });

    expect(config.intakeEmails.webhookSecret).to.eql('a-secret-of-more-than-16-chars');
    expect(exit).not.toHaveBeenCalled();
  });

  test('with intake emails disabled, no secret is needed', async () => {
    const exit = trapProcessExit();

    const { config } = await parseConfig({ env: { PAPRA_CONFIG_DIR: emptyConfigDir() } });

    expect(config.intakeEmails.isEnabled).to.eql(false);
    expect(config.intakeEmails.webhookSecret).to.eql(undefined);
    expect(exit).not.toHaveBeenCalled();
  });
});
