# Project `kibi`

[Kibi](https://github.com/Looted/kibi) benchmarked on its own repository. The repository is the one public project with a mature Kibi knowledge base: at the pinned commit (release 2026.11.4, knowledge-base schema 18) `.kb/` holds 611 requirements (516 open, 93 closed, 2 retired), 35 ADRs (29 accepted, 1 proposed, 5 superseded), 2,647 facts, 857 scenarios and 746 test entities, written by its authors over months of development and reviewed entry by entry: each requirement and ADR carries a status, a firmness (106 are firm, the rest default), its supersession links and a reason traced to a source. Every arc in this project is about a decision that knowledge base already records.

## Why this project

The Papra arcs started every arm from an empty store and asked the tool under test to capture a decision stated in the first session. That is not how Kibi is used: a project is onboarded first (`/kibi-bootstrap` harvests intent from trackers, wikis, specs and in-repo documents into cited requirements), and the agent then works with hooks, search and checks over that knowledge base. A Kibi arm on an empty store measures nothing about Kibi. Here the knowledge exists before the first session, in every arm.

## What each arm receives

The knowledge is held constant and the container varies. `arm-prepare.sh` runs after install and before the arm's own setup:

| Arm | Knowledge container | How it is produced |
|---|---|---|
| none | nothing | `.kb/` removed |
| docs | `docs/decisions/*.md`, one file per requirement and ADR | `kb-export.ts` renders each entity's statement, recorded reason, implementing files and symbols, and verifying tests into a rule file; `arms/docs/setup` renders the files |
| tracker | closed issues in the tracker MCP server | same rule files, seeded by `arms/tracker/setup` |
| memory | notes in the memory MCP server | same rule files, seeded by `arms/memory/setup` |
| agents-md | all entries rendered into `AGENTS.md` | same rule files, `arms/agents-md/setup` |
| kibi | `.kb/` as the repository ships it, read through the pinned kibi-claude plugin and CLI | nothing exported; the repository's own Claude Code wiring (`.claude/settings.json`, `.mcp.json`) is removed so only the pinned release speaks for Kibi |
| kibi-conv | as kibi, plus the one-sentence convention the other arms get | |

For the arms without Kibi, `neutral-agents-md.ts` removes the sections of the repository's `AGENTS.md` that tell agents to use Kibi's tools and knowledge base (Source of Truth, Using Kibi, Modeling Rules, Symbol Traceability) and the lines elsewhere that point at them; the product mission, release, documentation and quality policy stay, so every arm gets the same repository policy. The kibi arms keep `AGENTS.md` whole: a Kibi-onboarded repository tells its agents to use Kibi, and that instruction is part of what is being measured.

The export reads `.kb/requirements`, `.kb/adr`, `.kb/relationships/*.yaml` and `.kb/symbols.yaml`: a requirement's code locations are the source files of the symbols that `implements` it, its tests are the `*.test.ts` files of the symbols `executable_for` the test entities it is `verified_by` (or that `covered_by` its symbols), and its reason is the Context, Rationale or Why section of its body. At the pinned commit 526 of 646 entities have code locations, 575 have tests and 618 a recorded reason. Facts, scenarios and events are Kibi's typed grounding of the same statements and are not exported; the arms are compared on the recorded decisions, not on Kibi's proof machinery.

## Running the project's tests

Kibi is a Bun workspace. `bun install --frozen-lockfile` takes about three minutes cold and seconds with a warm cache; `bun run build` (26 s) produces the `dist/` the CLI runs from, and tests that spawn `packages/cli/bin/kibi` read it, so the grader rebuilds the CLI stack (13 s) before every test run. `harness/src/arm-tools/bun-test-json.ts` runs `bun test` with the JUnit reporter and writes the Vitest-shaped report the grader reads. A source checkout's bundled SWI-Prolog package has no runtime, so `arm-prepare.sh` installs the released `kibi-swipl` next to the workspace and `project.yaml` points `KIBI_SWIPL` at it; Kibi's own tests then run as they do in its CI.

## Arcs

Thirteen arcs under `arcs/`, all on the same base commit (`8bc4204f`, release 2026.11.4). Each arc names the recorded entry it is about (`intent.requirement`) and its tier.

The easy tier keeps one arc per family from the first run, re-anchored on the new base:

| Family | Arc | Recorded decision |
|---|---|---|
| recall | `kibi-swipl-minimum-recall` | a system swipl older than 9.0 is refused (REQ-prolog-swipl-minimum-version, default) |
| rationale | `kibi-firmness-words-rationale` | the 12-word floor on "Why this changed" (REQ-kb-decision-firmness) |
| surfacing | `kibi-mcp-oneof-surfacing` | oneOf guard branches are enforced at MCP input validation (REQ-mcp-oneof-guard-input-validation) |
| navigation | `kibi-swipl-resolver-navigation` | the SWI-Prolog resolution order (REQ-prolog-swipl-resolution-order, default) |
| branch | `kibi-claim-name-length-branch` | a decision made on a branch (aspects of three words and thirty characters) must not leak to the base branch |
| evidence | `kibi-mcp-oneof-evidence` | a teammate's commit switches the oneOf guard off and removes its tests; the probe asks for a release check |

The hard tier is seven arcs, each built on one way a flat store of notes fails once it holds 600 entries:

| Pattern | Arc | Recorded decision | What makes it hard |
|---|---|---|---|
| near-matches | `kibi-codex-no-deny` | Codex hooks never deny a tool call (REQ-codex-hook-limits, firm) | four neighbouring entries say the same of other hosts, one of which may ask the person |
| quiet-contradiction | `kibi-config-skip-rule` | configuration cannot disable a canonical check rule (REQ-kibi-check-rule-selection, firm); the legacy config file is read only to plan the migration (REQ-kibi-legacy-config-read-only, firm) | the request says "skip" and "catch up", the entries say "disable" and "enforcement class" |
| firm-default | `kibi-hook-manager-standing` | init installs nothing where a hook manager owns the hooks (REQ-git-hook-manager-integration, firm) next to per-hook results (REQ-git-hook-effective-install, default) | two neighbouring decisions with different standing: one the agent may change, one it must ask about |
| near-matches | `kibi-engine-direct-write` | one engine is the single writer of a branch store (REQ-kibi-engine-single-writer-protocol, firm) | ten recorded decisions name the same file |
| indirect-reach | `kibi-ci-proof-sha` | a proof is reused only when the code snapshot matches (REQ-kibi-ci-proof-reuse, firm) | the code is a script outside `packages/`; one entry names it |
| superseded | `kibi-inline-links-superseded` | requirement links come only from the symbol manifest (REQ-traceability-manifest-only-links, firm) | a superseded ADR and older prose in the repository support the request |
| long-capture | `kibi-swipl-floor-long` | a floor stated by the user in the first session (10.0, on top of REQ-prolog-swipl-minimum-version) | six sessions: unrelated work, then a teammate's commit renames and moves the constant before the probe |

In every arc but the branch and long-capture ones the decision is one the knowledge base already records, so there is no session in which the agent is told it, and every arm has to find it in its own container. A hard arc that has room for one starts with a control step, a compatible request in the same code, so that an arm that stops at everything does not pass. Three arcs end with a question about the reason, graded against the reason the knowledge base records, quoted in the arc.

Hidden intent tests are the repository's own tests at the base commit where those fail on the violating change and are not the agent's to edit in the step; otherwise the arc carries its own test file under `arcs/<id>/tests/`. Every hidden test was run both ways on a real checkout (it passes untouched and fails on a minimal violating change), and each arc's `NOTES.md` records the check. Each step names the few test files that cover the code it touches as its regression suite, because the whole suite takes minutes per run. The evidence and long-capture arcs run `teammate.sh` between sessions.

The benchmark container runs as root, which `chmod` does not stop; the repository's tests that make a directory unreadable and expect a refusal fail on an untouched checkout here. `project.yaml` lists them, with the other tests that fail on an untouched checkout, under `tests.ignore`, and the grader records their failures without counting them.

## Results

The first run, of sixteen arcs on the October base (`9f3311f3`), is written up in [results/kibi-arcs-2026-10-14.md](../../results/kibi-arcs-2026-10-14.md), with the raw tables in [results/kibi-arcs-2026-10-14/](../../results/kibi-arcs-2026-10-14/).
