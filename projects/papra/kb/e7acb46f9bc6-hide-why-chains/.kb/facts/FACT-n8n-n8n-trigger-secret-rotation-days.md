---
title: n8n.n8n_trigger_secret rotation_days = 60
status: active
fact_kind: property_value
subject_key: n8n.n8n_trigger_secret
property_key: rotation_days
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-D3CFEA7164107746
claim_text: N8N_TRIGGER_SECRET is rotated every 60 days
text_ref: REQ-n8n-n8n-trigger-secret-rotation
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-137'
  recorded_at: '2026-09-01T17:43:34.000Z'
id: FACT-n8n-n8n-trigger-secret-rotation-days
type: fact
---
N8N_TRIGGER_SECRET is rotated every 60 days.

Modeled from REQ-n8n-n8n-trigger-secret-rotation so the claim can be checked for contradictions.
