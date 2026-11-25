---
title: Throws when an unknown option ID is provided.
status: active
semantic_text: Throws when an unknown option ID is provided.
semantic_clauses:
  - Throws when an unknown option ID is provided
logic_claims:
  - CLAIM-213C45825A40EBDC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 416debd6a943f3fc40f73cb80ccb51a7cc33d8d7019c4769ecb20a3be740f11a
semantic_inventory:
  - claim_key: CLAIM-213C45825A40EBDC
    claim_text: Throws when an unknown option ID is provided
    role: normative
    status: modeled
    span:
      start: 0
      end: 44
    subjects:
      - custom_properties.sync_select_options
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-640'
  recorded_at: '2026-01-05T14:33:05.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-throws-when-unknown-option-id-is-provided
type: req
---
Throws when an unknown option ID is provided.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/options/custom-properties-options.repository.test.ts (custom-properties-options repository > syncSelectOptions).

## Source

Source: Papra server behaviour notes - SRV-640
