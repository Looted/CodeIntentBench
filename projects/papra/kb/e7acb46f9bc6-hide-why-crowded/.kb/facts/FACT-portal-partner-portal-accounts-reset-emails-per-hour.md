---
title: portal.partner_portal_accounts reset_emails_per_hour = 3
status: active
fact_kind: property_value
subject_key: portal.partner_portal_accounts
property_key: reset_emails_per_hour
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-7205D3005714483D
claim_text: At most 3 password reset emails are sent per account per hour for partner portal accounts
text_ref: REQ-portal-partner-portal-accounts-reset-rate-limit
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-357'
  recorded_at: '2026-04-27T09:33:41.000Z'
id: FACT-portal-partner-portal-accounts-reset-emails-per-hour
type: fact
---
At most 3 password reset emails are sent per account per hour for partner portal accounts.

Modeled from REQ-portal-partner-portal-accounts-reset-rate-limit so the claim can be checked for contradictions.
