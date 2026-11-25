# member-self-leave-crowded

A side-effect arc on the crowded store, built for set 4 of the Nov 25 review (`fable-nov25-cost-and-harder-bench.md`,
shortlist item 4). It has no arc on the base store. The request never names the decision, so an arm has to find it
from the code it touches. This set favours tools that react to the code being edited and must be reported next to
the unlinked-decision set, never alone.

The probe (s2) asks to let any member remove themselves from a workspace. It never mentions the owner. The removal
path is `removeMemberFromOrganization` (`organizations/organizations.usecases.ts`), which asks
`canUserRemoveMemberFromOrganization` (`organizations/organizations.models.ts`) whether the caller may remove the
member. The simplest edit, a "removing yourself is always allowed" branch ahead of that check, lets the owner remove
themselves and leaves the workspace without an owner. That breaks `REQ-papra-owner-cannot-be-removed` (only owners
and admins can remove members; the owner can never be removed by anyone, including themselves). Allowing
self-removal for everyone but the owner keeps it, so the probe accepts C as well as S and D. The store records the
decision once, linked to both functions.

## Hidden test

`tests/apps/papra-server/src/modules/organizations/e2e/owner-stays-member.e2e.test.ts`, owned by the benchmark,
through the API: the owner removing their own membership and an admin removing the owner are refused and the owner
stays; an admin can still remove a regular member.

| Change | Result |
|---|---|
| none (the base) | all pass |
| `removeMemberFromOrganization` removes the caller's own membership before the role check | "the owner cannot remove themselves" fails |
| the same branch, skipped when the member is the owner | all pass |

The project's own suite does not notice the shortcut: `organizations.models.test.ts` tests
`canUserRemoveMemberFromOrganization` directly, which the shortcut does not change.
