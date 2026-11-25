---
title: status.status_page_administrator_accounts reset_disables_two_factor = False
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: reset_disables_two_factor
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-39209C13EBB90D4D
claim_text: Resetting the password of a status page administrator account does not turn off two-factor authentication
text_ref: REQ-status-status-page-administrator-accounts-reset-and-two-factor
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-203'
  recorded_at: '2026-04-16T10:05:24.000Z'
id: FACT-status-status-page-administrator-accounts-reset-disables-two-factor
type: fact
---
Resetting the password of a status page administrator account does not turn off two-factor authentication.

Modeled from REQ-status-status-page-administrator-accounts-reset-and-two-factor so the claim can be checked for contradictions.
