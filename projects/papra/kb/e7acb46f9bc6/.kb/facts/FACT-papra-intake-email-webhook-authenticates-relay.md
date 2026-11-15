---
title: intake_email.webhook authenticates_relay = True
status: active
fact_kind: property_value
subject_key: intake_email.webhook
property_key: authenticates_relay
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5C1B1F060BB2D123
claim_text: so the server can authenticate that an email comes from the configured relay
text_ref: REQ-inbound-intake-email-webhooks-are-signed-w-27EFD88D
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 03-guides/01-intake-emails-with-owlrelay.mdx#webhook-secret'
  recorded_at: '2026-11-15T21:45:34.775Z'
id: FACT-papra-intake-email-webhook-authenticates-relay
type: fact
---
So the server can authenticate that an email comes from the configured relay.

Modeled from REQ-inbound-intake-email-webhooks-are-signed-w-27EFD88D so the claim can be checked for contradictions.
