---
title: A back office staff account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.
status: active
semantic_text: A back office staff account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.
semantic_clauses:
  - A back office staff account can have at most 10 sessions at a time
  - signing in beyond that ends the oldest one
logic_claims:
  - CLAIM-6A8323E97C7A0BBC
  - CLAIM-D659683A97EF2AD8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0bf3f62e21d6b60e26d0496492bf12af3188b60e29f93fb7a18c82dc60d069ff
semantic_inventory:
  - claim_key: CLAIM-6A8323E97C7A0BBC
    claim_text: A back office staff account can have at most 10 sessions at a time
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 66
    subjects:
      - backoffice.back_office_staff_accounts
  - claim_key: CLAIM-D659683A97EF2AD8
    claim_text: signing in beyond that ends the oldest one
    role: descriptive
    status: modeled
    span:
      start: 68
      end: 110
    subjects:
      - backoffice.back_office_staff_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-568'
  recorded_at: '2025-08-27T17:35:07.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-back-office-staff-accounts-concurrent-sessions
type: req
---
A back office staff account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.

## Context

Reason not stated.

## Source

> feat(backoffice): limit concurrent sessions (OPS-568)

Source: Papra Cloud back office handbook - OPS-568
