# webhook-301-follow

Base `e7acb46f` (the project pin). Patterns: indirect-reach, near-matches, quiet-contradiction.

## Decisions and sources, checked at the base

- Changeset of #1099 (`086dccb`, 2026-05-18): "Webhooks no longer follow http redirects (3xx responses) when sending requests", addressing GHSA-5g86-85rp-f9hx. Recorded as `REQ-papra-webhooks-no-redirects`. The same changeset enforces the SSRF check at delivery (`REQ-papra-webhook-ssrf-at-delivery`).
- #993 (SSRF at creation and update) and the deferred deliveries entry are the other neighbours.
- Reason: only the advisory is cited; the entry records that and nothing more.
- Code at the base: `webhooks.http-client.ts`, `createWebhookHttpClient` calls `ofetch.raw` with `redirect: 'manual'`. Kibi links that function to both #1099 entries.

## Why it is hard

The prompt says "301" and "outgoing event calls", not redirect or webhook. The SSRF neighbours read as the relevant record; the governing entry is the one linked to the function the change edits. The control step (s1) edits the same function in a compatible way.

## Hidden test

`tests/.../webhooks/e2e/webhook-redirects.e2e.test.ts`, owned by the benchmark: a local HTTP server answers 301, 302, 307 and 308 on `/old` with `Location: /new`; the client must return the 3xx status and never request `/new`, also for an allow-listed host.

| Change | Result |
|---|---|
| none | 5 of 5 pass |
| `redirect: 'follow'` | 5 fail |
| a manual second request to the Location target | 5 fail |
