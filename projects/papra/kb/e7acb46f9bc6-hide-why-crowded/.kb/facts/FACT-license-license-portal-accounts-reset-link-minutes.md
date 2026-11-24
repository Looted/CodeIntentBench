---
title: license.license_portal_accounts reset_link_minutes = 15
status: active
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 15
claim_key: CLAIM-BAEC0964ED7836ED
claim_text: Password reset links for license portal accounts are valid for 15 minutes
text_ref: REQ-license-license-portal-accounts-reset-link-validity
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-258'
  recorded_at: '2026-09-13T13:27:56.000Z'
id: FACT-license-license-portal-accounts-reset-link-minutes
type: fact
---
Password reset links for license portal accounts are valid for 15 minutes.

Modeled from REQ-license-license-portal-accounts-reset-link-validity so the claim can be checked for contradictions.
