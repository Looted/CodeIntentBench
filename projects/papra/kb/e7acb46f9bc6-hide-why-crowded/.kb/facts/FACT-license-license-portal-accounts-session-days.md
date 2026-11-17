---
title: license.license_portal_accounts session_days = 7
status: active
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: session_days
operator: eq
value_type: int
value_int: 7
claim_key: CLAIM-6F02DC8CDF548C9F
claim_text: Sessions of license portal accounts last at most 7 days
text_ref: REQ-license-license-portal-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-275'
  recorded_at: '2025-05-28T09:55:13.000Z'
id: FACT-license-license-portal-accounts-session-days
type: fact
---
Sessions of license portal accounts last at most 7 days.

Modeled from REQ-license-license-portal-accounts-session-lifetime so the claim can be checked for contradictions.
