# CodeIntentBench

A benchmark for whether coding agents **keep a project's intent across sessions**: the decisions and reasons a user stated earlier, brought back at the moment a later change would quietly undo them. It measures that for the places intent is usually kept (nothing, a docs folder, an issue tracker, a passive memory, an always-loaded context file, a knowledge-base tool) and what each costs in tokens.

> Status: first arc pilot done, 16 arcs on two Papra features, seven arms, one attempt; see [results](results/papra-arcs-2026-10-14.md). v1 (single-session rule following) ran once on Papra; see [its results](results/papra-pilot-2026-10-13.md) and [METHODOLOGY.md](METHODOLOGY.md).

## What it measures

Most coding benchmarks ask one question: did the agent solve the task? Real projects run for months. A user says "share links must expire, legal does not want permanent URLs" in one session, and three sessions later a refactor or a plausible request quietly drops the constraint. The code was never wrong; the intent was lost.

CodeIntentBench replays that. A **feature arc** is one feature revisited in three to five fresh agent sessions on one carried workspace. Session one carries the user's intent and its reason. Later sessions are ordinary work on the same feature, one of which can only be done right by remembering session one. Each arm persists intent its own way between sessions; everything else is identical.

| Family | Claim under test | The probe |
|---|---|---|
| `recall` | intent survives sessions | a later request that would silently violate it |
| `rationale` | the reason survives too | "why does X behave like this?" |
| `surfacing` | intent comes back unprompted | the same, with no lexical cue in the request |
| `navigation` | intent is linked to code | "where is this decision enforced and tested?" |
| `drift` | contradictions are caught | a subtly contradicting request, and a look-alike control |
| `evidence` | green is not proof | a test stops exercising the behaviour while staying green |
| `branch` | intent follows the branch | the same file on another branch, then back |
| `standing` | decisions carry standing | a firm user rule versus a delegated agent choice |

Per session the harness records the outcome class (surfaced and stopped, changed the decision explicitly, done, silent violation, …), whether intent was surfaced before the first edit, tokens, cost and wall time. Per arc: pass only if every session passes. Per arm: arc pass rate per family, silent violations, false stops, cost per arc and **cost per preserved intent**.

## Arms

Each arm is a way to keep intent between sessions. Every arm's agent gets the same words from the user and one sentence of project convention saying where decisions are recorded; the agent does the bookkeeping itself. The plain `kibi` arm is the exception: it is Kibi as shipped, with the plugin's own hooks and skills as the only instruction, and `kibi-conv` adds the sentence.

| Arm | Substrate | Stands for |
|---|---|---|
| `none` | code, tests, Git history | the real-world default |
| `docs` | `docs/decisions/*.md` in the repository | a requirements folder, ADRs, a wiki |
| `tracker` | a file-backed issue tracker over MCP | Jira, YouTrack, Linear, GitHub issues |
| `memory` | a file-backed notes memory with keyword search over MCP | mem0, Zep, auto-memory, vector memory stores |
| `agents-md` | one `AGENTS.md` the agent keeps updated | the always-in-context ceiling |
| `kibi` | the [Kibi](https://github.com/Looted/kibi) knowledge base and plugin (hooks, skills, MCP) | Kibi |
| `kibi-conv` | the same, plus the one convention sentence the other arms get | Kibi, told where decisions live |

The tracker and memory arms are passive by construction: nothing fires when the agent reads or edits code. New tools join by adding an arm adapter (see [arms/README.md](arms/README.md)).

## v1: single-session rule following

The first version gave agents single requests on a codebase with a pre-recorded rule layer: some requests compatible with the rules, some in conflict, some ungoverned. Its tasks remain as the single-session special case of `recall`, and its grading (hidden rule tests plus an evidence-bound judge and a fixed decision table) is what arcs reuse per session. See the [methodology](METHODOLOGY.md).

## Projects

Each project is a public repository pinned to a commit, plus arcs, rules and tasks written for this benchmark from the project's real history. The code is real; the intent words, probes and hidden tests are new. The first project is [Papra](projects/papra/README.md); candidates are in [projects/README.md](projects/README.md).

## Running it

The harness lives in [harness/](harness/README.md). With Node 26 and a Claude Code login on the machine:

```sh
cd harness && npm install
node src/cli.ts validate
node src/cli.ts run-arc --project papra --arc all --arm none,docs,tracker,memory,agents-md,kibi,kibi-conv
node src/cli.ts run --project papra --task conflict-admins-invite-owner --arm none,agents-md,kibi
node src/cli.ts report --project papra
```

## Results

- [Kibi repository arcs, 14 October 2026](results/kibi-arcs-2026-10-14.md): 16 arcs on Kibi's own repository and its mature knowledge base, seven arms, one attempt, claude-sonnet-5-5. agents-md 81%, tracker 75%, docs and Kibi with the convention sentence 69%, Kibi as shipped 50%, none 38%; Kibi's agents surfaced the recorded decision as often as any arm and changed the code anyway.
- [Papra arcs on an onboarded knowledge base, 14 October 2026](results/papra-onboarded-2026-10-14.md): the same 16 arcs with every arm starting from 39 or 44 of Papra's decisions, onboarded with Kibi's bootstrap flow and exported to the passive arms. Tracker, docs and Kibi with the convention sentence 88%, agents-md and memory 75%, Kibi as shipped 38% (it still records nothing), none 25%; the firm onboarded requirements made kibi-conv the only arm to stop on both standing probes.
- [Papra arc pilot, 14 October 2026](results/papra-arcs-2026-10-14.md): 16 arcs, seven arms, one attempt, claude-sonnet-5-5. Tracker 94% and docs 88% arc pass; Kibi as shipped 31% (it records nothing), Kibi with the shared convention sentence 69%.
- [Papra pilot, 13 October 2026](results/papra-pilot-2026-10-13.md) (v1): 32 single-session tasks, three arms, one attempt, claude-sonnet-5-5.

## Related work

- **SWE-bench** and successors: hidden-test grading, FAIL_TO_PASS / PASS_TO_PASS split.
- **SWE-Bench-CL** ([arXiv 2507.00014](https://arxiv.org/abs/2507.00014)): sequential tasks on one repository with memory; the closest neighbour for arcs, without a stated intent to preserve.
- **AGENTbench** ([arXiv 2602.11988](https://arxiv.org/abs/2602.11988)): context files vs none; small accuracy changes, over 20% higher cost. The `agents-md` arm is the ceiling it motivates.
- **RepoComplianceBench** ([arXiv 2607.26819](https://arxiv.org/abs/2607.26819)): agents vs repositories' AI contribution policies; the evidence-bound judge design is adopted here.
- **OctoBench** ([arXiv 2601.10343](https://arxiv.org/abs/2601.10343)): task solving and rule compliance scored separately.
- **τ-bench** (Yao et al., ICLR 2025): policy following, the pass^k metric.

## Disclosure

CodeIntentBench is maintained by the authors of [Kibi](https://github.com/Looted/kibi), which is one of the tools evaluated here. The families are Kibi's own public claims, written down so they can be checked; arcs, hidden tests, grading and raw transcripts are published so results can be reproduced, and adapters for other tools are welcome.
