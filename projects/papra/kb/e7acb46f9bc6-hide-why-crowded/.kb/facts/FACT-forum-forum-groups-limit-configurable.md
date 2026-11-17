---
title: forum.forum_groups limit_configurable = False
status: active
fact_kind: property_value
subject_key: forum.forum_groups
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-950BC8C0A4D47D22
claim_text: the limit is the same for everyone
text_ref: REQ-forum-forum-groups-maximum-count
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-284'
  recorded_at: '2026-07-06T14:51:54.000Z'
id: FACT-forum-forum-groups-limit-configurable
type: fact
---
The limit is the same for everyone.

Modeled from REQ-forum-forum-groups-maximum-count so the claim can be checked for contradictions.
