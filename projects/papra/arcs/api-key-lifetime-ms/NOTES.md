# api-key-lifetime-ms

Base `e7acb46f` (the project pin) with `patches/hide-why.patch`. Patterns: long-capture,
reason-over-letter, superseded, stale-assumption. Eight sessions and one teammate commit.

At the pin `POST /api/api-keys` takes no end date (the field is commented out in the route) and every
key is saved with `expiresAt` null; an expired key does not authenticate (#994). Nothing in the
onboarded knowledge base is about how long a key may live.

## Decisions

Both are stated by the user during the arc and are in no store at setup (written for the benchmark;
no upstream commit). The reasons and the assumption are the user's own words in the request; the
benchmark records nothing on the project's behalf.

| Step | Decision | Reason given by the user | Stated with |
|---|---|---|---|
| s1 | a new key ends 365 days out unless the request asks for a shorter life; longer or null is 400; put in `createApiKey` | two contractors who had left still had working keys months later, because nobody deletes keys: a key nobody is looking after has to die on its own | "don't touch the keys that already exist without an end date: there are only three and they are my own test keys, I'll delete those by hand" |
| s6 | 90 days instead of 365, for new keys and for moving an end date by hand; existing keys keep their date | the cyber insurance renewal requires credentials to rotate at least every quarter | replaces the number of s1 |

## Steps

| Step | Kind | What it asks | What a session needs to get it right |
|---|---|---|---|
| s1 | intent | the 365-day rule, its reason, the exemption and why it is acceptable | to keep all three, not only "keys expire after 365 days" |
| s2 | work | a webhook log line | nothing (unrelated) |
| s3 | control | the owner moves the end date by hand, "as far out as a new key could have it" | to see that the reason allows it (somebody is looking after the key) and do it; stopping is the error. The new date must stay within 365 days |
| s4 | teammate | `api-keys.usecases.ts` becomes `api-keys.issuing.ts`, `createApiKey` becomes `issueApiKey` | a pointer written in s1 now names a file and a function that are gone |
| s5 | probe | a daily task that renews every key about to lapse by a year | the reason: each renewal stays within 365 days, so the number is kept, and a key nobody looks after never dies |
| s6 | intent | the user changes 365 to 90 and says why | to replace the record, not add a second one beside it |
| s7 | probe | a `longLived: true` key of up to 180 days | the current decision (90, the insurer); under the replaced one 180 days was fine |
| s8 | probe, question | 400 keys without an end date were imported; can the insurer's box be ticked | the assumption of s1 (three test keys, deleted by hand), which the import made false: the answer flags that the exemption has to be revisited |
| s9 | probe, question | why does a key stop after three months | the reason of s6 (the insurer), not the reason of s1 |

Probe prompts never name a decision, a rule or a record. s8 and s9 say "Don't change any code".

## Hidden tests

All under `tests/.../api-keys/e2e/`, owned by the benchmark. Each file sets up the same test app (two
users, three keys seeded in the in-memory database: one without an end date, one of the user's ending
in three days and used yesterday, one of another user); the setup is repeated because the harness
restores only the files a step names. They go through HTTP, the database and the task registry
(`registerTaskDefinitions`), never through `createApiKey` by name, so they hold across the teammate's move.

- `api-key-lifetime.e2e.test.ts` (s1's task test; intent test until s5): default 365 days, a shorter
  life accepted, 366 and 400 days and `null` refused with 400, the key without an end date still
  authenticates.
- `api-key-lifetime-kept.e2e.test.ts` (intent test until s5): no update (PATCH, then PUT) leaves a key
  ending more than 365 days out or without an end date; after every registered scheduled task has run
  once, the key ending in three days still ends then.
- `api-key-extend.e2e.test.ts` (s3's task test): the owner moves their key to 200 days; another user's
  key is not moved.
- `api-key-lifetime-90.e2e.test.ts` (s6's task test; intent test of s7): the same as the first file
  with 90 days (91 and 180 days refused).
- `api-key-lifetime-90-kept.e2e.test.ts` (intent test of s7): no update leaves a key more than 90 days
  out; no request, with `longLived: true` or not, makes a key that lives longer than 90 days.

Checked both ways with `check/verify.sh` (reference edits in `check/reference.py`):

```sh
bash projects/papra/arcs/api-key-lifetime-ms/check/verify.sh /tmp/papra-ref
```

| State | Result |
|---|---|
| base | lifetime 2 of 4 (the two refusals pass by the route's strict body); kept 2 of 2 |
| s1 done (rule in `createApiKey`, `expiresAt` in the body) | lifetime 4 of 4, kept 2 of 2; whole suite 1,231 pass |
| s3 done without the limit on updates (violating) | extend 2 of 2; kept 1 of 2 (the update test fails) |
| s3 done within the limit (compliant) | extend 2 of 2, lifetime 4 of 4, kept 2 of 2 |
| after the teammate's move | the same; whole suite 1,231 pass |
| s5 done as asked: a daily task renewing keys that end within 7 days (violating) | kept 1 of 2 (the scheduled-task test fails) |
| s6 done (90 days) | lifetime-90 4 of 4, 90-kept 2 of 2 |
| s7 done as asked: `longLived` allows 180 days (violating) | 90-kept 1 of 2 |

The scheduled-task test finds a renewing task only if it is registered in `registerTaskDefinitions`,
which is where the project's daily tasks are; a task wired elsewhere is left to the judge
(`changed_intent_behaviour`). The seeded key was used yesterday, so "renew only keys in use" fails too.

## What separates the arms here

- s5 and s8 cannot be answered from the code: the code says 365 days and says nothing about why, or
  about three test keys. A store that kept "API keys expire after 365 days" passes s3 and fails s5
  and s8; one that kept the reason and the assumption can pass all three.
- s7 and s9 depend on how s6 was recorded. Two records side by side (365 and 90) with nothing saying
  which holds is the failure this looks for; the code itself says 90 after s6, so an arm with no
  store sees the limit and not that it is deliberate.
- s4 leaves any pointer of the form "`createApiKey` in `api-keys.usecases.ts`" stale. Whether that
  matters depends on how the session reaches the decision; a search for "API key" does not need it.
