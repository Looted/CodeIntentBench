---
title: status.status_page_administrator_accounts reset_reveals_account = False
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: reset_reveals_account
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-1BB41BAC16CBD19E
claim_text: Asking for a password reset for an address that has no account among status page administrator accounts gives the same answer as for one that does
text_ref: REQ-status-status-page-administrator-accounts-reset-unknown-address
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-183'
  recorded_at: '2026-02-15T09:45:29.000Z'
id: FACT-status-status-page-administrator-accounts-reset-reveals-account
type: fact
---
Asking for a password reset for an address that has no account among status page administrator accounts gives the same answer as for one that does.

Modeled from REQ-status-status-page-administrator-accounts-reset-unknown-address so the claim can be checked for contradictions.
