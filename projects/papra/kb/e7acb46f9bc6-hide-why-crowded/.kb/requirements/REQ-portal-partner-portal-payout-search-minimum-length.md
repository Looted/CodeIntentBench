---
title: The partner portal payout search runs only once the query has at least 1 character.
status: active
semantic_text: The partner portal payout search runs only once the query has at least 1 character.
semantic_clauses:
  - The partner portal payout search runs only once the query has at least 1 character
logic_claims:
  - CLAIM-5CEE7C4E0297A4C7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9553841a647d182ac35be78a441d2d593f26af27d2ab3bf9f26a5fc567fb11a9
semantic_inventory:
  - claim_key: CLAIM-5CEE7C4E0297A4C7
    claim_text: The partner portal payout search runs only once the query has at least 1 character
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - portal.partner_portal_payout_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-201'
  recorded_at: '2026-08-10T14:22:47.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-portal-partner-portal-payout-search-minimum-length
type: req
---
The partner portal payout search runs only once the query has at least 1 character.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(portal): minimum query length 1 (PRT-201)

Source: Partner portal decision log - PRT-201
