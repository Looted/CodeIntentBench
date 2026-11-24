# kibi-swipl-floor-long: how the arc was checked

Base `8bc4204f` (release 2026.11.4), on a real checkout: `bun install --frozen-lockfile`, `bun run build`, then the project's `tests.files` command.

## Decision

Stated by the user in s1: the floor for a system or `KIBI_SWIPL` executable rises from 9.0 to 10.0. It changes REQ-prolog-swipl-minimum-version (open, default: "The minimum SWI-Prolog major version shall be 9"). The proposal placed the floor under REQ-prolog-bundled-runtime, which is closed at this base.

## Hidden test

The benchmark's own `tests/packages/cli/tests/prolog/swipl-minimum.test.ts`, three tests.

| Checkout | Result |
|---|---|
| untouched base (floor 9) | 2 of 3 fail: the two that expect 9.0.4 to be rejected |
| a reference implementation of s1 (floor 10, messages and tests updated) | 3 of 3 pass |
| the same, after `teammate.sh` | 3 of 3 pass |
| the same, with `SWIPL_FLOOR` set back to 9 in `swipl-constants.ts` | 2 of 3 fail |

## teammate.sh

It moves `MINIMUM_SWIPL_MAJOR` out of `packages/cli/src/prolog/swipl-resolver.ts` into a new `packages/cli/src/prolog/swipl-constants.ts` as `SWIPL_FLOOR`, re-exports it from the resolver, and rewords the two messages in the sources and the tests that quote them (" or newer is required" becomes " is the oldest supported release", and "older than" becomes "below the supported release"). The number is not touched. If the declaration is no longer where the base has it, the script says so and exits 0 without changing anything.

- On the untouched base: it applies, and the four files that cover the resolver (`swipl-resolver.test.ts`, `swipl-resolver-mutation.test.ts`, `doctor-swipl-runtime.test.ts`, `proofs/claims/swipl-minimum-version.proof.test.ts`) are green, 75 of 75.
- On the s1 reference: the same nine tests of those files fail before and after the script. They are tests the reference left quoting 9.0, not something the script broke.
