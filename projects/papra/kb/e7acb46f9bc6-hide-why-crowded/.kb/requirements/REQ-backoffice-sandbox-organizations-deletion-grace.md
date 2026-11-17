---
title: A deleted sandbox organization in the Papra Cloud back office can be restored for 14 days; after that it is removed for good.
status: active
semantic_text: A deleted sandbox organization in the Papra Cloud back office can be restored for 14 days; after that it is removed for good.
semantic_clauses:
  - A deleted sandbox organization in the Papra Cloud back office can be restored for 14 days
  - after that it is removed for good
logic_claims:
  - CLAIM-189543D5D6B710AC
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6a5352aea6767c4592620803c42c3c0c2e3f3d7df4e5eb1c6bb71b807cc6e258
semantic_inventory:
  - claim_key: CLAIM-189543D5D6B710AC
    claim_text: A deleted sandbox organization in the Papra Cloud back office can be restored for 14 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - backoffice.sandbox_organizations
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 91
      end: 124
    subjects:
      - backoffice.sandbox_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-481'
  recorded_at: '2025-02-13T10:31:52.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-sandbox-organizations-deletion-grace
type: req
---
A deleted sandbox organization in the Papra Cloud back office can be restored for 14 days; after that it is removed for good.

## Context

Reason not stated.

## Source

> feat(backoffice): 14-day restore window for sandbox organizations (OPS-481)

Source: Papra Cloud back office handbook - OPS-481
