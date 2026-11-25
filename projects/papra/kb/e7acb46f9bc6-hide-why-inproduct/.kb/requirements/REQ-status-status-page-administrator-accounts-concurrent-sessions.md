---
title: A status page administrator account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.
status: active
semantic_text: A status page administrator account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.
semantic_clauses:
  - A status page administrator account can have at most 10 sessions at a time
  - signing in beyond that ends the oldest one
logic_claims:
  - CLAIM-1D37ED3DC367694E
  - CLAIM-D659683A97EF2AD8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ace592d75f4ceebbe68d3063f97407e85125ab2d77923f3aeb6751ce3b3204bf
semantic_inventory:
  - claim_key: CLAIM-1D37ED3DC367694E
    claim_text: A status page administrator account can have at most 10 sessions at a time
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - status.status_page_administrator_accounts
  - claim_key: CLAIM-D659683A97EF2AD8
    claim_text: signing in beyond that ends the oldest one
    role: descriptive
    status: modeled
    span:
      start: 76
      end: 118
    subjects:
      - status.status_page_administrator_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-193'
  recorded_at: '2025-06-12T09:43:32.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Shared logins were a way around per-seat pricing.
id: REQ-status-status-page-administrator-accounts-concurrent-sessions
type: req
---
A status page administrator account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.

## Context

Shared logins were a way around per-seat pricing.

## Source

> feat(status): limit concurrent sessions (STA-193)

Source: Status page runbook - STA-193
