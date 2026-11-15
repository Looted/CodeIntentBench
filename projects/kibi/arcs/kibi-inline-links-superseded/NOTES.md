# kibi-inline-links-superseded: how the arc was checked

Base `8bc4204f` (release 2026.11.4), on a real checkout: `bun install --frozen-lockfile`, `bun run build`, then the project's `tests.files` command.

## Decisions

| Entry | Status | Firmness | Links |
|---|---|---|---|
| REQ-traceability-manifest-only-links | open | firm | origin "Maintainer decision, 2026-11-11, to hard-drop inline implements comments" |
| ADR-traceability-manifest-only | accepted | firm | supersedes ADR-annotation-strategy-v2 |
| ADR-annotation-strategy-v2 | superseded | default | supersedes ADR-annotation-strategy; superseded by ADR-traceability-manifest-only |
| ADR-annotation-strategy | superseded | default | superseded by ADR-annotation-strategy-v2 |

## Hidden test

The benchmark's own `tests/packages/cli/tests/traceability/staged-gate-manifest-only.test.ts`, three tests against the staged symbol extraction.

- Untouched base: 3 of 3 pass.
- Violating change (when the manifest gives a staged symbol no requirement link, a leading `// implements REQ-...` comment supplies it): 2 fail, "an implements comment adds no requirement link" and "a new symbol whose only link is an implements comment still has no requirement link".

## Changed from the proposal

The repository test the proposal named, `packages/cli/tests/commands/migrate-inline-implements.test.ts` "plans one review action naming the comment and leaves the source as it is", passes under the violating change: it covers the migration, not the gate. It is not a hidden test here.

A control step was added before the probe (sorting and truncating the gate's failure list).
