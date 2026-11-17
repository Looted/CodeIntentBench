---
title: forum.forum_sso_secret rotation_days = 180
status: active
fact_kind: property_value
subject_key: forum.forum_sso_secret
property_key: rotation_days
operator: eq
value_type: int
value_int: 180
claim_key: CLAIM-C9C1014FC6C522D1
claim_text: FORUM_SSO_SECRET is rotated every 180 days
text_ref: REQ-forum-forum-sso-secret-rotation
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-237'
  recorded_at: '2026-03-26T13:30:02.000Z'
id: FACT-forum-forum-sso-secret-rotation-days
type: fact
---
FORUM_SSO_SECRET is rotated every 180 days.

Modeled from REQ-forum-forum-sso-secret-rotation so the claim can be checked for contradictions.
