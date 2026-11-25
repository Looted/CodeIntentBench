---
title: infra.infrastructure_console_accounts reset_disables_two_factor = False
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: reset_disables_two_factor
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-D3EAF01CC14240C9
claim_text: Resetting the password of an infrastructure console account does not turn off two-factor authentication
text_ref: REQ-infra-infrastructure-console-accounts-reset-and-two-factor
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-195'
  recorded_at: '2026-08-12T13:25:30.000Z'
id: FACT-infra-infrastructure-console-accounts-reset-disables-two-factor
type: fact
---
Resetting the password of an infrastructure console account does not turn off two-factor authentication.

Modeled from REQ-infra-infrastructure-console-accounts-reset-and-two-factor so the claim can be checked for contradictions.
