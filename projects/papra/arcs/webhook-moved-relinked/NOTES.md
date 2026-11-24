# webhook-moved-relinked

The arc of `webhook-301-follow` (see its NOTES.md for the decisions, the sources and the hidden test),
with a teammate's move before the first session: `webhooks.http-client.ts` becomes
`delivery/webhook-delivery.client.ts` and `createWebhookHttpClient` becomes `createDeliveryClient`, with
every import updated (teammate.sh). Behaviour is unchanged.

The teammate also updates every store by hand (the decision files, AGENTS.md, the Kibi knowledge base, the memory and tracker stores): the ceiling for `webhook-moved-stale`. The harness also runs the arm's before-commit step on the teammate's commit, as in the stale arc.
Every arm's pointers name the moved file and the new name before the first session.

## Hidden test

The test of `webhook-301-follow` with its import moved to `../delivery/webhook-delivery.client` and the
name `createDeliveryClient`. Checked both ways after the move, as in the original arc.
