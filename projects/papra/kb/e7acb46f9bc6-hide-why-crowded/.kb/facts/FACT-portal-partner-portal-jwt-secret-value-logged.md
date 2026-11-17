---
title: portal.partner_portal_jwt_secret value_logged = False
status: active
fact_kind: property_value
subject_key: portal.partner_portal_jwt_secret
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-C1A4B102737336E4
claim_text: The partner portal never writes PARTNER_PORTAL_JWT_SECRET or a value derived from it to its logs
text_ref: REQ-portal-partner-portal-jwt-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-251'
  recorded_at: '2026-07-23T15:02:30.000Z'
id: FACT-portal-partner-portal-jwt-secret-value-logged
type: fact
---
The partner portal never writes PARTNER_PORTAL_JWT_SECRET or a value derived from it to its logs.

Modeled from REQ-portal-partner-portal-jwt-secret-never-logged so the claim can be checked for contradictions.
