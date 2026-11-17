---
title: status.status_page_administrator_accounts session_days = 1
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: session_days
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-54A4D24DAD046A55
claim_text: Sessions of status page administrator accounts last at most 1 day
text_ref: REQ-status-status-page-administrator-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-304'
  recorded_at: '2025-05-13T12:56:08.000Z'
id: FACT-status-status-page-administrator-accounts-session-days
type: fact
---
Sessions of status page administrator accounts last at most 1 day.

Modeled from REQ-status-status-page-administrator-accounts-session-lifetime so the claim can be checked for contradictions.
