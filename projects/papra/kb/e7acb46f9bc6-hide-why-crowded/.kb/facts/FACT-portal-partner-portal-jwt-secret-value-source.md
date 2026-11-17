---
title: portal.partner_portal_jwt_secret value_source = environment only
status: active
fact_kind: property_value
subject_key: portal.partner_portal_jwt_secret
property_key: value_source
operator: eq
value_type: string
value_string: environment only
claim_key: CLAIM-76AA8C754997E720
claim_text: The partner portal reads PARTNER_PORTAL_JWT_SECRET from the environment only, never from a configuration file
text_ref: REQ-portal-partner-portal-jwt-secret-source
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-248'
  recorded_at: '2026-03-24T15:13:49.000Z'
id: FACT-portal-partner-portal-jwt-secret-value-source
type: fact
---
The partner portal reads PARTNER_PORTAL_JWT_SECRET from the environment only, never from a configuration file.

Modeled from REQ-portal-partner-portal-jwt-secret-source so the claim can be checked for contradictions.
