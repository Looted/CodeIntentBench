---
title: Deleting a customer tag in the Papra Cloud back office that is still in use is refused until nothing refers to it.
status: active
semantic_text: Deleting a customer tag in the Papra Cloud back office that is still in use is refused until nothing refers to it.
semantic_clauses:
  - Deleting a customer tag in the Papra Cloud back office that is still in use is refused until nothing refers to it
logic_claims:
  - CLAIM-3709264702538398
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4afedde48c0de73150bac406480ba9957151426d1bbc9b5e0492547463e8a255
semantic_inventory:
  - claim_key: CLAIM-3709264702538398
    claim_text: Deleting a customer tag in the Papra Cloud back office that is still in use is refused until nothing refers to it
    role: definition
    status: modeled
    span:
      start: 0
      end: 113
    subjects:
      - backoffice.customer_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-119'
  recorded_at: '2026-09-26T14:22:15.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: A deleted customer tag silently disappeared from everything that used it and nobody could tell what had been there.
id: REQ-backoffice-customer-tags-delete-in-use
type: req
---
Deleting a customer tag in the Papra Cloud back office that is still in use is refused until nothing refers to it.

## Context

A deleted customer tag silently disappeared from everything that used it and nobody could tell what had been there.

## Source

> feat(backoffice): refuse deleting customer tags in use (OPS-119)

Source: Papra Cloud back office handbook - OPS-119
