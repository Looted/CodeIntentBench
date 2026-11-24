---
title: infra.infrastructure_console_accounts reset_link_minutes = 120
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 120
claim_key: CLAIM-CBF3F09E496C26A6
claim_text: Password reset links for infrastructure console accounts are valid for 120 minutes
text_ref: REQ-infra-infrastructure-console-accounts-reset-link-validity
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-167'
  recorded_at: '2026-04-05T11:20:02.000Z'
id: FACT-infra-infrastructure-console-accounts-reset-link-minutes
type: fact
---
Password reset links for infrastructure console accounts are valid for 120 minutes.

Modeled from REQ-infra-infrastructure-console-accounts-reset-link-validity so the claim can be checked for contradictions.
