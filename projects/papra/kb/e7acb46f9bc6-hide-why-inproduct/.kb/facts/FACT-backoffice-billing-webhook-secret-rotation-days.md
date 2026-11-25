---
title: backoffice.billing_webhook_secret rotation_days = 90
status: active
fact_kind: property_value
subject_key: backoffice.billing_webhook_secret
property_key: rotation_days
operator: eq
value_type: int
value_int: 90
claim_key: CLAIM-CDBE67D4E0DEB15B
claim_text: BILLING_WEBHOOK_SECRET is rotated every 90 days
text_ref: REQ-backoffice-billing-webhook-secret-rotation
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-182'
  recorded_at: '2026-01-22T09:49:48.000Z'
id: FACT-backoffice-billing-webhook-secret-rotation-days
type: fact
---
BILLING_WEBHOOK_SECRET is rotated every 90 days.

Modeled from REQ-backoffice-billing-webhook-secret-rotation so the claim can be checked for contradictions.
