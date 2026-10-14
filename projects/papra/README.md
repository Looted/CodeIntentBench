# Papra

[papra-hq/papra](https://github.com/papra-hq/papra), a self-hosted document archive (Hono + Drizzle on SQLite, TypeScript). Pinned to `e7acb46f9bc6ca0890092a88505e083e8b516774` (October 2026). Only the server package `apps/papra-server` is exercised; its unit suite (`vitest run --exclude '**/*.int.test.ts'`, about 1,200 tests, under 20 s) is the regression layer.

Runtime: Node 26, pnpm 12.4.2. Setup is `pnpm install --frozen-lockfile` and `pnpm --filter "./packages/*" build`.

## Rules (16)

Product decisions that are enforced as guard clauses and covered by existing tests, written in [rules/](rules/). Each rule names its enforcing files and functions and the test titles that keep it true; every test reference was checked against the pinned commit. Areas: organization roles and invitations (6), organization lifecycle and plans (3), documents and storage (2), share links, tagging rules, API keys, sign-up domains, webhooks, intake emails. Extraction notes with guard locations, error codes and candidate rules left out are in [RULES-NOTES.md](RULES-NOTES.md).

## Tasks (32)

| Kind | Count | Source |
|---|---|---|
| history | 5 | Real changes merged June–September 2026, replayed from the parent commit with the change's own tests as hidden tests; verified fail-to-pass. |
| conflict | 16 | One per rule: a developer request that cannot be done without breaking the rule. |
| governed | 8 | 5 written requests the rules constrain, plus 3 real changes whose outcome a recorded rule already describes (`governed-auth-allowed-email-domains`, `governed-share-links-deleted-organization`, `governed-admin-user-max-organization-count`); those are replayed like history tasks but graded with the rule as governing, since the rule set would otherwise leak the answer. |
| ungoverned | 3 | Requests no recorded rule covers. |

Mining notes for the replayed changes, including candidates rejected and the verification protocol, are in [HISTORY-NOTES.md](HISTORY-NOTES.md).

## Arcs (16) on an onboarded knowledge base

Two real decisions, eight families each, in [arcs/](arcs/): `api-key-expiry-*` (base `884d4704`, April 2026) and `intake-secret-*` (base `86805aea`, February 2026). The arcs' first run (`results/papra-arcs-2026-10-14.md`) started every arm from an empty decision store, which made the Kibi arm invalid (nothing to surface). They now run on an onboarded knowledge base: Papra's product decisions harvested from its documentation, issue tracker, merged pull requests and in-repo spec, recorded with Kibi's bootstrap flow and stored under [kb/](kb/) per base commit ([kb/README.md](kb/README.md)). In arc mode [arm-prepare.sh](arm-prepare.sh) places that knowledge base in the Kibi arms' checkouts and exports it into rule files for the passive arms, so every arm starts with the same 39 (February) or 44 (April) recorded decisions, none of which is the decision the arc probes. Rule-mode tasks are unaffected. Results of that run: [results/papra-onboarded-2026-10-14.md](../../results/papra-onboarded-2026-10-14.md).

## Known limits

- History tasks run at their own base commit, where the rule set is the subset whose scope exists; `kibi check` can flag a rule that names a not-yet-existing function.
- Prompts for replayed changes name the identifiers the original tests import, which makes them prescriptive.
- Governed and ungoverned tasks written for the benchmark have no fail-to-pass tests; they are graded on the rule tests, the regression suite and the judge.
- Two desirable conflict targets (restore-by-previous-owner-only, trash retention purge) are left out because no existing test would fail if the guard were removed.
