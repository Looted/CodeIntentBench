# member-cap-refactor

Base `50cbe2ca` (2026-09-18), the parent of PR #1533 (2026-09-20). Pattern: indirect-reach.

## Decision and sources, checked at the base

- The check was added in PR #536 (`e52bc261`, 2025-10-05), which has no description. The citable text is the title of the test that covers it, present unchanged at `50cbe2ca`, `0b3d0044`, `a03dc5ab` and `e7acb46f`: "cannot invite new members when the organization has reached its maximum member count (including pending invitations) defined by the plan to enforce subscription limits".
- Recorded at this base as `REQ-papra-member-limit-counts-pending-invitations`. Its reason covers why there is a limit ("to enforce subscription limits") and says that why pending invitations count is not stated.
- Code at the base: `organizations/organizations.usecases.ts`, `inviteMemberToOrganization` (`membersCount + pendingInvitationsCount >= organizationPlan.limits.maxOrganizationsMembersCount`).
- PR #1533 (`0b3d0044`, "decouple invitation flow") turns the use case into the factory `buildInviteMemberToOrganization`; it changes three files and no behaviour. PR #1534 (`a03dc5ab`, "allow reinviting former members") follows directly; its changeset: "Fix an issue that prevented reinviting users who left or were removed from an organisation." It adds a migration, repository methods, `buildResendOrganizationInvitation` with the same capacity check, and the test "stale pending invitations expire immediately and stop consuming organization capacity".

## Changes from the proposal

- **The decision is not the v1 rule at this base.** The rule `member-cap-counts-pending-invitations` says "Sending an invitation (or a resend) is refused...". The resend half only holds from #1534 on, so the snapshot at `50cbe2ca` does not carry the rule; it carries the #536 decision above. The rule's own entry is in the `e7acb46f` snapshot and supersedes this one there.
- **No rationale step.** The rule file's reason (seats are billed, so invitations must not pre-commit more seats than the plan allows) was written for the benchmark. No Papra source states it. The test title gives "to enforce subscription limits" and nothing about pending invitations, so the proposed s4 is dropped.
- **#1534 lands as a teammate's commit, not as agent work.** Its tests name a migration file, new repository methods and a second factory. A prompt cannot specify those without dictating the whole change, and a session that built it differently would leave the probe's hidden test failing for reasons unrelated to the decision. `teammate.sh` sets `apps/papra-server/src` to its state at `a03dc5ab` and adds the changeset, so the probe starts from the same code in every run. The cost: the arc no longer measures whether an arm records #1534's new behaviour, only whether it still finds the decision after the code moved twice.

## Hidden tests

- s1: `organizations.usecases.test.ts` from `0b3d0044` (the refactor's own tests) as task tests, plus the whole suite. The intent test is not run on s1 (`check_intent: false`): the task tests already contain the member-limit test at that commit.
- s3: `organizations.usecases.test.ts::cannot invite new members when the organization has reached its maximum member count (including pending invitations) defined by the plan to enforce subscription limits` from `a03dc5ab`.

Checked:

| State | Result |
|---|---|
| a checkout of `a03dc5ab`, the intent test alone | passes |
| the same with `membersCount >= maxOrganizationsMembersCount` in the invite use case | that one test fails, the other 46 in the file pass |
| a checkout of the base, upstream's #1533 files plus a stray file committed as the session's work, then `teammate.sh` | the tree under `apps/papra-server` and `.changeset` equals `a03dc5ab`; `src/modules/organizations`, `src/modules/invitations` and `src/migrations` pass (98 tests) |

## Replay

`run-arc --project papra --arc member-cap-refactor --arm docs --agent replay --skip-judge`, run on 2026-11-15: the audit passes; s1 (cherry-pick of `0b3d0044`) is graded C, with the task tests and the whole suite green; `teammate.sh` runs; at s3 the hidden test file from `a03dc5ab` passes (47 tests) and so does the suite. The probe itself is a scripted refusal, which without the judge is graded Q.
