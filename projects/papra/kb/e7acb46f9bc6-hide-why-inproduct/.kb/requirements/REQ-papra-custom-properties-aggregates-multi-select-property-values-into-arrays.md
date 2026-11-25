---
title: Aggregates multi-select property values into arrays.
status: active
semantic_text: Aggregates multi-select property values into arrays.
semantic_clauses:
  - Aggregates multi-select property values into arrays
logic_claims:
  - CLAIM-F97A90F9F72C821C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f69069431a1152b64bf231894a4d3ac31f102f1743aeab0e46c3be871c3a0ae0
semantic_inventory:
  - claim_key: CLAIM-F97A90F9F72C821C
    claim_text: Aggregates multi-select property values into arrays
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 51
    subjects:
      - custom_properties.aggregate_document_custom_property_values
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-599'
  recorded_at: '2025-02-24T09:52:10.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-aggregates-multi-select-property-values-into-arrays
type: req
---
Aggregates multi-select property values into arrays.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/custom-properties.models.test.ts (custom-properties models > aggregateDocumentCustomPropertyValues).

## Source

Source: Papra server behaviour notes - SRV-599
