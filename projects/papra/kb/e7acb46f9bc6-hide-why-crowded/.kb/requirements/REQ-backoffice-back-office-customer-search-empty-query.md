---
title: An empty query in the back office customer search is not sent.
status: active
semantic_text: An empty query in the back office customer search is not sent.
semantic_clauses:
  - An empty query in the back office customer search is not sent
logic_claims:
  - CLAIM-BAA999550F07E50D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c577fae9c1baa53f8f2109b18743410c90594d600a9b6f22501c850bbf29b9c0
semantic_inventory:
  - claim_key: CLAIM-BAA999550F07E50D
    claim_text: An empty query in the back office customer search is not sent
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - backoffice.back_office_customer_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-238'
  recorded_at: '2025-03-02T14:03:54.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Listing everything for an empty query was the most expensive request the page made.
id: REQ-backoffice-back-office-customer-search-empty-query
type: req
---
An empty query in the back office customer search is not sent.

## Context

Listing everything for an empty query was the most expensive request the page made.

## Source

> feat(backoffice): empty search query (OPS-238)

Source: Papra Cloud back office handbook - OPS-238
