---
title: At most 25 customer tags can be added or removed in one request in the Papra Cloud back office.
status: active
semantic_text: At most 25 customer tags can be added or removed in one request in the Papra Cloud back office.
semantic_clauses:
  - At most 25 customer tags can be added or removed in one request in the Papra Cloud back office
logic_claims:
  - CLAIM-C16BA812D1D95CB0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7c26b685220733eee5bac8a1ddf5fb88677b6b58e237d63355e5e8cb56a0a69c
semantic_inventory:
  - claim_key: CLAIM-C16BA812D1D95CB0
    claim_text: At most 25 customer tags can be added or removed in one request in the Papra Cloud back office
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 94
    subjects:
      - backoffice.customer_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-127'
  recorded_at: '2025-08-08T15:41:21.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Requests with more than 25 customer tags timed out on slow connections.
id: REQ-backoffice-customer-tags-batch-size
type: req
---
At most 25 customer tags can be added or removed in one request in the Papra Cloud back office.

## Context

Requests with more than 25 customer tags timed out on slow connections.

## Source

> feat(backoffice): batch customer tags, 25 per request (OPS-127)

Source: Papra Cloud back office handbook - OPS-127
