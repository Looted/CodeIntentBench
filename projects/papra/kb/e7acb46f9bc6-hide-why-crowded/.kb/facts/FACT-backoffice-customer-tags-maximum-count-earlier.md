---
title: backoffice.customer_tags maximum_count = 10
status: deprecated
fact_kind: property_value
subject_key: backoffice.customer_tags
property_key: maximum_count
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-1F55F4E8DFEC57CD
claim_text: At most 10 customer tags can be created per support team in the Papra Cloud back office
text_ref: REQ-backoffice-customer-tags-maximum-count-earlier
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-65'
  recorded_at: '2025-05-28T16:52:25.000Z'
id: FACT-backoffice-customer-tags-maximum-count-earlier
type: fact
---
At most 10 customer tags can be created per support team in the Papra Cloud back office.

Modeled from REQ-backoffice-customer-tags-maximum-count-earlier so the claim can be checked for contradictions.
