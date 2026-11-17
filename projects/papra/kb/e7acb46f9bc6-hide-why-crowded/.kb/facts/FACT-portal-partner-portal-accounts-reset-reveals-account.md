---
title: portal.partner_portal_accounts reset_reveals_account = False
status: active
fact_kind: property_value
subject_key: portal.partner_portal_accounts
property_key: reset_reveals_account
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B0B8C259607119E
claim_text: Asking for a password reset for an address that has no account among partner portal accounts gives the same answer as for one that does
text_ref: REQ-portal-partner-portal-accounts-reset-unknown-address
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-358'
  recorded_at: '2026-01-06T12:53:51.000Z'
id: FACT-portal-partner-portal-accounts-reset-reveals-account
type: fact
---
Asking for a password reset for an address that has no account among partner portal accounts gives the same answer as for one that does.

Modeled from REQ-portal-partner-portal-accounts-reset-unknown-address so the claim can be checked for contradictions.
