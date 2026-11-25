---
title: Deleting a coupon code in the Papra Cloud back office removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a coupon code in the Papra Cloud back office removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a coupon code in the Papra Cloud back office removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-FA57C1B94A29969D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 371c4bc644e301055e5afd8427a0c94136479348a720e19f73b50ff65b4ca79f
semantic_inventory:
  - claim_key: CLAIM-FA57C1B94A29969D
    claim_text: Deleting a coupon code in the Papra Cloud back office removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 128
    subjects:
      - backoffice.coupon_codes
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-173'
  recorded_at: '2026-08-27T16:43:10.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Asking for confirmation once per use made cleaning up coupon codes impractical.
id: REQ-backoffice-coupon-codes-delete-in-use
type: req
---
Deleting a coupon code in the Papra Cloud back office removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up coupon codes impractical.

## Source

> feat(backoffice): deleting a coupon code detaches it (OPS-173)

Source: Papra Cloud back office handbook - OPS-173
