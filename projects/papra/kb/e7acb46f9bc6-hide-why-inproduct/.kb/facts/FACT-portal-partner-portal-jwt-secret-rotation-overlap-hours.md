---
title: portal.partner_portal_jwt_secret rotation_overlap_hours = 24
status: active
fact_kind: property_value
subject_key: portal.partner_portal_jwt_secret
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 24
claim_key: CLAIM-A45280A30BC5D577
claim_text: the previous value stays valid for 24 hours after a rotation
text_ref: REQ-portal-partner-portal-jwt-secret-rotation
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-174'
  recorded_at: '2026-04-18T08:09:23.000Z'
id: FACT-portal-partner-portal-jwt-secret-rotation-overlap-hours
type: fact
---
The previous value stays valid for 24 hours after a rotation.

Modeled from REQ-portal-partner-portal-jwt-secret-rotation so the claim can be checked for contradictions.
