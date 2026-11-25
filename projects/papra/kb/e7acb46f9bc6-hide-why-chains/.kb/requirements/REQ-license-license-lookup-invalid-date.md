---
title: 'An invalid date in the issued: filter of the license lookup is rejected with a message that names the value.'
status: active
semantic_text: 'An invalid date in the issued: filter of the license lookup is rejected with a message that names the value.'
semantic_clauses:
  - 'An invalid date in the issued: filter of the license lookup is rejected with a message that names the value'
logic_claims:
  - CLAIM-9B6FB28CFC18EFBE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 20ec200685853c0468265500a25d51903fb57735820cf163d17305b74004079d
semantic_inventory:
  - claim_key: CLAIM-9B6FB28CFC18EFBE
    claim_text: 'An invalid date in the issued: filter of the license lookup is rejected with a message that names the value'
    role: normative
    status: modeled
    span:
      start: 0
      end: 107
    subjects:
      - license.license_lookup
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-104'
  recorded_at: '2025-05-18T10:48:19.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: People mistyped a date, got an empty list and assumed nothing existed.
id: REQ-license-license-lookup-invalid-date
type: req
---
An invalid date in the issued: filter of the license lookup is rejected with a message that names the value.

## Context

People mistyped a date, got an empty list and assumed nothing existed.

## Source

> fix(license): invalid date in issued: filter (LIC-104)

Source: License server decision log - LIC-104
