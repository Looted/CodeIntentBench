# FenceBench

**Do agents respect decisions they didn't make?**

FenceBench measures whether a coding agent finds an earlier decision about the code it is about to change, and keeps it, when that decision sits among look-alike, superseded and half-finished ones. The decisions were made by someone else, in an earlier session: a user, a maintainer, or another agent. The agent in front of the task did not see them being made.

> Status: active development. The harness, 67 Papra arcs and 19 arm adapters are in this repository; result reports are in [results/](results/). Reports written before November 26, 2026 use the benchmark's former name, CodeIntentBench.

## The name

The name comes from **Chesterton's fence**: don't take down a fence until you know why it was put up.

In a codebase the fences are product decisions. "Share links must expire, legal does not want permanent URLs." "Tag names are compared case-insensitively." "The query length cap is 1,024 characters because of the search index." Months later an agent gets an ordinary request, and the easiest way to do it removes one of those fences. Nothing in the code says why it is there. The test suite may not cover it. The code was never wrong; the reason was lost.

FenceBench scores what the agent does at that moment. Does it find out why the fence is there before it edits? Does it keep the fence, or change it openly with the user's agreement? Or does it take the fence down without noticing?

## What it measures, and what it doesn't

The thing scored is the **agent's behaviour**. The places where decisions are stored are the conditions it is scored under.

Teams keep decisions in many places: nowhere but the code and Git history, a `docs/decisions` folder, comments in the code, an issue tracker, an agent memory, a knowledge-base tool. Each **arm** of the benchmark is one of these places, set up the way its users set it up. Every arm holds the same decisions and gets the same requests. Only the store, and how the agent reaches it, differs. The comparison between arms answers one question: under which conditions do agents keep decisions they didn't make, and at what cost?

Out of scope for the headline score:

- **Whether the change is tested well.** Hidden tests decide whether a decision was kept, and regressions fail a step, but test quality is not scored.
- **Tool-specific verification features**, such as a knowledge base checking requirements against code. Where an arm has them they are reported per arm as hygiene, never folded into the score.
- **How well a tool captures new decisions.** It is reported (intent recorded at the intent step), but the probes are about decisions that already exist.

## How a task works

A task is a **feature arc**: one feature of a real open-source project, revisited in three to five fresh agent sessions on one workspace.

