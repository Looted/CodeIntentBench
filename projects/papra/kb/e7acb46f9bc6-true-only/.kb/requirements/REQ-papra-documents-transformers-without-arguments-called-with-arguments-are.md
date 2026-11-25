---
title: Transformers without arguments called with arguments are ok.
status: active
semantic_text: Transformers without arguments called with arguments are ok.
semantic_clauses:
  - Transformers without arguments called with arguments are ok
logic_claims:
  - CLAIM-BB134BA0FE760265
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 65f5ee14e66dd6650005c2882040ccbff1710e53981a3dc26a24db7f588a13db
semantic_inventory:
  - claim_key: CLAIM-BB134BA0FE760265
    claim_text: Transformers without arguments called with arguments are ok
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - documents.build_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1400'
  recorded_at: '2025-11-18T11:28:15.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-transformers-without-arguments-called-with-arguments-are
type: req
---
Transformers without arguments called with arguments are ok.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > buildStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1400
