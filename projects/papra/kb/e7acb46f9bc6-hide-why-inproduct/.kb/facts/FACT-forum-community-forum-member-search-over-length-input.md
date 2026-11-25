---
title: forum.community_forum_member_search over_length_input = rejected
status: active
fact_kind: property_value
subject_key: forum.community_forum_member_search
property_key: over_length_input
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-778F39B5CA222673
claim_text: longer input is rejected with a validation error
text_ref: REQ-forum-community-forum-member-search-query-length
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-105'
  recorded_at: '2026-09-13T08:22:08.000Z'
id: FACT-forum-community-forum-member-search-over-length-input
type: fact
---
Longer input is rejected with a validation error.

Modeled from REQ-forum-community-forum-member-search-query-length so the claim can be checked for contradictions.
