---
title: status.status_page_administrator_accounts reset_link_minutes = 60
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-1FC054A199CFF13C
claim_text: Password reset links for status page administrator accounts are valid for 60 minutes
text_ref: REQ-status-status-page-administrator-accounts-reset-link-validity
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-287'
  recorded_at: '2025-09-28T13:37:46.000Z'
id: FACT-status-status-page-administrator-accounts-reset-link-minutes
type: fact
---
Password reset links for status page administrator accounts are valid for 60 minutes.

Modeled from REQ-status-status-page-administrator-accounts-reset-link-validity so the claim can be checked for contradictions.
