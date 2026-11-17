---
title: The back office customer search returns at most 10 results per page.
status: active
semantic_text: The back office customer search returns at most 10 results per page.
semantic_clauses:
  - The back office customer search returns at most 10 results per page
logic_claims:
  - CLAIM-4724DB170F676D6A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dc15cb565565b19d6b6c0f587ccd0f27405cfaf9c826400d9c031289c4e5cc08
semantic_inventory:
  - claim_key: CLAIM-4724DB170F676D6A
    claim_text: The back office customer search returns at most 10 results per page
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - backoffice.back_office_customer_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-222'
  recorded_at: '2026-03-18T10:25:40.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: The response of a larger page was too big for mobile connections.
id: REQ-backoffice-back-office-customer-search-page-size
type: req
---
The back office customer search returns at most 10 results per page.

## Context

The response of a larger page was too big for mobile connections.

## Source

> feat(backoffice): 10 results per page (OPS-222)

Source: Papra Cloud back office handbook - OPS-222
