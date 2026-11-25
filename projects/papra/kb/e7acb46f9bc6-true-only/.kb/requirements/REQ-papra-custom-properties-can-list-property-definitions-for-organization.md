---
title: Can list property definitions for an organization.
status: active
semantic_text: Can list property definitions for an organization.
semantic_clauses:
  - Can list property definitions for an organization
logic_claims:
  - CLAIM-239B532B5E6F417A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e88cee3038c2f96707abde63af164ea57f81f0dfd5a22ea3a50ceeb58017adfa
semantic_inventory:
  - claim_key: CLAIM-239B532B5E6F417A
    claim_text: Can list property definitions for an organization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 49
    subjects:
      - custom_properties.custom_properties_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-620'
  recorded_at: '2025-07-08T16:45:09.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-can-list-property-definitions-for-organization
type: req
---
Can list property definitions for an organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/e2e/custom-properties-definitions.e2e.test.ts (custom properties e2e > property definitions).

## Source

Source: Papra server behaviour notes - SRV-620
