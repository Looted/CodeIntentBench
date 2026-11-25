---
title: n8n.n8n_trigger_secret value_source = file or environment
status: active
fact_kind: property_value
subject_key: n8n.n8n_trigger_secret
property_key: value_source
operator: eq
value_type: string
value_string: file or environment
claim_key: CLAIM-5BC6886A043F6EBE
claim_text: The n8n trigger endpoint reads N8N_TRIGGER_SECRET from a file named by N8N_TRIGGER_SECRET_FILE when that variable is set
text_ref: REQ-n8n-n8n-trigger-secret-source
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-142'
  recorded_at: '2026-01-19T16:42:43.000Z'
id: FACT-n8n-n8n-trigger-secret-value-source
type: fact
---
The n8n trigger endpoint reads N8N_TRIGGER_SECRET from a file named by N8N_TRIGGER_SECRET_FILE when that variable is set.

Modeled from REQ-n8n-n8n-trigger-secret-source so the claim can be checked for contradictions.
