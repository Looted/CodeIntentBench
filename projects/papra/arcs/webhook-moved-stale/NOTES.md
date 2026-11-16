# webhook-moved-stale

The arc of `webhook-301-follow` (see its NOTES.md for the decisions, the sources and the hidden test),
with a teammate's move before the first session: `webhooks.http-client.ts` becomes
`delivery/webhook-delivery.client.ts` and `createWebhookHttpClient` becomes `createDeliveryClient`, with
every import updated (teammate.sh). Behaviour is unchanged.

The teammate edits no store. The harness runs the arm's before-commit step on the teammate's commit, as
it does for a session's commit (for Kibi: `kibi sync --refresh-symbol-coordinates`). So the pointers in
the docs, AGENTS.md, memory and tracker arms name a file that no longer exists, and Kibi's links are
whatever its own tooling makes of the move. `webhook-moved-relinked` is the same arc with every store
updated by hand: the difference between the two is what keeping links current is worth.

## Hidden test

The test of `webhook-301-follow` with its import moved to `../delivery/webhook-delivery.client` and the
name `createDeliveryClient`. Checked both ways after the move, as in the original arc.
