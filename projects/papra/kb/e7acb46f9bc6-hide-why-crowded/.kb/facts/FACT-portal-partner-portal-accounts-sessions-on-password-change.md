---
title: portal.partner_portal_accounts sessions_on_password_change = none ended
status: active
fact_kind: property_value
subject_key: portal.partner_portal_accounts
property_key: sessions_on_password_change
operator: eq
value_type: string
value_string: none ended
claim_key: CLAIM-4F2914CAC8D321B0
claim_text: Changing a password from the settings of a partner portal account, as opposed to resetting it, keeps every session
text_ref: REQ-portal-partner-portal-accounts-password-change
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-382'
  recorded_at: '2026-05-18T14:27:04.000Z'
id: FACT-portal-partner-portal-accounts-sessions-on-password-change
type: fact
---
Changing a password from the settings of a partner portal account, as opposed to resetting it, keeps every session.

Modeled from REQ-portal-partner-portal-accounts-password-change so the claim can be checked for contradictions.
