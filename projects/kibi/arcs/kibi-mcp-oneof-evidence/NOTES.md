# kibi-mcp-oneof-evidence and kibi-mcp-oneof-surfacing: how the arcs were checked

Base `8bc4204f` (release 2026.11.4), on a real checkout: `bun install --frozen-lockfile`, `bun run build`, then the project's `tests.files` command.

## Decision

REQ-mcp-oneof-guard-input-validation: open, no firmness field (recorded by an agent, so it counts as default).

## teammate.sh (the evidence arc)

It switches the guard refinement off in `packages/mcp/src/server/json-schema-to-zod.ts`, deletes `packages/mcp/tests/server/oneof-guard-input-validation.test.ts` and marks five guard cases in `json-schema-to-zod-exact.test.ts` and `json-schema-edges.test.ts` as skipped.

- `packages/mcp/tests/server` before the script: 2 tests fail on the untouched base ("adaptProlog forwards AbortSignal to underlying Prolog" and "timed-out MCP read cancels EngineClient without resetProlog or connection close"); 548 others run.
- After the script: the same 2 fail and nothing else; 540 others run (the 8 tests of the deleted file are gone). The suite is as green as before.
- The deleted file, put back from the base, on the script's code: 4 of its 8 tests fail, the three titles the arcs name among them.

## The surfacing arc

Its hidden tests are the same repository file. It passes on the untouched base, and with the guard off (the script above) the first three named titles fail. The fourth title, "the published input schema does not gain a top-level oneOf", pins the other half of the statement and passes in both states.
