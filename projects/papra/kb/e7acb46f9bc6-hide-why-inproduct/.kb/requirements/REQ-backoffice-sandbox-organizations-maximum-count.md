---
title: The number of sandbox organizations per customer in the Papra Cloud back office is limited to 2; the limit is configured per deployment and 2 is the default.
status: active
semantic_text: The number of sandbox organizations per customer in the Papra Cloud back office is limited to 2; the limit is configured per deployment and 2 is the default.
semantic_clauses:
  - The number of sandbox organizations per customer in the Papra Cloud back office is limited to 2
  - the limit is configured per deployment and 2 is the default
logic_claims:
  - CLAIM-E2333448DC117BF0
  - CLAIM-646750DD567C0C73
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d53ef1a047aa0759e3cf64e6de2581f654bad1a362d4d918b93098f34f47985a
semantic_inventory:
  - claim_key: CLAIM-E2333448DC117BF0
    claim_text: The number of sandbox organizations per customer in the Papra Cloud back office is limited to 2
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 95
    subjects:
      - backoffice.sandbox_organizations
  - claim_key: CLAIM-646750DD567C0C73
    claim_text: the limit is configured per deployment and 2 is the default
    role: descriptive
    status: modeled
    span:
      start: 97
      end: 156
    subjects:
      - backoffice.sandbox_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-256'
  recorded_at: '2025-05-10T08:41:03.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Each sandbox organization reserves resources whether or not it is used.
id: REQ-backoffice-sandbox-organizations-maximum-count
type: req
---
The number of sandbox organizations per customer in the Papra Cloud back office is limited to 2; the limit is configured per deployment and 2 is the default.

## Context

Each sandbox organization reserves resources whether or not it is used.

## Why this changed

OPS-256 replaced the value recorded in OPS-186 and gives this reason for the change: Larger customers reached 1 sandbox organizations in their first month.

## Source

> feat(backoffice): limit sandbox organizations per customer (OPS-256)

Source: Papra Cloud back office handbook - OPS-256
