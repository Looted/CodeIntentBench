---
title: Can get a single property definition by ID.
status: active
semantic_text: Can get a single property definition by ID.
semantic_clauses:
  - Can get a single property definition by ID
logic_claims:
  - CLAIM-945EACA0FD342082
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2df1861c4158a8479938df98057c79f6fca4429b422e8156e1f389d527c70649
semantic_inventory:
  - claim_key: CLAIM-945EACA0FD342082
    claim_text: Can get a single property definition by ID
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 42
    subjects:
      - custom_properties.custom_properties_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-612'
  recorded_at: '2025-03-15T10:03:34.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-can-get-single-property-definition-by-id
type: req
---
Can get a single property definition by ID.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/custom-properties.repository.test.ts (custom-properties repository > property definitions).

## Source

Source: Papra server behaviour notes - SRV-612
