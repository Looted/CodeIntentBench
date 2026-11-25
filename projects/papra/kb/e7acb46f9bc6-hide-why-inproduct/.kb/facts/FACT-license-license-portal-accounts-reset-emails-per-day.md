---
title: license.license_portal_accounts reset_emails_per_day = 3
status: active
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: reset_emails_per_day
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-1E033BAEC275CE99
claim_text: At most 3 password reset emails are sent per account per day for license portal accounts
text_ref: REQ-license-license-portal-accounts-reset-rate-limit
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-177'
  recorded_at: '2026-08-20T08:38:57.000Z'
id: FACT-license-license-portal-accounts-reset-emails-per-day
type: fact
---
At most 3 password reset emails are sent per account per day for license portal accounts.

Modeled from REQ-license-license-portal-accounts-reset-rate-limit so the claim can be checked for contradictions.
