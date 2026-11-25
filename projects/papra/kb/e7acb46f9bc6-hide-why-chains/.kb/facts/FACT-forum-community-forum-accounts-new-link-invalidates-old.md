---
title: forum.community_forum_accounts new_link_invalidates_old = True
status: active
fact_kind: property_value
subject_key: forum.community_forum_accounts
property_key: new_link_invalidates_old
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A6758D585E12B6CF
claim_text: requesting a new link invalidates the earlier ones
text_ref: REQ-forum-community-forum-accounts-reset-link-single-use
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-329'
  recorded_at: '2026-08-13T08:41:59.000Z'
id: FACT-forum-community-forum-accounts-new-link-invalidates-old
type: fact
---
Requesting a new link invalidates the earlier ones.

Modeled from REQ-forum-community-forum-accounts-reset-link-single-use so the claim can be checked for contradictions.
