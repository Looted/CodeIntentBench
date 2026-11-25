---
title: n8n.n8n_trigger_secret required_in_production = True
status: active
fact_kind: property_value
subject_key: n8n.n8n_trigger_secret
property_key: required_in_production
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-909F59291089344F
claim_text: The n8n trigger endpoint refuses to start in production without N8N_TRIGGER_SECRET
text_ref: REQ-n8n-n8n-trigger-secret-required-in-production
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-132'
  recorded_at: '2025-03-03T15:52:54.000Z'
id: FACT-n8n-n8n-trigger-secret-required-in-production
type: fact
---
The n8n trigger endpoint refuses to start in production without N8N_TRIGGER_SECRET.

Modeled from REQ-n8n-n8n-trigger-secret-required-in-production so the claim can be checked for contradictions.
