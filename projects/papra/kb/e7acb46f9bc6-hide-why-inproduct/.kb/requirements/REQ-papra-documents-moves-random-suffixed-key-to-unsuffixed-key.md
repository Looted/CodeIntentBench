---
title: Moves a random-suffixed key to the unsuffixed key when available.
status: active
semantic_text: Moves a random-suffixed key to the unsuffixed key when available.
semantic_clauses:
  - Moves a random-suffixed key to the unsuffixed key when available
logic_claims:
  - CLAIM-1DF5FA93EFA27F6C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ce25e8260ca690ed71df63173021d984f1c7017ed16fb3fae3e0765c086d23dc
semantic_inventory:
  - claim_key: CLAIM-1DF5FA93EFA27F6C
    claim_text: Moves a random-suffixed key to the unsuffixed key when available
    role: normative
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1010'
  recorded_at: '2026-06-28T16:20:00.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-moves-random-suffixed-key-to-unsuffixed-key
type: req
---
Moves a random-suffixed key to the unsuffixed key when available.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1010
