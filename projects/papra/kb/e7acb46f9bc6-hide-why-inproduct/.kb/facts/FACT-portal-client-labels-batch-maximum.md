---
title: portal.client_labels batch_maximum = 50
status: active
fact_kind: property_value
subject_key: portal.client_labels
property_key: batch_maximum
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-1038296A6AAE015F
claim_text: At most 50 client labels can be added or removed in one request in the partner portal
text_ref: REQ-portal-client-labels-batch-size
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-136'
  recorded_at: '2025-08-13T15:01:06.000Z'
id: FACT-portal-client-labels-batch-maximum
type: fact
---
At most 50 client labels can be added or removed in one request in the partner portal.

Modeled from REQ-portal-client-labels-batch-size so the claim can be checked for contradictions.
