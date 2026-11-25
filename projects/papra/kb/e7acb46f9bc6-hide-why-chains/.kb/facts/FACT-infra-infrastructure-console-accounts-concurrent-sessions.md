---
title: infra.infrastructure_console_accounts concurrent_sessions = 5
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: concurrent_sessions
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-EE4A4DB6C929181E
claim_text: An infrastructure console account can have at most 5 sessions at a time
text_ref: REQ-infra-infrastructure-console-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-193'
  recorded_at: '2026-04-26T08:55:18.000Z'
id: FACT-infra-infrastructure-console-accounts-concurrent-sessions
type: fact
---
An infrastructure console account can have at most 5 sessions at a time.

Modeled from REQ-infra-infrastructure-console-accounts-concurrent-sessions so the claim can be checked for contradictions.
