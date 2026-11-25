---
title: forum.community_forum_accounts password_min_length = 8
status: active
fact_kind: property_value
subject_key: forum.community_forum_accounts
property_key: password_min_length
operator: eq
value_type: int
value_int: 8
claim_key: CLAIM-99DD0CB666B6A1CA
claim_text: Passwords of community forum accounts are at least 8 characters long
text_ref: REQ-forum-community-forum-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-358'
  recorded_at: '2025-10-17T12:54:46.000Z'
id: FACT-forum-community-forum-accounts-password-min-length
type: fact
---
Passwords of community forum accounts are at least 8 characters long.

Modeled from REQ-forum-community-forum-accounts-password-length so the claim can be checked for contradictions.
