---
title: n8n.n8n_trigger_secret development_default = always required
status: active
fact_kind: property_value
subject_key: n8n.n8n_trigger_secret
property_key: development_default
operator: eq
value_type: string
value_string: always required
claim_key: CLAIM-8E9943AC6F7D0B1E
claim_text: The n8n trigger endpoint requires N8N_TRIGGER_SECRET in every environment, development included
text_ref: REQ-n8n-n8n-trigger-secret-development-default
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-146'
  recorded_at: '2026-07-23T15:07:56.000Z'
id: FACT-n8n-n8n-trigger-secret-development-default
type: fact
---
The n8n trigger endpoint requires N8N_TRIGGER_SECRET in every environment, development included.

Modeled from REQ-n8n-n8n-trigger-secret-development-default so the claim can be checked for contradictions.
