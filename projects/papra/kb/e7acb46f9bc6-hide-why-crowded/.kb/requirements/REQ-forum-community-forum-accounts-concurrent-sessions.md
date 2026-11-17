---
title: A community forum account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.
status: active
semantic_text: A community forum account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.
semantic_clauses:
  - A community forum account can have at most 10 sessions at a time
  - signing in beyond that ends the oldest one
logic_claims:
  - CLAIM-5CC323D88ADFDE15
  - CLAIM-D659683A97EF2AD8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c2378a3a5ae3ab65a66b9a8fb9642ea3d343b055aaa6ce6eafed4fadeeb78309
semantic_inventory:
  - claim_key: CLAIM-5CC323D88ADFDE15
    claim_text: A community forum account can have at most 10 sessions at a time
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - forum.community_forum_accounts
  - claim_key: CLAIM-D659683A97EF2AD8
    claim_text: signing in beyond that ends the oldest one
    role: descriptive
    status: modeled
    span:
      start: 66
      end: 108
    subjects:
      - forum.community_forum_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-355'
  recorded_at: '2026-06-16T13:58:45.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Shared logins were a way around per-seat pricing.
id: REQ-forum-community-forum-accounts-concurrent-sessions
type: req
---
A community forum account can have at most 10 sessions at a time; signing in beyond that ends the oldest one.

## Context

Shared logins were a way around per-seat pricing.

## Source

> feat(forum): limit concurrent sessions (FRM-355)

Source: Community forum operations notes - FRM-355
