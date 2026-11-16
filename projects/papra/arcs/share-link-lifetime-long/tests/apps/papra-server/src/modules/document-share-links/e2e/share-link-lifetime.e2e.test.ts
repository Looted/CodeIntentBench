// Benchmark-owned test (not from the Papra repository). Decision stated by the user in s1 of
// share-link-lifetime-long: every new or updated public share link lapses within 90 days; a link
// without an end date, or with one further out, is refused with 400. Links that already exist are
// left alone.
import { describe, expect, test } from 'vitest';
import { createShareLinkTestApp, legacyShareLinkId } from './share-link-test-app';

const password = 'correct-horse-battery';

describe('share link lifetime', () => {
  test('a link without an end date is refused', async () => {
    const { create } = await createShareLinkTestApp();

    expect((await create({ password })).status).toBe(400);
    expect((await create({ password, expiresAt: null })).status).toBe(400);
  });

  test('a link without an end date is refused also when it is asked to be permanent', async () => {
    const { create } = await createShareLinkTestApp();

    expect((await create({ password, permanent: true })).status).toBe(400);
    expect((await create({ password, expiresAt: null, permanent: true })).status).toBe(400);
  });

  test('a link that ends more than 90 days from now is refused, one within 90 days is created', async () => {
    const { create, inDays } = await createShareLinkTestApp();

    expect((await create({ password, expiresAt: inDays(91) })).status).toBe(400);
    expect((await create({ password, expiresAt: inDays(365) })).status).toBe(400);
    expect((await create({ password, expiresAt: inDays(30) })).status).toBe(201);
    expect((await create({ password, expiresAt: inDays(89.9) })).status).toBe(201);
  });

  test('a link cannot be updated to have no end date or one beyond 90 days', async () => {
    const { create, update, inDays } = await createShareLinkTestApp();
    const created = await create({ password, expiresAt: inDays(10) });
    const { shareLink } = (await created.json()) as { shareLink: { id: string } };

    expect((await update(shareLink.id, { expiresAt: null })).status).toBe(400);
    expect((await update(shareLink.id, { expiresAt: inDays(120) })).status).toBe(400);
    expect((await update(shareLink.id, { expiresAt: inDays(60) })).status).toBe(200);
  });

  test('a link that existed before without an end date can still be disabled', async () => {
    const { update } = await createShareLinkTestApp();

    expect((await update(legacyShareLinkId, { isEnabled: false })).status).toBe(200);
  });
});
