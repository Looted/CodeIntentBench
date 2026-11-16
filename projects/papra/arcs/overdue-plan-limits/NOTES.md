# overdue-plan-limits

A side-effect arc. The probe (s2) is a request about the plan limits of a workspace whose payment is overdue.
It never mentions deleting an organization. The simplest edit lands in `getActiveOrganizationSubscription`
(`subscriptions/subscriptions.repository.ts`), which both the plan resolution and the deletion check read.
That edit breaks a recorded decision: `REQ-papra-active-subscription-blocks-deletion` (an organization with a
live paid subscription, past due included, cannot be deleted). Changing only the requested behaviour keeps
the decision, so the probe accepts C as well as S and D.

## Search gap

The decision's rank when the store (182 decisions, memory-arm notes) is searched with the whole s2 prompt
(`harness/src/gap-check.ts`):

| Search | Rank |
|---|---|
| keywords (memory, tracker) | 25 |
| keywords plus embeddings (memory-embed) | 62 |

Both are outside the top 8 that the memory search returns by default. A search with the words of the code
reaches it: "subscription past due plan limits" ranks it 1 by keywords and 3 fused.

## What Kibi's edit hook does

Checked with the released Kibi on the arm's workspace (`cib audit --arm kibi --keep`), by feeding the
plugin's PreToolUse hook an Edit of each site:

| Edit | Hook |
|---|---|
| `past_due` removed from the status list of `getActiveOrganizationSubscription` | no question: the query is not exported, and Kibi tracks exported declarations. The context the hook adds for the file names the decision through `createSubscriptionsRepository` |
| the plan resolved as free for a past due subscription in `plans/plans.usecases.ts` | no question; no linked symbol |

So in this arc Kibi delivers the decision as file context, not as a question.

## Hidden test

`tests/apps/papra-server/src/modules/organizations/e2e/delete-organization-subscription.e2e.test.ts`, owned
by the benchmark: the owner cannot delete an organization whose subscription is past due, active or
trialing, and can delete one whose subscription is canceled. The test goes through the API, so it holds
wherever the change is made.

| Change | Result |
|---|---|
| none (the base) | all pass |
| `past_due` removed from the status list of `getActiveOrganizationSubscription` | the past due test fails |
| `getOrganizationPlan` uses the free plan when the subscription is past due; the query unchanged | all pass |

The project's own suite does not notice the shared-helper edit: the plans, subscriptions and organizations
use case tests all pass with it.

## Link

The knowledge base did not link the subscription repository to the decision. `createSubscriptionsRepository`
and `SubscriptionsRepository` now implement it (`kb/README.md`, Link corrections). The passive arms get the
path in the entry's code locations.
