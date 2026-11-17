---
title: infra.infrastructure_console_accounts reset_reveals_account = False
status: active
fact_kind: property_value
subject_key: infra.infrastructure_console_accounts
property_key: reset_reveals_account
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-3A92DD37C0E29DBC
claim_text: Asking for a password reset for an address that has no account among infrastructure console accounts gives the same answer as for one that does
text_ref: REQ-infra-infrastructure-console-accounts-reset-unknown-address
tags:
  - lane:strict
  - knowledge-source:infra-decisions
origin:
  kind: agent
  ref: 'Infrastructure runbook: INF-183'
  recorded_at: '2025-05-15T15:51:35.000Z'
id: FACT-infra-infrastructure-console-accounts-reset-reveals-account
type: fact
---
Asking for a password reset for an address that has no account among infrastructure console accounts gives the same answer as for one that does.

Modeled from REQ-infra-infrastructure-console-accounts-reset-unknown-address so the claim can be checked for contradictions.
