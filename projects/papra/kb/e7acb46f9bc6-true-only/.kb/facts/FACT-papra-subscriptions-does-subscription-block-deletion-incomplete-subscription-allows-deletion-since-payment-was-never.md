---
title: subscriptions.does_subscription_block_deletion incomplete_subscription_allows_deletion_since_payment_was_never = True
status: active
fact_kind: property_value
subject_key: subscriptions.does_subscription_block_deletion
property_key: incomplete_subscription_allows_deletion_since_payment_was_never
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-CF61BCA9AFD3FBD5
claim_text: Incomplete subscription allows deletion since payment was never completed
text_ref: REQ-papra-subscriptions-incomplete-subscription-allows-deletion-since-payment-was
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1771'
  recorded_at: '2025-03-02T10:40:40.000Z'
id: FACT-papra-subscriptions-does-subscription-block-deletion-incomplete-subscription-allows-deletion-since-payment-was-never
type: fact
---
Incomplete subscription allows deletion since payment was never completed.

Modeled from REQ-papra-subscriptions-incomplete-subscription-allows-deletion-since-payment-was so the claim can be checked for contradictions.
