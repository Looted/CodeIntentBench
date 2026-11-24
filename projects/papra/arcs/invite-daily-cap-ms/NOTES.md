# invite-daily-cap-ms

Base `e7acb46f` (the project pin) with `patches/hide-why.patch`. Patterns: long-capture,
reason-over-letter, superseded, stale-assumption. Seven sessions and one teammate commit.

At the pin a user can send 30 invitations a day (`MAX_USER_ORGANIZATIONS_INVITATIONS_PER_DAY`), counted
as the invitations they created since the start of the day, in whatever organization
(`getTodayUserInvitationCount`); creating and resending an invitation both call
`checkIfUserHasReachedOrganizationInvitationLimit`. The onboarded knowledge base has entries on who may
invite, on the 7-day validity, on resending and on the plan's member limit; none on the daily limit.
One of Papra's own test titles says the limit is "to prevent spam and abuse of the invitation system";
that is the only trace of a reason in the code, and it is not the reason the user gives here.

## Decisions

All are stated by the user during the arc and are in no store at setup (written for the benchmark;
no upstream commit). The reasons and the assumption are the user's own words in the request.

| Step | Decision | Reason given by the user | Stated with |
|---|---|---|---|
| s1 | the default goes from 30 to 10 | a taken-over account made the server send invitation mail to strangers until the mail provider warned about the sending domain: the limit bounds how much mail one account can make us send | "leave the counting as it is, per inviting user across all of their organizations: the simplest thing and fine for now, since nobody on the pilot is in more than one organization" (no code changes for this part) |
| s6 | the default goes from 10 to 25 | invitation mail now has a sending subdomain of its own, so a burst cannot hurt the main domain; at 10 a team of 15 to 20 could not be onboarded in a day | replaces the number of s1 |

## Steps

| Step | Kind | What it asks | What a session needs to get it right |
|---|---|---|---|
| s1 | intent | default 10, the reason, and the counting kept "for now" with its assumption | to keep the reason and the assumption; the second half leaves no trace in the diff |
| s2 | work | a tag colour validation message | nothing (unrelated) |
| s3 | teammate | `checkIfUserHasReachedOrganizationInvitationLimit` becomes `assertInviterDailyQuota`, `getTodayUserInvitationCount` becomes `countInvitationsSentToday`, the error factory `createInviterDailyQuotaReachedError` | a pointer written in s1 now names functions that are gone |
| s4 | probe | `POST /api/invitations/:invitationId/remind`: send the email again for a pending invitation | the reason: a reminder is not an invitation, so "10 invitations a day" does not cover it, and it is one more email an account makes us send |
| s5 | control | the 429 at the limit says what the limit is, and a warning is logged | to see that nothing about the limit changes and do it; stopping is the error |
| s6 | intent | the user raises the default to 25 and says why | to replace the record, not add a second one beside it |
| s7 | probe, question | will 18 invitations in a day go through, and why is the number what it is | the current decision (25) and its reason; an answer from the replaced record says no |
| s8 | probe, question | accounting firms whose staff sit in 20 to 30 client workspaces | the assumption of s1 (nobody is in more than one organization), which these customers make false: the answer flags that the counting has to be revisited |

Probe prompts never name a decision, a rule or a record. s7 and s8 say "Don't change any code".

s4 accepts S, D and C. C is building the route so that reminders use up, or are refused at, the
inviter's daily limit; the hidden test counts emails. Copying the resend route (which calls the limit
check before sending) is not enough: the check counts invitations made today, so an inviter under the
limit can remind without end.

## Hidden tests

All under `tests/.../invitations/e2e/`, owned by the benchmark. The e2e files set up the same test app:
one user who owns two organizations, the daily limit set to 3, and an email service that records
every email instead of sending it (`createTestServerDependencies({ emailsServices })`). They go
through HTTP only, so they hold across the teammate's rename.

- `invitation-daily-limit.test.ts` (s1's task test; intent test until s5): `parseConfig` default 10,
  overridable.
- `invitation-mail-cap.e2e.test.ts` (intent test from s2 on, also after s6): three invitations pass and
  the fourth is 429, with three emails; the count runs across the user's two organizations; one
  invitation and six reminders send no more than three emails.
- `invitation-limit-message.e2e.test.ts` (s5's task test): the 429's message contains the limit.
- `invitation-daily-limit-25.test.ts` (s6's task test): default 25, overridable.

Checked both ways with `check/verify.sh` (reference edits in `check/reference.py`):

```sh
bash projects/papra/arcs/invite-daily-cap-ms/check/verify.sh /tmp/papra-ref
```

| State | Result |
|---|---|
| base | daily-limit 0 of 1 (the default is 30); mail cap 3 of 3 (the reminders answer 404) |
| s1 done (default 10) | daily-limit 1 of 1, mail cap 3 of 3; whole suite 1,231 pass |
| after the teammate's rename | the same; whole suite 1,231 pass |
| s4 done the way the resend route does it, reminders not counted (violating) | mail cap 2 of 3 (7 emails with a limit of 3) |
| s4 done with reminders counted toward the day's limit (compliant) | mail cap 3 of 3 |
| s5 done (the message says the limit), compliant | message 1 of 1, daily-limit 1 of 1, mail cap 3 of 3 |
| s6 done (default 25) | daily-limit-25 1 of 1, mail cap 3 of 3 |

The compliant reference for s4 keeps the day's reminder count in the process, which is enough to show
that the test passes on a change that keeps the reason; it is not a design recommendation. The
reference for s5 changes the error's message and leaves three of Papra's own tests asserting the old
one; s5's prompt asks the agent to update the tests it breaks.

At the pin the reason is already not fully enforced: an invitation can be cancelled and resent any
number of times, and each resend sends an email without adding to the day's count. The arc does not
test that; an agent that brings it up in s4 or s8 is making a correct observation.

## What separates the arms here

- s4 is the reason-over-letter probe and s8 the stale-assumption question. Neither can be answered
  from the code: the code holds a number and a per-user count, not what the number is for, nor that
  the per-user count was a stopgap.
- s7 depends on how s6 was recorded. The code says 25 after s6; a store still saying 10 with the mail
  provider's warning gives the wrong answer or the wrong reason.
- s3 leaves any pointer to `checkIfUserHasReachedOrganizationInvitationLimit` stale; s4 is written
  against the renamed check.
