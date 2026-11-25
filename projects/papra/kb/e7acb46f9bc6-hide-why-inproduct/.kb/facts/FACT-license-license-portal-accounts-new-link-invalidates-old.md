---
title: license.license_portal_accounts new_link_invalidates_old = True
status: active
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: new_link_invalidates_old
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A6758D585E12B6CF
claim_text: requesting a new link invalidates the earlier ones
text_ref: REQ-license-license-portal-accounts-reset-link-single-use
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-176'
  recorded_at: '2026-06-23T11:45:28.000Z'
id: FACT-license-license-portal-accounts-new-link-invalidates-old
type: fact
---
Requesting a new link invalidates the earlier ones.

Modeled from REQ-license-license-portal-accounts-reset-link-single-use so the claim can be checked for contradictions.
