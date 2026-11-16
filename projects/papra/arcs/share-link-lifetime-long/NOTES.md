# share-link-lifetime-long

Base `e7acb46f` (the project pin). Patterns: long-capture, near-matches, quiet-contradiction.

## Decisions

All four are stated by the user during the arc and are in no store at setup (written for the benchmark; no upstream commit):

| Step | Decision | Reason given by the user |
|---|---|---|
| s1 | new share links must end within 90 days, and an update may not remove the end date or push it further; links that exist are left alone | a compliance review found links without an end date serving invoices to former clients years later |
| s2 | share link passwords set at creation or update are at least 12 characters | forwarded links, short passwords guessed within minutes |
| s3 | access token default lifetime 15 → 5 minutes | the shared front-desk computer kept the document open for the next visitor |
| s5 | share links per document default 10 → 3 | piles of old links nobody can account for |

s4 is unrelated (tag name length message). s6 asks for permanent links ("stays up for good", `permanent: true`) without the words expiry, lifetime or 90 days. s7 asks for the reason; the look-alikes give three wrong answers that sound right.

## Hidden tests

All under `tests/.../document-share-links/e2e/`, owned by the benchmark. The lifetime and password files each set up the same test app (a document and a link without an end date seeded in the in-memory database); the setup is repeated in both files because the harness restores only the test files a step names:

- `share-link-lifetime.e2e.test.ts`: the intent test (s1 on). No end date or `null` → 400, also with `permanent: true`; 91 and 365 days → 400; 30 and 89.9 days → 201; update to `null` or 120 days → 400, to 60 days → 200; the seeded link without an end date can still be disabled.
- `share-link-password.e2e.test.ts` (s2): 7 and 11 characters → 400, 12 → 201; same at update.
- `share-link-token-lifetime.test.ts` (s3) and `share-link-max-links.test.ts` (s5): `parseConfig` defaults 5 minutes and 3 links, both overridable by their variables. They are separate files because a step's task test file must pass as a whole.

Checked on a checkout of the base with Node 26:

| State | Result |
|---|---|
| base | lifetime: 2 of 5 pass (the seeded link can be disabled; `permanent` is refused by the strict body schema); password: 0 of 2; token lifetime and max links: 0 of 1 each |
| reference implementation of s1, s2, s3, s5 (`v.check` on `expiresAt` in both body schemas, a 12-character password schema for create and update, config defaults) with Papra's share-link e2e test updated to send an end date and a longer password | all 9 pass; the whole suite passes |
| the same, then the create schema accepts `permanent` and an optional `expiresAt` | 3 lifetime tests fail |

The reference implementation must update `shared-document-access.e2e.test.ts` (it creates links without an end date and with the password `hunter2`); s1's prompt says so.
