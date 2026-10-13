# Projects

Each project directory holds `project.yaml` (repository, pinned commit, licence, setup commands), `rules/` (the rule layer written for this benchmark), `tasks/` and the hidden tests. `_example/` shows the format and is not scored.

## Choosing a project

A good project for CodeRuleBench:

- is public under an OSI licence (copyleft licences are flagged, not excluded: the benchmark pins a commit and publishes only its own rule and task files);
- is TypeScript (first release), one package, installs with one command and runs its unit tests in minutes without Docker or an external database; roughly 5k-60k lines of source;
- has real business rules (permissions, limits, workflows, money) that are project decisions rather than general knowledge, and that can be written down and tested in isolation;
- has a history of small feature and fix commits with tests, for `history` tasks.

## Survey (October 2026)

About 55 repositories were surveyed across money and commerce, operations and people, and reference or domain-engine codebases; 40 were measured by shallow clone and five had their unit suites run. Finalists:

| Project | Licence | Source lines (non-test) | Unit tests as measured | Rules | History |
|---|---|---|---|---|---|
| **Papra** `apps/papra-server` | AGPL-3.0 | ~33k | 1,231 tests, 14 s, in-memory SQLite, Node ≥ 26 | Explicit guard clauses with typed errors: invitation roles, owner removal, organization restore and purge, per-plan caps, share-link expiry, trash retention, tagging rules | ~29% of recent commits touch tests; PR-driven conventional commits |
| **Actual Budget** `packages/loot-core` | MIT | ~48k | 1,285 tests, 165 s, in-process SQLite | Envelope budgeting carryover and cover rules, transaction rules engine, schedules, paired transfers | ~54% touch tests; a release note per PR; about a quarter of recent commits are agent-authored |
| **Spliit** | MIT | ~17k | 464 tests, 3 s | Split-mode invariants, apportionment of minor units, amount caps | 23 of last 60 touch tests; mutations need Postgres |
| **Kresus** | AGPL-3.0 | ~16k server | 360 tests, 7 s, SQLite, Node ≥ 24 | Demo-mode prohibitions, merge and currency-view guards, rule engine | 18 of last 60; GitHub is a mirror |
| **boardgame.io** | MIT | ~18k | not run | Turn and stage legality (design decisions) | Small feature commits with tests; recent window Dependabot-heavy |

Rule-rich but too large or too heavy to install: Shelf.nu, Vendure core, Open Collective API, Unleash, Terraforming Mars, Immich, Medusa, Documenso. Good domain but dead or untestable: HospitalRun frontend (archived 2023), TimeOff.Management, Overseerr. Reference DDD samples have thin domains and Docker databases.

## Plan

- **First scored project: Papra server** (proposed). Simplest technically among projects with a real rule set, rules already written as guard clauses with co-located tests, young enough to be lightly represented in training data.
- **Second project: Actual Budget loot-core**, a different flavour of rules under a permissive licence.
- **Harness pilot: Spliit**, for exercising the arms and grading end to end before the scored project.
