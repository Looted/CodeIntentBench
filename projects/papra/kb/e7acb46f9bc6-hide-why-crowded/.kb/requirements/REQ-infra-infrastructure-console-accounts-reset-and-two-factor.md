---
title: Resetting the password of an infrastructure console account does not turn off two-factor authentication.
status: active
semantic_text: Resetting the password of an infrastructure console account does not turn off two-factor authentication.
semantic_clauses:
  - Resetting the password of an infrastructure console account does not turn off two-factor authentication
logic_claims:
  - CLAIM-D3EAF01CC14240C9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b36568180abbb91840fc25a70b7a0ac871e765d9f47ffda8e3d36e1f7bea30f9
semantic_inventory:
  - claim_key: CLAIM-D3EAF01CC14240C9
    claim_text: Resetting the password of an infrastructure console account does not turn off two-factor authentication
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - infra.infrastructure_console_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-195'
  recorded_at: '2026-08-12T13:25:30.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
id: REQ-infra-infrastructure-console-accounts-reset-and-two-factor
type: req
---
Resetting the password of an infrastructure console account does not turn off two-factor authentication.

## Context

Reason not stated.

## Source

> feat(infra): two-factor after a password reset (INF-195)

Source: Infrastructure runbook - INF-195
