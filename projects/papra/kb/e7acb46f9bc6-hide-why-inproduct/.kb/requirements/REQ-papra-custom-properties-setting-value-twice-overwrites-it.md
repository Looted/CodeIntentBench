---
title: Setting a value twice overwrites it.
status: active
semantic_text: Setting a value twice overwrites it.
semantic_clauses:
  - Setting a value twice overwrites it
logic_claims:
  - CLAIM-8F9ECC08E9B31955
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f31ebb8c4edb132e5aa934106247f3fe9bbd0b955a2bc42d2057b338c6d44970
semantic_inventory:
  - claim_key: CLAIM-8F9ECC08E9B31955
    claim_text: Setting a value twice overwrites it
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 35
    subjects:
      - custom_properties.custom_properties_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-625'
  recorded_at: '2025-11-08T10:17:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-setting-value-twice-overwrites-it
type: req
---
Setting a value twice overwrites it.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/e2e/documents-custom-properties.e2e.test.ts (custom properties e2e > document custom property values).

## Source

Source: Papra server behaviour notes - SRV-625
