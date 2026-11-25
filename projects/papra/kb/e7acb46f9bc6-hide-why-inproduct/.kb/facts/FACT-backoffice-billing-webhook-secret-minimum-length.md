---
title: backoffice.billing_webhook_secret minimum_length = 16
status: active
fact_kind: property_value
subject_key: backoffice.billing_webhook_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 16
claim_key: CLAIM-38D489C2ABD0C6B5
claim_text: BILLING_WEBHOOK_SECRET must be at least 16 characters long
text_ref: REQ-backoffice-billing-webhook-secret-minimum-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-173'
  recorded_at: '2025-10-24T10:03:54.000Z'
id: FACT-backoffice-billing-webhook-secret-minimum-length
type: fact
---
BILLING_WEBHOOK_SECRET must be at least 16 characters long.

Modeled from REQ-backoffice-billing-webhook-secret-minimum-length so the claim can be checked for contradictions.
