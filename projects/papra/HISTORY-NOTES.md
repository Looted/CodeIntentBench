# Papra history-task mining notes

Clone: `scratchpad/ops/clones/papra` @ `e7acb46f9bc6ca0890092a88505e083e8b516774` (300 commits, 2026-05-26 .. 2026-10-06).
Server package: `@papra/app-server` (`apps/papra-server/package.json`); unit command `pnpm --filter @papra/app-server test:unit`
(= `vitest run --exclude '**/*.int.test.ts'`; note `*.e2e.test.ts` files ARE part of the unit run).
Mining: `git log --no-merges --name-status -- apps/papra-server`, then per-commit numstat split into server src / `*.test.ts` / `*.int.test.ts`.
Line counts below = added+deleted lines of non-test server `.ts` files (migrations excluded from "src").

GitHub API access to papra-hq/papra is not enabled in this session (gh -> 403), so prompts were written from the
commit subject, the `.changeset/*.md` entry and the diff, not the PR body. PR URLs are derived from the `(#NNNN)` suffix.

## Candidates (21 examined; S = selected, A = verified alternate, R = rejected)

| # | sha | date | subject | server src files / lines | unit test files | verdict |
|---|-----|------|---------|--------------------------|-----------------|---------|
| 1 | 193d860 | 2026-09-30 | feat(auth): restrict signup email domains (#1545) | 4 / 26 (auth.config.schemas, auth.config, auth.models, auth.services) | auth.config.schemas.test.ts, auth.models.test.ts | **S** `history-auth-allowed-email-domains` – auth business logic, pure functions, tests exercise new allowlist semantics |
| 2 | 12e1d4b | 2026-07-10 | feat(document-share-links): prevent access to share links of deleted organizations (#1348) | 2 / 25 (document-share-links.routes, .usecases) | document-share-links.usecases.test.ts, e2e/shared-document-access.e2e.test.ts | **S** `history-share-links-deleted-organization` – security fix in share-link usecases; e2e test is in the unit run |
| 3 | 18bde86 | 2026-08-07 | feat(plans): harden subscription resolution (#1405) | 3 / 98 (plans.models, plans.repository, subscriptions.usecases) | plans.models.test.ts (new) | **S** `history-plans-resolve-subscription-price-ids` – plan/webhook business logic, pure function with rich test |
| 4 | b3a625e | 2026-07-15 | feat(entitlements): add subscription discount coupon support (#1363) | 6 / 87 (plan-entitlements types/usecases/selfhst config+driver, subscriptions.routes, subscriptions.services) | plan-entitlements.usecases.test.ts, subscriptions.services.test.ts (new) | **S** `history-entitlement-checkout-discount-coupon` – entitlements/plans logic; Stripe client is stubbed in tests |
| 5 | c16661e | 2026-09-12 | fix(intake-emails): no longer use default webhook secret (#1502) | 5 / 41 (config.ts, intake-emails.config(.models), .errors, .routes) | intake-emails.config.models.test.ts (new) | **S** `history-intake-emails-require-webhook-secret` – intake-email security fix; test fails at import on parent |
| 6 | e6de1ee | 2026-06-10 | fix(admin): display correct max organization count on user detail page (#1155) | 3 / 27 (admin/users.routes, organizations.models, organizations.usecases) | organizations.models.test.ts | **S** `history-admin-user-max-organization-count` – small organizations fix, no client change |
| 7 | aded832 | 2026-07-02 | feat(fts5): add fts filter on update/delete document from index (#1312) | 3 / 79 (database-fts5.models (new), .repository, query-builder.models) | database-fts5.models.test.ts (new), query-builder.models.test.ts, query-builder.test.ts | **S** `history-fts5-index-maintenance-match-filter` – documents search perf fix with precise test expectations |
| 8 | 13a6d4a | 2026-09-18 | feat(storage): support document dates in storage keys (#1528) | 8 / 31 (document-storage.usecases, documents.events.types, documents.usecases, storage-key.document-updated, storage-pattern definitions/types/usecases, migrate script) | document-storage.usecases.test.ts, documents.usecases.test.ts, events/storage-key.document-updated.test.ts (new), storage-pattern.models.test.ts, storage-pattern.usecases.test.ts | **S** `history-storage-key-document-dates` – documents feature spanning several modules, in-memory storage/db only |
| 9 | 5bb96a7 | 2026-09-02 | feat(intake): expose intake email address configuration to client (#1458) | 6 / 43 server + 4 lines in apps/papra-client/src/modules/config/config.ts (types only) | config.models.test.ts, intake-emails.services.test.ts (new) | **A** verified, not selected: touches the client (non-UI type defaults) and is config plumbing rather than business logic |
| 10 | a03dc5a | 2026-09-20 | fix(invitations): allow reinviting former members (#1534) | 3 / 333 + migration 0028 | organizations.repository.test.ts, organizations.usecases.test.ts, migration tests | R – over the size budget (333 src lines + 495-line test diff) and adds a DB migration |
| 11 | 1c993e4 | 2026-09-18 | feat(storage): support organization names in patterns (#1529) | 8 / 240 | 4 files | R – large, overlaps with #8 (same module, adjacent commit); kept #8 as the cleaner task |
| 12 | 7c9a96f | 2026-09-18 | feat(storage): sync keys on document updates (#1525) | 7 / 188 (+ events handler registration, start.ts) | document-storage.usecases.test.ts (+396 lines) | R – infrastructure-heavy (event handler wiring, repository, config) and is a prerequisite of #8 |
| 13 | a919067 | 2026-09-18 | feat(storage-patterns): add default transformer (#1527) | 2 / 16 | storage-pattern.models.test.ts, storage-pattern.usecases.test.ts | R – below the ~20-line floor; trivially small |
| 14 | 5d3063b | 2026-09-11 | fix(db): refresh updatedAt on update (#1461) | 1 / 3 (shared/db/columns.helpers.ts) | 3 test files (expectation tweaks) | R – 3-line generic DB column helper change, not business logic |
| 15 | 50cbe2c | 2026-09-18 | feat(docling): support configurable conversion options (#1532) | 5 / 124 | 3 files | R – external content-extraction integration config (Docling), infrastructure rather than domain logic |
| 16 | 2ef3148 | 2026-07-04 | fix(ai): openai doesn't respect all json schemas (#1320) | 3 / 111 + package.json + pnpm-lock | auto-tagging.models.test.ts, auto-tagging.usecases.test.ts | R – includes a dependency change (package.json/lockfile) |
| 17 | d73933a | 2026-06-07 | feat(api-keys): add custom-properties permissions (#1135) | 2 / 22 | e2e/create-custom-property-with-api-key.e2e.test.ts | R – also changes client locales/constants (UI) |
| 18 | a64cbba | 2026-09-01 | fix(auth): enforce registration disabled for email (#1453) | 1 / 1 | e2e/registration.e2e.test.ts | R – one-line change, too small |
| 19 | 2993c6e | 2026-09-12 | fix(auth): block custom OAuth signup when registration disabled (#1503) | 1 / 10 | none | R – no test change |
| 20 | d178643 | 2026-08-07 | fix(auth): revoke on password reset (#1406) | 1 / 1 | none | R – no test change, one line |
| 21 | aa26524 / 923e27a / f93d6e1 | 2026-09-09 / 06-30 / 06-07 | return 204 when trashing documents / creation date sort fallback / 204 on property deletion | 1 / 1-4 each | 1 file each (2-28 lines) | R – trivial one-liners |

Also skipped as refactors/renames/infra despite tests: 0b3d004 (decouple invitation flow), a8628cd (storage module reorg), ac069de (rate-limit retry-after refactor), 756dfe7/5162c6d/963f14c (ai adapter refactors), 63ec093 (aws-sdk -> s3mini), 479379c (eslint -> oxlint). Pre-June kv-store commits (6221d7b, e394395, dfb22ba) are infrastructure and outside the preferred window.

## Verification (Node 26.11.1 at scratchpad/node26/bin, pnpm via corepack per commit's packageManager)

Protocol per task, in a throwaway worktree at the PARENT commit (`git worktree add`, removed afterwards; the shared clone was never checked out or modified, HEAD still e7acb46):
1. `pnpm install --frozen-lockfile --prefer-offline --ignore-scripts` (pure `--offline` fails on pnpm's supply-chain metadata check; `--prefer-offline` reuses the local store and fetched only metadata/few tarballs, ~6-8 s) then `pnpm -F "./packages/*" build`.
2. step1: run the task test files that already exist at the parent -> all pass (baseline).
3. step2: `git checkout <sha> -- <test files>` (tests only, no source) -> run -> FAIL.
4. step3: `git checkout <sha> -- apps/papra-server` (full commit) -> run -> PASS.
Raw logs: `scratchpad/papra-history/verify/<sha>.log` (+ `.install.log`, `.build.log`). Script: `verify/verify.sh`, `verify/run-all.sh`.

| task | source sha | step1 (parent, old tests) | step2 (parent src + commit tests) | step3 (full commit) | verified |
|------|-----------|---------------------------|-----------------------------------|---------------------|----------|
| history-auth-allowed-email-domains | 193d860 | 2 files / 24 pass | 2 files FAIL: 9 failed, 22 passed (31) | 31 passed | yes |
| history-share-links-deleted-organization | 12e1d4b | 2 files / 19 pass | 2 files FAIL: 2 failed, 19 passed (21) | 21 passed | yes |
| history-plans-resolve-subscription-price-ids | 18bde86 | new file (none) | 1 file FAIL: 8 failed (8) | 8 passed | yes |
| history-entitlement-checkout-discount-coupon | b3a625e | 1 file / 15 pass | 2 files FAIL: 9 failed, 15 passed (24) | 24 passed | yes |
| history-intake-emails-require-webhook-secret | c16661e | new file (none) | 1 file FAIL (import error: module `intake-emails.config.models` missing) | 1 passed | yes |
| history-admin-user-max-organization-count | e6de1ee | 1 file / 2 pass | 1 file FAIL: 2 failed, 2 passed (4) (`getUserMaxOrganizationCount is not a function`) | 4 passed | yes (re-run by hand; vitest 4.0.3 colored output broke the script's grep, see log) |
| history-fts5-index-maintenance-match-filter | aded832 | 2 files / 41 pass | 3 files FAIL: 6 failed, 35 passed (41) | 46 passed | yes |
| history-storage-key-document-dates | 13a6d4a | 4 files / 84 pass | 4 of 5 files FAIL: 9 failed, 85 passed (94) | 94 passed | yes |
| (alternate) 5bb96a7 | 5bb96a7 | 1 file / 3 pass | 2 files FAIL: 6 failed, 2 passed (8) | 8 passed | yes |

Regression command sanity: `pnpm --filter @papra/app-server test:unit` at the e6de1ee commit state -> 147 files / 991 tests passed in ~15 s (pnpm 11.1.1 at that commit; current HEAD uses pnpm 12.4.2 — corepack resolves it from `packageManager`).
`--ignore-scripts` was sufficient for all unit tests (libsql in-memory DB works without postinstall scripts).

## Prompt-fairness notes
- Tests reference exact new identifiers, so the prompts name them: `domainListSchema`, `resolveOrganizationPlanFromPriceIds` / `getOrganizationPlanByPriceIds`, `resolveOrganizationEntitlementCouponId`, `resolveCheckoutDiscount`, `ensureIntakeEmailWebhookSecretisSetWhenIntakeEmailsAreEnabled` (sic, original casing) / `createIntakeEmailMissingWebhookSecretError`, `getUserMaxOrganizationCount`, `buildFts5ColumnMatchTerm`, the `organizationsRepository` argument, and the `documentDate`/`documentCreatedAt` context fields.
- `history-share-links-deleted-organization`: the e2e test relies on existing routes (DELETE org, POST restore) and the existing `share_link.gone` error.
- `history-storage-key-document-dates`: documents.usecases.test asserts `db.select(documentsTable)` equals the returned document and that the key uses `document.createdAt.toISOString()`, so the prompt states that createdAt must be generated up front and persisted.
- governing_rules left empty for all 8: none of the changes map to a known rule area in this project (no rules exist for papra yet).

## Open questions
- PR bodies could not be read (GitHub access not enabled for papra-hq/papra in this session); prompts derive from subject + changeset + diff.
- Should `*.e2e.test.ts` files count as task tests? They run under `test:unit` (only `*.int.test.ts` is excluded) and need no external service; kept for 12e1d4b.
- 5bb96a7 (intake email public config) is verified and ready if one of the 8 should be swapped (it touches 4 non-UI lines in the client).
