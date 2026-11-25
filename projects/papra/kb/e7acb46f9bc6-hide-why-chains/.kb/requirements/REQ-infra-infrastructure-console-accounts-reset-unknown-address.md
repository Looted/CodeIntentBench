---
title: Asking for a password reset for an address that has no account among infrastructure console accounts gives the same answer as for one that does.
status: active
semantic_text: Asking for a password reset for an address that has no account among infrastructure console accounts gives the same answer as for one that does.
semantic_clauses:
  - Asking for a password reset for an address that has no account among infrastructure console accounts gives the same answer as for one that does
logic_claims:
  - CLAIM-3A92DD37C0E29DBC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0b7d758dfcb712efd0aad0eaf2daaf29edd848b0b01394bf9c4fb6cf4fd7a0e8
semantic_inventory:
  - claim_key: CLAIM-3A92DD37C0E29DBC
    claim_text: Asking for a password reset for an address that has no account among infrastructure console accounts gives the same answer as for one that does
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 143
    subjects:
      - infra.infrastructure_console_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-183'
  recorded_at: '2025-05-15T15:51:35.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: The form could be used to check whether an address had an account.
id: REQ-infra-infrastructure-console-accounts-reset-unknown-address
type: req
---
Asking for a password reset for an address that has no account among infrastructure console accounts gives the same answer as for one that does.

## Context

The form could be used to check whether an address had an account.

## Source

> fix(infra): do not reveal accounts on reset (INF-183)

Source: Infrastructure runbook - INF-183
