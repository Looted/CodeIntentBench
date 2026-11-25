---
title: status.status_webhook_secret example_value_refused = True
status: active
fact_kind: property_value
subject_key: status.status_webhook_secret
property_key: example_value_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-59DEB8A76E93F95E
claim_text: The status page refuses the example value of STATUS_WEBHOOK_SECRET from its documentation, in every environment
text_ref: REQ-status-status-webhook-secret-example-value-refused
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-217'
  recorded_at: '2025-03-12T11:41:44.000Z'
id: FACT-status-status-webhook-secret-example-value-refused
type: fact
---
The status page refuses the example value of STATUS_WEBHOOK_SECRET from its documentation, in every environment.

Modeled from REQ-status-status-webhook-secret-example-value-refused so the claim can be checked for contradictions.
