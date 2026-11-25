---
title: support.canned_replies batch_maximum = 25
status: active
fact_kind: property_value
subject_key: support.canned_replies
property_key: batch_maximum
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-6F31557BDD192D02
claim_text: At most 25 canned replies can be added or removed in one request in the support portal
text_ref: REQ-support-canned-replies-batch-size
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-153'
  recorded_at: '2026-09-13T14:16:04.000Z'
id: FACT-support-canned-replies-batch-maximum
type: fact
---
At most 25 canned replies can be added or removed in one request in the support portal.

Modeled from REQ-support-canned-replies-batch-size so the claim can be checked for contradictions.
