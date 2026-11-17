---
title: portal.partner_portal_jwt_secret example_value_refused = True
status: active
fact_kind: property_value
subject_key: portal.partner_portal_jwt_secret
property_key: example_value_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-356CF153C47550CE
claim_text: The partner portal refuses the example value of PARTNER_PORTAL_JWT_SECRET from its documentation, in every environment
text_ref: REQ-portal-partner-portal-jwt-secret-example-value-refused
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-237'
  recorded_at: '2025-03-21T11:32:37.000Z'
id: FACT-portal-partner-portal-jwt-secret-example-value-refused
type: fact
---
The partner portal refuses the example value of PARTNER_PORTAL_JWT_SECRET from its documentation, in every environment.

Modeled from REQ-portal-partner-portal-jwt-secret-example-value-refused so the claim can be checked for contradictions.
