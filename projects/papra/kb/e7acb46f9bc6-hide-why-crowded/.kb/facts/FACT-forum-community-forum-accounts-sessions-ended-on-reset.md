---
title: forum.community_forum_accounts sessions_ended_on_reset = all but current
status: active
fact_kind: property_value
subject_key: forum.community_forum_accounts
property_key: sessions_ended_on_reset
operator: eq
value_type: string
value_string: all but current
claim_key: CLAIM-B61FA3A59C8C0313
claim_text: Resetting the password of a community forum account keeps the session that performed the reset and ends all others
text_ref: REQ-forum-community-forum-accounts-reset-and-sessions
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-319'
  recorded_at: '2026-02-15T17:12:44.000Z'
id: FACT-forum-community-forum-accounts-sessions-ended-on-reset
type: fact
---
Resetting the password of a community forum account keeps the session that performed the reset and ends all others.

Modeled from REQ-forum-community-forum-accounts-reset-and-sessions so the claim can be checked for contradictions.
