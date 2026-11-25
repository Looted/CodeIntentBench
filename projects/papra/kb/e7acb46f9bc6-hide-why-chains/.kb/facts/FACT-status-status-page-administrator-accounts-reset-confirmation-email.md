---
title: status.status_page_administrator_accounts reset_confirmation_email = False
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: reset_confirmation_email
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-F7E79CDCB4377BE0
claim_text: A completed password reset for status page administrator accounts sends no confirmation email
text_ref: REQ-status-status-page-administrator-accounts-reset-notification
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-300'
  recorded_at: '2026-07-16T09:58:37.000Z'
id: FACT-status-status-page-administrator-accounts-reset-confirmation-email
type: fact
---
A completed password reset for status page administrator accounts sends no confirmation email.

Modeled from REQ-status-status-page-administrator-accounts-reset-notification so the claim can be checked for contradictions.
