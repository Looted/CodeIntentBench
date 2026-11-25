---
title: portal.partner_portal_jwt_secret required_in_production = False
status: active
fact_kind: property_value
subject_key: portal.partner_portal_jwt_secret
property_key: required_in_production
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-784666B8AA8EC706
claim_text: The partner portal generates a random token signing secret at startup when PARTNER_PORTAL_JWT_SECRET is not set
text_ref: REQ-portal-partner-portal-jwt-secret-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-163'
  recorded_at: '2025-05-14T15:28:19.000Z'
id: FACT-portal-partner-portal-jwt-secret-required-in-production
type: fact
---
The partner portal generates a random token signing secret at startup when PARTNER_PORTAL_JWT_SECRET is not set.

Modeled from REQ-portal-partner-portal-jwt-secret-generated-when-missing so the claim can be checked for contradictions.
