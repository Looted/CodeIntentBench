---
title: The activation limit on the license server follows the plan of the license key and is not set by hand.
status: active
semantic_text: The activation limit on the license server follows the plan of the license key and is not set by hand.
semantic_clauses:
  - The activation limit on the license server follows the plan of the license key and is not set by hand
logic_claims:
  - CLAIM-17AA9F996D15A001
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6453fb64927a8b5c81f30df811c07e3eed570a7a60849d24fd68a88f0d80dceb
semantic_inventory:
  - claim_key: CLAIM-17AA9F996D15A001
    claim_text: The activation limit on the license server follows the plan of the license key and is not set by hand
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 101
    subjects:
      - license.activations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-199'
  recorded_at: '2025-02-04T09:54:26.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: Hand-set exceptions had been forgotten and never reviewed.
id: REQ-license-activations-limit-override
type: req
---
The activation limit on the license server follows the plan of the license key and is not set by hand.

## Context

Hand-set exceptions had been forgotten and never reviewed.

## Source

> feat(license): overriding the activation limit (LIC-199)

Source: License server decision log - LIC-199
