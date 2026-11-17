---
title: forum.forum_categories batch_maximum = 25
status: active
fact_kind: property_value
subject_key: forum.forum_categories
property_key: batch_maximum
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-FF0DD9612D0AFBCC
claim_text: At most 25 forum categories can be added or removed in one request on the community forum
text_ref: REQ-forum-forum-categories-batch-size
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-154'
  recorded_at: '2025-08-01T17:16:59.000Z'
id: FACT-forum-forum-categories-batch-maximum
type: fact
---
At most 25 forum categories can be added or removed in one request on the community forum.

Modeled from REQ-forum-forum-categories-batch-size so the claim can be checked for contradictions.
