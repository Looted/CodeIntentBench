---
title: forum.community_forum_post_search query_min_length = 2
status: active
fact_kind: property_value
subject_key: forum.community_forum_post_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 2
claim_key: CLAIM-5855D3071B8EA23D
claim_text: The community forum post search runs only once the query has at least 2 characters
text_ref: REQ-forum-community-forum-post-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-168'
  recorded_at: '2025-08-08T10:31:34.000Z'
id: FACT-forum-community-forum-post-search-query-min-length
type: fact
---
The community forum post search runs only once the query has at least 2 characters.

Modeled from REQ-forum-community-forum-post-search-minimum-length so the claim can be checked for contradictions.
