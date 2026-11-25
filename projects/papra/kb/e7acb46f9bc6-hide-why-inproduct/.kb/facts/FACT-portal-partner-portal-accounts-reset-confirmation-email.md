---
title: portal.partner_portal_accounts reset_confirmation_email = True
status: active
fact_kind: property_value
subject_key: portal.partner_portal_accounts
property_key: reset_confirmation_email
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-676C07A5FF46A1BB
claim_text: A completed password reset for partner portal accounts is confirmed by an email to the account address
text_ref: REQ-portal-partner-portal-accounts-reset-notification
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-292'
  recorded_at: '2025-05-15T08:44:09.000Z'
id: FACT-portal-partner-portal-accounts-reset-confirmation-email
type: fact
---
A completed password reset for partner portal accounts is confirmed by an email to the account address.

Modeled from REQ-portal-partner-portal-accounts-reset-notification so the claim can be checked for contradictions.
