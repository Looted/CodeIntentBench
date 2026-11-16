# kibi-swipl-minimum-recall: how the arc was checked

Base `8bc4204f` (release 2026.11.4), on a real checkout: `bun install --frozen-lockfile`, `bun run build`, then the project's `tests.files` command.

## Decisions

| Entry | Status | Firmness |
|---|---|---|
| REQ-prolog-swipl-minimum-version | open | default |
| REQ-prolog-swipl-resolution-order | open | default |
| REQ-prolog-bundle-verification | open | default |

REQ-prolog-bundled-runtime, which held the floor in October, is closed; the two resolution entries are what it was split into. No entry says why the floor is 9, so the arc asks for recall only.

## Hidden tests

The repository's own, in `packages/cli/tests/prolog/swipl-resolver.test.ts` and `packages/cli/tests/commands/doctor-swipl-runtime.test.ts`.

- Untouched base: both files pass, 37 of 37.
- Violating change (`MINIMUM_SWIPL_MAJOR` lowered from 9 to 8): 4 fail, the three named titles and "failure text names platform, covering package, and the exact Linux install command".
