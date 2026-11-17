---
title: forum.community_forum_accounts reset_reveals_account = False
status: active
fact_kind: property_value
subject_key: forum.community_forum_accounts
property_key: reset_reveals_account
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-46380E7D656D4980
claim_text: Asking for a password reset for an address that has no account among community forum accounts gives the same answer as for one that does
text_ref: REQ-forum-community-forum-accounts-reset-unknown-address
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-334'
  recorded_at: '2025-03-14T10:12:58.000Z'
id: FACT-forum-community-forum-accounts-reset-reveals-account
type: fact
---
Asking for a password reset for an address that has no account among community forum accounts gives the same answer as for one that does.

Modeled from REQ-forum-community-forum-accounts-reset-unknown-address so the claim can be checked for contradictions.
