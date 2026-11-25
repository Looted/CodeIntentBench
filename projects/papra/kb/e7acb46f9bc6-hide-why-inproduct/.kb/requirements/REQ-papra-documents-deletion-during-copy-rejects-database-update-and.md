---
title: Deletion during the copy rejects the database update and retains both files.
status: active
semantic_text: Deletion during the copy rejects the database update and retains both files.
semantic_clauses:
  - Deletion during the copy rejects the database update and retains both files
logic_claims:
  - CLAIM-5AF4101E3AE404B7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 40a90c1d12012980b4c27faa65777bd19d25290ca6e05ef5cddf5058ceec2d09
semantic_inventory:
  - claim_key: CLAIM-5AF4101E3AE404B7
    claim_text: Deletion during the copy rejects the database update and retains both files
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-999'
  recorded_at: '2025-04-28T08:05:41.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-deletion-during-copy-rejects-database-update-and
type: req
---
Deletion during the copy rejects the database update and retains both files.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-999
