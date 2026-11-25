---
title: forum.forum_sso_secret minimum_length = 32
status: active
fact_kind: property_value
subject_key: forum.forum_sso_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-E16EDD233631E8A3
claim_text: FORUM_SSO_SECRET must be at least 32 characters long
text_ref: REQ-forum-forum-sso-secret-minimum-length
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-228'
  recorded_at: '2025-03-25T17:18:11.000Z'
id: FACT-forum-forum-sso-secret-minimum-length
type: fact
---
FORUM_SSO_SECRET must be at least 32 characters long.

Modeled from REQ-forum-forum-sso-secret-minimum-length so the claim can be checked for contradictions.
