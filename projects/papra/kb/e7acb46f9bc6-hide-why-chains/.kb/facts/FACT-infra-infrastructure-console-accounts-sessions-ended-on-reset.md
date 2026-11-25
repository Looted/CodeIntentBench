---
title: infra.infrastructure_console_accounts sessions_ended_on_reset = all but current
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: sessions_ended_on_reset
operator: eq
value_type: string
value_string: all but current
claim_key: CLAIM-488351D81B934654
claim_text: Resetting the password of an infrastructure console account keeps the session that performed the reset and ends all others
text_ref: REQ-infra-infrastructure-console-accounts-reset-and-sessions
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-166'
  recorded_at: '2025-02-06T09:15:17.000Z'
id: FACT-infra-infrastructure-console-accounts-sessions-ended-on-reset
type: fact
---
Resetting the password of an infrastructure console account keeps the session that performed the reset and ends all others.

Modeled from REQ-infra-infrastructure-console-accounts-reset-and-sessions so the claim can be checked for contradictions.
