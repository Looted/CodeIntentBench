---
title: An empty query in the partner portal payout search returns nothing.
status: active
semantic_text: An empty query in the partner portal payout search returns nothing.
semantic_clauses:
  - An empty query in the partner portal payout search returns nothing
logic_claims:
  - CLAIM-8B4D2E2E74456F76
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6836b1c733eeeb15bb7550633d86fa299bcba1cd67a1aa1579e9bb81c976ea69
semantic_inventory:
  - claim_key: CLAIM-8B4D2E2E74456F76
    claim_text: An empty query in the partner portal payout search returns nothing
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 66
    subjects:
      - portal.partner_portal_payout_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-233'
  recorded_at: '2025-04-15T16:56:46.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Listing everything for an empty query was the most expensive request the page made.
id: REQ-portal-partner-portal-payout-search-empty-query
type: req
---
An empty query in the partner portal payout search returns nothing.

## Context

Listing everything for an empty query was the most expensive request the page made.

## Source

> feat(portal): empty search query (PRT-233)

Source: Partner portal decision log - PRT-233
