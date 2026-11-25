---
title: A deleted activation on the license server can be restored for 7 days; after that it is removed for good.
status: active
semantic_text: A deleted activation on the license server can be restored for 7 days; after that it is removed for good.
semantic_clauses:
  - A deleted activation on the license server can be restored for 7 days
  - after that it is removed for good
logic_claims:
  - CLAIM-D2415E07395DCF40
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 183c0a9f64f6ceb4596d36ad065b595252160ef001fd19002f72fbc004952660
semantic_inventory:
  - claim_key: CLAIM-D2415E07395DCF40
    claim_text: A deleted activation on the license server can be restored for 7 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - license.activations
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 71
      end: 104
    subjects:
      - license.activations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-156'
  recorded_at: '2025-12-19T13:25:18.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
id: REQ-license-activations-deletion-grace
type: req
---
A deleted activation on the license server can be restored for 7 days; after that it is removed for good.

## Context

Reason not stated.

## Source

> feat(license): 7-day restore window for activations (LIC-156)

Source: License server decision log - LIC-156
