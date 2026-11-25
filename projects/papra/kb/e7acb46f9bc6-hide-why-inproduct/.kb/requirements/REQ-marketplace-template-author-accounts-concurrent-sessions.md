---
title: A template author account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.
status: active
semantic_text: A template author account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.
semantic_clauses:
  - A template author account can have at most 10 sessions at a time
  - signing in beyond that ends the oldest one
logic_claims:
  - CLAIM-401D57EFA0E16945
  - CLAIM-D659683A97EF2AD8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b00587c9192ced93b8161edf29e35a0fe6e74ec2142e161b5919e0bbed04bfd7
semantic_inventory:
  - claim_key: CLAIM-401D57EFA0E16945
    claim_text: A template author account can have at most 10 sessions at a time
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - marketplace.template_author_accounts
  - claim_key: CLAIM-D659683A97EF2AD8
    claim_text: signing in beyond that ends the oldest one
    role: descriptive
    status: modeled
    span:
      start: 66
      end: 108
    subjects:
      - marketplace.template_author_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-212'
  recorded_at: '2026-06-05T15:36:52.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: Shared logins were a way around per-seat pricing.
id: REQ-marketplace-template-author-accounts-concurrent-sessions
type: req
---
A template author account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.

## Context

Shared logins were a way around per-seat pricing.

## Source

> feat(marketplace): limit concurrent sessions (MKT-212)

Source: Template marketplace decision log - MKT-212
