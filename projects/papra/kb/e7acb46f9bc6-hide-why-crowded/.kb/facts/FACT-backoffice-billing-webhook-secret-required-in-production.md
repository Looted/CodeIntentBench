---
title: backoffice.billing_webhook_secret required_in_production = True
status: active
fact_kind: property_value
subject_key: backoffice.billing_webhook_secret
property_key: required_in_production
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-349AFA15D146A9D9
claim_text: The billing webhook receiver refuses to start in production without BILLING_WEBHOOK_SECRET
text_ref: REQ-backoffice-billing-webhook-secret-required-in-production
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-373'
  recorded_at: '2026-04-04T15:05:36.000Z'
id: FACT-backoffice-billing-webhook-secret-required-in-production
type: fact
---
The billing webhook receiver refuses to start in production without BILLING_WEBHOOK_SECRET.

Modeled from REQ-backoffice-billing-webhook-secret-required-in-production so the claim can be checked for contradictions.
