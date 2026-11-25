---
title: forum.community_forum_accounts reset_link_minutes = 30
status: active
fact_kind: property_value
subject_key: forum.community_forum_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-3F58172E0F174B59
claim_text: Password reset links for community forum accounts are valid for 30 minutes
text_ref: REQ-forum-community-forum-accounts-reset-link-validity
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-324'
  recorded_at: '2025-09-25T09:30:18.000Z'
id: FACT-forum-community-forum-accounts-reset-link-minutes
type: fact
---
Password reset links for community forum accounts are valid for 30 minutes.

Modeled from REQ-forum-community-forum-accounts-reset-link-validity so the claim can be checked for contradictions.
