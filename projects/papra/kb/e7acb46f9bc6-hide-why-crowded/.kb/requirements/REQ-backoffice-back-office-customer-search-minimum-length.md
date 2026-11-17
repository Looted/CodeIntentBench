---
title: The back office customer search runs only once the query has at least 2 characters.
status: active
semantic_text: The back office customer search runs only once the query has at least 2 characters.
semantic_clauses:
  - The back office customer search runs only once the query has at least 2 characters
logic_claims:
  - CLAIM-BD29F8C57DF78EAE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3702bcff5dc9607c6455986328b8a446703fa3506371fb812eee123e317f48e2
semantic_inventory:
  - claim_key: CLAIM-BD29F8C57DF78EAE
    claim_text: The back office customer search runs only once the query has at least 2 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - backoffice.back_office_customer_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-220'
  recorded_at: '2025-03-08T17:09:33.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-back-office-customer-search-minimum-length
type: req
---
The back office customer search runs only once the query has at least 2 characters.

## Context

Reason not stated.

## Source

> feat(backoffice): minimum query length 2 (OPS-220)

Source: Papra Cloud back office handbook - OPS-220
