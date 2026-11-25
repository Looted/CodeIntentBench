---
title: A query in the partner portal payout search is limited to 2048 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the partner portal payout search is limited to 2048 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the partner portal payout search is limited to 2048 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-1005A64D1CEA428C
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 36293aea75894b00ef59a8c1d8561009edf99da0231bfd6506d1f8887d8c6157
semantic_inventory:
  - claim_key: CLAIM-1005A64D1CEA428C
    claim_text: A query in the partner portal payout search is limited to 2048 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - portal.partner_portal_payout_search
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 75
      end: 124
    subjects:
      - portal.partner_portal_payout_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-194'
  recorded_at: '2025-10-28T12:24:22.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-partner-portal-payout-search-query-length
type: req
---
A query in the partner portal payout search is limited to 2048 characters; longer input is cut to the limit without an error.

## Context

Reason not stated.

## Source

> feat(portal): limit search query length to 2048 (PRT-194)

Source: Partner portal decision log - PRT-194
