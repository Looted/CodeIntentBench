---
title: When a given storage key is not already taken, the storage key is returned as is.
status: active
semantic_text: When a given storage key is not already taken, the storage key is returned as is.
semantic_clauses:
  - When a given storage key is not already taken, the storage key is returned as is
logic_claims:
  - CLAIM-AD76B83A73D79EDA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1846382d353b0eb212cdde68f06070bec51f2f691ff437888194ccd6404bc9a8
semantic_inventory:
  - claim_key: CLAIM-AD76B83A73D79EDA
    claim_text: When a given storage key is not already taken, the storage key is returned as is
    role: condition
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - storage.ensure_storage_key_is_available
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1765'
  recorded_at: '2025-07-25T15:27:38.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-given-storage-key-is-not-already-taken
type: req
---
When a given storage key is not already taken, the storage key is returned as is.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/storage.usecases.test.ts (storage usecases > ensureStorageKeyIsAvailable).

## Source

Source: Papra server behaviour notes - SRV-1765
