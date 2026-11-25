---
title: portal.partner_portal_accounts sessions_on_email_change = none ended
status: active
fact_kind: property_value
subject_key: portal.partner_portal_accounts
property_key: sessions_on_email_change
operator: eq
value_type: string
value_string: none ended
claim_key: CLAIM-F64D1C6E15884642
claim_text: Changing the email address of a partner portal account does not end any session
text_ref: REQ-portal-partner-portal-accounts-email-change
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-293'
  recorded_at: '2026-01-02T15:46:04.000Z'
id: FACT-portal-partner-portal-accounts-sessions-on-email-change
type: fact
---
Changing the email address of a partner portal account does not end any session.

Modeled from REQ-portal-partner-portal-accounts-email-change so the claim can be checked for contradictions.
