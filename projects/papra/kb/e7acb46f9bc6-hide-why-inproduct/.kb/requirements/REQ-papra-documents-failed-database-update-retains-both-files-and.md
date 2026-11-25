---
title: A failed database update retains both files and does not block later synchronization.
status: active
semantic_text: A failed database update retains both files and does not block later synchronization.
semantic_clauses:
  - A failed database update retains both files and does not block later synchronization
logic_claims:
  - CLAIM-0FBCEEC46FF796BC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7b5eb0c3434a8f5cb0605751084eaac6e00c16047205693291453a7a513eb0f4
semantic_inventory:
  - claim_key: CLAIM-0FBCEEC46FF796BC
    claim_text: A failed database update retains both files and does not block later synchronization
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-990'
  recorded_at: '2025-08-10T17:10:59.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-failed-database-update-retains-both-files-and
type: req
---
A failed database update retains both files and does not block later synchronization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-990
