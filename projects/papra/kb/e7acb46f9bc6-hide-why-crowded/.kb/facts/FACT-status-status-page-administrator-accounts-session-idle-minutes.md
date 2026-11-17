---
title: status.status_page_administrator_accounts session_idle_minutes = 15
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: session_idle_minutes
operator: eq
value_type: int
value_int: 15
claim_key: CLAIM-2238FCD1AB876B7A
claim_text: they end after 15 minutes without activity
text_ref: REQ-status-status-page-administrator-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-304'
  recorded_at: '2025-05-13T12:56:08.000Z'
id: FACT-status-status-page-administrator-accounts-session-idle-minutes
type: fact
---
They end after 15 minutes without activity.

Modeled from REQ-status-status-page-administrator-accounts-session-lifetime so the claim can be checked for contradictions.
