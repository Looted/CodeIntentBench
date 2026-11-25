---
title: If there is no file extension, add the suffix at the end of the storage key.
status: active
semantic_text: If there is no file extension, add the suffix at the end of the storage key.
semantic_clauses:
  - If there is no file extension, add the suffix at the end of the storage key
logic_claims:
  - CLAIM-0E73BB194AF741A6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a0ba67b38fdf564528d5e03ecddf5284f4690590dfc0f16c519a808a68bb387d
semantic_inventory:
  - claim_key: CLAIM-0E73BB194AF741A6
    claim_text: If there is no file extension, add the suffix at the end of the storage key
    role: condition
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - storage.add_suffix_to_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1756'
  recorded_at: '2026-01-18T08:28:31.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-there-is-no-file-extension-add-suffix
type: req
---
If there is no file extension, add the suffix at the end of the storage key.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/storage.models.test.ts (storage models > addSuffixToStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1756
