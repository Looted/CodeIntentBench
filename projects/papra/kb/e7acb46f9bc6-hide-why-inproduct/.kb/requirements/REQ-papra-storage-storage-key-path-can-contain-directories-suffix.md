---
title: The storage key path can contain directories, the suffix should be added to the file name only.
status: active
semantic_text: The storage key path can contain directories, the suffix should be added to the file name only.
semantic_clauses:
  - The storage key path can contain directories, the suffix should be added to the file name only
logic_claims:
  - CLAIM-3F29B853336883CE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2a0e0e55d79d3651102f03c7bdb9284b2f2f1a6040746117822be30389e08a5c
semantic_inventory:
  - claim_key: CLAIM-3F29B853336883CE
    claim_text: The storage key path can contain directories, the suffix should be added to the file name only
    role: normative
    status: modeled
    span:
      start: 0
      end: 94
    subjects:
      - storage.add_suffix_to_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1758'
  recorded_at: '2025-04-25T17:31:22.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-storage-key-path-can-contain-directories-suffix
type: req
---
The storage key path can contain directories, the suffix should be added to the file name only.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/storage.models.test.ts (storage models > addSuffixToStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1758
