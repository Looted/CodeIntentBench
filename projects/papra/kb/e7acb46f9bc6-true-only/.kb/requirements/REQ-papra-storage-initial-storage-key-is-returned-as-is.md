---
title: The initial storage key is returned as is if it is available, but an error is thrown if it is taken and random suffix fallback is disabled.
status: active
semantic_text: The initial storage key is returned as is if it is available, but an error is thrown if it is taken and random suffix fallback is disabled.
semantic_clauses:
  - The initial storage key is returned as is if it is available, but an error is thrown if it is taken and random suffix fallback is disabled
logic_claims:
  - CLAIM-92707C992A0D6E77
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 211f6f75d162e817091e7b777080e9fc94d4300848d58611f2b74ab5802b43db
semantic_inventory:
  - claim_key: CLAIM-92707C992A0D6E77
    claim_text: The initial storage key is returned as is if it is available, but an error is thrown if it is taken and random suffix fallback is disabled
    role: normative
    status: modeled
    span:
      start: 0
      end: 138
    subjects:
      - storage.ensure_storage_key_is_available
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1764'
  recorded_at: '2026-09-07T12:00:02.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-initial-storage-key-is-returned-as-is
type: req
---
The initial storage key is returned as is if it is available, but an error is thrown if it is taken and random suffix fallback is disabled.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/storage.usecases.test.ts (storage usecases > ensureStorageKeyIsAvailable > the incremental suffix behavior can be disabled by setting a maximum number of incremental suffix attempts of 0).

## Source

Source: Papra server behaviour notes - SRV-1764
