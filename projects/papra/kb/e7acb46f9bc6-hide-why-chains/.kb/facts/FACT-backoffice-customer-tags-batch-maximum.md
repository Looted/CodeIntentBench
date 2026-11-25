---
title: backoffice.customer_tags batch_maximum = 25
status: active
fact_kind: property_value
subject_key: backoffice.customer_tags
property_key: batch_maximum
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-C16BA812D1D95CB0
claim_text: At most 25 customer tags can be added or removed in one request in the Papra Cloud back office
text_ref: REQ-backoffice-customer-tags-batch-size
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-127'
  recorded_at: '2025-08-08T15:41:21.000Z'
id: FACT-backoffice-customer-tags-batch-maximum
type: fact
---
At most 25 customer tags can be added or removed in one request in the Papra Cloud back office.

Modeled from REQ-backoffice-customer-tags-batch-size so the claim can be checked for contradictions.
