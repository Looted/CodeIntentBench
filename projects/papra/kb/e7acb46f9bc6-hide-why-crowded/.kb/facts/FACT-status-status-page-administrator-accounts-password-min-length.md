---
title: status.status_page_administrator_accounts password_min_length = 14
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: password_min_length
operator: eq
value_type: int
value_int: 14
claim_key: CLAIM-D4985D93DE0713D0
claim_text: Passwords of status page administrator accounts are at least 14 characters long
text_ref: REQ-status-status-page-administrator-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-311'
  recorded_at: '2025-08-06T12:15:57.000Z'
id: FACT-status-status-page-administrator-accounts-password-min-length
type: fact
---
Passwords of status page administrator accounts are at least 14 characters long.

Modeled from REQ-status-status-page-administrator-accounts-password-length so the claim can be checked for contradictions.
