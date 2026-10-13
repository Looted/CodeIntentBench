# Arm `tracker`

Decisions live in an issue tracker outside the repository: a small file-backed MCP server (`harness/src/arm-tools/tracker-mcp.ts`) with create, update, get, list and keyword search. It is passive by construction: nothing fires when the agent reads or edits code. The agent gets one sentence in `CLAUDE.md` (see `convention.md`), the equivalent of a team convention to check the tracker.

Stands for: Jira, YouTrack, Linear, GitHub issues.

The store (`<run>/tracker.json`) is outside Git, so it does not follow branches, exactly like a real tracker.

In rule mode the project's rules are seeded as closed issues by `harness/src/arm-tools/seed-store.ts`.
