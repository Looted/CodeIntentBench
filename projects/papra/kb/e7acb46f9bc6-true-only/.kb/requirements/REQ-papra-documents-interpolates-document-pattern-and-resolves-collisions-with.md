---
title: Interpolates the document pattern and resolves collisions with incremental suffixes.
status: active
semantic_text: Interpolates the document pattern and resolves collisions with incremental suffixes.
semantic_clauses:
  - Interpolates the document pattern and resolves collisions with incremental suffixes
logic_claims:
  - CLAIM-6A8D3F03ED6F2624
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5ba00d36becf07b4ed1953d983ef77ece8a76725c0004ca94b6f2171aa598ce6
semantic_inventory:
  - claim_key: CLAIM-6A8D3F03ED6F2624
    claim_text: Interpolates the document pattern and resolves collisions with incremental suffixes
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - documents.create_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1003'
  recorded_at: '2025-05-11T14:18:42.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-interpolates-document-pattern-and-resolves-collisions-with
type: req
---
Interpolates the document pattern and resolves collisions with incremental suffixes.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (document-storage usecases > createDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1003
