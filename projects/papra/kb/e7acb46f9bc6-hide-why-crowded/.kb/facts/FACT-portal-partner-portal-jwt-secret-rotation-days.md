---
title: portal.partner_portal_jwt_secret rotation_days = 180
status: active
fact_kind: property_value
subject_key: portal.partner_portal_jwt_secret
property_key: rotation_days
operator: eq
value_type: int
value_int: 180
claim_key: CLAIM-1427E3ADDD5BF3ED
claim_text: PARTNER_PORTAL_JWT_SECRET is rotated every 180 days
text_ref: REQ-portal-partner-portal-jwt-secret-rotation
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-245'
  recorded_at: '2026-04-18T08:09:23.000Z'
id: FACT-portal-partner-portal-jwt-secret-rotation-days
type: fact
---
PARTNER_PORTAL_JWT_SECRET is rotated every 180 days.

Modeled from REQ-portal-partner-portal-jwt-secret-rotation so the claim can be checked for contradictions.
