---
title: status.status_page_administrator_accounts over_limit = oldest ended
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: over_limit
operator: eq
value_type: string
value_string: oldest ended
claim_key: CLAIM-D659683A97EF2AD8
claim_text: signing in beyond that ends the oldest one
text_ref: REQ-status-status-page-administrator-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-193'
  recorded_at: '2025-06-12T09:43:32.000Z'
id: FACT-status-status-page-administrator-accounts-over-limit
type: fact
---
Signing in beyond that ends the oldest one.

Modeled from REQ-status-status-page-administrator-accounts-concurrent-sessions so the claim can be checked for contradictions.
