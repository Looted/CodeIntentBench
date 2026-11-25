---
title: The sandbox organization limit in the Papra Cloud back office follows the plan of the customer and is not set by hand.
status: active
semantic_text: The sandbox organization limit in the Papra Cloud back office follows the plan of the customer and is not set by hand.
semantic_clauses:
  - The sandbox organization limit in the Papra Cloud back office follows the plan of the customer and is not set by hand
logic_claims:
  - CLAIM-F0BFBEEEBA89F78F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 33a31b1e1f8c6b8847bc69dd2dc492469329929b6ecb70bf39c683dc126fa0a3
semantic_inventory:
  - claim_key: CLAIM-F0BFBEEEBA89F78F
    claim_text: The sandbox organization limit in the Papra Cloud back office follows the plan of the customer and is not set by hand
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 117
    subjects:
      - backoffice.sandbox_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-260'
  recorded_at: '2025-12-26T17:46:52.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Support needed a way to help one customer without changing the limit for all.
id: REQ-backoffice-sandbox-organizations-limit-override
type: req
---
The sandbox organization limit in the Papra Cloud back office follows the plan of the customer and is not set by hand.

## Context

Support needed a way to help one customer without changing the limit for all.

## Source

> feat(backoffice): overriding the sandbox organization limit (OPS-260)

Source: Papra Cloud back office handbook - OPS-260
