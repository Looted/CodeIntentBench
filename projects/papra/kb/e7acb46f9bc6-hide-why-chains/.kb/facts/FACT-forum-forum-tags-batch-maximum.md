---
title: forum.forum_tags batch_maximum = 10
status: active
fact_kind: property_value
subject_key: forum.forum_tags
property_key: batch_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-393DC23F4ACDC86C
claim_text: At most 10 forum tags can be added or removed in one request on the community forum
text_ref: REQ-forum-forum-tags-batch-size
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-131'
  recorded_at: '2025-06-05T14:33:43.000Z'
id: FACT-forum-forum-tags-batch-maximum
type: fact
---
At most 10 forum tags can be added or removed in one request on the community forum.

Modeled from REQ-forum-forum-tags-batch-size so the claim can be checked for contradictions.
