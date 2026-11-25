---
title: In a same organization, two definitions cannot have the same key.
status: active
semantic_text: In a same organization, two definitions cannot have the same key.
semantic_clauses:
  - In a same organization, two definitions cannot have the same key
logic_claims:
  - CLAIM-4C3ADCF53ACA7729
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2d390c83eb4bf39bceef064952653478d04db974ab44d0fd9322b8e8ebe35a85
semantic_inventory:
  - claim_key: CLAIM-4C3ADCF53ACA7729
    claim_text: In a same organization, two definitions cannot have the same key
    role: normative
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - custom_properties.custom_properties_table
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-619'
  recorded_at: '2025-06-25T13:51:21.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-in-same-organization-two-definitions-cannot-have
type: req
---
In a same organization, two definitions cannot have the same key.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/custom-properties.table.test.ts (custom properties table > custom property definitions table).

## Source

Source: Papra server behaviour notes - SRV-619
