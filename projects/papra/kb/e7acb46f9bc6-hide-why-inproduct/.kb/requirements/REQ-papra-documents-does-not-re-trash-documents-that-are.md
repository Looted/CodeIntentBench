---
title: Does not re-trash documents that are already in the trash.
status: active
semantic_text: Does not re-trash documents that are already in the trash.
semantic_clauses:
  - Does not re-trash documents that are already in the trash
logic_claims:
  - CLAIM-707E133863385386
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f854c06c60daa936590006846f4f470e8a405fd56b61f9c18c2c353e02a163a1
semantic_inventory:
  - claim_key: CLAIM-707E133863385386
    claim_text: Does not re-trash documents that are already in the trash
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - documents.trash_documents_batch
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1060'
  recorded_at: '2026-05-26T08:25:56.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-does-not-re-trash-documents-that-are
type: req
---
Does not re-trash documents that are already in the trash.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > trashDocumentsBatch).

## Source

Source: Papra server behaviour notes - SRV-1060
