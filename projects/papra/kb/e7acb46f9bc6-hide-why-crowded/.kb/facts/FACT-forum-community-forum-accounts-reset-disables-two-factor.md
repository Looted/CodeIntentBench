---
title: forum.community_forum_accounts reset_disables_two_factor = True
status: active
fact_kind: property_value
subject_key: forum.community_forum_accounts
property_key: reset_disables_two_factor
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-16D2B71970496D4A
claim_text: Resetting the password of a community forum account turns off two-factor authentication, which must be set up again
text_ref: REQ-forum-community-forum-accounts-reset-and-two-factor
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-360'
  recorded_at: '2025-03-27T11:46:52.000Z'
id: FACT-forum-community-forum-accounts-reset-disables-two-factor
type: fact
---
Resetting the password of a community forum account turns off two-factor authentication, which must be set up again.

Modeled from REQ-forum-community-forum-accounts-reset-and-two-factor so the claim can be checked for contradictions.
