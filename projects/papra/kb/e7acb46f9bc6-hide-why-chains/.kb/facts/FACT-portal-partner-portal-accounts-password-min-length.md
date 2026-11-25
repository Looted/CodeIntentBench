---
title: portal.partner_portal_accounts password_min_length = 14
status: active
fact_kind: property_value
subject_key: portal.partner_portal_accounts
property_key: password_min_length
operator: eq
value_type: int
value_int: 14
claim_key: CLAIM-71971DBE8644084A
claim_text: Passwords of partner portal accounts are at least 14 characters long
text_ref: REQ-portal-partner-portal-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-376'
  recorded_at: '2026-02-21T12:58:47.000Z'
id: FACT-portal-partner-portal-accounts-password-min-length
type: fact
---
Passwords of partner portal accounts are at least 14 characters long.

Modeled from REQ-portal-partner-portal-accounts-password-length so the claim can be checked for contradictions.
