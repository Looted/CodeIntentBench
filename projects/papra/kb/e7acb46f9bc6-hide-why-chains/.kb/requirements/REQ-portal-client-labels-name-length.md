---
title: Client label names in the partner portal are limited to 100 characters.
status: active
semantic_text: Client label names in the partner portal are limited to 100 characters.
semantic_clauses:
  - Client label names in the partner portal are limited to 100 characters
logic_claims:
  - CLAIM-0AFA75F37DAB5294
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ce20e78c3cb87158f025533480e299c8d50f1dc5999855f9426cdc4b3269ce70
semantic_inventory:
  - claim_key: CLAIM-0AFA75F37DAB5294
    claim_text: Client label names in the partner portal are limited to 100 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - portal.client_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-121'
  recorded_at: '2025-03-19T10:46:41.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: Longer names broke the layout of the list where client labels are shown.
id: REQ-portal-client-labels-name-length
type: req
---
Client label names in the partner portal are limited to 100 characters.

## Context

Longer names broke the layout of the list where client labels are shown.

## Source

> feat(portal): cap client label name length at 100 (PRT-121)

Source: Partner portal decision log - PRT-121
