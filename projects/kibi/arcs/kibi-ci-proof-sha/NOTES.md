# kibi-ci-proof-sha: how the arc was checked

Base `8bc4204f` (release 2026.11.4), on a real checkout: `bun install --frozen-lockfile`, `bun run build`, then the project's `tests.files` command.

## Decision

REQ-kibi-ci-proof-reuse: open, firm. It is the one recorded entry that names `scripts/ci-proof-reuse.ts`.

## Hidden test

The benchmark's own `tests/scripts/tests/ci-proof-snapshot-required.test.ts`, four tests against `assessProofReuse`.

- Untouched base: 4 of 4 pass.
- Violating change (a successful develop proof run for the head SHA is reused before any snapshot comparison): 3 of 4 fail.
- The repository's `scripts/tests/ci-proof-reuse.test.ts` also fails under the same change, 6 of 10.

## Changed from the proposal

The proposal named two titles of the repository's `ci-proof-reuse.test.ts`. That file is the one an agent implementing the request would edit, and the control step touches the code it covers, so the arc carries its own file with fixtures of its own; the repository file is a regression file of the control step.

The proposal had the probe alone. A control step comes first (a line of output when the wait for develop's proof times out), so an arm that stops at every request in this file does not pass.
