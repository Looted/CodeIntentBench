---
title: infra.infrastructure_console_accounts session_idle_minutes = 30
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: session_idle_minutes
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-3547C110EC2A0F3A
claim_text: they end after 30 minutes without activity
text_ref: REQ-infra-infrastructure-console-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-190'
  recorded_at: '2025-07-21T11:22:06.000Z'
id: FACT-infra-infrastructure-console-accounts-session-idle-minutes
type: fact
---
They end after 30 minutes without activity.

Modeled from REQ-infra-infrastructure-console-accounts-session-lifetime so the claim can be checked for contradictions.
