---
title: n8n.n8n_trigger_secret value_logged = False
status: active
fact_kind: property_value
subject_key: n8n.n8n_trigger_secret
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-D88A56041BE864ED
claim_text: The n8n trigger endpoint never writes N8N_TRIGGER_SECRET or a value derived from it to its logs
text_ref: REQ-n8n-n8n-trigger-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-143'
  recorded_at: '2025-07-26T08:59:44.000Z'
id: FACT-n8n-n8n-trigger-secret-value-logged
type: fact
---
The n8n trigger endpoint never writes N8N_TRIGGER_SECRET or a value derived from it to its logs.

Modeled from REQ-n8n-n8n-trigger-secret-never-logged so the claim can be checked for contradictions.
