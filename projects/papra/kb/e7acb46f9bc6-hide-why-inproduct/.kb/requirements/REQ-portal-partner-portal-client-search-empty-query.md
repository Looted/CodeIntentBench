---
title: An empty query in the partner portal client search lists the most recent items.
status: active
semantic_text: An empty query in the partner portal client search lists the most recent items.
semantic_clauses:
  - An empty query in the partner portal client search lists the most recent items
logic_claims:
  - CLAIM-95BA70B0295F75CD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b3ba4c0c4da110036d0863bb3fe3e88775d782f98d8caaf714c293fc3ad0215a
semantic_inventory:
  - claim_key: CLAIM-95BA70B0295F75CD
    claim_text: An empty query in the partner portal client search lists the most recent items
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - portal.partner_portal_client_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-162'
  recorded_at: '2025-07-09T16:03:17.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Listing everything for an empty query was the most expensive request the page made.
id: REQ-portal-partner-portal-client-search-empty-query
type: req
---
An empty query in the partner portal client search lists the most recent items.

## Context

Listing everything for an empty query was the most expensive request the page made.

## Source

> feat(portal): empty search query (PRT-162)

Source: Partner portal decision log - PRT-162
