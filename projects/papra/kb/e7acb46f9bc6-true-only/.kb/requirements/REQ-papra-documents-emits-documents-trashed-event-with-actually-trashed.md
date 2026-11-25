---
title: Emits a documents.trashed event with the actually trashed ids.
status: active
semantic_text: Emits a documents.trashed event with the actually trashed ids.
semantic_clauses:
  - Emits a documents.trashed event with the actually trashed ids
logic_claims:
  - CLAIM-02C3C60EA075CE15
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 81d2475a5c13822ed55d01e1bcfd4155fc7ccb33059129c61d1224ce7055562d
semantic_inventory:
  - claim_key: CLAIM-02C3C60EA075CE15
    claim_text: Emits a documents.trashed event with the actually trashed ids
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - documents.trash_documents_batch
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1063'
  recorded_at: '2026-02-22T16:14:35.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-emits-documents-trashed-event-with-actually-trashed
type: req
---
Emits a documents.trashed event with the actually trashed ids.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > trashDocumentsBatch).

## Source

Source: Papra server behaviour notes - SRV-1063
