---
title: license.license_portal_accounts password_min_length = 16
status: active
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: password_min_length
operator: eq
value_type: int
value_int: 16
claim_key: CLAIM-7FDA4F08A1043537
claim_text: Passwords of license portal accounts are at least 16 characters long
text_ref: REQ-license-license-portal-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-279'
  recorded_at: '2026-09-16T13:23:41.000Z'
id: FACT-license-license-portal-accounts-password-min-length
type: fact
---
Passwords of license portal accounts are at least 16 characters long.

Modeled from REQ-license-license-portal-accounts-password-length so the claim can be checked for contradictions.
