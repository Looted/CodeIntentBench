---
title: forum.community_forum_member_search query_min_length = 1
status: active
fact_kind: property_value
subject_key: forum.community_forum_member_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-AD7CA5B568E0D3C9
claim_text: The community forum member search runs only once the query has at least 1 character
text_ref: REQ-forum-community-forum-member-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-200'
  recorded_at: '2026-07-02T10:35:48.000Z'
id: FACT-forum-community-forum-member-search-query-min-length
type: fact
---
The community forum member search runs only once the query has at least 1 character.

Modeled from REQ-forum-community-forum-member-search-minimum-length so the claim can be checked for contradictions.
