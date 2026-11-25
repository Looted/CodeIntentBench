---
title: When a document is trashed, a "documents.trashed" event is triggered.
status: active
semantic_text: When a document is trashed, a "documents.trashed" event is triggered.
semantic_clauses:
  - When a document is trashed, a "documents.trashed" event is triggered
logic_claims:
  - CLAIM-1F2BA10808260C94
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7c769fec71a3c066558b47af3592ca48203eb0b8fe52fdf70767d37c8864dab3
semantic_inventory:
  - claim_key: CLAIM-1F2BA10808260C94
    claim_text: When a document is trashed, a "documents.trashed" event is triggered
    role: condition
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - documents.trash_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1216'
  recorded_at: '2025-04-24T14:31:30.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-document-is-trashed-documents-trashed-event-is
type: req
---
When a document is trashed, a "documents.trashed" event is triggered.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > trashDocument).

## Source

Source: Papra server behaviour notes - SRV-1216
