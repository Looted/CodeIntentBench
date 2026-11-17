---
title: license.license_portal_accounts sessions_on_password_change = none ended
status: active
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: sessions_on_password_change
operator: eq
value_type: string
value_string: none ended
claim_key: CLAIM-DB3590DC07FEF454
claim_text: Changing a password from the settings of a license portal account, as opposed to resetting it, keeps every session
text_ref: REQ-license-license-portal-accounts-password-change
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-290'
  recorded_at: '2025-04-08T09:12:46.000Z'
id: FACT-license-license-portal-accounts-sessions-on-password-change
type: fact
---
Changing a password from the settings of a license portal account, as opposed to resetting it, keeps every session.

Modeled from REQ-license-license-portal-accounts-password-change so the claim can be checked for contradictions.
