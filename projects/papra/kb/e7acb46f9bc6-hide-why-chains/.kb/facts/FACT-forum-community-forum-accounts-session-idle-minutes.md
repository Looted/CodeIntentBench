---
title: forum.community_forum_accounts session_idle_minutes = 720
status: active
fact_kind: property_value
subject_key: forum.community_forum_accounts
property_key: session_idle_minutes
operator: eq
value_type: int
value_int: 720
claim_key: CLAIM-875C1D77291FFCFF
claim_text: they end after 720 minutes without activity
text_ref: REQ-forum-community-forum-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-350'
  recorded_at: '2026-01-27T08:38:56.000Z'
id: FACT-forum-community-forum-accounts-session-idle-minutes
type: fact
---
They end after 720 minutes without activity.

Modeled from REQ-forum-community-forum-accounts-session-lifetime so the claim can be checked for contradictions.
