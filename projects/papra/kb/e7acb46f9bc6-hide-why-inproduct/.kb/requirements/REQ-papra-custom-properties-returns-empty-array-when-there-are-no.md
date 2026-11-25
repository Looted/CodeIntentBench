---
title: Returns an empty array when there are no definitions.
status: active
semantic_text: Returns an empty array when there are no definitions.
semantic_clauses:
  - Returns an empty array when there are no definitions
logic_claims:
  - CLAIM-F7BF7C0A03056930
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0fb3fae47b2e8cc80ed3ad6ee74e5556818a4f7b6591670a4a185a2bf56ebdb6
semantic_inventory:
  - claim_key: CLAIM-F7BF7C0A03056930
    claim_text: Returns an empty array when there are no definitions
    role: normative
    status: modeled
    span:
      start: 0
      end: 52
    subjects:
      - custom_properties.build_custom_properties_array
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-605'
  recorded_at: '2025-12-13T15:28:20.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-returns-empty-array-when-there-are-no
type: req
---
Returns an empty array when there are no definitions.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/custom-properties.models.test.ts (custom-properties models > buildCustomPropertiesArray).

## Source

Source: Papra server behaviour notes - SRV-605
