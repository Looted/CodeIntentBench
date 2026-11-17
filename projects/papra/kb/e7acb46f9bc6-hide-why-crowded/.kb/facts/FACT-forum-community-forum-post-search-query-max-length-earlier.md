---
title: forum.community_forum_post_search query_max_length = 128
status: deprecated
fact_kind: property_value
subject_key: forum.community_forum_post_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 128
claim_key: CLAIM-157ED597883ED7DF
claim_text: A query in the community forum post search is limited to 128 characters
text_ref: REQ-forum-community-forum-post-search-query-length-earlier
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-117'
  recorded_at: '2025-06-05T13:50:05.000Z'
id: FACT-forum-community-forum-post-search-query-max-length-earlier
type: fact
---
A query in the community forum post search is limited to 128 characters.

Modeled from REQ-forum-community-forum-post-search-query-length-earlier so the claim can be checked for contradictions.
