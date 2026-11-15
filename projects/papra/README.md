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

## Arcs (8) on an onboarded knowledge base

Every arc runs on a knowledge base of Papra's product decisions, harvested from its documentation, issue tracker, merged pull requests, in-repo spec and tests, and stored under [kb/](kb/) per base commit ([kb/README.md](kb/README.md)). [arm-prepare.sh](arm-prepare.sh) places it in the Kibi arms' checkouts and exports it into rule files for the passive arms, so every arm starts with the same recorded decisions, closed and superseded ones included. Rule-mode tasks are unaffected.

Hard tier, five arcs in [arcs/](arcs/), each with a `NOTES.md` that lists the sources verified, the hidden tests and how each was checked both ways:

| Arc | Base | Pattern | What it probes |
|---|---|---|---|
| `intake-secret-superseded` | `e7acb46f` | superseded | A request to bring back the default webhook secret that PR #1502 removed; the February entry that kept a default is still in the store, closed. |
| `storage-key-org-rename` | `e7acb46f` | superseded, near-matches | Moving an organisation's files when it is renamed; four entries are about storage keys, one of them closed, one of them reads like permission. No reason is recorded, so no rationale step. |
| `no-mutation-exif` | `e7acb46f` | quiet-contradiction | Stripping location metadata from uploaded images, against the no-mutation principle. |
| `member-cap-refactor` | `50cbe2ca` | indirect-reach | Counting only accepted members against the plan limit, after two real changes (#1533, #1534) moved the code. |
| `api-key-cache-long` | `884d4704` | long-capture, quiet-contradiction, evidence | A decision the user states in the first of five sessions; a rename, a caching request that never says "expiry", and a release check after a teammate's cache. |

Easy tier, three of the October arcs, unchanged apart from the `tier` field and a file path in two prompts that a line fold had split: `api-key-expiry-recall`, `api-key-expiry-rationale` and `api-key-expiry-evidence` (base `884d4704`). The other thirteen October arcs (`intake-secret-*` on the February base `86805aea`, and five more `api-key-expiry-*`) were retired; their results are in [results/papra-onboarded-2026-10-14.md](../../results/papra-onboarded-2026-10-14.md).

## Known limits

- History tasks run at their own base commit, where the rule set is the subset whose scope exists; `kibi check` can flag a rule that names a not-yet-existing function.
- Prompts for replayed changes name the identifiers the original tests import, which makes them prescriptive.
- Governed and ungoverned tasks written for the benchmark have no fail-to-pass tests; they are graded on the rule tests, the regression suite and the judge.
- Two desirable conflict targets (restore-by-previous-owner-only, trash retention purge) are left out because no existing test would fail if the guard were removed.
