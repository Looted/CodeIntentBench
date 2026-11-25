---
title: backoffice.billing_webhook_secret example_value_refused = True
status: active
fact_kind: property_value
subject_key: backoffice.billing_webhook_secret
property_key: example_value_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D0FD3F3F36DC58D5
claim_text: The billing webhook receiver refuses the example value of BILLING_WEBHOOK_SECRET from its documentation, in every environment
text_ref: REQ-backoffice-billing-webhook-secret-example-value-refused
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-382'
  recorded_at: '2026-07-12T10:54:28.000Z'
id: FACT-backoffice-billing-webhook-secret-example-value-refused
type: fact
---
The billing webhook receiver refuses the example value of BILLING_WEBHOOK_SECRET from its documentation, in every environment.

Modeled from REQ-backoffice-billing-webhook-secret-example-value-refused so the claim can be checked for contradictions.
