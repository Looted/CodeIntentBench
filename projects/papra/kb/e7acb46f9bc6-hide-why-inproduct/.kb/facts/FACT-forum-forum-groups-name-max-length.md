---
title: forum.forum_groups name_max_length = 64
status: active
fact_kind: property_value
subject_key: forum.forum_groups
property_key: name_max_length
operator: eq
value_type: int
value_int: 64
claim_key: CLAIM-C77D60044AB950F6
claim_text: Forum group names on the community forum are between 3 and 64 characters long
text_ref: REQ-forum-forum-groups-name-length
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-187'
  recorded_at: '2025-10-14T08:48:53.000Z'
id: FACT-forum-forum-groups-name-max-length
type: fact
---
Forum group names on the community forum are between 3 and 64 characters long.

Modeled from REQ-forum-forum-groups-name-length so the claim can be checked for contradictions.
