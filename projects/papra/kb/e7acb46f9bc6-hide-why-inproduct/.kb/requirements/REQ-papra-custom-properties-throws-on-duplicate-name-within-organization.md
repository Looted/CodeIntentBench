---
title: Throws on duplicate name within organization.
status: active
semantic_text: Throws on duplicate name within organization.
semantic_clauses:
  - Throws on duplicate name within organization
logic_claims:
  - CLAIM-0414E997CEAB883F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8e8f1c733183e64e7b41474e0c88d54b45e5ae43361c6b3e7a3fad09cb574b87
semantic_inventory:
  - claim_key: CLAIM-0414E997CEAB883F
    claim_text: Throws on duplicate name within organization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 44
    subjects:
      - custom_properties.custom_properties_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-615'
  recorded_at: '2025-09-04T16:02:56.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-throws-on-duplicate-name-within-organization
type: req
---
Throws on duplicate name within organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/custom-properties.repository.test.ts (custom-properties repository > property definitions).

## Source

Source: Papra server behaviour notes - SRV-615
