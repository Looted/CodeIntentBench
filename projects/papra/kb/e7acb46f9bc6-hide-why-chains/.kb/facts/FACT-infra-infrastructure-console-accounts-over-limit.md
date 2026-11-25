---
title: infra.infrastructure_console_accounts over_limit = oldest ended
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: over_limit
operator: eq
value_type: string
value_string: oldest ended
claim_key: CLAIM-D659683A97EF2AD8
claim_text: signing in beyond that ends the oldest one
text_ref: REQ-infra-infrastructure-console-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-193'
  recorded_at: '2026-04-26T08:55:18.000Z'
id: FACT-infra-infrastructure-console-accounts-over-limit
type: fact
---
Signing in beyond that ends the oldest one.

Modeled from REQ-infra-infrastructure-console-accounts-concurrent-sessions so the claim can be checked for contradictions.
