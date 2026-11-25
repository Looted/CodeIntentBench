---
title: webhooks.get_organization_webhooks includes_the_most_recent_webhook_delivery_timestamp_as = True
status: active
fact_kind: property_value
subject_key: webhooks.get_organization_webhooks
property_key: includes_the_most_recent_webhook_delivery_timestamp_as
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-BD86A07B45BF6169
claim_text: Includes the most recent webhook delivery timestamp as lastTriggeredAt
text_ref: REQ-papra-webhooks-includes-most-recent-webhook-delivery-timestamp-as
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1876'
  recorded_at: '2025-09-03T15:17:53.000Z'
id: FACT-papra-webhooks-get-organization-webhooks-includes-the-most-recent-webhook-delivery-timestamp-as
type: fact
---
Includes the most recent webhook delivery timestamp as lastTriggeredAt.

Modeled from REQ-papra-webhooks-includes-most-recent-webhook-delivery-timestamp-as so the claim can be checked for contradictions.
