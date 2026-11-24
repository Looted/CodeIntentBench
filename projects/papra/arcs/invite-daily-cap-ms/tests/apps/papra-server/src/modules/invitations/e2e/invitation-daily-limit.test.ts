// Benchmark-owned test (not from the Papra repository). Default set by the user in s1 of
// invite-daily-cap-ms: a user can send 10 invitations a day, still configurable.
import { describe, expect, test } from 'vitest';
import { parseConfig } from '../../config/config';

describe('invitations per day', () => {
  test('a user can send 10 invitations a day by default, still configurable', async () => {
    const { config } = await parseConfig({ env: {} });
    expect(config.organizations.maxUserInvitationsPerDay).toBe(10);

    const { config: custom } = await parseConfig({ env: { MAX_USER_ORGANIZATIONS_INVITATIONS_PER_DAY: '4' } });
    expect(custom.organizations.maxUserInvitationsPerDay).toBe(4);
  });
});
