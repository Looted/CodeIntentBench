---
title: Passwords of infrastructure console accounts are at least 12 characters long; there is no rule about character classes.
status: active
semantic_text: Passwords of infrastructure console accounts are at least 12 characters long; there is no rule about character classes.
semantic_clauses:
  - Passwords of infrastructure console accounts are at least 12 characters long
  - there is no rule about character classes
logic_claims:
  - CLAIM-72FE6D2B3EF29AD1
  - CLAIM-3BB7AA89852B2146
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 03bb15a913b79ae473d59ed24703daf5839fdba16122f9af33d04dcfbc41f088
semantic_inventory:
  - claim_key: CLAIM-72FE6D2B3EF29AD1
    claim_text: Passwords of infrastructure console accounts are at least 12 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - infra.infrastructure_console_accounts
  - claim_key: CLAIM-3BB7AA89852B2146
    claim_text: there is no rule about character classes
    role: descriptive
    status: modeled
    span:
      start: 78
      end: 118
    subjects:
      - infra.infrastructure_console_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-194'
  recorded_at: '2026-01-15T14:57:27.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: Length does more than rules about symbols, which people satisfy with "!" at the end.
id: REQ-infra-infrastructure-console-accounts-password-length
type: req
---
Passwords of infrastructure console accounts are at least 12 characters long; there is no rule about character classes.

## Context

Length does more than rules about symbols, which people satisfy with "!" at the end.

## Source

> feat(infra): password minimum length 12 (INF-194)

Source: Infrastructure runbook - INF-194
