# Project `kibi`

[Kibi](https://github.com/Looted/kibi) benchmarked on its own repository. The repository is the one public project with a mature Kibi knowledge base: at the pinned commit `.kb/` holds 259 requirements, 33 ADRs, 1,219 facts, 249 scenarios and 291 test entities, with 4,600 code symbols linked to them, written by its authors over months of development. Every arc in this project is about a decision that knowledge base already records.

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

The export reads `.kb/requirements`, `.kb/adr`, `.kb/relationships/*.yaml` and `.kb/symbols.yaml`: a requirement's code locations are the source files of the symbols that `implements` it, its tests are the `*.test.ts` files of the symbols `executable_for` the test entities it is `verified_by` (or that `covered_by` its symbols), and its reason is the Context, Rationale or Why section of its body. At the pinned commit 223 of 288 entities have code locations and 178 have unit tests. Facts, scenarios and events are Kibi's typed grounding of the same statements and are not exported; the arms are compared on the recorded decisions, not on Kibi's proof machinery.

## Running the project's tests

Kibi is a Bun workspace. `bun install --frozen-lockfile` takes about three minutes cold and seconds with a warm cache; `bun run build` (35 s) produces the `dist/` the CLI runs from, and tests that spawn `packages/cli/bin/kibi` read it, so the grader rebuilds the CLI stack (13 s) before every test run. `harness/src/arm-tools/bun-test-json.ts` runs `bun test` with the JUnit reporter and writes the Vitest-shaped report the grader reads. A source checkout's bundled SWI-Prolog package has no runtime, so `arm-prepare.sh` installs the released `kibi-swipl` next to the workspace and `project.yaml` points `KIBI_SWIPL` at it; Kibi's own tests then run as they do in its CI.

## Arcs

Sixteen arcs under `arcs/`, two per family, all on the same base commit (`develop` at 9f3311f3, knowledge-base schema 10, the schema the pinned release reads). The families and the decisions they are about:

| Family | Arcs | Recorded decision |
|---|---|---|
| recall | `kibi-git-hooks-recall`, `kibi-swipl-minimum-recall` | hooks go to Git's effective hooks path (REQ-git-hook-effective-install); a system swipl older than 9.0 is refused (REQ-prolog-bundled-runtime) |
| rationale | `kibi-firmness-words-rationale`, `kibi-mcp-freshness-rationale` | the 12-word floor on "Why this changed" (REQ-kb-decision-firmness); stat-based KB freshness in the MCP server (ADR-021) |
| surfacing | `kibi-cursor-stop-surfacing`, `kibi-mcp-oneof-surfacing` | plan delivery is not job completion in the Cursor stop hook (REQ-cursor-stop-job-vs-plan); oneOf guard branches are enforced at MCP input validation (REQ-mcp-oneof-guard-input-validation) |
| navigation | `kibi-swipl-resolver-navigation`, `kibi-mcp-routing-navigation` | the SWI-Prolog resolution order; workspace routing and its boundary (REQ-mcp-workspace-routing) |
| drift | `kibi-firmness-words-drift`, `kibi-swipl-minimum-drift` | a stated change to a recorded decision (floor 12 to 6 words; floor 9.0 to 10.0), then a request that contradicts the new one |
| evidence | `kibi-foreign-hook-evidence`, `kibi-mcp-oneof-evidence` | a teammate's commit silently drops the behaviour and its tests (foreign hooks are no longer skipped; the oneOf guard is switched off); the probe asks for a release check |
| branch | `kibi-claim-name-length-branch`, `kibi-docs-analytics-branch` | a decision made on a branch (aspects of three words and thirty characters; no github-click analytics event) must not leak to the base branch |
| standing | `kibi-foreign-hook-standing`, `kibi-daemon-versions-standing` | a firm project rule (foreign hooks untouched; a daemon never serves other package versions) next to a choice the agent made itself |

In the recall, rationale, surfacing, navigation and standing arcs the decision is one the knowledge base already records, so the arc starts with the probe: there is no session in which the agent is told the decision, and every arm has to find it in its own container. The drift and branch arcs need a decision that is new on top of the recorded one, so their first session states it, as the Papra arcs did, and their hidden tests are the benchmark's own, under `arcs/<id>/tests/`. The evidence arcs run `teammate.sh` between sessions. Hidden intent tests for the recorded decisions are the repository's tests at the base commit, restored by the grader before they run; each step names the few test files that cover the code it touches as its regression suite, because the whole suite takes minutes per run.

The benchmark container runs as root, which `chmod` does not stop; eight of the repository's tests make a directory unreadable and expect Git to refuse, and fail on an untouched checkout here. `project.yaml` lists them under `tests.ignore`, and the grader records their failures without counting them.

## Results

The first run of these arcs is written up in [results/kibi-arcs-2026-10-14.md](../../results/kibi-arcs-2026-10-14.md), with the raw tables in [results/kibi-arcs-2026-10-14/](../../results/kibi-arcs-2026-10-14/).
