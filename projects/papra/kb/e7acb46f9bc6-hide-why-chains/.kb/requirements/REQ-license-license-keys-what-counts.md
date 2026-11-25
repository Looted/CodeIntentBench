---
title: Only license keys the customer owns count toward the limit on the license server; license keys shared with them do not count.
status: active
semantic_text: Only license keys the customer owns count toward the limit on the license server; license keys shared with them do not count.
semantic_clauses:
  - Only license keys the customer owns count toward the limit on the license server
  - license keys shared with them do not count
logic_claims:
  - CLAIM-E44113C05F27008F
  - CLAIM-D45D95D72AD463C2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 706ab0c19e4afff54753ecc8096622fe312b2ef993dde46e0d50826eb3aac004
semantic_inventory:
  - claim_key: CLAIM-E44113C05F27008F
    claim_text: Only license keys the customer owns count toward the limit on the license server
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - license.license_keys
  - claim_key: CLAIM-D45D95D72AD463C2
    claim_text: license keys shared with them do not count
    role: descriptive
    status: modeled
    span:
      start: 82
      end: 124
    subjects:
      - license.license_keys
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-224'
  recorded_at: '2025-06-12T08:55:25.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
id: REQ-license-license-keys-what-counts
type: req
---
Only license keys the customer owns count toward the limit on the license server; license keys shared with them do not count.

## Context

Reason not stated.

## Source

> feat(license): which license keys count toward the limit (LIC-224)

Source: License server decision log - LIC-224
