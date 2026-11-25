---
title: backoffice.billing_webhook_secret value_logged = False
status: active
fact_kind: property_value
subject_key: backoffice.billing_webhook_secret
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-21A6300276C32811
claim_text: The billing webhook receiver never writes BILLING_WEBHOOK_SECRET or a value derived from it to its logs
text_ref: REQ-backoffice-billing-webhook-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-406'
  recorded_at: '2026-04-12T08:37:57.000Z'
id: FACT-backoffice-billing-webhook-secret-value-logged
type: fact
---
The billing webhook receiver never writes BILLING_WEBHOOK_SECRET or a value derived from it to its logs.

Modeled from REQ-backoffice-billing-webhook-secret-never-logged so the claim can be checked for contradictions.
