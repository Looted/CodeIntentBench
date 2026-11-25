---
title: At most 10 support macros can be added or removed in one request in the Papra Cloud back office.
status: active
semantic_text: At most 10 support macros can be added or removed in one request in the Papra Cloud back office.
semantic_clauses:
  - At most 10 support macros can be added or removed in one request in the Papra Cloud back office
logic_claims:
  - CLAIM-D6759F390F9194D1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d57a9dadd3bf1a0162c3ac4d3dd915a414394e243c0d6af3d68d3a476d7bc0cf
semantic_inventory:
  - claim_key: CLAIM-D6759F390F9194D1
    claim_text: At most 10 support macros can be added or removed in one request in the Papra Cloud back office
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 95
    subjects:
      - backoffice.support_macros
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-124'
  recorded_at: '2025-09-04T16:23:27.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Requests with more than 10 support macros timed out on slow connections.
id: REQ-backoffice-support-macros-batch-size
type: req
---
At most 10 support macros can be added or removed in one request in the Papra Cloud back office.

## Context

Requests with more than 10 support macros timed out on slow connections.

## Source

> feat(backoffice): batch support macros, 10 per request (OPS-124)

Source: Papra Cloud back office handbook - OPS-124
