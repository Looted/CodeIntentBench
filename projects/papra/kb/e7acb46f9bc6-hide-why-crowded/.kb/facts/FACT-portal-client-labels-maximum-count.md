---
title: portal.client_labels maximum_count = 25
status: active
fact_kind: property_value
subject_key: portal.client_labels
property_key: maximum_count
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-57885B4377A7375E
claim_text: The number of client labels per partner account in the partner portal is limited to 25
text_ref: REQ-portal-client-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-113'
  recorded_at: '2025-09-17T09:33:31.000Z'
id: FACT-portal-client-labels-maximum-count
type: fact
---
The number of client labels per partner account in the partner portal is limited to 25.

Modeled from REQ-portal-client-labels-maximum-count so the claim can be checked for contradictions.
