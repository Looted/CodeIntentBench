# Papra's onboarded knowledge base

The arcs of this project run on a knowledge base built the way a team adopting Kibi on an existing
repository builds one: with the `kibi-bootstrap` flow of the pinned Kibi release (`arms/kibi/versions.env`),
from product decisions harvested out of the project's own sources. Every arm receives this knowledge in
its own container (`../arm-prepare.sh`): the Kibi arms get the knowledge base itself, the passive arms get
it exported into rule files (`harness/src/arm-tools/kb-export.ts`, one rule per requirement with its reason,
its source citation, the code paths that implement it and the test files linked to them; 42 of the 44 April rules carry code paths).

Three bases, one per commit the arcs start from:

| Base | Date | Arcs | Requirements |
|---|---|---|---|
| `884d4704106b` | 2026-04-02 | `api-key-expiry-*`, `api-key-cache-long` | 44, all active |
| `50cbe2cace34` | 2026-09-18 | `member-cap-refactor` | 66, of which 3 closed |
| `e7acb46f9bc6` | 2026-10-06, the project pin | `intake-secret-superseded`, `storage-key-org-rename`, `no-mutation-exif` | 70, of which 4 closed |

Each claim carries the date its behaviour and source existed, and a base only gets the claims dated on
or before its commit. The April snapshot comes from the bootstrap and the quality pass described below.
The two later ones are built from it ([Later bases](#later-bases)). A February snapshot (`86805aeae078`,
39 requirements) served the `intake-secret-*` arcs of October and was retired with them; it is in the
repository history.

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

## Quality pass (Kibi 2.44, schema 18)

Both snapshots were then migrated to KB schema 18 with `kibi migrate --yes` and raised to the quality bar
of Kibi's bundled `kb-quality.md`, without touching code, tests or proofs. The stored `.kb/` is the
result, so an arm's setup finds nothing to migrate.

- **Every claim is modeled.** Each requirement's statement is split into its atomic clauses
  (`semantic_clauses`, verbatim fragments; the statements themselves are unchanged). Each clause is
  grounded by exactly one fact: a `property_value` fact on a named subject (`requires_property`), or a
  `permission_rule` predicate fact for who may do what (`requires_predicate`). The one clause the
  advisor classes as an example stays `nonlogical`. April base: 91 modeled clauses, 1 nonlogical.
  February base: 80 modeled, 1 nonlogical.
- **Subjects are defined.** 33 subject facts (31 in February), named `component.aspect`, each with a
  definition taken from the cited source. These replace the bootstrap's generated subjects such as
  `user.receives.it.even.when.several.register.at.the.same.time`. Claims carry their `subjects`.
  Requirements that state the same property of the same subject share that subject, so a later change
  that contradicts one of them is caught.
- **Reasons are traced, never invented.** The bootstrap stated reasons for 9 requirements. The pass
  read the remaining sources: the docs pages at each base, plus the 17 issues and pull requests,
  read on 2026-11-15. It added reasons for 18 more, with each quote attributed to the maintainer, the
  docs, or the person who asked. 27 of 44 requirements now carry a `rationale` (23 of 39 in
  February). The rest still say "Reason not stated": their sources give none, and most of the pull
  requests have no description.
- **Ownership is precise.** Twelve functions were listed once per requirement and shared a coordinate
  (`duplicate_symbol_coordinate_review`); they were merged into one symbol each. `createDocument`, the
  upload orchestrator, had implemented nine requirements; it now implements only the two it decides,
  the streaming pipeline and the hash lookup for deduplication. The others keep their deciding
  functions. No symbol implements more than two requirements.
- **Result.** `kibi check` reports no violation other than `symbol-coverage` (37 April, 32 February) and
  no diagnostic other than `coverage_depth_review` (44, 39), which are both test evidence and out of
  scope. Before the pass it also reported 9 and 7 `claim-subject-missing`, 12 and 10 duplicate
  coordinates, and a `kb-consistency-unresolved` permission fact.

The pass is reproducible from [gold/](gold/). `spec.py` holds the clauses, facts and subject
definitions, and `reasons.json` the traced reasons. `apply.py <workspace>` writes them through
`kibi model`/`kibi upsert`/`kibi delete`, `orphans.py` removes the bootstrap facts left without links,
and `symfix.py` merges the duplicate symbols. Run them on a workspace made from the stored KB at schema
18 with the pinned `kibi` on PATH, then run `kibi sync --refresh-symbol-coordinates` and `kibi check`.

## Declarations and test evidence (gate health)

Kibi's commit gate (`kibi check --staged`) refuses a behaviour change to a linked source file unless every
declaration Kibi's extractor finds in that file has its own symbol entry, and every changed symbol has test
evidence that verifies a requirement it implements. The bootstrap recorded only the functions that decide a
claim, so in the first hard-tier runs the gate refused correct changes over sibling declarations (an error
factory, a repository type) the knowledge base had never listed. Kibi's own knowledge base links nearly all
of its declarations this way, so the stored snapshots now do too. Code and tests are unchanged.

- `gold/declarations.py <workspace>` finds the uncovered declarations the way the gate does (a throwaway
  export in each linked file, `kibi check --staged`, files restored) and records each with a `symbol_role`
  (type-shape, structural, config, behavioral), one `implements` link to the requirement of its directory
  whose title shares the most words with its name (never past Kibi's broad-fanout threshold of 8
  implementing symbols), and `covered_by` the tests in its directory that name it. April: 63 declarations
  in 21 files; February and the later base: 115 and 114 in 36 files.
- `gold/coverage.sh <workspace> <dir>` runs each server unit test file on its own with V8 coverage at the
  base commit; `gold/coverage.py <workspace> <dir>` links each symbol still without test evidence to the
  test files that ran it (a called function; for a span without functions, an executed statement, counted
  only from tests of the same module, since module code runs on import), adds missing TEST entities, and
  makes the requirement the symbol implements `verified_by` those tests. April: 23 symbols linked;
  February and later: 37 each.
- `gold/snapshot.sh` runs both as its step 4.
- **Result.** `kibi check` reports only `symbol-coverage` for the symbols no existing test runs (21 April,
  20 February, 19 later: task registrations, a few configs and tables, the client components) and
  `coverage_depth_review`. With a behaviour change staged in every linked file, the gate reports nothing
  but those untested symbols; touching one of them asks for a test, which is the gate working as meant.

## Later bases

`gold/snapshot.sh <base-sha> <workdir> [--store]` builds the snapshot of a later Papra commit from the
April one, with the pinned `kibi` on PATH and a clone of Papra that has the commit:

1. `apply.py <workspace> --base <sha>` adds the decisions of [gold/later.json](gold/later.json) that hold
   at the base: a claim applies when its `since` date is not after the base commit's date and its
   `commit` is an ancestor of the base. Clauses, facts and subjects come from `spec.py` as for the April
   claims. A claim with `supersedes` gets the link and a "Why this changed" section, the entry it
   replaces is set to `closed`, and a fact only closed entries still use is set to `deprecated`.
2. `symbols.py <workspace>` re-reads [symbols-map.json](symbols-map.json) at the checkout and rewrites
   `.kb/symbols.yaml`: a map entry lists every path and name a function has had, and only the ones
   declared in this checkout are written. Closed entries get no `implements` link. Run on the April
   checkout it reproduces the stored April `symbols.yaml` exactly.
3. `kibi sync --refresh-symbol-coordinates`, then test entities whose file is gone and facts nothing
   links to are deleted, then `kibi sync`.
4. `declarations.py` and `coverage.py` (see above), then `kibi sync` and `kibi check`.

### What later.json holds

26 claims, each with its commit, the date from which it holds, a verbatim excerpt and, only where the
source states one, a reason:

- **Ten decisions that landed after April or were found while tracing the rules**: the intake webhook
  secret's length rule and default (PR #892, February; closed at both later bases) and the removal of
  the default (PR #1502, which supersedes it); storage keys persist unless synchronisation is enabled
  (the docs after PR #1525, superseding the March entry); synchronisation on a document's name or date
  change (PR #1525); `{{organization.name}}` in patterns (PR #1529, which answers the open question of
  issue #976); an organisation rename moves nothing (docs); share links of deleted organisations
  (PR #1348); former members can be reinvited (PR #1534); year-based versioning (the docs after PR
  #1454, superseding the older versioning entry); and the plan's member limit counting pending
  invitations (the test added in PR #536).
- **The 16 rules of [../rules/](../rules/)**, with the rule's statement verbatim, its test titles as the
  excerpt and the date from which every clause of the statement held. Three of them are therefore
  absent at `50cbe2cace34`: the member cap (its "or a resend" clause holds from PR #1534), resending
  only inactive invitations (PR #1534) and the sign-up domain restrictions (PR #1545). At that base the
  member limit is the PR #536 entry; at the pin the rule supersedes it.

Reasons: none of the pull requests read for these claims has a description. The reasons recorded come
from changesets (#892, #1348, #1502, #1525, #1534), the docs, issue #976 and test titles; they are quoted
and attributed. 10 of the 26 claims have no stated reason and say "Reason not stated", among them the
organisation-rename boundary. The rule files' own `rationale` text was written for the benchmark and was
not copied: where no Papra source gives the reason, the entry has none.

### Decisions from the release changelogs (gold/bulk.py)

The hard tier needs a store where one search does not find the answer, so the later bases also carry
112 decisions taken from Papra's release changelogs (`gold/changelog.json`: the 352 changeset entries
of `apps/*/CHANGELOG.md`, with package, version, pull request, commit and date). `gold/bulk.py` turns
an entry into a requirement: the statement is the clauses joined with "; ", the excerpt is the
changeset text verbatim, the date and commit are the changeset's, the source is `papra-changelog`.
A reason is recorded only when the changeset states one (quoted); 88 of the 112 say "Reason not
stated". Where a later changeset replaces an earlier one the later entry supersedes it, so the store
has chains: the search endpoint (#650, #758, #899), the documents order (#1089 then #1192, with the
#1292 tie-break beside it), email escaping (#995 then #1061), the B2 driver (#280 then #472), email
dry-run (#302 then #304) and the base URL (#320 then #405). A superseded entry keeps its own facts
(a fact tuple's fifth element tags its id) and those facts are deprecated once only closed entries use
them. 14 of the entries name the code that decides them in `symbols-map.json`. The April snapshot is
not touched: its arcs are the easy tier.

### Result

| | `50cbe2cace34` | `e7acb46f9bc6` |
|---|---|---|
| Requirements | 66 (63 active, 3 closed) | 70 (66 active, 4 closed) |
| `supersedes` links | 3 | 4 |
| Modeled clauses | 156, and 1 nonlogical | 170, and 1 nonlogical |
| Subjects | 44 | 45 |
| Symbols | 104, none implementing more than two requirements | 105, likewise |
| Test entities | 39 | 39 |
| `kibi check` violations | `symbol-coverage` 41 | `symbol-coverage` 40 |
| `kibi check` diagnostics | `coverage_depth_review` 63 | `coverage_depth_review` 66 |

Every requirement has an explicit `status` and `firmness: firm`. The export gives the passive arms each
closed entry with its status and a "Superseded by" line.

### Limits

- For the 44 April claims only the documentation excerpts were re-read at the later bases (two had
  changed and became superseded pairs: storage key persistence and versioning). The issue and pull
  request claims were not re-read; their sources are closed threads.
- `symbols-map.json` was extended by reading the code at `e7acb46f9bc6` and `50cbe2cace34`. A function
  that moved and was not found again is dropped by `symbols.py` (it prints "no declared symbol for" the
  requirement); 6 requirements at the pin have no code path for that reason or because they are closed.
- The interview and authority calls remain the benchmark author's, as for the April snapshot.
- The April snapshot was not rebuilt. It does not hold the February entry about the intake webhook
  secret (PR #892), which `later.json` adds only at the two later bases; no arc at the April base is
  about intake emails.

## Snapshots of a patched base

`kb/e7acb46f9bc6-hide-why/.kb` is the snapshot of the pin with the teammate patch `patches/hide-why.patch`
applied (see `patches/README.md`), built with `BASE_PATCH=patches/hide-why.patch gold/snapshot.sh
e7acb46f9bc6... <workdir> --store`. The harness names a patched base `<sha12>-<patch name>` and
`arm-prepare.sh` picks the snapshot by that name.
