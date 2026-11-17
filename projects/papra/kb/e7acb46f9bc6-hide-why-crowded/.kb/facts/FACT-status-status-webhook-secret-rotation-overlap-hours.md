---
title: status.status_webhook_secret rotation_overlap_hours = 72
status: active
fact_kind: property_value
subject_key: status.status_webhook_secret
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 72
claim_key: CLAIM-2B1E92178189FEAE
claim_text: the previous value stays valid for 72 hours after a rotation
text_ref: REQ-status-status-webhook-secret-rotation
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-222'
  recorded_at: '2026-05-28T17:05:45.000Z'
id: FACT-status-status-webhook-secret-rotation-overlap-hours
type: fact
---
The previous value stays valid for 72 hours after a rotation.

Modeled from REQ-status-status-webhook-secret-rotation so the claim can be checked for contradictions.
