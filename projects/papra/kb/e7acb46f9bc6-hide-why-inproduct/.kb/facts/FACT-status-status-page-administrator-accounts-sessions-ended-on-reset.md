---
title: status.status_page_administrator_accounts sessions_ended_on_reset = all but current
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: sessions_ended_on_reset
operator: eq
value_type: string
value_string: all but current
claim_key: CLAIM-1C851B102C07BE8C
claim_text: Resetting the password of a status page administrator account keeps the session that performed the reset and ends all others
text_ref: REQ-status-status-page-administrator-accounts-reset-and-sessions
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-166'
  recorded_at: '2026-02-10T16:57:18.000Z'
id: FACT-status-status-page-administrator-accounts-sessions-ended-on-reset
type: fact
---
Resetting the password of a status page administrator account keeps the session that performed the reset and ends all others.

Modeled from REQ-status-status-page-administrator-accounts-reset-and-sessions so the claim can be checked for contradictions.
