---
title: Is opt-in and does not synchronize legacy keys.
status: active
semantic_text: Is opt-in and does not synchronize legacy keys.
semantic_clauses:
  - Is opt-in and does not synchronize legacy keys
logic_claims:
  - CLAIM-DFAB0A279E71F01A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7c8a80983f04368f39992be23319e2af9674c25e80912370448b4b4701df6c96
semantic_inventory:
  - claim_key: CLAIM-DFAB0A279E71F01A
    claim_text: Is opt-in and does not synchronize legacy keys
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 46
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1006'
  recorded_at: '2025-04-12T10:14:07.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-is-opt-in-and-does-not-synchronize
type: req
---
Is opt-in and does not synchronize legacy keys.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1006
