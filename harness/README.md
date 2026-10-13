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
cib validate                         check rules, tasks and arms
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

1. `prepareWorkspace` ([src/workspace.ts](src/workspace.ts)): `git clone --shared` from the mirror, check out the task's base commit on branch `cib-base`, remove the remote, install and build, write the rules whose scope paths exist at that commit into `<run>/rules/`, run `arms/<arm>/setup`, commit everything as "benchmark base".
2. `runAgentWithHost` ([src/agent.ts](src/agent.ts)): `claude -p` with `--output-format stream-json`, the model, effort and turn limit, the arm's plugin directories and environment, and the task prompt as the only input. The transcript is kept as `transcript.jsonl`; usage, cost, tool calls, the turn of the first rule lookup and of the first edit are extracted from it.
3. `gradeRun` ([src/grade.ts](src/grade.ts)): diff against `cib-base`; mark INVALID runs; restore hidden test files (task tests from the source commit of a replayed change, rule tests from the base); run rule tests, task tests and the regression suite with Vitest's JSON reporter (a named test that no longer runs counts as failed); call the judge; apply the decision table; run the arm's `hygiene` script.
4. `judgeRun` ([src/judge.ts](src/judge.ts)): one `claude -p` call with no tools and a JSON schema, answering the fixed questions in [METHODOLOGY.md](../METHODOLOGY.md) from the prompt, the governing and all other rules, the tool-call list, the final answer and the diff. Prompt, raw output and parsed verdict are written next to the run.
5. `report` ([src/report.ts](src/report.ts)): per-arm table (pass, rule kept, silent violations, false stops, pass^k, tokens, cost, cost per pass) with Wilson intervals, and a per-task outcome table.

Each run directory holds `run.json` (spec, usage, grade), `agent.json`, `transcript.jsonl`, `diff.patch`, `tests-*.json`, `judge*.{md,json}`, `hygiene.json`, `rules/` and, with `--keep`, the workspace.

## What an arc run does

`cib run-arc` ([src/arc.ts](src/arc.ts)) prepares one workspace per arc (no rules; the arm's `convention.md` appended to `CLAUDE.md`), then for each step: switches branch if the step names one, runs `claude -p` with the step prompt in the carried workspace, grades the step against its start commit (hidden tests restored only for the test run, so the carried workspace stays the agent's), judges it with the family's questions ([src/judge-arc.ts](src/judge-arc.ts)), and commits the session's work. Arc runs live under `runs/<project>/_arcs/<arc>/<arm>/<id>/` with `run.json`, `arc.json`, one `steps/<step>/` directory per session (transcript, agent.json, diff.patch, tests, judge) and the external stores (`tracker.json`, `memory.json`, `mcp.json`) of the passive arms. `cib report` writes `report-arcs.md` and `report-arcs.json` next to the single-session report.

The `tracker` and `memory` arms start a small stdio MCP server each ([src/arm-tools/tracker-mcp.ts](src/arm-tools/tracker-mcp.ts), [src/arm-tools/memory-mcp.ts](src/arm-tools/memory-mcp.ts), on [src/arm-tools/mcp-lite.ts](src/arm-tools/mcp-lite.ts)) through `--mcp-config`; both persist to a JSON file in the run directory.

## Permissions

By default the agent runs with `--permission-mode bypassPermissions`: the workspace is disposable and nobody is there to answer prompts. Where that is not allowed, `--permissions accept-edits` auto-accepts file edits and allows only the tools listed in `--allowed-tools` plus the arm's `allowed_tools`; everything else is denied and the denial count is recorded (`permission_denials` in `agent.json`). Results under the two modes are not comparable; a report should say which was used.

## Replay mode

`--agent replay` substitutes a scripted agent: it cherry-picks the source commit of a replayed change (for arc steps with `-X theirs`), or answers a conflict task or probe by naming the rule, without a model. With `CIB_REPLAY_KIBI=1` it also pretends the Kibi tools were present, and `CIB_REPLAY_MCP=tracker|memory` does the same for the passive arms. It exists to test the pipeline (grading, hidden tests, report), not to produce results.
