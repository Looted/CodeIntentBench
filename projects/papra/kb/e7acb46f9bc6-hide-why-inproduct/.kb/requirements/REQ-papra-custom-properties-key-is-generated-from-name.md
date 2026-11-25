---
title: A key is generated from the name.
status: active
semantic_text: A key is generated from the name.
semantic_clauses:
  - A key is generated from the name
logic_claims:
  - CLAIM-10198423689A3976
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ef6bf716f44995370124c4a61d3d87449405d97a192a61b06aed578615512b7f
semantic_inventory:
  - claim_key: CLAIM-10198423689A3976
    claim_text: A key is generated from the name
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 32
    subjects:
      - custom_properties.generate_property_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-606'
  recorded_at: '2026-01-20T11:28:31.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-key-is-generated-from-name
type: req
---
A key is generated from the name.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/custom-properties.repository.models.test.ts (custom-properties repository models > generatePropertyKey).

## Source

Source: Papra server behaviour notes - SRV-606
