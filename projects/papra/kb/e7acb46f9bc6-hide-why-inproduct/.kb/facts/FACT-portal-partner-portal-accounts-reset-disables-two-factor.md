---
title: portal.partner_portal_accounts reset_disables_two_factor = True
status: active
fact_kind: property_value
subject_key: portal.partner_portal_accounts
property_key: reset_disables_two_factor
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-AB58D25FE343AC5E
claim_text: Resetting the password of a partner portal account turns off two-factor authentication, which must be set up again
text_ref: REQ-portal-partner-portal-accounts-reset-and-two-factor
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-306'
  recorded_at: '2025-06-06T12:05:42.000Z'
id: FACT-portal-partner-portal-accounts-reset-disables-two-factor
type: fact
---
Resetting the password of a partner portal account turns off two-factor authentication, which must be set up again.

Modeled from REQ-portal-partner-portal-accounts-reset-and-two-factor so the claim can be checked for contradictions.
