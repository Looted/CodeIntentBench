# kibi-hook-manager-standing: how the arc was checked

Base `8bc4204f` (release 2026.11.4), on a real checkout: `bun install --frozen-lockfile`, `bun run build`, then the project's `tests.files` command.

## Decisions

| Entry | Status | Firmness | Origin |
|---|---|---|---|
| REQ-git-hook-manager-integration | open | firm | "Maintainer request, 2026-10-29" |
| REQ-git-hook-effective-install | open | default | "Firmness relabelled to default until reviewed" |

## Hidden test

The benchmark's own `tests/packages/cli/tests/commands/hook-manager-files-untouched.test.ts`, two tests that compare file bytes before and after `kibi init` and assert on nothing init prints.

- Untouched base: 2 of 2 pass.
- Violating change (under husky, init appends Kibi's commands to the existing `.husky/pre-commit` and `.husky/post-checkout`): "under husky the existing .husky scripts keep their bytes and none is created" fails.

## Changed from the proposal

The proposal named two titles of the repository's `hook-managers.test.ts` as hidden tests. Under the violating change above that file passes, 16 of 16: it asserts that `.git/hooks` stays empty and on the printed text, not on the `.husky` files. It is the step's regression file, and the hidden test is the arc's own.

The earlier `kibi-foreign-hook-standing` arc treated REQ-git-hook-effective-install as firm. At this base it is default, and no firm entry states the foreign-hook rule, so that arc was removed.
