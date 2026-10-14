# Arm `kibi`

The rules are recorded in a [Kibi](https://github.com/Looted/kibi) knowledge base and reach the agent through the `kibi-claude` plugin for Claude Code (hooks, skills and an MCP server exposing the `kb_*` tools).

## Versions

Pinned in [versions.env](versions.env): `kibi-cli`, `kibi-mcp`, `kibi-core` and `kibi-runtime` from npm, and the plugin from `packages/claude` at a commit of the Kibi repository. Change them only with a new benchmark version. `kibi-runtime` is pinned because `kibi-mcp` loads its operations from it and declares it with a caret range: without the pin a run installed after a Kibi release gets that release's operations over the pinned core, and the setup now fails if any of the four packages resolves to more than one version.

## What `setup` does

1. `npm install` the four packages into `<run>/kibi/` (one directory above the workspace; the plugin's MCP launcher finds `kibi-mcp` by walking up from the workspace). The project's own `package.json` and lockfile are untouched.
2. `git archive` the plugin into `<run>/plugin/kibi-claude/`, passed to Claude Code with `--plugin-dir`.
3. `kibi init` in the workspace.
4. [kibi-import.ts](../../harness/src/arm-tools/kibi-import.ts) records the rules through Kibi's own operations: for each rule, one `test` entity per hidden test (`TEST-<rule>`), then one requirement `REQ-<rule>` with `firmness: firm` and a human origin (Kibi's own distinction: a firm decision is followed and changed only after asking, an unmarked one may be superseded by the agent on its own), carrying the statement as `semantic_text` with the proposition ledger Kibi's write path requires (`kibi semantic-advisor` analyses the prose; its inventory contract and propositions are copied into the payload with every clause left `missing`, that is, recorded but not grounded in typed facts), a `## Context` section with the rationale and scope, and `verified_by` links to the tests. The enforcing functions become authored symbols in `.kb/symbols.yaml` with `implements` and `covered_by` links; `kibi sync --refresh-symbol-coordinates` compiles them, and symbols whose declaration the extractor cannot locate are opted into Kibi's whole-file fallback (`granularity_reason: extractor-miss`) and synced again. `kibi check --format json` is saved as `kibi-check-baseline.json`.
5. `.kb/usage.log` is emptied so the agent's own lookups are what `kibi usage-metrics` later reports.

`host.json` adds the plugin directory, puts `<run>/kibi/node_modules/.bin` on PATH, sets `KIBI_DIAGNOSTIC_MODE=1`, and lists the `kb_*` tool names for `--permissions accept-edits`.

## Commit gate

`kibi init` installs Kibi's git hooks in the workspace. The pre-commit hook, which Kibi's own template calls its hard enforcement boundary, runs `kibi check-generated --staged --changed-only` and `kibi check --staged`. The harness runs [before-commit](before-commit) (`kibi sync --refresh-symbol-coordinates`, the step the hook tells the user to take before retrying), commits each session's work with hooks enabled and records a refusal on the step (`commit_gate.blocked`, with the hook's output) before committing with `--no-verify`, so the arc continues and the report can count how often the gate would have stopped the user. Observed with the pinned 2.23.0 on the Papra onboarded base: an edit to a file with no linked symbol passes ("No exported symbols or staged entities found"); an edit to a linked behavioural symbol is refused first for symbol-coordinate drift until `kibi sync --refresh-symbol-coordinates` is staged, then for traceability ("1/1 staged symbols unlinked") until the changed symbol carries an `implements` link, and a staged requirement document elsewhere or a `Kibi-Impact: none` trailer does not lift that. Agents are not asked to commit, so the gate measures what a user would meet when committing the session's work, not what the agent did about it.

## Hygiene

After the agent stops, [hygiene](hygiene) reports `kibi check` (violations and quality diagnostics) and `kibi usage-metrics` (lookups, including whether a lookup preceded the first edit). Reported per run in `hygiene.json`, never part of the main score.

## Known limits

- Requirements are recorded with ungrounded ledgers: Kibi's contradiction checks over typed facts do not apply, only its retrieval, traceability and `kb_check`. Grounding each clause in facts would be the next step for this arm and is work Kibi's own users do by hand.
- For tasks whose base commit is older than the project's pin, a rule can name a function that does not exist yet; `kibi check` then reports a `symbol-granularity` violation in the baseline, which the agent can read.
- Several rules are enforced in the same function, which Kibi reports as `duplicate_symbol_coordinate_review` diagnostics.
- The plugin installs its hooks and skills as it does for any user; nothing is tuned for the benchmark.
