---
title: forum.forum_categories limit_configurable = False
status: active
fact_kind: property_value
subject_key: forum.forum_categories
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-forum-forum-categories-maximum-count
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-136'
  recorded_at: '2025-07-02T12:46:08.000Z'
id: FACT-forum-forum-categories-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-forum-forum-categories-maximum-count so the claim can be checked for contradictions.
