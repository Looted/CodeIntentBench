---
title: A support portal account can have at most 5 sessions at a time; signing in beyond that ends the oldest one.
status: active
semantic_text: A support portal account can have at most 5 sessions at a time; signing in beyond that ends the oldest one.
semantic_clauses:
  - A support portal account can have at most 5 sessions at a time
  - signing in beyond that ends the oldest one
logic_claims:
  - CLAIM-358BFBD62FAE0043
  - CLAIM-D659683A97EF2AD8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 91036b3eba2622eadcd085d3d982ad92a4e605e1a27d9b208c5bf83cd4f389b1
semantic_inventory:
  - claim_key: CLAIM-358BFBD62FAE0043
    claim_text: A support portal account can have at most 5 sessions at a time
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - support.support_portal_accounts
  - claim_key: CLAIM-D659683A97EF2AD8
    claim_text: signing in beyond that ends the oldest one
    role: descriptive
    status: modeled
    span:
      start: 64
      end: 106
    subjects:
      - support.support_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-244'
  recorded_at: '2025-12-16T08:27:46.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Shared logins were a way around per-seat pricing.
id: REQ-support-support-portal-accounts-concurrent-sessions
type: req
---
A support portal account can have at most 5 sessions at a time; signing in beyond that ends the oldest one.

## Context

Shared logins were a way around per-seat pricing.

## Source

> feat(support): limit concurrent sessions (SUP-244)

Source: Support portal decision log - SUP-244
