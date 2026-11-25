---
title: Can create and retrieve a property definition.
status: active
semantic_text: Can create and retrieve a property definition.
semantic_clauses:
  - Can create and retrieve a property definition
logic_claims:
  - CLAIM-1BFCDC50C40E16E9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 939f45cf835cc8e04baed59fcf23630f96e2d395650d0e1d9af6d769184a025d
semantic_inventory:
  - claim_key: CLAIM-1BFCDC50C40E16E9
    claim_text: Can create and retrieve a property definition
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 45
    subjects:
      - custom_properties.custom_properties_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-608'
  recorded_at: '2025-09-20T13:30:02.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-can-create-and-retrieve-property-definition
type: req
---
Can create and retrieve a property definition.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/custom-properties.repository.test.ts (custom-properties repository > property definitions).

## Source

Source: Papra server behaviour notes - SRV-608
