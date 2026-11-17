# Harness

`cib` prepares a workspace, runs the agent, grades the result and aggregates runs. TypeScript executed directly by Node (type stripping), one dependency (`yaml`).

## Requirements

- Node 24 or later for the harness itself; the project's own runtime on PATH before `cib run` (Papra: Node 26 and pnpm 12). `cib` runs shell commands through a non-login `bash -c`, so PATH is taken as given.
- Claude Code installed and logged in (`claude` on PATH). Each run gets its own `CLAUDE_CONFIG_DIR` seeded with the credentials file only, so no user settings, memory or plugins leak into the run.
- For the Kibi arm: npm access to `kibi-cli`, `kibi-mcp`, `kibi-core` and Git access to the Kibi repository (pinned in `arms/kibi/versions.env`).

```sh
cd harness && npm install
```

## Commands

```
cib validate [--skip-audit]          check rules, tasks, arcs and arms, then run the equivalence audit
cib audit [--project P] [--arc A[,B]] [--arm A[,B]] [--keep]
cib list [--project P]               tasks and arms
cib prepare --project P --task T --arm A [--out DIR]
cib run --project P --task T|all --arm A[,B,...] [--attempts N] [--model M] [--effort E]
        [--max-turns N] [--timeout MIN] [--budget USD] [--judge-model M] [--agent claude|replay]
        [--permissions bypass|accept-edits] [--allowed-tools "Bash(pnpm:*),Bash(npx vitest:*)"]
        [--keep] [--skip-judge]
cib grade --run DIR [--judge-model M] [--skip-judge]
cib run-arc --project P --arc A|all --arm A[,B,...] [--family F] [--attempts N] [agent options as for run]
cib report [--project P]
```

Environment: `CIB_RUNS_DIR` (default `<repo>/runs`), `CIB_CACHE_DIR` (default `<repo>/cache`, holds the bare mirror of each project repository and the Kibi repository clone). Both are ignored by Git.

Defaults: model `claude-sonnet-5-5`, effort `low`, 60 turns, 25 minutes, judge `claude-sonnet-5-5`.

## What a run does

1. `prepareWorkspace` ([src/workspace.ts](src/workspace.ts)): `git clone --shared` from the mirror, check out the task's base commit on branch `main`, remove the remote, install and build, write the rules whose scope paths exist at that commit into `<run>/rules/`, run `arms/<arm>/setup`, commit everything as "Set up project tooling".
2. `runAgentWithHost` ([src/agent.ts](src/agent.ts)): `claude -p` with `--output-format stream-json`, the model, effort and turn limit, the arm's plugin directories and environment, and the task prompt as the only input. The transcript is kept as `transcript.jsonl`; usage, cost, tool calls, the turn of the first rule lookup and of the first edit are extracted from it.
3. `gradeRun` ([src/grade.ts](src/grade.ts)): diff against `main`; mark INVALID runs; restore hidden test files (task tests from the source commit of a replayed change, rule tests from the base); run rule tests, task tests and the regression suite with Vitest's JSON reporter (a named test that no longer runs counts as failed); call the judge; apply the decision table; run the arm's `hygiene` script.
4. `judgeRun` ([src/judge.ts](src/judge.ts)): one `claude -p` call with no tools and a JSON schema, answering the fixed questions in [METHODOLOGY.md](../METHODOLOGY.md) from the prompt, the governing and all other rules, the tool-call list, the final answer and the diff. Prompt, raw output and parsed verdict are written next to the run.
5. `report` ([src/report.ts](src/report.ts)): per-arm table (pass, rule kept, silent violations, false stops, pass^k, tokens, cost, cost per pass) with Wilson intervals, and a per-task outcome table.

Each run directory holds `run.json` (spec, usage, grade), `agent.json`, `transcript.jsonl`, `diff.patch`, `tests-*.json`, `judge*.{md,json}`, `hygiene.json`, `rules/` and, with `--keep`, the workspace.

## What an arc run does

