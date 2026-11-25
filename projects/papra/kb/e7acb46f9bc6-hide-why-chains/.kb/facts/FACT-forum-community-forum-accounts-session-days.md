---
title: forum.community_forum_accounts session_days = 14
status: active
fact_kind: property_value
subject_key: forum.community_forum_accounts
property_key: session_days
operator: eq
value_type: int
value_int: 14
claim_key: CLAIM-8650ED4CA221194F
claim_text: Sessions of community forum accounts last at most 14 days
text_ref: REQ-forum-community-forum-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-350'
  recorded_at: '2026-01-27T08:38:56.000Z'
id: FACT-forum-community-forum-accounts-session-days
type: fact
---
Sessions of community forum accounts last at most 14 days.

Modeled from REQ-forum-community-forum-accounts-session-lifetime so the claim can be checked for contradictions.
