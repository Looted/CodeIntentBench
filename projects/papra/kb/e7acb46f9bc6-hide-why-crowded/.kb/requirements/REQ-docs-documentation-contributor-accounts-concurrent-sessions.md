---
title: A documentation contributor account can have at most 2 sessions at a time; signing in beyond that ends the oldest one.
status: active
semantic_text: A documentation contributor account can have at most 2 sessions at a time; signing in beyond that ends the oldest one.
semantic_clauses:
  - A documentation contributor account can have at most 2 sessions at a time
  - signing in beyond that ends the oldest one
logic_claims:
  - CLAIM-0CA8DB9F7325F173
  - CLAIM-D659683A97EF2AD8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8cf44e6b86659fd4dfc37af389c54258ed004397667aafa1f50b015e1643ce28
semantic_inventory:
  - claim_key: CLAIM-0CA8DB9F7325F173
    claim_text: A documentation contributor account can have at most 2 sessions at a time
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - docs.documentation_contributor_accounts
  - claim_key: CLAIM-D659683A97EF2AD8
    claim_text: signing in beyond that ends the oldest one
    role: descriptive
    status: modeled
    span:
      start: 75
      end: 117
    subjects:
      - docs.documentation_contributor_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-391'
  recorded_at: '2025-12-28T13:56:35.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
id: REQ-docs-documentation-contributor-accounts-concurrent-sessions
type: req
---
A documentation contributor account can have at most 2 sessions at a time; signing in beyond that ends the oldest one.

## Context

Reason not stated.

## Source

> feat(docs): limit concurrent sessions (DOC-391)

Source: Documentation site decision log (apps/docs) - DOC-391
