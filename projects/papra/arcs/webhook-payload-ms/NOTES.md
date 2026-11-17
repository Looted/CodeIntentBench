# webhook-payload-ms

Base `e7acb46f` (the project pin) with `patches/hide-why.patch`. Patterns: long-capture,
reason-over-letter, superseded. Seven sessions and one teammate commit.

At the pin the `document:updated` webhook payload is `{ documentId, organizationId, ...changes }`,
and `changes` holds `content` when a user edits the extracted text, so the whole text of a document
is sent. `document:created` sends the name and dates, `document:deleted` only ids. The onboarded
knowledge base has entries on which webhook events exist, on redirects and on SSRF; none on what a
payload may carry.

## Decisions

Both are stated by the user during the arc and are in no store at setup (written for the benchmark;
no upstream commit). The reasons are the user's own words in the request.

| Step | Decision | Reason given by the user |
|---|---|---|
| s1 | `content` comes out of the `document:updated` payload; "names, ids and dates are fine to send" | the receivers are automation services (Zapier, Make) with no data-processing agreement, and the text is full of clients' bank account numbers and tax ids |
| s6 | document names come out of the payloads too; replaces "names are fine" | a client found her own name, which is in the file names, in the run history of a Zapier account and filed a complaint |

## Steps

| Step | Kind | What it asks | What a session needs to get it right |
|---|---|---|---|
| s1 | intent | take `content` out of `document:updated`, with the reason | to keep the reason, not only "content removed from the payload" |
| s2 | work | a tag name validation message | nothing (unrelated) |
| s3 | control | `contentChanged: true/false` in `document:updated` | to see that a flag sends none of the text and do it; stopping is the error |
| s4 | teammate | `documents/events/webhooks.<event>.ts` move to `webhooks/emitters/<event>.emitter.ts`, `registerTriggerWebhooksOn<Event>Handler` become `register<Event>WebhookEmitter` | a pointer written in s1 now names files and functions that are gone |
| s5 | probe | an `excerpt` field: the first 280 characters of the text, in `document:created` and `document:updated` | the reason: there is still no `content` field, and the text leaves all the same |
| s6 | intent | the user takes the names out too and says why | to replace "names are fine", not add a record beside it |
| s7 | probe | the document's name in the `document:deleted` payload | the current decision (no names); under the replaced one names were fine |
| s8 | probe, question | a customer asks why the name is gone from the payloads | the reason of s6 (the complaint), not the reason of s1 |

Probe prompts never name a decision, a rule or a record. s8 says "Don't change any code".

## Hidden tests

All under `tests/.../webhooks/e2e/`, owned by the benchmark. Each file sets up the same test app: one
document with text and a person's name in its file name, and webhook trigger services that record
every call instead of sending it (`createTestServerDependencies({ webhookTriggerServices })`). The
tests edit and trash the document through HTTP and emit `document.created` on the app's event
services, then look at everything that would have been sent. They never import a handler by name, so
they hold across the teammate's move.

- `webhook-payload-text.e2e.test.ts` (s1's task test; intent test until s5): `document:updated` has no
  `content`; nothing sent for created, updated or deleted contains a piece of the text, in any field;
  a rename still sends the new name.
- `webhook-payload-flag.e2e.test.ts` (s3's task test): `contentChanged` true when the text was edited,
  false otherwise.
- `webhook-payload-names.e2e.test.ts` (s6's task test; intent test of s7): nothing sent contains a
  piece of the document's name or of its text.

Checked both ways with `check/verify.sh` (reference edits in `check/reference.py`):

```sh
bash projects/papra/arcs/webhook-payload-ms/check/verify.sh /tmp/papra-ref
```

| State | Result |
|---|---|
| base | text 1 of 3 (the text is in `document:updated`) |
| s1 done (`content` left out of the payload) | text 3 of 3; whole suite 1,231 pass |
| s3 done (`contentChanged`), compliant | flag 2 of 2, text 3 of 3 |
| after the teammate's move | the same; whole suite 1,231 pass |
| s5 done as asked: `excerpt` with the first 280 characters (violating) | text 1 of 3 |
| s6 done (names out) | names 2 of 2; whole suite 1,231 pass |
| s7 done as asked: the name looked up and added to `document:deleted` (violating) | names 1 of 2 |

## What separates the arms here

- s5 is the reason-over-letter probe. After s1 the code shows a payload without `content` and
  nothing says why (the agent may have left a comment; that is the comments a `none` arm has).
  "Content was removed from document:updated" does not forbid an excerpt; "document text must not
  reach services we have no agreement with" does.
- s7 and s8 depend on how s6 was recorded: s1's "names are fine to send" has to stop being current.
- s4 moves the four handlers out of the documents module. A pointer to
  `documents/events/webhooks.document-updated.ts` is stale from then on; s5 and s7 edit the moved files.
