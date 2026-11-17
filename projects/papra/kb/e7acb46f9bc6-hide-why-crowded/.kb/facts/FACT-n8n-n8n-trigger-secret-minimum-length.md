---
title: n8n.n8n_trigger_secret minimum_length = 40
status: active
fact_kind: property_value
subject_key: n8n.n8n_trigger_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 40
claim_key: CLAIM-BF44499629348531
claim_text: N8N_TRIGGER_SECRET must be at least 40 characters long
text_ref: REQ-n8n-n8n-trigger-secret-minimum-length
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-133'
  recorded_at: '2026-07-11T11:09:10.000Z'
id: FACT-n8n-n8n-trigger-secret-minimum-length
type: fact
---
N8N_TRIGGER_SECRET must be at least 40 characters long.

Modeled from REQ-n8n-n8n-trigger-secret-minimum-length so the claim can be checked for contradictions.
