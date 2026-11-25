---
title: Deletes options omitted from the incoming list.
status: active
semantic_text: Deletes options omitted from the incoming list.
semantic_clauses:
  - Deletes options omitted from the incoming list
logic_claims:
  - CLAIM-FEF380C0694D6EA0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 981149df17f1ee7eb1aa8f067d9421af6e757e701ba16e73eda780a7083d0830
semantic_inventory:
  - claim_key: CLAIM-FEF380C0694D6EA0
    claim_text: Deletes options omitted from the incoming list
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 46
    subjects:
      - custom_properties.sync_select_options
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-633'
  recorded_at: '2025-09-04T08:20:51.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:custom-properties
id: REQ-papra-custom-properties-deletes-options-omitted-from-incoming-list
type: req
---
Deletes options omitted from the incoming list.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/custom-properties/options/custom-properties-options.repository.test.ts (custom-properties-options repository > syncSelectOptions).

## Source

Source: Papra server behaviour notes - SRV-633
