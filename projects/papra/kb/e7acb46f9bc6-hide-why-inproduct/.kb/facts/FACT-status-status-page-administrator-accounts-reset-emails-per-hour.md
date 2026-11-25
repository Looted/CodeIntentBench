---
title: status.status_page_administrator_accounts reset_emails_per_hour = 5
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: reset_emails_per_hour
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-0263224B5ABF33C5
claim_text: At most 5 password reset emails are sent per account per hour for status page administrator accounts
text_ref: REQ-status-status-page-administrator-accounts-reset-rate-limit
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-181'
  recorded_at: '2025-04-09T14:21:59.000Z'
id: FACT-status-status-page-administrator-accounts-reset-emails-per-hour
type: fact
---
At most 5 password reset emails are sent per account per hour for status page administrator accounts.

Modeled from REQ-status-status-page-administrator-accounts-reset-rate-limit so the claim can be checked for contradictions.
