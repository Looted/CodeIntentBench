---
title: infra.infrastructure_console_accounts reset_emails_per_day = 5
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: reset_emails_per_day
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-3ACB3FE2520B293A
claim_text: At most 5 password reset emails are sent per account per day for infrastructure console accounts
text_ref: REQ-infra-infrastructure-console-accounts-reset-rate-limit
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-180'
  recorded_at: '2026-05-16T13:35:34.000Z'
id: FACT-infra-infrastructure-console-accounts-reset-emails-per-day
type: fact
---
At most 5 password reset emails are sent per account per day for infrastructure console accounts.

Modeled from REQ-infra-infrastructure-console-accounts-reset-rate-limit so the claim can be checked for contradictions.
