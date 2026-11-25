---
title: Resolves collisions without replacing another stored file.
status: active
semantic_text: Resolves collisions without replacing another stored file.
semantic_clauses:
  - Resolves collisions without replacing another stored file
logic_claims:
  - CLAIM-60A7110BE7F7045F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 13c2bfab046a82ecf3c714e63d13dccba5ad217959d2db3fe338d0eaed1b44e6
semantic_inventory:
  - claim_key: CLAIM-60A7110BE7F7045F
    claim_text: Resolves collisions without replacing another stored file
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1019'
  recorded_at: '2026-02-08T17:34:20.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-resolves-collisions-without-replacing-another-stored-file
type: req
---
Resolves collisions without replacing another stored file.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1019
