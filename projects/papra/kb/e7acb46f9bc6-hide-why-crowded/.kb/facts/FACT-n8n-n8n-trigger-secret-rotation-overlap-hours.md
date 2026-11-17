---
title: n8n.n8n_trigger_secret rotation_overlap_hours = 24
status: active
fact_kind: property_value
subject_key: n8n.n8n_trigger_secret
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 24
claim_key: CLAIM-A45280A30BC5D577
claim_text: the previous value stays valid for 24 hours after a rotation
text_ref: REQ-n8n-n8n-trigger-secret-rotation
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-137'
  recorded_at: '2026-09-01T17:43:34.000Z'
id: FACT-n8n-n8n-trigger-secret-rotation-overlap-hours
type: fact
---
The previous value stays valid for 24 hours after a rotation.

Modeled from REQ-n8n-n8n-trigger-secret-rotation so the claim can be checked for contradictions.
