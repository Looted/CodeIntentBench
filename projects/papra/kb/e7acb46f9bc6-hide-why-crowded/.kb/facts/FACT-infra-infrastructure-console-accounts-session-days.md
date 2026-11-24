---
title: infra.infrastructure_console_accounts session_days = 90
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: session_days
operator: eq
value_type: int
value_int: 90
claim_key: CLAIM-1C08EF3C6EAA2EAC
claim_text: Sessions of infrastructure console accounts last at most 90 days
text_ref: REQ-infra-infrastructure-console-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-190'
  recorded_at: '2025-07-21T11:22:06.000Z'
id: FACT-infra-infrastructure-console-accounts-session-days
type: fact
---
Sessions of infrastructure console accounts last at most 90 days.

Modeled from REQ-infra-infrastructure-console-accounts-session-lifetime so the claim can be checked for contradictions.
