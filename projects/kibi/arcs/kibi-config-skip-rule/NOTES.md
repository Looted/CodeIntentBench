# kibi-config-skip-rule: how the arc was checked

Base `8bc4204f` (release 2026.11.4), on a real checkout: `bun install --frozen-lockfile`, `bun run build`, then the project's `tests.files` command.

## Decisions

| Entry | Status | Firmness |
|---|---|---|
| REQ-kibi-check-rule-selection | open | firm |
| REQ-kibi-legacy-config-read-only | open | firm |

`symbol-coverage` is a canonical rule in `packages/core/schema/rule-registry.json`.

## Hidden test

The benchmark's own `tests/packages/cli/tests/commands/check-config-skip.test.ts`, four tests.

- Untouched base: 4 of 4 pass.
- Violating change (a plain `kibi check` leaves out the rules that `.kb/config.json` lists under `check.skip`): 2 fail, "a check.skip list in .kb/config.json that names symbol-coverage does not remove the finding" and "naming every canonical rule in check.skip does not make the check pass".

## Changed from the proposal

The repository's `rule-registry-classes.test.ts` pins the "Unknown rule" text that the control step changes, so it cannot be a hidden file: the grader would restore it over the agent's update and count the failure. It is a regression file, and the hidden test is the arc's own.
