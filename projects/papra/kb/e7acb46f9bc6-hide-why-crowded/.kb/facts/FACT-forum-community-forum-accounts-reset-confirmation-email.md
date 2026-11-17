---
title: forum.community_forum_accounts reset_confirmation_email = False
status: active
fact_kind: property_value
subject_key: forum.community_forum_accounts
property_key: reset_confirmation_email
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-5945513FD3DF313D
claim_text: A completed password reset for community forum accounts sends no confirmation email
text_ref: REQ-forum-community-forum-accounts-reset-notification
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-342'
  recorded_at: '2025-02-04T15:37:00.000Z'
id: FACT-forum-community-forum-accounts-reset-confirmation-email
type: fact
---
A completed password reset for community forum accounts sends no confirmation email.

Modeled from REQ-forum-community-forum-accounts-reset-notification so the claim can be checked for contradictions.
