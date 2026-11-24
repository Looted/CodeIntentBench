---
title: 'The holder: filter of the license lookup uses exact equality, not contains matching.'
status: active
semantic_text: 'The holder: filter of the license lookup uses exact equality, not contains matching.'
semantic_clauses:
  - 'The holder: filter of the license lookup uses exact equality, not contains matching'
logic_claims:
  - CLAIM-F52C66F6497F0A9F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4ac4505870193cc13b9eb3a3b7208ab30ad820caad329702860327609a3b6baf
semantic_inventory:
  - claim_key: CLAIM-F52C66F6497F0A9F
    claim_text: 'The holder: filter of the license lookup uses exact equality, not contains matching'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - license.license_lookup
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-105'
  recorded_at: '2025-12-20T15:32:16.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: Results that only contained the term somewhere drowned the one that was asked for.
id: REQ-license-license-lookup-text-filter-matching
type: req
---
The holder: filter of the license lookup uses exact equality, not contains matching.

## Context

Results that only contained the term somewhere drowned the one that was asked for.

## Source

> feat(license): holder: filter matching (LIC-105)

Source: License server decision log - LIC-105
