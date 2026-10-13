# Projects

Each project directory holds `project.yaml` (repository, pinned commit, licence, setup commands), `arcs/` (feature arcs, v2), `rules/` and `tasks/` (the single-session rule layer, v1) and the hidden tests. `_example/` shows the task format and is not scored.

## Writing an arc

`arcs/<id>/arc.yaml` (type `Arc` in [harness/src/types.ts](../harness/src/types.ts)), plus `tests/` for hidden test files the benchmark owns, laid out by repository-relative path.

1. Pick a real decision from the project's history: a commit or pull request that introduced a constraint with a reason. Its parent is the arc's `base_commit`.
2. Write `intent.statement` and `intent.reason` from what the maintainer actually decided, and `intent.symbols` as the code that enforces it. These are ground truth for the judge; the agent never sees them.
3. Step 1 (`kind: intent`) is the request in the user's voice, carrying the constraint and the reason, with the real commit as `source` and hidden `task_tests` that any correct implementation passes (prefer tests against a stable surface, such as the config schema, over tests that pin function names).
4. Middle steps (`work`, `control`) are later real changes on the same feature, with their own hidden tests; they must not mention the decision.
5. The probe is the step that needs the intent: a conflicting request (`recall`, `surfacing`, `drift`, `branch`, `standing`), a question (`rationale`, `navigation`), or a verification request (`evidence`). Set `grading.accept` to the outcomes that count as keeping the intent and write `judge_notes` saying what counts as surfacing the decision.
6. `cib validate` checks the shape and that no work-shaped prompt hints at a decision; `cib run-arc --agent replay --skip-judge` cherry-picks the source commits to exercise the pipeline without a model.

## Choosing a project

A good project for CodeIntentBench:

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

- **First scored project: Papra server** ([projects/papra/](papra/README.md)). Simplest technically among projects with a real rule set, rules already written as guard clauses with co-located tests, young enough to be lightly represented in training data. Rule layer and tasks are written; see its README for what is in it and what is still open.
- **Second project: Actual Budget loot-core**, a different flavour of rules under a permissive licence.
- **Harness pilot: Spliit**, for exercising the arms and grading end to end before the scored project.
