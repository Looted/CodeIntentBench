---
title: n8n.n8n_trigger_secret minimum_length = 16
status: deprecated
fact_kind: property_value
subject_key: n8n.n8n_trigger_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 16
claim_key: CLAIM-9F72EDB701D27816
claim_text: N8N_TRIGGER_SECRET must be at least 16 characters long
text_ref: REQ-n8n-n8n-trigger-secret-minimum-length-earlier
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-78'
  recorded_at: '2025-11-22T15:40:54.000Z'
id: FACT-n8n-n8n-trigger-secret-minimum-length-earlier
type: fact
---
N8N_TRIGGER_SECRET must be at least 16 characters long.

Modeled from REQ-n8n-n8n-trigger-secret-minimum-length-earlier so the claim can be checked for contradictions.
