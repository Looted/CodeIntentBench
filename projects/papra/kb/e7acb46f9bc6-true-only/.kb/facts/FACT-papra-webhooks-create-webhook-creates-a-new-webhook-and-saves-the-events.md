---
title: webhooks.create_webhook creates_a_new_webhook_and_saves_the_events = True
status: active
fact_kind: property_value
subject_key: webhooks.create_webhook
property_key: creates_a_new_webhook_and_saves_the_events
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-646E5EA023102D41
claim_text: Creates a new webhook and saves the events in the webhook_events table
text_ref: REQ-papra-webhooks-creates-new-webhook-and-saves-events-in
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1880'
  recorded_at: '2025-05-23T11:23:59.000Z'
id: FACT-papra-webhooks-create-webhook-creates-a-new-webhook-and-saves-the-events
type: fact
---
Creates a new webhook and saves the events in the webhook_events table.

Modeled from REQ-papra-webhooks-creates-new-webhook-and-saves-events-in so the claim can be checked for contradictions.
