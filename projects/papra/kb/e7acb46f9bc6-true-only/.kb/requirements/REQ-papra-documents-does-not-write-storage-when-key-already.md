---
title: Does not write storage when the key already matches.
status: active
semantic_text: Does not write storage when the key already matches.
semantic_clauses:
  - Does not write storage when the key already matches
logic_claims:
  - CLAIM-FDF0729FC560E8A6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f5237025e5335f76f8b7c3a533975978d740b2102335e8505fa3bffc6621b090
semantic_inventory:
  - claim_key: CLAIM-FDF0729FC560E8A6
    claim_text: Does not write storage when the key already matches
    role: normative
    status: modeled
    span:
      start: 0
      end: 51
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1002'
  recorded_at: '2025-04-18T17:50:00.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-does-not-write-storage-when-key-already
type: req
---
Does not write storage when the key already matches.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1002
