---
title: A query in the partner portal client search is limited to 2048 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the partner portal client search is limited to 2048 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the partner portal client search is limited to 2048 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-568EA768CE9C106A
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d1f2e8a090528a5561dd146b368952ec68c019f63dc0f1aa27483bf9af7166e2
semantic_inventory:
  - claim_key: CLAIM-568EA768CE9C106A
    claim_text: A query in the partner portal client search is limited to 2048 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - portal.partner_portal_client_search
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 75
      end: 124
    subjects:
      - portal.partner_portal_client_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-141'
  recorded_at: '2026-04-20T14:01:15.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Very long queries were used to slow the search backend down.
id: REQ-portal-partner-portal-client-search-query-length
type: req
---
A query in the partner portal client search is limited to 2048 characters; longer input is cut to the limit without an error.

## Context

Very long queries were used to slow the search backend down.

## Source

> feat(portal): limit search query length to 2048 (PRT-141)

Source: Partner portal decision log - PRT-141
