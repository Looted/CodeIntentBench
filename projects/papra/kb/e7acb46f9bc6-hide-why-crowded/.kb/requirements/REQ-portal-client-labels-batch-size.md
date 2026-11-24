---
title: At most 50 client labels can be added or removed in one request in the partner portal.
status: active
semantic_text: At most 50 client labels can be added or removed in one request in the partner portal.
semantic_clauses:
  - At most 50 client labels can be added or removed in one request in the partner portal
logic_claims:
  - CLAIM-1038296A6AAE015F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c6fb6beb21d585e93a69821b06563ff8951b58b9f25d254f3ac641dc0e6610a0
semantic_inventory:
  - claim_key: CLAIM-1038296A6AAE015F
    claim_text: At most 50 client labels can be added or removed in one request in the partner portal
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - portal.client_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-136'
  recorded_at: '2025-08-13T15:01:06.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-client-labels-batch-size
type: req
---
At most 50 client labels can be added or removed in one request in the partner portal.

## Context

Reason not stated.

## Source

> feat(portal): batch client labels, 50 per request (PRT-136)

Source: Partner portal decision log - PRT-136
