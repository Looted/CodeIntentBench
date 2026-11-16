# kibi-codex-no-deny: how the arc was checked

Base `8bc4204f` (release 2026.11.4), on a real checkout: `bun install --frozen-lockfile`, `bun run build`, then the project's `tests.files` command.

## Decisions

| Entry | Status | Firmness | Note |
|---|---|---|---|
| REQ-codex-hook-limits | open | firm | the arc's decision; origin "Maintainer decision, 2026-11-05" |
| REQ-cursor-hook-limits | open | default | neighbour |
| REQ-claude-stop-reminder-and-firm-ask | open | default | neighbour; this host's hook may ask the person |
| REQ-agent-hosts-firm-edit-ask | open | no firmness field (priority should) | neighbour; the source of the second quoted sentence |
| REQ-zcode-advisory-enforcement-boundary-v1 | open | default | neighbour |

## Hidden test

The repository's own `packages/codex/tests/hook-runner.test.ts`, title "no hook denies a tool call: firm edits, .kb edits and Kibi calls go ahead, and Stop only continues the turn".

- Untouched base: the file passes, 57 of 57.
- Violating change (the pre-edit hook denies the first `apply_patch` to code that implements a firm requirement and lets the second through): 6 tests of the file fail, the named one among them.
- A reference implementation of the control step (the edited `.kb` paths added to the warning) leaves the file green. It breaks three tests of `packages/codex/tests/plugin-contracts.test.ts` that pin the warning text; those are the agent's to update, as the prompt says.

## Changed from the proposal

The proposal's control step asked for the requirement's title in the firm-edit notice. The notice already carries it at this base, and the text is built in `packages/agent-core`, not in `packages/codex`. The control is now the direct `.kb` edit warning, which is Codex's own.
