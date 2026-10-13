# CodeRuleBench

A benchmark for whether coding agents **keep a project's recorded rules** while doing ordinary development tasks, and what it costs in tokens.

> Status: design draft. No tasks or results yet. See [METHODOLOGY.md](METHODOLOGY.md).

## What it measures

Most coding benchmarks ask one question: did the agent solve the task? Real projects carry rules that live outside the code being edited: "viewers are read-only", "a user has at most two roles", "refunds above a limit need approval". An agent can pass every visible test and still break one of those rules without saying so.

CodeRuleBench gives an agent ordinary, unscripted development requests on a real codebase. Some requests are compatible with the project's rules, some quietly conflict with one, and some touch areas no rule governs. Each run is scored on:

| Metric | Question |
|---|---|
| **Task success** | Do the hidden task tests pass? |
| **Rule keeping** | Do the hidden rule tests still pass, or did the agent stop and name the rule it would break? |
| **Silent violation** | Did the agent break a rule without mentioning it? (the key failure) |
| **False stop** | Did the agent refuse, or invent a constraint, where no rule applies? |
| **Reliability** | pass^k: the share of tasks kept correct in *all* k attempts |
| **Cost** | Input, cached and output tokens, USD, tool calls and wall time per task, and per *correct* task |

## Arms

The same agent, model and task run under different ways of giving the agent the project's rules. All arms are generated from one neutral rule source per project (`projects/<name>/rules/`), so every arm sees the same rules and only the delivery changes.

| Arm | How the rules reach the agent |
|---|---|
| `none` | They don't. The rule source is removed from the workspace. |
| `agents-md` | Rendered as a static `AGENTS.md` / `CLAUDE.md` context file. |
| `<tool>` | Through a rule, memory or knowledge-base tool installed as its users would install it. |

New tools join by adding an arm adapter (see [arms/README.md](arms/README.md)).

## Task kinds

| Kind | What the request does | Correct behaviour |
|---|---|---|
| `history` | A real change mined from the project's history, graded by its own tests | Implement it; no rule broken |
| `conflict` | A plausible product request that would violate a recorded rule | Stop and name the rule, or change the rule explicitly and say so |
| `governed` | A request a rule allows and constrains | Implement within the rule |
| `ungoverned` | A request no rule covers | Implement without inventing constraints |

Task prompts are written in a developer's voice and never mention rules, tools or the benchmark. The format is defined in [schema/task.schema.json](schema/task.schema.json) and [schema/rule.schema.json](schema/rule.schema.json), with an example in [projects/_example/](projects/_example/).

## Projects

Each project is a public repository pinned to a commit, plus a rule layer and tasks written for this benchmark. The code is real; the rules and tasks are new, so models cannot have memorised them. Candidate projects are listed in [projects/README.md](projects/README.md).

## Running it

The harness lives in [harness/](harness/README.md). With Node 26 and a Claude Code login on the machine:

```sh
cd harness && npm install
node src/cli.ts validate
node src/cli.ts run --project papra --task conflict-admins-invite-owner --arm none,agents-md,kibi --attempts 1
node src/cli.ts report --project papra
```

## Results

- [Papra pilot, 13 October 2026](results/papra-pilot-2026-10-13.md): 32 tasks, three arms, one attempt, claude-sonnet-5-5.

## Related work

- **SWE-bench** and successors: hidden-test grading, FAIL_TO_PASS / PASS_TO_PASS split.
- **AGENTbench** ([arXiv 2602.11988](https://arxiv.org/abs/2602.11988)): context files vs none; finds small accuracy changes and over 20% higher cost. The `agents-md` arm is the comparison it motivates.
- **OctoBench** ([arXiv 2601.10343](https://arxiv.org/abs/2601.10343)): scores task solving and rule compliance separately.
- **RepoComplianceBench** ([arXiv 2607.26819](https://arxiv.org/abs/2607.26819)): agents vs repositories' AI contribution policies (bans, disclosure, verification, human hand-off). Closest neighbour, with a different rule kind: process rules about how to contribute, where CodeRuleBench tests business rules about what the code must do. Its untouched-repository condition found agents opened the policy file in 12 of 347 runs (3.5%), and its "quote the rule in AGENTS.md" condition is the counterpart of the `agents-md` arm here. CodeRuleBench adopts its evidence-bound judge design.
- **τ-bench** (Yao et al., ICLR 2025): policy following in synthetic domains, the pass^k metric.
- **SWE-Bench-CL** ([arXiv 2507.00014](https://arxiv.org/abs/2507.00014)): sequential tasks on one repository with memory.

## Disclosure

CodeRuleBench is maintained by the authors of [Kibi](https://github.com/Looted/kibi), which is one of the tools evaluated here. Tasks, rules, grading and raw transcripts are published so results can be checked and reproduced independently, and adapters for other tools are welcome.
