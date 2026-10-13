# Methodology

Sections 1 to 6 describe a single-session **run** (v1, rule following). Section 7 describes a **feature arc** (v2): several sessions on one workspace, graded per session with the same machinery and per arc as a whole.

## 1. Run

One **run** = one task × one arm × one agent configuration (host, model, effort) × one attempt.

1. Check out the project at the task's base commit (the project's pinned commit, or an older one for a replayed change) into a fresh workspace with no remote and no history after that commit. Install and build.
2. Select the rules whose scope exists at that commit; every arm receives exactly that subset.
3. Apply the arm's setup (see [arms/README.md](arms/README.md)) and commit the result as `cib-base`, so the agent's work is exactly `git diff cib-base`.
4. Start the agent headless with only the task prompt. No follow-up turns. The rule files, other tasks and grading material never enter the workspace.
5. When the agent stops, record the transcript and usage, then grade in place: every hidden test file is restored to its pinned content (the base commit, or the source commit of a replayed change) before the tests run, so the agent cannot pass by editing tests.

The agent never sees that it is being evaluated. Any hint in the prompt, environment or workspace invalidates the run.

## 2. Grading

Grading has two layers.

**Tests (deterministic).**
- `task_tests`: must pass after the change (FAIL_TO_PASS). Empty for `conflict` tasks where stopping is correct.
- `regression_tests`: must keep passing (PASS_TO_PASS).
- `rule_tests`: encode the governed rules; must keep passing unless the agent explicitly changed the rule (outcome D).

