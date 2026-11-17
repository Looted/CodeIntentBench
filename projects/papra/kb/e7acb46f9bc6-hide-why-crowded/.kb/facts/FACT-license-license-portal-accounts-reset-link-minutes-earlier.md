---
title: license.license_portal_accounts reset_link_minutes = 10
status: deprecated
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-0CAF527E5FC42526
claim_text: Password reset links for license portal accounts are valid for 10 minutes
text_ref: REQ-license-license-portal-accounts-reset-link-validity-earlier
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-188'
  recorded_at: '2025-12-10T13:27:00.000Z'
id: FACT-license-license-portal-accounts-reset-link-minutes-earlier
type: fact
---
Password reset links for license portal accounts are valid for 10 minutes.

Modeled from REQ-license-license-portal-accounts-reset-link-validity-earlier so the claim can be checked for contradictions.
