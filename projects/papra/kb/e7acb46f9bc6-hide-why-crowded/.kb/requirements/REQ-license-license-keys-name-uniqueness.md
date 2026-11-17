---
title: License key names on the license server are unique across all license keys.
status: active
semantic_text: License key names on the license server are unique across all license keys.
semantic_clauses:
  - License key names on the license server are unique across all license keys
logic_claims:
  - CLAIM-7002ACF73C7893A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 87e2ca55c9f05dbf85cc62d111e734f86ce6e26cee7577099776ad65dc93deb6
semantic_inventory:
  - claim_key: CLAIM-7002ACF73C7893A4
    claim_text: License key names on the license server are unique across all license keys
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - license.license_keys
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-234'
  recorded_at: '2025-06-21T11:34:16.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: Two license keys with the same name could not be told apart in the switcher.
id: REQ-license-license-keys-name-uniqueness
type: req
---
License key names on the license server are unique across all license keys.

## Context

Two license keys with the same name could not be told apart in the switcher.

## Source

> feat(license): license key name uniqueness (LIC-234)

Source: License server decision log - LIC-234
