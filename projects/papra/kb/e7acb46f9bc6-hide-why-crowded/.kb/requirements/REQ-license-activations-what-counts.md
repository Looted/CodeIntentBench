---
title: Only activations the license key owns count toward the limit on the license server; activations shared with them do not count.
status: active
semantic_text: Only activations the license key owns count toward the limit on the license server; activations shared with them do not count.
semantic_clauses:
  - Only activations the license key owns count toward the limit on the license server
  - activations shared with them do not count
logic_claims:
  - CLAIM-2F64BEC154DD873A
  - CLAIM-240CFFCF41CFD695
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f9e81ac834625142d95050d1b77644329c6904ee14f839daa48ee9eaf2bad931
semantic_inventory:
  - claim_key: CLAIM-2F64BEC154DD873A
    claim_text: Only activations the license key owns count toward the limit on the license server
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - license.activations
  - claim_key: CLAIM-240CFFCF41CFD695
    claim_text: activations shared with them do not count
    role: descriptive
    status: modeled
    span:
      start: 84
      end: 125
    subjects:
      - license.activations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-191'
  recorded_at: '2025-03-15T11:31:52.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: Archiving had become a way around the limit.
id: REQ-license-activations-what-counts
type: req
---
Only activations the license key owns count toward the limit on the license server; activations shared with them do not count.

## Context

Archiving had become a way around the limit.

## Source

> feat(license): which activations count toward the limit (LIC-191)

Source: License server decision log - LIC-191
