---
title: A query in the license lookup is limited to 512 characters; longer input is cut to the limit without an error.
status: active
semantic_text: A query in the license lookup is limited to 512 characters; longer input is cut to the limit without an error.
semantic_clauses:
  - A query in the license lookup is limited to 512 characters
  - longer input is cut to the limit without an error
logic_claims:
  - CLAIM-A6590A45CEEC2DB7
  - CLAIM-7ABD8CACE2C520A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 67c005e0029fa1f8c4987a6c798ffb55411b11b06d32639ce09b3062c5647a86
semantic_inventory:
  - claim_key: CLAIM-A6590A45CEEC2DB7
    claim_text: A query in the license lookup is limited to 512 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - license.license_lookup
  - claim_key: CLAIM-7ABD8CACE2C520A4
    claim_text: longer input is cut to the limit without an error
    role: descriptive
    status: modeled
    span:
      start: 60
      end: 109
    subjects:
      - license.license_lookup
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-102'
  recorded_at: '2026-07-18T12:05:54.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
id: REQ-license-license-lookup-query-length
type: req
---
A query in the license lookup is limited to 512 characters; longer input is cut to the limit without an error.

## Context

Reason not stated.

## Source

> feat(license): limit search query length to 512 (LIC-102)

Source: License server decision log - LIC-102
