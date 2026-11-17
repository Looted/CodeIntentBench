---
title: infra.infrastructure_console_accounts password_min_length = 12
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: password_min_length
operator: eq
value_type: int
value_int: 12
claim_key: CLAIM-72FE6D2B3EF29AD1
claim_text: Passwords of infrastructure console accounts are at least 12 characters long
text_ref: REQ-infra-infrastructure-console-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-194'
  recorded_at: '2026-01-15T14:57:27.000Z'
id: FACT-infra-infrastructure-console-accounts-password-min-length
type: fact
---
Passwords of infrastructure console accounts are at least 12 characters long.

Modeled from REQ-infra-infrastructure-console-accounts-password-length so the claim can be checked for contradictions.
