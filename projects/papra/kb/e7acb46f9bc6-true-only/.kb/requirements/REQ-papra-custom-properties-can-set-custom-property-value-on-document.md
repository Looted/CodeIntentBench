---
title: Can set a custom property value on a document.
status: active
semantic_text: Can set a custom property value on a document.
semantic_clauses:
  - Can set a custom property value on a document
logic_claims:
  - CLAIM-FA3A8B3641082B28
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e3013ad52e3b2d5d9d95412a7741c4b61867cced073c3efb5577ae6168f6adf8
semantic_inventory:
  - claim_key: CLAIM-FA3A8B3641082B28
    claim_text: Can set a custom property value on a document
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 45
    subjects:
      - custom_properties.custom_properties_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-623'
  recorded_at: '2025-06-20T13:06:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-can-set-custom-property-value-on-document
type: req
---
Can set a custom property value on a document.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/e2e/documents-custom-properties.e2e.test.ts (custom properties e2e > document custom property values).

## Source

Source: Papra server behaviour notes - SRV-623
