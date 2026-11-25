---
title: Does not wipe existing options when a foreign ID is provided.
status: active
semantic_text: Does not wipe existing options when a foreign ID is provided.
semantic_clauses:
  - Does not wipe existing options when a foreign ID is provided
logic_claims:
  - CLAIM-9AFB84F787FDA084
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cd7dbbab31e04868ee87978a2a68337599d9dc2758266a01f562ea72d763e2b1
semantic_inventory:
  - claim_key: CLAIM-9AFB84F787FDA084
    claim_text: Does not wipe existing options when a foreign ID is provided
    role: normative
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - custom_properties.sync_select_options
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-636'
  recorded_at: '2025-11-16T08:48:01.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-does-not-wipe-existing-options-when-foreign
type: req
---
Does not wipe existing options when a foreign ID is provided.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/options/custom-properties-options.repository.test.ts (custom-properties-options repository > syncSelectOptions).

## Source

Source: Papra server behaviour notes - SRV-636
