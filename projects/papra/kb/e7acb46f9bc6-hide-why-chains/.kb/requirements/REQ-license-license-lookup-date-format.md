---
title: 'The issued: filter of the license lookup accepts ISO dates and the words today, yesterday and last-week.'
status: active
semantic_text: 'The issued: filter of the license lookup accepts ISO dates and the words today, yesterday and last-week.'
semantic_clauses:
  - 'The issued: filter of the license lookup accepts ISO dates and the words today, yesterday and last-week'
logic_claims:
  - CLAIM-56271D5C576CFDF1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 259f2e6e224deaca2f35398e71fabd18995bd5a675f58dfbfec3da4115a4b492
semantic_inventory:
  - claim_key: CLAIM-56271D5C576CFDF1
    claim_text: 'The issued: filter of the license lookup accepts ISO dates and the words today, yesterday and last-week'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - license.license_lookup
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-129'
  recorded_at: '2026-07-19T12:24:00.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: These are the forms people were seen typing in the search logs.
id: REQ-license-license-lookup-date-format
type: req
---
The issued: filter of the license lookup accepts ISO dates and the words today, yesterday and last-week.

## Context

These are the forms people were seen typing in the search logs.

## Source

> feat(license): date formats of the issued: filter (LIC-129)

Source: License server decision log - LIC-129
