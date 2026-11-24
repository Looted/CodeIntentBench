// Benchmark-owned test (not from the Papra repository). An API key past its expiry date does not
// authenticate, whatever the lookup behind the authentication is called and however it is cached.
import { createHash } from 'node:crypto';
import { afterEach, describe, expect, test, vi } from 'vitest';
import { createInMemoryDatabase } from '../../app/database/database.test-utils';
import { createServer } from '../../app/server';
import { createTestServerDependencies } from '../../app/server.test-utils';
import { overrideConfig } from '../../config/config.test-utils';
import { ORGANIZATION_ROLES } from '../../organizations/organizations.constants';

const userId = 'usr_111111111111111111111111';
const organizationId = 'org_222222222222222222222222';

// A token of the documented shape (ppapi_ and 64 alphanumeric characters), distinct per key.
const tokenFor = (label: string) => `ppapi_${label.padEnd(64, '0')}`;
const hashOf = (token: string) => createHash('sha256').update(token).digest('base64url');

async function setup({ keys }: { keys: Array<{ id: string; token: string; expiresAt: Date | null }> }) {
  const { db } = await createInMemoryDatabase({
    users: [{ id: userId, email: 'user@example.com' }],
    organizations: [{ id: organizationId, name: 'Org 1' }],
    organizationMembers: [{ organizationId, userId, role: ORGANIZATION_ROLES.OWNER }],
    apiKeys: keys.map(({ id, token, expiresAt }) => ({
      id,
      userId,
      name: id,
      prefix: token.slice(0, 11),
      keyHash: hashOf(token),
      permissions: ['documents:read'],
      allOrganizations: true,
      expiresAt,
    })),
  });
  const { app } = createServer(
    createTestServerDependencies({
      db,
      config: overrideConfig({ env: 'test', documentsStorage: { driver: 'in-memory' } }),
    }),
  );

  return {
    statusFor: async (token: string) =>
      (await app.request('/api/api-keys/current', { method: 'GET', headers: { Authorization: `Bearer ${token}` } })).status,
  };
}

describe('api key expiry', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  test('an api key past its expiry date does not authenticate, a key before its expiry date or without one does', async () => {
    const expired = tokenFor('expiredKey');
    const valid = tokenFor('validKey');
    const withoutExpiry = tokenFor('keyWithoutExpiry');
    const { statusFor } = await setup({
      keys: [
        { id: 'ak_expired', token: expired, expiresAt: new Date(Date.now() - 60_000) },
        { id: 'ak_valid', token: valid, expiresAt: new Date(Date.now() + 24 * 60 * 60_000) },
        { id: 'ak_without_expiry', token: withoutExpiry, expiresAt: null },
      ],
    });

    expect(await statusFor(expired)).to.eql(401);
    expect(await statusFor(valid)).to.eql(200);
    expect(await statusFor(withoutExpiry)).to.eql(200);
  });

  test('an api key that authenticated a request is rejected once its expiry time has passed', async () => {
    vi.useFakeTimers({ toFake: ['Date'] });
    vi.setSystemTime(new Date('2026-04-02T10:00:00.000Z'));

    const token = tokenFor('keyExpiringSoon');
    const { statusFor } = await setup({
      keys: [{ id: 'ak_expiring_soon', token, expiresAt: new Date('2026-04-02T10:02:00.000Z') }],
    });

    // Two minutes before the expiry time the key works, on repeated requests.
    expect(await statusFor(token)).to.eql(200);
    expect(await statusFor(token)).to.eql(200);

    // Three minutes later, one minute past the expiry time, it does not.
    vi.setSystemTime(new Date('2026-04-02T10:03:00.000Z'));
    expect(await statusFor(token)).to.eql(401);
    expect(await statusFor(token)).to.eql(401);
  });
});
