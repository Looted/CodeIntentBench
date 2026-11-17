---
title: forum.forum_tags limit_configurable = True
status: active
fact_kind: property_value
subject_key: forum.forum_tags
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D7D6BB55704C85FF
claim_text: the limit is configurable and 150 is the default
text_ref: REQ-forum-forum-tags-maximum-count
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-113'
  recorded_at: '2026-08-24T10:38:41.000Z'
id: FACT-forum-forum-tags-limit-configurable
type: fact
---
The limit is configurable and 150 is the default.

Modeled from REQ-forum-forum-tags-maximum-count so the claim can be checked for contradictions.
