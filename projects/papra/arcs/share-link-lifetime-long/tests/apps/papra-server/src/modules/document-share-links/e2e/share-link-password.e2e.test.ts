// Benchmark-owned test (not from the Papra repository). Decision stated by the user in s2 of
// share-link-lifetime-long: a share link password set at creation or update has at least 12 characters.
import { describe, expect, test } from 'vitest';
import { createShareLinkTestApp } from './share-link-test-app';

describe('share link password length', () => {
  test('a password shorter than 12 characters is refused at creation, 12 characters are accepted', async () => {
    const { create, inDays } = await createShareLinkTestApp();

    expect((await create({ password: 'hunter2', expiresAt: inDays(7) })).status).toBe(400);
    expect((await create({ password: '12345678901', expiresAt: inDays(7) })).status).toBe(400);
    expect((await create({ password: '123456789012', expiresAt: inDays(7) })).status).toBe(201);
  });

  test('a password shorter than 12 characters is refused at update', async () => {
    const { create, update, inDays } = await createShareLinkTestApp();
    const created = await create({ password: 'a-long-enough-password', expiresAt: inDays(7) });
    const { shareLink } = (await created.json()) as { shareLink: { id: string } };

    expect((await update(shareLink.id, { password: 'short' })).status).toBe(400);
    expect((await update(shareLink.id, { password: 'another-long-password' })).status).toBe(200);
  });
});
