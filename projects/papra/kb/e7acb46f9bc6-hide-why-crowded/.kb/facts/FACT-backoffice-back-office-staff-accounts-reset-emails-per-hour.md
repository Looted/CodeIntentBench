---
title: backoffice.back_office_staff_accounts reset_emails_per_hour = 3
status: active
fact_kind: property_value
subject_key: backoffice.back_office_staff_accounts
property_key: reset_emails_per_hour
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-9EB0DB5CED67012D
claim_text: At most 3 password reset emails are sent per account per hour for back office staff accounts
text_ref: REQ-backoffice-back-office-staff-accounts-reset-rate-limit
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-545'
  recorded_at: '2026-07-27T17:30:24.000Z'
id: FACT-backoffice-back-office-staff-accounts-reset-emails-per-hour
type: fact
---
At most 3 password reset emails are sent per account per hour for back office staff accounts.

Modeled from REQ-backoffice-back-office-staff-accounts-reset-rate-limit so the claim can be checked for contradictions.
