---
title: portal.partner_portal_jwt_secret minimum_length = 40
status: active
fact_kind: property_value
subject_key: portal.partner_portal_jwt_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 40
claim_key: CLAIM-380CA65F63D5FA3C
claim_text: PARTNER_PORTAL_JWT_SECRET must be at least 40 characters long
text_ref: REQ-portal-partner-portal-jwt-secret-minimum-length
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-236'
  recorded_at: '2026-01-09T17:23:31.000Z'
id: FACT-portal-partner-portal-jwt-secret-minimum-length
type: fact
---
PARTNER_PORTAL_JWT_SECRET must be at least 40 characters long.

Modeled from REQ-portal-partner-portal-jwt-secret-minimum-length so the claim can be checked for contradictions.
