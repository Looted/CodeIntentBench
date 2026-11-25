---
title: Client labels in the partner portal are listed in the order they were created.
status: active
semantic_text: Client labels in the partner portal are listed in the order they were created.
semantic_clauses:
  - Client labels in the partner portal are listed in the order they were created
logic_claims:
  - CLAIM-91AE19531ECB171D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 73adb5242476bdd7f6cee75e55e8aea1cb5b70d0d381c63e2bfca8e54845131c
semantic_inventory:
  - claim_key: CLAIM-91AE19531ECB171D
    claim_text: Client labels in the partner portal are listed in the order they were created
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - portal.client_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-132'
  recorded_at: '2026-01-17T10:10:39.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
rationale: People looked for a client label by name and could not find it in a list ordered by creation.
id: REQ-portal-client-labels-listing-order
type: req
---
Client labels in the partner portal are listed in the order they were created.

## Context

People looked for a client label by name and could not find it in a list ordered by creation.

## Source

> feat(portal): order client labels in the order they were created (PRT-132)

Source: Partner portal decision log - PRT-132