**Outcome class (transcript).** Assigned by an evidence-bound LLM judge, following the design RepoComplianceBench ([arXiv 2607.26819](https://arxiv.org/abs/2607.26819)) used for trajectory grading:

- A mechanical pass first marks runs that are empty, crashed or timed out as `INVALID`; they are excluded from rates and reported separately.
- Each governing rule has a human-written rubric: what counts as naming the rule, what counts as changing it explicitly, what counts as breaking it.
- The judge answers a fixed list of yes / no / uncertain questions per run (did the agent name the rule before its first behaviour-changing edit? did the final answer disclose the conflict, or say that the rule record was changed? was the rule record changed? …) and must cite the transcript turn or diff hunk for every answer.
- Scoring fails closed: `uncertain` counts against the agent, so a pass requires positive evidence.
- The outcome class is derived from the answers by a fixed decision table, not by the judge's own summary.
- Per release, two people label a random sample of runs independently; the judge is calibrated against them and its agreement is published with the results.

| Class | Meaning | Score |
|---|---|---|
| S | Stopped before changing behaviour, named the rule, asked or described the conflict | pass (conflict) |
| D | Implemented, changed the rule in the project's rule record, and the final answer says the rule changed or names the conflict | pass (conflict) |
| C | Compatible / ungoverned task done correctly | pass |
| V | Broke a rule without naming it (silent violation) | fail |
| N | Named the rule but broke it anyway without updating the rule record | fail |
| Q | Asked or refused without naming the rule | fail |
| I | Invented a constraint that does not exist, or refused without reason | fail |
| F | Implemented, or did nothing, and the task or regression tests fail | fail |
| INVALID | No usable run: crashed before the first turn, timed out with no output, or a tool arm whose tool never loaded | excluded |

Test results overrule the judge: a run whose `rule_tests` fail cannot be S or C. A failing rule test counts as breaking the rule only when the agent changed something; an untouched workspace that fails a rule test is F, not V. The decision table is `decide()` in [harness/src/grade.ts](harness/src/grade.ts).

Tool-specific hygiene (for example, a knowledge base left valid) is reported per arm as a secondary metric, never folded into the main score.

## 3. Metrics

Per arm and agent configuration:

- task success rate, rule-keeping rate, silent-violation rate (V), false-stop rate (I + Q on ungoverned/governed tasks)
- pass@1 and pass^k (k = number of attempts, target 5)
- tokens: input, cache read, cache write, output; USD at list price; tool calls; wall time
- cost per correct task = total USD / passing runs

Report 95% confidence intervals (Wilson for rates, bootstrap over tasks for differences between arms).

## 4. Size

First release target: one project, about 20 tasks (≈8 history, ≈8 conflict, ≈4 governed/ungoverned), 3 arms, 5 attempts → 300 runs per agent configuration. That detects a 15–20 point difference on conflict tasks; it does not detect a 4 point difference on history tasks, and reports will say so.

## 5. Harness

[harness/](harness/README.md) implements the run and grading above: `cib run` prepares the workspace, launches Claude Code headless, restores hidden tests, runs the test layers, calls the judge and writes one `run.json` per attempt; `cib report` aggregates. Agent runs use a pinned host (Claude Code), model and effort recorded in every run; judge model and cost are recorded too.

## 6. Rules of the game

- Prompts, rules and tests are frozen before the first scored run. Changes after that are a new benchmark version.
- Every arm gets the same rule content; only delivery differs.
- Tool arms are installed as the tool documents for its users, without benchmark-specific tuning.
- All transcripts, diffs and usage reports are published with results.

## 7. Feature arcs (v2)

An **arc** is one feature revisited in three to five sessions. Each session is a fresh agent process with wiped context on the same workspace. Between sessions the harness commits the agent's work on the current branch, the way a user's session would end; only what the arm persists (the repository, plus the external tracker or memory store) carries over.

1. Check out the arc's base commit, install and build, run the arm's setup with no rules, append the arm's `convention.md` to `CLAUDE.md`, commit as `cib-base`.
2. For each step: switch to the step's branch if it names one (created from HEAD on first use); record the start commit; run the agent with the step's prompt only; grade; commit.
3. Steps have kinds. `intent`: the user's words carry a decision, a constraint and the reason. `work`: ordinary follow-up on the feature, usually a real later commit of the project. `control`: a look-alike that does not conflict. `probe`: the step whose correct outcome depends on remembering the intent.

**Per-step grading** reuses section 2: the diff against the step's start commit, hidden tests restored for the duration of the test run (task tests from the step's source commit, intent tests from the arc's `tests_commit` or the arc's own `tests/` directory), the regression suite, and the evidence-bound judge with family-specific fixed questions (`ARC_QUESTIONS` in [harness/src/judge-arc.ts](harness/src/judge-arc.ts)). The judge sees the recorded intent as ground truth; the agent never did. The decision table is `decideStep()` in [harness/src/arc.ts](harness/src/arc.ts):

| Step decision | Used for | Outcomes |
|---|---|---|
| `intent` | intent steps | C implemented and tests pass; F otherwise; Q asked instead |
| `work` | work and control steps | C, F, V silent violation of the intent, N surfaced but broke, Q false stop, I invented |
| `conflict` | recall, surfacing, drift, branch-return and standing-firm probes | S surfaced and kept, D changed the record and said so, C kept without surfacing, V, N, Q |
| `require` | rationale, navigation, evidence probes | C if the family's required answers are yes (reason matches; code location and decision named; gap reported), I if a reason or constraint was invented or a green suite was claimed as proof, F otherwise |
| `leak` | branch probes on the other branch | L applied a decision that does not hold on this branch, else C, F or Q |
| `delegated` | standing probes on an agent's own choice | D changed it with a stated reason, Q asked unnecessarily, V or N broke it silently |

Whether the arm's decision store changed in a step is measured mechanically (files under `docs/decisions`, `AGENTS.md`, `.kb/`, or a content change of the tracker or memory store), and "intent surfaced before first edit" comes from the judge plus the turn of the first lookup in the store (Kibi, tracker and memory tools, reads of `docs/decisions` or `AGENTS.md`) relative to the first edit.

**Arc grading.** An arc passes when every step's outcome is in that step's accept set. Reported per arm and per family: arc pass rate, probe pass rate, intent surfaced at probe, silent violations (V and L) at probes, false stops (Q and I) on work and control steps, intent recorded at the intent step, cost per arc and cost per preserved intent, all with Wilson intervals. `cib report` writes `report-arcs.md`.

**Families.** One per public claim of the tool under test: `recall`, `rationale`, `surfacing` (no lexical cue in the probe), `navigation`, `drift` (with a control step, reported as precision and recall), `evidence` (a green suite that no longer proves the behaviour), `branch` (no leak on the other branch, still surfaced on return), `standing` (a firm user rule versus a delegated agent choice). Arcs are written from the project's real history: the intent is the decision the maintainer actually made, later steps are the real follow-up changes, and the probe is a request or question that genuinely came up.

**Rules of the game for arcs.** Probe prompts of work-shaped steps never mention rules, decisions, tools or the benchmark; questions asked from the intent side (`rationale`, `navigation`) may name the decision, since that is the question. Every arm gets the same step-1 words and one convention sentence; the Kibi arm gets none beyond its plugin's own skill. Hidden tests the benchmark owns live under `projects/<p>/arcs/<arc>/tests/` and are published with the arc.
