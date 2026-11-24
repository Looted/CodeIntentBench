---
title: A customer can have at most 2 license keys on the license server; the limit is configured per deployment and 2 is the default.
status: active
semantic_text: A customer can have at most 2 license keys on the license server; the limit is configured per deployment and 2 is the default.
semantic_clauses:
  - A customer can have at most 2 license keys on the license server
  - the limit is configured per deployment and 2 is the default
logic_claims:
  - CLAIM-6B8D3D0AE181367D
  - CLAIM-646750DD567C0C73
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a939a9088dbfb70d23ef76214a6e216bf5c74614a30d79fb9e93ded4f11d8238
semantic_inventory:
  - claim_key: CLAIM-6B8D3D0AE181367D
    claim_text: A customer can have at most 2 license keys on the license server
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - license.license_keys
  - claim_key: CLAIM-646750DD567C0C73
    claim_text: the limit is configured per deployment and 2 is the default
    role: descriptive
    status: modeled
    span:
      start: 66
      end: 125
    subjects:
      - license.license_keys
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-223'
  recorded_at: '2026-04-28T10:17:49.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
id: REQ-license-license-keys-maximum-count
type: req
---
A customer can have at most 2 license keys on the license server; the limit is configured per deployment and 2 is the default.

## Context

Reason not stated.

## Source

> feat(license): limit license keys per customer (LIC-223)

Source: License server decision log - LIC-223
