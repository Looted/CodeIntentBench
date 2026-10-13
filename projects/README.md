# Projects

Each project directory holds `project.yaml` (repository, pinned commit, licence, setup commands), `rules/` (the rule layer written for this benchmark), `tasks/` and the hidden tests. `_example/` shows the format and is not scored.

## Choosing a project

A good project for CodeRuleBench:

- is public, with a licence that allows pinning and redistributing a snapshot;
- is TypeScript (first release) and mid-sized: large enough that rules are not visible from one file, small enough to install and test in minutes without external services;
- has real business rules (permissions, limits, workflows, money) that can be written down and tested in isolation;
- has a history of small feature and fix commits with tests, for `history` tasks.

## Candidates (to evaluate)

| Project | Domain | Why it might fit | Concern |
|---|---|---|---|
| Immich (server) | Photo library | Dense access-control rules (sharing, partners, albums) | Large; licence AGPL-3.0 |
| Medusa | Commerce | Pricing, promotions, inventory and order rules | Monorepo; many tests need a database |
| Documenso | Document signing | Signing order, recipient and permission rules | Many tests are end-to-end |
| A RealWorld (Conduit) backend | Blogging | Small, well known, quick pilot | Rules are thin; contamination risk |

The first release uses one project. A small RealWorld backend is a candidate for a harness pilot before the scored project.
