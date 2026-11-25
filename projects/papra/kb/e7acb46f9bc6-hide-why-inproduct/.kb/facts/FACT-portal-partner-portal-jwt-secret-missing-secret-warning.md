---
title: portal.partner_portal_jwt_secret missing_secret_warning = True
status: active
fact_kind: property_value
subject_key: portal.partner_portal_jwt_secret
property_key: missing_secret_warning
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-74CA22345F9A5AC3
claim_text: it logs a warning that values signed before a restart stop verifying
text_ref: REQ-portal-partner-portal-jwt-secret-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-163'
  recorded_at: '2025-05-14T15:28:19.000Z'
id: FACT-portal-partner-portal-jwt-secret-missing-secret-warning
type: fact
---
It logs a warning that values signed before a restart stop verifying.

Modeled from REQ-portal-partner-portal-jwt-secret-generated-when-missing so the claim can be checked for contradictions.
