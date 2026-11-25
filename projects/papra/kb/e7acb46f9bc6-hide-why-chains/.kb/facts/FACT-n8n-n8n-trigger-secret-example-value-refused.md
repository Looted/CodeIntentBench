---
title: n8n.n8n_trigger_secret example_value_refused = True
status: active
fact_kind: property_value
subject_key: n8n.n8n_trigger_secret
property_key: example_value_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-643698EFBA8BEC8D
claim_text: The n8n trigger endpoint refuses the example value of N8N_TRIGGER_SECRET from its documentation, in every environment
text_ref: REQ-n8n-n8n-trigger-secret-example-value-refused
tags:
  - lane:strict
  - knowledge-source:n8n-decisions
origin:
  kind: agent
  ref: 'n8n integration notes: N8N-134'
  recorded_at: '2025-06-27T17:55:42.000Z'
id: FACT-n8n-n8n-trigger-secret-example-value-refused
type: fact
---
The n8n trigger endpoint refuses the example value of N8N_TRIGGER_SECRET from its documentation, in every environment.

Modeled from REQ-n8n-n8n-trigger-secret-example-value-refused so the claim can be checked for contradictions.
