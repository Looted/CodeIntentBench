---
title: backoffice.billing_webhook_secret development_default = always required
status: active
fact_kind: property_value
subject_key: backoffice.billing_webhook_secret
property_key: development_default
operator: eq
value_type: string
value_string: always required
claim_key: CLAIM-EFCF354F79AEDA09
claim_text: The billing webhook receiver requires BILLING_WEBHOOK_SECRET in every environment, development included
text_ref: REQ-backoffice-billing-webhook-secret-development-default
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-409'
  recorded_at: '2026-09-22T10:52:37.000Z'
id: FACT-backoffice-billing-webhook-secret-development-default
type: fact
---
The billing webhook receiver requires BILLING_WEBHOOK_SECRET in every environment, development included.

Modeled from REQ-backoffice-billing-webhook-secret-development-default so the claim can be checked for contradictions.
