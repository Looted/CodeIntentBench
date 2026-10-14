# Papra's onboarded knowledge base

The arcs of this project run on a knowledge base built the way a team adopting Kibi on an existing
repository builds one: with the `kibi-bootstrap` flow of the pinned Kibi release (`arms/kibi/versions.env`),
from product decisions harvested out of the project's own sources. Every arm receives this knowledge in
its own container (`../arm-prepare.sh`): the Kibi arms get the knowledge base itself, the passive arms get
it exported into rule files (`harness/src/arm-tools/kb-export.ts`, one rule per requirement with its reason,
its source citation, the code paths that implement it and the test files linked to them; 42 of the 44 April rules carry code paths).

Two bases, because the arcs start from two commits of Papra: `884d4704106b` (2026-04-02, the api-key
expiry arcs) and `86805aeae078` (2026-02-14, the intake-secret arcs). Each claim carries the date its
behaviour and source existed, and a base only gets the claims dated on or before its commit, so the
February base holds 39 requirements and the April base 44.

## Sources and claims

[claims.json](claims.json) is the declaration a Kibi bootstrap takes (`bootstrapContext`), with the
benchmark's `since` dates added. 49 claims (46 intent, 1 observation, 2 open questions) and one declared
conflict, from four sources read on 2026-10-14:

| Source | Kind | Authority | Claims |
|---|---|---|---|
| Papra documentation site, `apps/docs/src/content/docs` | repository docs | authoritative | 22 (architecture pages: deduplication, no-mutation, organization deletion; guides: tagging rules, search, encryption, roles, storage key patterns, intake emails; versioning) |
| papra-hq/papra GitHub issues | issue tracker | authoritative | 17 (the maintainer's answers on closed issues: #142, #222, #352, #353, #413, #428, #440, #482, #486, #597, #695, #743, #881, #926; open questions #882, #976) |
| papra-hq/papra merged pull requests | decision log | supporting | 6 (#230, #472, #683, #746, #822, #956; most carry no description, so the squash-commit title is the cited text) |
| Organization invitations spec, `apps/papra-server/src/modules/invitations/invtations.specs.md` | specification | supporting | 4 |

Each claim quotes its source verbatim (`excerpt`) and carries the reason only when the source states one
(`rationale`); 24 claims have a stated reason, the rest say "Reason not stated". The two decisions the arcs
probe (API key expiry enforcement, the intake webhook secret length rule) and every behaviour that
landed after a base commit are deliberately absent.

The interview, authority calls and plan approval that the bootstrap flow reserves for a human were made
by the benchmark author standing in for Papra's maintainers; the maintainers were not consulted. Two
calls of note: the invitations spec is declared `supporting` although it is the project's own spec,
because Kibi's planner grounded none of its four claims and refuses to apply a plan while an
authoritative source has no planned claim; and the claims keep the sources' wording where the code
differs (the docs' "contains matching" is an FTS5 prefix-token match; an invalid `created:` date makes
the clause match nothing rather than being ignored; the first-user-admin check yields at most one admin
and possibly none under concurrent sign-ups).

## Build

`harness/src/arm-tools/kibi-bootstrap.ts` runs the flow on a checkout of a base commit (branch
`cib-base`, as the arcs' workspaces), the pinned `kibi` on PATH:

1. `kibi init`, then a read-only `kibi plan-bootstrap` of the declared context (`maxCandidates: 1`, so
   the plan holds the declared claims and not the provenance stubs Kibi discovers for every source
   module; the plan's bounded context questions are answered in `claims.json` `context`).
2. Review; the approved plan hash is passed back (`--approve`) and the unchanged plan applied once with
   `kibi apply-plan`. The planner grounded 2 of the 46 intent claims as requirements (#482, #597); the
   observation, the open questions and the conflict became cited facts.
3. Deepen, the skill's step 11: each claim the planner could not ground is compiled with
   `kibi compile-intent` and, because a compile plan with ontology gaps cannot be applied, written with
   `kibi upsert` carrying the compile plan's inventory contract, as Kibi's own error message prescribes.
   The two planned requirements, which the planner wrote as `status: open`, origin `agent` and no
   firmness, are re-written like the authored ones: `firmness: firm`, `origin.kind: import` naming the
   source, active, with the reason as the source gave it.
4. Symbols and tests: the functions that implement each requirement ([symbols-map.json](symbols-map.json),
   found by reading the code at both bases; 97 symbols in April, 84 in February) are authored in
   `.kb/symbols.yaml` with `implements` links. Existing test files that name a symbol (a `*.test.ts` in the
   same directory; 24 and 20 files) become test entities the symbol is `covered_by` and the requirement
   `verified_by`; no test evidence is invented, so the 40 (April) and 35 (February) symbols no such test
   names stay uncovered and `kibi check` reports them as `symbol-coverage` violations, the only kind it
   reports. Then `kibi sync --refresh-symbol-coordinates`, `kibi check` and `kibi status`.
5. The tracked `.kb/` files are copied here under the base commit; the arm-prepare script copies them
   back into each run's checkout.

Plan hashes: `2bd3618cec8cd5f5a2939c25caf3fb18371de0455f003b8736a285fb5b316c50` (April base), `a2d28868d1275d1ccd809b0e21b0fbf79e6fa8d56d1a5c34638062610c6d65c2` (February base). Build logs and the review records
(`approved-candidates.txt`, `deepen.json`) are not committed; the build is deterministic from
`claims.json` and `symbols-map.json` apart from `recorded_at` timestamps.

## What the bootstrap flow did and did not do

Findings about Kibi 2.23.0's onboarding, recorded for the write-up: the strict modeler grounds very few
prose decisions (2 of 46 here, 0 of 10 phrasings of the invitation rules tried); the planned requirements
come out `default` firmness, which Kibi's agent skill treats as a decision an agent may supersede on its
own; the route the diagnostics name for the rest (`kb_compile_intent`) returns plans that cannot be
applied when a clause is an ontology gap, so the practical path is the `kb_upsert` fallback; and a
`maxCandidates` default of 50 fills the plan with provenance stubs ("Source module: eslint.config")
rather than knowledge.
