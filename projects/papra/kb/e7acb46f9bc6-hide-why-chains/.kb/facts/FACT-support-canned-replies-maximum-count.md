---
title: support.canned_replies maximum_count = 500
status: active
fact_kind: property_value
subject_key: support.canned_replies
property_key: maximum_count
operator: eq
value_type: int
value_int: 500
claim_key: CLAIM-4B08F164F9FDB510
claim_text: The number of canned replies per agent in the support portal is limited to 500
text_ref: REQ-support-canned-replies-maximum-count
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-129'
  recorded_at: '2025-12-18T09:36:19.000Z'
id: FACT-support-canned-replies-maximum-count
type: fact
---
The number of canned replies per agent in the support portal is limited to 500.

Modeled from REQ-support-canned-replies-maximum-count so the claim can be checked for contradictions.