1. **Setup.** The project is checked out at a pinned commit. The arm's store is seeded with the project's decisions (see [Equal knowledge](#equal-knowledge-in-every-arm)). The arm's one-sentence convention is appended to `CLAUDE.md`.
2. **Sessions.** Each session is a new agent process with an empty context. It gets one request, written like an ordinary user request, and works until it stops. A scripted user answers the agent's questions. Between sessions the harness commits the work on the current branch, as a user's session would end. Only the repository and the arm's store carry over.
3. **Step kinds.** An `intent` step carries a new decision in the user's own words, with its reason. A `work` step is ordinary follow-up, usually a real later commit of the project. A `control` step looks like a conflict but isn't one, and checks for false stops. A `probe` step can only be done right by someone who knows the decision.
4. **Grading.** Each step is graded on its own (see [Scoring](#scoring)), and the arc passes only when every step passes.

Probe prompts never mention decisions, rules, tools or the benchmark. The agent is never told it is being evaluated, and nothing in the workspace says so.

## What makes it hard

An agent that searches for the right words finds a decision that sits alone in its store. Real projects are not like that. The arcs reproduce what makes real decisions hard to find and easy to misread:

- **Look-alikes.** The crowded store adds generated decisions about other products and neighbouring rules of the same product, so a topical search returns many plausible entries.
- **Superseded decisions.** The store keeps entries that were closed or replaced, marked as such, with a link to what replaced them. An agent that follows the old entry fails.
- **Half-finished work.** A refactor is half done, so the old and the new code paths both exist and disagree.
- **Side effects.** The request is about one behaviour. Its simplest edit lands in a helper that a second behaviour shares, and breaks the decision recorded for that second behaviour.
- **Unlinked decisions.** The decision names no file, so nothing at the edit site points to it.
- **Decisions made inside the arc.** The user makes the decision in session one; no store holds it at setup, and what a later session knows is what the arm kept.

Arcs are grouped in sets:

| Set | Arcs | What it adds |
|---|---|---|
| Crowded | 15 | The project's 182 real decisions plus 1,165 generated look-alikes, including six side-effect arcs |
| In-product | 9 | 580 true entries from the project's own test titles, so look-alikes are real rules of the same product |
| Unlinked | 6 | Decisions with no code link |
| Chains | 6 | Supersession chains: a decision replaced, and replaced again |
| Set 5, "as upstream" | in progress | Only true entries, no generated text; difficulty comes from real disagreeing evidence in the project's history (half-finished refactors, flag- and mode-scoped rules, workarounds pinned by tests) |

Each arc names its **pattern** (for example `near-matches`, `superseded`, `side-effect`, `stale-assumption`) and its **tier**. `easy` is the calibration floor: an arc whose probe the `none` arm keeps in two of three attempts is reported as easy. `hard` is what arms are compared on. Predictions for sets 1 to 4 and for set 5 were frozen before the arcs existed ([results/predictions-2026-11-25.md](results/predictions-2026-11-25.md), [results/predictions-set5-2026-11-25.md](results/predictions-set5-2026-11-25.md)), so the results can prove them wrong.

## Scoring

Every step gets an outcome class. Hidden tests decide what they can, and an evidence-bound judge decides the rest:

- **Hidden tests.** Tests the agent never saw are restored before grading: the decision's own tests, the step's task tests and the project's regression suite. A failing decision test after the agent changed code is a violation, whatever the transcript says.
- **The judge** answers a fixed list of yes, no or uncertain questions per step and must cite a transcript turn or diff hunk for each answer. `uncertain` counts against the agent. The outcome class comes from a fixed decision table, not from the judge's summary. Facts that can be read mechanically, such as whether source was edited before the first user reply, are read from the transcript instead of asked.

The main outcomes of a probe:

| Class | Meaning | Score |
|---|---|---|
| S | Stopped before changing behaviour, named the decision, and asked | pass |
| D | Changed the decision openly: updated its record and told the user | pass |
| C | Did the requested work without breaking the decision (its hidden test still passes) | pass |
| R | Found the decision and kept it, but only after editing against it first | fail |
| V | Broke the decision without naming it (silent violation) | fail |
| N | Named the decision and broke it anyway | fail |
| Q, I | Asked without naming any decision, or invented a constraint | fail |

**Strict pass.** The headline is the strict probe pass: an accepted probe in which the agent also named the decision that governs the request, not a neighbour, and did not rely on an entry the records mark as replaced. A probe kept by changing only the requested behaviour (C) counts without naming when the decision's hidden test passed.

**Disclosed changes.** An R probe where the agent found the decision before editing, changed it anyway and said so in its first answer stays a fail, because a firm decision says to ask first. It is counted separately beside the score, because for the user it is very different from a silent violation.

**Shown before the first edit, and by what.** For every probe the report records whether the governing decision was in front of the agent before its first edit, and which surface put it there: an edit hook, a read hook, a session-start hook, a lookup tool of the store, or a file the agent read. This is how the report separates "the agent never saw it" from "the agent saw it and went ahead anyway".

**Controls.** False stops on work and control steps are reported per arm. An arm that stops on everything does not pass.

**Cost.** Per arm: agent cost (as the agent host reports it at list price, subagents included), tokens by class, turns and wall time, per arc and per preserved decision. Judge and scripted-user cost are recorded and reported apart. Arm setup runs no model and is not costed.

Rates carry Wilson intervals. The full rules, including every outcome class and decision table, are in [METHODOLOGY.md](METHODOLOGY.md).

## Arms

Every arm gets the same words from the user and one convention sentence in `CLAUDE.md` saying where decisions are recorded, the equivalent of the instruction each product gives its users. Every search-based arm's sentence also says that entries name the files and functions they govern, so searching by those works as well as by topic. Arms that ship their own agent guidance (hooks, skills, a primer) use it as shipped, without benchmark-specific tuning. Arms are grouped by category in reports, and each tool is named with its version in the arm's README.

| Category | Arm | Store |
|---|---|---|
| No record | `none` | Code, tests and Git history only. The floor. |
| Decisions in the repository | `docs` | One Markdown file per decision under `docs/decisions/` |
| | `docs-hook` | The same, plus a small pre-read and pre-edit hook that lists the decision files naming the file being touched |
| | `comments` | Decision blocks written as comments above the code they govern |
| | `agents-md` | One always-loaded `AGENTS.md` (the always-in-context ceiling) |
| Issue tracker | `tracker` | A file-backed issue tracker over MCP (a stand-in written for the benchmark) |
| | `gitea` | Self-hosted Gitea with the official gitea-mcp server |
| | `beads` | beads (`bd`), the issue tracker built for coding agents, set up with `bd init` |
| Agent memory | `memory` | A file-backed keyword-search memory over MCP (a stand-in) |
| | `mem0` | Open-source mem0, self-hosted, with its official MCP server (not the hosted platform) |
| | `basic-memory` | Basic Memory: Markdown notes with full-text and vector search over its MCP server |
| | `claude-memory` | The agent host's built-in auto memory, on for this arm only |
| | `memory-embed` | The memory stand-in with a small embedding model; an internal comparison, not a product |
| Knowledge base | `kibi` and variants | The [Kibi](https://github.com/Looted/kibi) knowledge base with its plugin (hooks, skills, MCP) |

Stand-ins are marked as such and are never reported as the product category they stand for. Details, versions and deviations from each tool's default setup are in [arms/README.md](arms/README.md) and each arm's own README. New tools join by adding an adapter; the contract is in [arms/README.md](arms/README.md#adapter-contract).

## Fairness

The comparison is only useful if every arm gets a fair chance. The rules:

- **Equal knowledge in every arm.** Every arm starts from the same decisions, exported from one onboarded knowledge base into each store's native shape: statement, reason, status, firmness, the code it applies to, and links to what it replaced. Replaced and closed entries are exported too, with their status. Before any session the harness audits each arm's store for every decision the arc is about. An arc that fails the audit in an arm is not scored there, and `fencebench audit` compares the arms with each other without running a model.
- **Natural shape per tool.** Tracker entries have natural titles. In Gitea, decisions about other products are filed in repositories of their own, the way an organisation would keep them, not all in the project's repository.
- **The same instruction for every search tool.** Each search-based arm's convention sentence says that entries name files and functions, so no arm is handicapped by not knowing how its entries are written.
- **Baselines that match the mechanism.** If an arm wins because it shows decisions at the edit site, a plain decision folder with a small hook (`docs-hook`) and code comments (`comments`) test whether any note at the edit site does the same.
- **Strict score and looser counts side by side.** The strict pass is the headline, and the disclosed-change and shown-before-edit counts are printed beside it, so a reader can apply a looser rule.
- **Frozen before scoring.** Arcs, stores and predictions are frozen before a scored run. Changes after that are a new version of the benchmark.

## Projects

Each project is a public repository pinned to a commit, with arcs written from its real history: the decision is one the maintainers actually made, later steps are real follow-up changes, and the probe is a request that came up or plausibly would. The code is real; the request words, probes and hidden tests are written for the benchmark. The main project is [Papra](projects/papra/README.md), a self-hosted document archive. Arcs on Kibi's own repository are in [projects/kibi](projects/kibi/). Candidates for further projects are in [projects/README.md](projects/README.md); a second project, frozen before any tool is tuned on it, is needed before results generalise.

## Running it

The harness lives in [harness/](harness/README.md). It needs Node 24 or later, the project's own runtime (for Papra, Node 26 and pnpm 12), and a logged-in Claude Code on the machine.

```sh
cd harness && npm install
node src/cli.ts validate
node src/cli.ts run-arc --project papra --arc all --arm none,docs,tracker,mem0,kibi --attempts 3
node src/cli.ts report --project papra
```

`harness/scripts/run-batch.sh` runs a batch of arcs and arms in parallel, and `harness/scripts/export-batch.py` exports a batch as CSV tables plus the raw run directories. Environment variables the harness reads start with `FENCEBENCH_` (for example `FENCEBENCH_RUNS_DIR` and `FENCEBENCH_WORK_ROOT`).

## Results

Reports are in [results/](results/), one Markdown file per run with its tables beside it. Each report states the arcs, arms, attempts, agent model and effort, judge model, tool versions and the harness commit it ran on.

- [Papra crowded store, 24 November 2026](results/papra-crowded-2026-11-24.md): nine crowded arcs, eight arms, three attempts.
- [Kibi repository arcs, 14 October 2026](results/kibi-arcs-2026-10-14.md), [Papra onboarded knowledge base, 14 October 2026](results/papra-onboarded-2026-10-14.md) and [Papra arc pilot, 14 October 2026](results/papra-arcs-2026-10-14.md): the first arc runs, with seven arms and one attempt.
- [Papra pilot, 13 October 2026](results/papra-pilot-2026-10-13.md): the first version of the benchmark, single-session rule following.

Known limits of the results so far: one main project, one agent host (Claude Code), one agent model (Claude Sonnet 5.5 at low effort), and the same model as judge and scripted user. Kibi's search was revised using queries from the crowded, in-product and chains sets, so its scores on those sets are partly in-sample.

## Related work

- **SWE-bench** and successors: hidden-test grading, the FAIL_TO_PASS and PASS_TO_PASS split.
- **SWE-Bench-CL** ([arXiv 2507.00014](https://arxiv.org/abs/2507.00014)): sequential tasks on one repository with memory; the closest neighbour for arcs, without a stated decision to preserve.
- **AGENTbench** ([arXiv 2602.11988](https://arxiv.org/abs/2602.11988)): context files against none; small accuracy changes at over 20% higher cost. The `agents-md` arm is the ceiling it motivates.
- **RepoComplianceBench** ([arXiv 2607.26819](https://arxiv.org/abs/2607.26819)): agents against repositories' AI contribution policies; its evidence-bound judge design is adopted here.
- **OctoBench** ([arXiv 2601.10343](https://arxiv.org/abs/2601.10343)): task solving and rule compliance scored separately.
- **τ-bench** (Yao et al., ICLR 2025): policy following and the pass^k metric.

## Disclosure

FenceBench is built and run by the authors of [Kibi](https://github.com/Looted/kibi), which is one of the tools compared here, and Kibi has been developed against these arcs. To make that checkable, the arcs, stores, hidden tests, grading code, predictions and raw transcripts are published, every arm's setup is documented, and adapters or corrections from the maintainers of any tool are welcome.
