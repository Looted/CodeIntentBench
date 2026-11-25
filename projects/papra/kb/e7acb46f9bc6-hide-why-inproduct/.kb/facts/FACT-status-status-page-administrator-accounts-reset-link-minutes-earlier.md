---
title: status.status_page_administrator_accounts reset_link_minutes = 15
status: deprecated
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 15
claim_key: CLAIM-28E1F117136ACC7B
claim_text: Password reset links for status page administrator accounts are valid for 15 minutes
text_ref: REQ-status-status-page-administrator-accounts-reset-link-validity-earlier
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-116'
  recorded_at: '2025-05-03T09:47:38.000Z'
id: FACT-status-status-page-administrator-accounts-reset-link-minutes-earlier
type: fact
---
Password reset links for status page administrator accounts are valid for 15 minutes.

Modeled from REQ-status-status-page-administrator-accounts-reset-link-validity-earlier so the claim can be checked for contradictions.
