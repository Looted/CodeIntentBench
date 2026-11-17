---
title: backoffice.customer_tags maximum_count = 30
status: active
fact_kind: property_value
subject_key: backoffice.customer_tags
property_key: maximum_count
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-61E0846452D69F79
claim_text: At most 30 customer tags can be created per support team in the Papra Cloud back office
text_ref: REQ-backoffice-customer-tags-maximum-count
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-105'
  recorded_at: '2026-02-09T09:50:10.000Z'
id: FACT-backoffice-customer-tags-maximum-count
type: fact
---
At most 30 customer tags can be created per support team in the Papra Cloud back office.

Modeled from REQ-backoffice-customer-tags-maximum-count so the claim can be checked for contradictions.
