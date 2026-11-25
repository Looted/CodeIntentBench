---
title: Returns an array with definition info and values.
status: active
semantic_text: Returns an array with definition info and values.
semantic_clauses:
  - Returns an array with definition info and values
logic_claims:
  - CLAIM-91CDABE164621343
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3cf8ceb00be58c136dab8e27ebfae1d854d7d00320bcbbdcfcda7993241d92b1
semantic_inventory:
  - claim_key: CLAIM-91CDABE164621343
    claim_text: Returns an array with definition info and values
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 48
    subjects:
      - custom_properties.build_custom_properties_array
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-603'
  recorded_at: '2025-12-27T08:33:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-returns-array-with-definition-info-and-values
type: req
---
Returns an array with definition info and values.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/custom-properties.models.test.ts (custom-properties models > buildCustomPropertiesArray).

## Source

Source: Papra server behaviour notes - SRV-603
