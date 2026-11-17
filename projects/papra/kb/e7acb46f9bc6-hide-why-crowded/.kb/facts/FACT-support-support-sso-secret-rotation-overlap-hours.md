---
title: support.support_sso_secret rotation_overlap_hours = 48
status: active
fact_kind: property_value
subject_key: support.support_sso_secret
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 48
claim_key: CLAIM-40B0302E57698F6D
claim_text: the previous value stays valid for 48 hours after a rotation
text_ref: REQ-support-support-sso-secret-rotation
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-245'
  recorded_at: '2026-06-15T15:59:23.000Z'
id: FACT-support-support-sso-secret-rotation-overlap-hours
type: fact
---
The previous value stays valid for 48 hours after a rotation.

Modeled from REQ-support-support-sso-secret-rotation so the claim can be checked for contradictions.
