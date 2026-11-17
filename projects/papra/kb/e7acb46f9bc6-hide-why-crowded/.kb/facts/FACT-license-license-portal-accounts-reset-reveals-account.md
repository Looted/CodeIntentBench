---
title: license.license_portal_accounts reset_reveals_account = False
status: active
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: reset_reveals_account
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-8044AC61E15660B3
claim_text: Asking for a password reset for an address that has no account among license portal accounts gives the same answer as for one that does
text_ref: REQ-license-license-portal-accounts-reset-unknown-address
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-261'
  recorded_at: '2025-07-14T14:57:19.000Z'
id: FACT-license-license-portal-accounts-reset-reveals-account
type: fact
---
Asking for a password reset for an address that has no account among license portal accounts gives the same answer as for one that does.

Modeled from REQ-license-license-portal-accounts-reset-unknown-address so the claim can be checked for contradictions.
