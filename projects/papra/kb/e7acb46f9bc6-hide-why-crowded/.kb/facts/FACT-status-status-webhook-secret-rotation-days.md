---
title: status.status_webhook_secret rotation_days = 180
status: active
fact_kind: property_value
subject_key: status.status_webhook_secret
property_key: rotation_days
operator: eq
value_type: int
value_int: 180
claim_key: CLAIM-A397E792F85017DC
claim_text: STATUS_WEBHOOK_SECRET is rotated every 180 days
text_ref: REQ-status-status-webhook-secret-rotation
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-222'
  recorded_at: '2026-05-28T17:05:45.000Z'
id: FACT-status-status-webhook-secret-rotation-days
type: fact
---
STATUS_WEBHOOK_SECRET is rotated every 180 days.

Modeled from REQ-status-status-webhook-secret-rotation so the claim can be checked for contradictions.
