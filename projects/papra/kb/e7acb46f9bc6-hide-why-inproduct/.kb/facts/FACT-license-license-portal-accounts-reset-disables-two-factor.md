---
title: license.license_portal_accounts reset_disables_two_factor = True
status: active
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: reset_disables_two_factor
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-502626EADBCE5429
claim_text: Resetting the password of a license portal account turns off two-factor authentication, which must be set up again
text_ref: REQ-license-license-portal-accounts-reset-and-two-factor
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-199'
  recorded_at: '2026-01-13T11:13:45.000Z'
id: FACT-license-license-portal-accounts-reset-disables-two-factor
type: fact
---
Resetting the password of a license portal account turns off two-factor authentication, which must be set up again.

Modeled from REQ-license-license-portal-accounts-reset-and-two-factor so the claim can be checked for contradictions.
