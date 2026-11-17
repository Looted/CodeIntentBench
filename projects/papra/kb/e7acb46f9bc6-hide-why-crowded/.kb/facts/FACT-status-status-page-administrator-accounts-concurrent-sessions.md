---
title: status.status_page_administrator_accounts concurrent_sessions = 10
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: concurrent_sessions
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-1D37ED3DC367694E
claim_text: A status page administrator account can have at most 10 sessions at a time
text_ref: REQ-status-status-page-administrator-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-309'
  recorded_at: '2025-06-12T09:43:32.000Z'
id: FACT-status-status-page-administrator-accounts-concurrent-sessions
type: fact
---
A status page administrator account can have at most 10 sessions at a time.

Modeled from REQ-status-status-page-administrator-accounts-concurrent-sessions so the claim can be checked for contradictions.
