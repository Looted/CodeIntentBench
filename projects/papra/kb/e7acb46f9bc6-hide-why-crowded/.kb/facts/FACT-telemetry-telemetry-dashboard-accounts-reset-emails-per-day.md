---
title: telemetry.telemetry_dashboard_accounts reset_emails_per_day = 10
status: active
fact_kind: property_value
subject_key: telemetry.telemetry_dashboard_accounts
property_key: reset_emails_per_day
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-4A87308E62A4D993
claim_text: At most 10 password reset emails are sent per account per day for telemetry dashboard accounts
text_ref: REQ-telemetry-telemetry-dashboard-accounts-reset-rate-limit
tags:
  - lane:strict
  - knowledge-source:telemetry-decisions
origin:
  kind: agent
  ref: 'Telemetry dashboard decision log: TEL-325'
  recorded_at: '2025-05-26T10:42:06.000Z'
id: FACT-telemetry-telemetry-dashboard-accounts-reset-emails-per-day
type: fact
---
At most 10 password reset emails are sent per account per day for telemetry dashboard accounts.

Modeled from REQ-telemetry-telemetry-dashboard-accounts-reset-rate-limit so the claim can be checked for contradictions.
