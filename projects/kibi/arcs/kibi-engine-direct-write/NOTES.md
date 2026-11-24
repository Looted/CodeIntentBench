# kibi-engine-direct-write: how the arc was checked

Base `8bc4204f` (release 2026.11.4), on a real checkout: `bun install --frozen-lockfile`, `bun run build`, then the project's `tests.files` command.

## Decisions

REQ-kibi-engine-single-writer-protocol: open, firm. Ten recorded entries name `packages/cli/src/engine.ts`:

| Entry | Firmness |
|---|---|
| REQ-kibi-engine-single-writer-protocol | firm |
| REQ-kibi-engine-durable-transactions | firm |
| REQ-kibi-engine-guarded-migration | firm |
| REQ-engine-daemon-package-versions | firm |
| REQ-engine-protocol-settings | default |
| REQ-engine-timing-settings | default |
| REQ-kibi-anonymous-usage-telemetry | default |
| REQ-kibi-operation-interface-parity | default |
| REQ-prolog-daemon-runtime-identity | default |
| REQ-test-engine-isolation-and-cleanup | default |

The first three, with REQ-kibi-sync-delta-compilation, are the children of REQ-core-journaled-engine-persistence and share their "Why this changed" paragraph. The arc quotes the Context section, which is this entry's own.

## Hidden test

The benchmark's own `tests/packages/cli/tests/commands/sync-engine-writer.test.ts`, two tests. Each runs `kibi sync` in a temporary workspace and then looks for the workspace's engine daemon.

- Untouched base: 2 of 2 pass.
- Violating change (with `KIBI_NO_DAEMON=1` a normal sync skips the engine and compiles the store from a SWI-Prolog process the CLI starts itself): "KIBI_NO_DAEMON=1 does not move the write out of the engine daemon" fails with "Expected length 1, received 0": no daemon holds the store.
