---
title: If even the random suffix fallback is taken, throw an error.
status: active
semantic_text: If even the random suffix fallback is taken, throw an error.
semantic_clauses:
  - If even the random suffix fallback is taken, throw an error
logic_claims:
  - CLAIM-AB4E1B9B1AC18BE0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7f9c4f2ed7ff77b36ed2f30d56a3f7264669873124077f5088ed362852ba6940
semantic_inventory:
  - claim_key: CLAIM-AB4E1B9B1AC18BE0
    claim_text: If even the random suffix fallback is taken, throw an error
    role: condition
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - storage.ensure_storage_key_is_available
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1762'
  recorded_at: '2025-06-05T10:50:27.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:storage
id: REQ-papra-storage-even-random-suffix-fallback-is-taken-throw
type: req
---
If even the random suffix fallback is taken, throw an error.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/storage/storage.usecases.test.ts (storage usecases > ensureStorageKeyIsAvailable).

## Source

Source: Papra server behaviour notes - SRV-1762
