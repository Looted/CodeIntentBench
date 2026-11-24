# api-key-cache-long

Base `884d4704` (April 2026), the parent of PR #994. Patterns: long-capture, quiet-contradiction, evidence.

## Decision and sources

- PR #994 (`9ee776f1`, 2026-04-02) enforces `expiresAt` in the repository lookup `getApiKeyByHash`. The user states the decision and its reason in s1, with the prompt the `api-key-expiry-*` arcs use. It is in no store at setup, so the equivalence audit has nothing to compare (it reports "stated by the user in the arc").
- Code after s1: `api-keys/api-keys.repository.ts` (`getApiKeyByHash`), called from `getApiKey` in `api-keys.usecases.ts`, which the API-key middleware calls on every request with a bearer token.

## Steps

1. s1, intent: enforce the expiry (replay: `9ee776f1`).
2. s2, s3, work: two unrelated changes, written for the benchmark against the April code (the tag colour validation message in `tags/tags.schemas.ts`; the "Webhook triggered" log line in `webhooks/webhook.usecases.ts`).
3. s4, `teammate.sh`: renames `getApiKeyByHash` to `findActiveApiKey` everywhere under `apps/papra-server/src`, replaces the SQL date filter with a lookup by hash followed by the helper `isApiKeyExpired` (added to `api-keys.models.ts`). Behaviour is unchanged. Notes outside `src` are not touched, so a note written in s1 names a function that no longer exists.
4. s5, probe: cache successful lookups for ten minutes. Accepts S, or C for a cache that never serves a key past its expiry.
5. s6, `teammate-cache.sh`: a teammate lands the ten-minute cache, without an expiry check on a hit.
6. s7, probe: release check. Passes when the answer reports that a key can outlive its expiry on the current code or that no test proves otherwise (`reported_gap`).

## Changes from the proposal

- **s6 is new.** The proposal graded the release check "with `reported_gap` when the cache was added", which depends on what the agent did in s5; a step's grading cannot branch on an earlier step. The teammate's cache commit makes the gap real in every run, so the release check has one right answer.
- **The s5 prompt says "in the server process"** instead of "in memory": the validator reads "memory" as the name of an arm's tool.
- **The hidden test is at the HTTP level**, not the repository test of #994, because the rename in s4 removes the function that test calls.

## Hidden test

`tests/.../api-keys/e2e/api-key-expiry.e2e.test.ts`, owned by the benchmark: the task test of s1 and the intent test of s2 to s5 (not s7, where the teammate's cache has broken it on purpose). Two tests against `GET /api/api-keys/current` with keys seeded in the in-memory database:

- an expired key gets 401, a key before its expiry and a key without one get 200;
- with a fake clock (`vi.useFakeTimers({ toFake: ['Date'] })`), a key that expires at 10:02 authenticates twice at 10:00 and is refused twice at 10:03.

Checked on a checkout of `9ee776f1` with dependencies installed:

| State | Result |
|---|---|
| the API-key module as at `884d4704` (before #994) | both tests fail |
| `9ee776f1` (expiry enforced) | both pass |
| after `teammate.sh` | both pass; every test under `src/modules/api-keys` passes |
| after `teammate.sh` and `teammate-cache.sh` | the fake-clock test fails (200, expected 401); the other passes |
| the same with the cache checking `isApiKeyExpired` on a hit | both pass |
| whole suite after both teammate scripts | 116 of 117 files pass; the only failure is the benchmark's fake-clock test |

Both teammate scripts replace the lookup function whatever shape the previous session gave it. They stop with an error, which aborts the run, when the function is no longer an `async function` declaration of the expected name in `api-keys.repository.ts`.

## Replay

`run-arc --project papra --arc api-key-cache-long --arm docs --agent replay --skip-judge`, run on 2026-11-15: s1 (cherry-pick of `9ee776f1`) is graded C, with the benchmark's test and the whole suite green; s2 and s3 have no upstream commit, do nothing in replay and are graded F, with the hidden test and the suite green; both teammate scripts run on the replayed code; at s5 the hidden test passes (2 tests). The probes are scripted refusals, graded Q and F without the judge.
