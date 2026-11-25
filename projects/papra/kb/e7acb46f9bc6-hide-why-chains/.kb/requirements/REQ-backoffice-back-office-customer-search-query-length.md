---
title: A query in the back office customer search is limited to 2048 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the back office customer search is limited to 2048 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the back office customer search is limited to 2048 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-268E3899095B0F0E
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6d563f50f94ff195bccb2aaca9ef6a0dc7c8437fd1d0ef1255e8b93dd25c4e44
semantic_inventory:
  - claim_key: CLAIM-268E3899095B0F0E
    claim_text: A query in the back office customer search is limited to 2048 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - backoffice.back_office_customer_search
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 74
      end: 122
    subjects:
      - backoffice.back_office_customer_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-207'
  recorded_at: '2026-02-19T16:27:21.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-back-office-customer-search-query-length
type: req
---
A query in the back office customer search is limited to 2048 characters; longer input is rejected with a validation error.

## Context

Reason not stated.

## Source

> feat(backoffice): limit search query length to 2048 (OPS-207)

Source: Papra Cloud back office handbook - OPS-207
