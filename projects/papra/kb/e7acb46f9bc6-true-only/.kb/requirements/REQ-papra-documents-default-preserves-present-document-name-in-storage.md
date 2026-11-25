---
title: Default preserves a present document name in a storage key.
status: active
semantic_text: Default preserves a present document name in a storage key.
semantic_clauses:
  - Default preserves a present document name in a storage key
logic_claims:
  - CLAIM-925A43FE474EBD90
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 258af48f4fcfedacfc1a333b52afd30c2762b4b4581888d30cfe4d669aec0e82
semantic_inventory:
  - claim_key: CLAIM-925A43FE474EBD90
    claim_text: Default preserves a present document name in a storage key
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - documents.build_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1368'
  recorded_at: '2026-05-17T16:18:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-default-preserves-present-document-name-in-storage
type: req
---
Default preserves a present document name in a storage key.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > buildStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1368
