---
title: backoffice.billing_webhook_secret value_source = file or environment
status: active
fact_kind: property_value
subject_key: backoffice.billing_webhook_secret
property_key: value_source
operator: eq
value_type: string
value_string: file or environment
claim_key: CLAIM-066C66F8C86AD1D1
claim_text: The billing webhook receiver reads BILLING_WEBHOOK_SECRET from a file named by BILLING_WEBHOOK_SECRET_FILE when that variable is set
text_ref: REQ-backoffice-billing-webhook-secret-source
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-398'
  recorded_at: '2025-06-28T14:11:53.000Z'
id: FACT-backoffice-billing-webhook-secret-value-source
type: fact
---
The billing webhook receiver reads BILLING_WEBHOOK_SECRET from a file named by BILLING_WEBHOOK_SECRET_FILE when that variable is set.

Modeled from REQ-backoffice-billing-webhook-secret-source so the claim can be checked for contradictions.
