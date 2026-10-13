# Harness

`crb` prepares a workspace, runs the agent, grades the result and aggregates runs. TypeScript executed directly by Node (type stripping), one dependency (`yaml`).

## Requirements

- Node 24 or later for the harness itself; the project's own runtime on PATH before `crb run` (Papra: Node 26 and pnpm 12). `crb` runs shell commands through a non-login `bash -c`, so PATH is taken as given.
- Claude Code installed and logged in (`claude` on PATH). Each run gets its own `CLAUDE_CONFIG_DIR` seeded with the credentials file only, so no user settings, memory or plugins leak into the run.
- For the Kibi arm: npm access to `kibi-cli`, `kibi-mcp`, `kibi-core` and Git access to the Kibi repository (pinned in `arms/kibi/versions.env`).

```sh
cd harness && npm install
```

## Commands

```
crb validate                         check rules, tasks and arms
crb list [--project P]               tasks and arms
crb prepare --project P --task T --arm A [--out DIR]
crb run --project P --task T|all --arm A[,B,...] [--attempts N] [--model M] [--effort E]
        [--max-turns N] [--timeout MIN] [--budget USD] [--judge-model M] [--agent claude|replay]
        [--permissions bypass|accept-edits] [--allowed-tools "Bash(pnpm:*),Bash(npx vitest:*)"]
        [--keep] [--skip-judge]
crb grade --run DIR [--judge-model M] [--skip-judge]
crb report [--project P]
```

Environment: `CRB_RUNS_DIR` (default `<repo>/runs`), `CRB_CACHE_DIR` (default `<repo>/cache`, holds the bare mirror of each project repository and the Kibi repository clone). Both are ignored by Git.

Defaults: model `claude-sonnet-5-5`, effort `low`, 60 turns, 25 minutes, judge `claude-sonnet-5-5`.

## What a run does

1. `prepareWorkspace` ([src/workspace.ts](src/workspace.ts)): `git clone --shared` from the mirror, check out the task's base commit on branch `crb-base`, remove the remote, install and build, write the rules whose scope paths exist at that commit into `<run>/rules/`, run `arms/<arm>/setup`, commit everything as "benchmark base".
2. `runAgentWithHost` ([src/agent.ts](src/agent.ts)): `claude -p` with `--output-format stream-json`, the model, effort and turn limit, the arm's plugin directories and environment, and the task prompt as the only input. The transcript is kept as `transcript.jsonl`; usage, cost, tool calls, the turn of the first rule lookup and of the first edit are extracted from it.
3. `gradeRun` ([src/grade.ts](src/grade.ts)): diff against `crb-base`; mark INVALID runs; restore hidden test files (task tests from the source commit of a replayed change, rule tests from the base); run rule tests, task tests and the regression suite with Vitest's JSON reporter (a named test that no longer runs counts as failed); call the judge; apply the decision table; run the arm's `hygiene` script.
4. `judgeRun` ([src/judge.ts](src/judge.ts)): one `claude -p` call with no tools and a JSON schema, answering the fixed questions in [METHODOLOGY.md](../METHODOLOGY.md) from the prompt, the governing and all other rules, the tool-call list, the final answer and the diff. Prompt, raw output and parsed verdict are written next to the run.
5. `report` ([src/report.ts](src/report.ts)): per-arm table (pass, rule kept, silent violations, false stops, pass^k, tokens, cost, cost per pass) with Wilson intervals, and a per-task outcome table.

Each run directory holds `run.json` (spec, usage, grade), `agent.json`, `transcript.jsonl`, `diff.patch`, `tests-*.json`, `judge*.{md,json}`, `hygiene.json`, `rules/` and, with `--keep`, the workspace.

## Permissions

By default the agent runs with `--permission-mode bypassPermissions`: the workspace is disposable and nobody is there to answer prompts. Where that is not allowed, `--permissions accept-edits` auto-accepts file edits and allows only the tools listed in `--allowed-tools` plus the arm's `allowed_tools`; everything else is denied and the denial count is recorded (`permission_denials` in `agent.json`). Results under the two modes are not comparable; a report should say which was used.

## Replay mode

`--agent replay` substitutes a scripted agent: it cherry-picks the source commit of a replayed change, or answers a conflict task by naming the rule, without a model. With `CRB_REPLAY_KIBI=1` it also pretends the Kibi tools were present. It exists to test the pipeline (grading, hidden tests, report), not to produce results.
