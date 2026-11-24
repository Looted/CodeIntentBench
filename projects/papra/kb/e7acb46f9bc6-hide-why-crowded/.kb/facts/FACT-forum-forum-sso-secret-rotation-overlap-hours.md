---
title: forum.forum_sso_secret rotation_overlap_hours = 48
status: active
fact_kind: property_value
subject_key: forum.forum_sso_secret
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 48
claim_key: CLAIM-40B0302E57698F6D
claim_text: the previous value stays valid for 48 hours after a rotation
text_ref: REQ-forum-forum-sso-secret-rotation
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-237'
  recorded_at: '2026-03-26T13:30:02.000Z'
id: FACT-forum-forum-sso-secret-rotation-overlap-hours
type: fact
---
The previous value stays valid for 48 hours after a rotation.

Modeled from REQ-forum-forum-sso-secret-rotation so the claim can be checked for contradictions.
