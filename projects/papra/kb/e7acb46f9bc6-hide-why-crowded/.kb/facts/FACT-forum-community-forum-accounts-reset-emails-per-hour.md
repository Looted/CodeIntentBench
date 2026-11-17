---
title: forum.community_forum_accounts reset_emails_per_hour = 5
status: active
fact_kind: property_value
subject_key: forum.community_forum_accounts
property_key: reset_emails_per_hour
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-C36922A2D74A0D41
claim_text: At most 5 password reset emails are sent per account per hour for community forum accounts
text_ref: REQ-forum-community-forum-accounts-reset-rate-limit
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-332'
  recorded_at: '2026-08-15T08:22:14.000Z'
id: FACT-forum-community-forum-accounts-reset-emails-per-hour
type: fact
---
At most 5 password reset emails are sent per account per hour for community forum accounts.

Modeled from REQ-forum-community-forum-accounts-reset-rate-limit so the claim can be checked for contradictions.
