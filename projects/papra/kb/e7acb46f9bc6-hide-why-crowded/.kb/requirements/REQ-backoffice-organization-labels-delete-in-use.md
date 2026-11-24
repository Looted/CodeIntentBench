---
title: Deleting an organization label in the Papra Cloud back office that is still in use is refused until nothing refers to it.
status: active
semantic_text: Deleting an organization label in the Papra Cloud back office that is still in use is refused until nothing refers to it.
semantic_clauses:
  - Deleting an organization label in the Papra Cloud back office that is still in use is refused until nothing refers to it
logic_claims:
  - CLAIM-93A004A672D46BCA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c3a58016c061375dd90f1e20c0dd188eb0d106c79c1f5f8dab18fbbc9da6ceb5
semantic_inventory:
  - claim_key: CLAIM-93A004A672D46BCA
    claim_text: Deleting an organization label in the Papra Cloud back office that is still in use is refused until nothing refers to it
    role: definition
    status: modeled
    span:
      start: 0
      end: 120
    subjects:
      - backoffice.organization_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-202'
  recorded_at: '2025-10-19T13:25:03.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: A deleted organization label silently disappeared from everything that used it and nobody could tell what had been there.
id: REQ-backoffice-organization-labels-delete-in-use
type: req
---
Deleting an organization label in the Papra Cloud back office that is still in use is refused until nothing refers to it.

## Context

A deleted organization label silently disappeared from everything that used it and nobody could tell what had been there.

## Source

> feat(backoffice): refuse deleting organization labels in use (OPS-202)

Source: Papra Cloud back office handbook - OPS-202
