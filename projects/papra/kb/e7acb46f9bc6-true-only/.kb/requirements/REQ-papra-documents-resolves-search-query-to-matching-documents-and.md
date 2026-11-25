---
title: Resolves a search query to the matching documents and trashes them.
status: active
semantic_text: Resolves a search query to the matching documents and trashes them.
semantic_clauses:
  - Resolves a search query to the matching documents and trashes them
logic_claims:
  - CLAIM-741842A7E9A737BC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 105a57989c2ff9275f2eae33cff0a1ee59dc5b4f0440f78e33b0d02ce73d8fa9
semantic_inventory:
  - claim_key: CLAIM-741842A7E9A737BC
    claim_text: Resolves a search query to the matching documents and trashes them
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 66
    subjects:
      - documents.trash_documents_batch
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1083'
  recorded_at: '2025-04-14T11:17:51.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-resolves-search-query-to-matching-documents-and
type: req
---
Resolves a search query to the matching documents and trashes them.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > trashDocumentsBatch).

## Source

Source: Papra server behaviour notes - SRV-1083
