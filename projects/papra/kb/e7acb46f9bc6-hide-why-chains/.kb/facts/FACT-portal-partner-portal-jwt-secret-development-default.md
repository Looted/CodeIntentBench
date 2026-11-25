---
title: portal.partner_portal_jwt_secret development_default = fixed development value
status: active
fact_kind: property_value
subject_key: portal.partner_portal_jwt_secret
property_key: development_default
operator: eq
value_type: string
value_string: fixed development value
claim_key: CLAIM-BDADFFE2C8DD92D4
claim_text: The partner portal uses a fixed development value outside production when PARTNER_PORTAL_JWT_SECRET is not set
text_ref: REQ-portal-partner-portal-jwt-secret-development-default
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-253'
  recorded_at: '2025-05-07T14:38:28.000Z'
id: FACT-portal-partner-portal-jwt-secret-development-default
type: fact
---
The partner portal uses a fixed development value outside production when PARTNER_PORTAL_JWT_SECRET is not set.

Modeled from REQ-portal-partner-portal-jwt-secret-development-default so the claim can be checked for contradictions.
