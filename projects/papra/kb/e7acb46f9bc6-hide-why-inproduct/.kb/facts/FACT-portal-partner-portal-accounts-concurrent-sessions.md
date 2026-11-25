---
title: portal.partner_portal_accounts concurrent_sessions = 5
status: active
fact_kind: property_value
subject_key: portal.partner_portal_accounts
property_key: concurrent_sessions
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-6C2EF5CA63BADC0B
claim_text: A partner portal account can have at most 5 sessions at a time
text_ref: REQ-portal-partner-portal-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-300'
  recorded_at: '2026-05-01T08:29:16.000Z'
id: FACT-portal-partner-portal-accounts-concurrent-sessions
type: fact
---
A partner portal account can have at most 5 sessions at a time.

Modeled from REQ-portal-partner-portal-accounts-concurrent-sessions so the claim can be checked for contradictions.
