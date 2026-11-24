---
title: backoffice.billing_webhook_secret rotation_overlap_hours = 72
status: active
fact_kind: property_value
subject_key: backoffice.billing_webhook_secret
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 72
claim_key: CLAIM-2B1E92178189FEAE
claim_text: the previous value stays valid for 72 hours after a rotation
text_ref: REQ-backoffice-billing-webhook-secret-rotation
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-390'
  recorded_at: '2026-01-22T09:49:48.000Z'
id: FACT-backoffice-billing-webhook-secret-rotation-overlap-hours
type: fact
---
The previous value stays valid for 72 hours after a rotation.

Modeled from REQ-backoffice-billing-webhook-secret-rotation so the claim can be checked for contradictions.
