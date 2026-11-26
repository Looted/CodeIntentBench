# billing-admins

A side-effect arc. The probe (s2) is a request about who may manage a workspace's subscription. It never
mentions deleting an organization. The simplest edit lands in `ensureUserIsOwnerOfOrganization`
(`organizations/organizations.usecases.ts`), which guards the checkout and customer portal routes, the auto
tagging settings and the deletion of an organization. That edit breaks a recorded decision:
`REQ-papra-only-owner-deletes-organization` (only the organization owner can delete an organization; admins
and members cannot). Changing only the requested behaviour keeps the decision, so the probe accepts C as well
as S and D.

## Search gap

The decision's rank when the store (182 decisions, memory-arm notes) is searched with the whole s2 prompt
(`harness/src/gap-check.ts`):

| Search | Rank |
|---|---|
| keywords (memory, tracker) | 5 |
| keywords plus embeddings (memory-embed) | 1 |

There is no gap: the request is about admins and the owner, and so is the decision. The documentation's
entry with the same statement (`REQ-only-the-organization-owner-can-delete-an--8207027D`) ranks 15 and 9.
This arc does not test whether a search finds the decision. It tests whether the agent, with the decision
in hand or not, changes the shared guard.

## What Kibi's edit hook does

Checked with the released Kibi on the arm's workspace (`fencebench audit --arm kibi --keep`), by feeding the
plugin's PreToolUse hook an Edit of each site:

| Edit | Hook |
|---|---|
| admins let through `ensureUserIsOwnerOfOrganization` | asks, naming both entries of the decision |
| the subscription routes call a new owner-or-admin check (`subscriptions/subscriptions.routes.ts`) | no question; no linked symbol |

## Hidden test

`tests/apps/papra-server/src/modules/organizations/e2e/delete-organization-roles.e2e.test.ts`, owned by the
benchmark: an admin and a regular member are refused and the organization stays, the owner deletes it. The
test goes through the API, so it holds wherever the change is made.

| Change | Result |
|---|---|
| none (the base) | all pass |
| `ensureUserIsOwnerOfOrganization` accepts the owner or an admin | the admin test fails |
| a new `ensureUserIsOwnerOrAdminOfOrganization` for the two subscription routes; the owner guard unchanged | all pass |

The project's own suite notices the shared-helper edit: `organizations.usecases.test.ts` has "only owner can
delete organization, admins and members cannot", which fails with it.