`cib run-arc` ([src/arc.ts](src/arc.ts)) prepares one workspace per arc (no rules; the arm's `convention.md` appended to `CLAUDE.md`), then for each step: switches branch if the step names one, runs `claude -p` with the step prompt in the carried workspace, grades the step against its start commit (hidden tests restored only for the test run, so the carried workspace stays the agent's), judges it with the family's questions ([src/judge-arc.ts](src/judge-arc.ts)), and commits the session's work with git hooks enabled, so an arm that installs a commit gate (Kibi's pre-commit `kibi check --staged`) gets to refuse it (an arm's `before-commit` script runs first, for the mechanical step such a gate asks of the user before a retry, Kibi's `kibi sync --refresh-symbol-coordinates`); a refusal is recorded on the step as `commit_gate` with the hook's output, never graded, and the work is then committed with `--no-verify` so the arc continues. Teammate changes between sessions are committed by the benchmark without hooks. Arc runs live under `runs/<project>/_arcs/<arc>/<arm>/<id>/` with `run.json`, `arc.json`, one `steps/<step>/` directory per session (transcript, agent.json, diff.patch, tests, judge) and the external stores (`tracker.json`, `memory.json`, `mcp.json`) of the passive arms. `cib report` writes `report-arcs.md` and `report-arcs.json` next to the single-session report.

Before the first session of an arc run the harness audits the arm's container ([src/audit.ts](src/audit.ts)): every decision the arc is about (the arc's `intent` and each step's own `intent`) must be there with its statement, reason, status, firmness and code paths. A decision is found by the id the arc names (`intent.requirement`), otherwise by its statement; one the user states in an intent step is in no container at setup and is not looked for. A run whose audit fails is marked invalid with the reason and no session runs, so it cannot be scored. `cib audit` runs the same check without a run, for every base commit the arcs start from and every arm (checkout, the project's arm preparation and the arm's setup; no install, no tests, no model), and also compares the arms with each other; `cib validate` calls it after its static checks. Results go to `runs/<project>/audit.json`.

The knowledge a project keeps in a Kibi knowledge base reaches the passive arms through [src/kb-rules.ts](src/kb-rules.ts) (`arm-tools/kb-export.ts` on the command line): one rule file per requirement and ADR, whatever its status, with the statement, the recorded reason, the code and tests linked to it, and its standing (status, the firmness Kibi itself would show (an entry with none recorded is firm unless an agent wrote it), who recorded it and when, what it supersedes and what supersedes it). [src/render.ts](src/render.ts) writes those facts into each container (a decision file, an AGENTS.md section, a tracker issue, a memory note).

An arc may name a variant of the knowledge base stored for its base (`kb_variant: crowded` in arc.yaml): the arms then receive the store kept under `<base key>-<variant>`, the code and the teammate patch staying the same. `CIB_BASE_KEY` carries the full name to the project's arm preparation, and the audit groups arcs by commit, patch and variant.

The `agents-md` setup writes the whole file or nothing: when the rendered AGENTS.md is estimated (four bytes per token) to exceed the budget, the setup exits with "does not fit" and the arc run is recorded as not scored. The budget is `CIB_AGENTS_MD_TOKEN_BUDGET`, by default the context window of the agent's model (`contextTokensFor` in [src/pricing.ts](src/pricing.ts), override with `CIB_MODEL_CONTEXT_TOKENS`). The size is written to `agents-md-size.json` in the run directory and shown in the report.

`npm test` runs the unit tests under `test/` (export, per-step decisions, audit, the surfacing measure, the report).

The `tracker` and `memory` arms start a small stdio MCP server each ([src/arm-tools/tracker-mcp.ts](src/arm-tools/tracker-mcp.ts), [src/arm-tools/memory-mcp.ts](src/arm-tools/memory-mcp.ts), on [src/arm-tools/mcp-lite.ts](src/arm-tools/mcp-lite.ts)) through `--mcp-config`; both persist to a JSON file in the run directory.

## Permissions

By default the agent runs with `--permission-mode bypassPermissions`: the workspace is disposable and nobody is there to answer prompts. Where that is not allowed, `--permissions accept-edits` auto-accepts file edits and allows only the tools listed in `--allowed-tools` plus the arm's `allowed_tools`; everything else is denied and the denial count is recorded (`permission_denials` in `agent.json`). Results under the two modes are not comparable; a report should say which was used.

## Replay mode

`--agent replay` substitutes a scripted agent: it cherry-picks the source commit of a replayed change (for arc steps with `-X theirs`), or answers a conflict task or probe by naming the rule, without a model. With `CIB_REPLAY_KIBI=1` it also pretends the Kibi tools were present, and `CIB_REPLAY_MCP=tracker|memory` does the same for the passive arms. It exists to test the pipeline (grading, hidden tests, report), not to produce results.
