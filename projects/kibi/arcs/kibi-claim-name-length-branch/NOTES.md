# kibi-claim-name-length-branch: how the arc was checked

Base `8bc4204f` (release 2026.11.4), on a real checkout: `bun install --frozen-lockfile`, `bun run build`, then the project's `tests.files` command.

## Decision

Stated by the user in s1 on a branch: aspects of at most three words and thirty characters. The base records four and forty in REQ-bootstrap-claim-name-length (open, no firmness field; it counts as default).

## Hidden test

The benchmark's own `tests/packages/cli/tests/operations/bootstrap-claim-name-limits.test.ts`, four tests.

- Untouched base (limits four and forty): 3 of 4 fail.
- A reference implementation of s1 (`MAX_ASPECT_WORDS` 3, `MAX_ASPECT_CHARS` 30): 4 of 4 pass.

The file has its own name so that it does not replace the repository's test of the same code, which the agent updates in s1.
