---
title: An infrastructure console account can have at most 5 sessions at a time; signing in beyond that ends the oldest one.
status: active
semantic_text: An infrastructure console account can have at most 5 sessions at a time; signing in beyond that ends the oldest one.
semantic_clauses:
  - An infrastructure console account can have at most 5 sessions at a time
  - signing in beyond that ends the oldest one
logic_claims:
  - CLAIM-EE4A4DB6C929181E
  - CLAIM-D659683A97EF2AD8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5726cdc46e69bcc5eeaaa83e9a6b184c5a3af52f95bc50dd977b08fb4233fa58
semantic_inventory:
  - claim_key: CLAIM-EE4A4DB6C929181E
    claim_text: An infrastructure console account can have at most 5 sessions at a time
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - infra.infrastructure_console_accounts
  - claim_key: CLAIM-D659683A97EF2AD8
    claim_text: signing in beyond that ends the oldest one
    role: descriptive
    status: modeled
    span:
      start: 73
      end: 115
    subjects:
      - infra.infrastructure_console_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-193'
  recorded_at: '2026-04-26T08:55:18.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
rationale: Shared logins were a way around per-seat pricing.
id: REQ-infra-infrastructure-console-accounts-concurrent-sessions
type: req
---
An infrastructure console account can have at most 5 sessions at a time; signing in beyond that ends the oldest one.

## Context

Shared logins were a way around per-seat pricing.

## Source

> feat(infra): limit concurrent sessions (INF-193)

Source: Infrastructure runbook - INF-193
