---
title: A deleted organization in the Papra Cloud back office can be restored for 30 days; after that it is removed for good.
status: active
semantic_text: A deleted organization in the Papra Cloud back office can be restored for 30 days; after that it is removed for good.
semantic_clauses:
  - A deleted organization in the Papra Cloud back office can be restored for 30 days
  - after that it is removed for good
logic_claims:
  - CLAIM-29AB73969A7CF6E4
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bf8f60d3b374c6526a0bab45ba3b60b7442281bc41caabea59c559e0b278b26f
semantic_inventory:
  - claim_key: CLAIM-29AB73969A7CF6E4
    claim_text: A deleted organization in the Papra Cloud back office can be restored for 30 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - backoffice.organizations
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 83
      end: 116
    subjects:
      - backoffice.organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-453'
  recorded_at: '2026-04-10T15:37:21.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-organizations-deletion-grace
type: req
---
A deleted organization in the Papra Cloud back office can be restored for 30 days; after that it is removed for good.

## Context

Reason not stated.

## Source

> feat(backoffice): 30-day restore window for organizations (OPS-453)

Source: Papra Cloud back office handbook - OPS-453
