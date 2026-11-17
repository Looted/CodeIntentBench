---
title: The license lookup runs only once the query has at least 3 characters.
status: active
semantic_text: The license lookup runs only once the query has at least 3 characters.
semantic_clauses:
  - The license lookup runs only once the query has at least 3 characters
logic_claims:
  - CLAIM-00165926C426B95A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8d0e26e4750d1c627c15f5aed25b214c6ea435db3cfd8761bacac83eea197cf3
semantic_inventory:
  - claim_key: CLAIM-00165926C426B95A
    claim_text: The license lookup runs only once the query has at least 3 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - license.license_lookup
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-110'
  recorded_at: '2025-12-11T12:37:10.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: One-letter queries matched nearly everything and were slow to render.
id: REQ-license-license-lookup-minimum-length
type: req
---
The license lookup runs only once the query has at least 3 characters.

## Context

One-letter queries matched nearly everything and were slow to render.

## Source

> feat(license): minimum query length 3 (LIC-110)

Source: License server decision log - LIC-110
