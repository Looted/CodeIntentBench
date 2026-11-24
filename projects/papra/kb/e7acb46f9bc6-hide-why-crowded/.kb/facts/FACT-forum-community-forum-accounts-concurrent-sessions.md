---
title: forum.community_forum_accounts concurrent_sessions = 10
status: active
fact_kind: property_value
subject_key: forum.community_forum_accounts
property_key: concurrent_sessions
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-5CC323D88ADFDE15
claim_text: A community forum account can have at most 10 sessions at a time
text_ref: REQ-forum-community-forum-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-355'
  recorded_at: '2026-06-16T13:58:45.000Z'
id: FACT-forum-community-forum-accounts-concurrent-sessions
type: fact
---
A community forum account can have at most 10 sessions at a time.

Modeled from REQ-forum-community-forum-accounts-concurrent-sessions so the claim can be checked for contradictions.
