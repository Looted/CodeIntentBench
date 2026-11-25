---
title: Query-filter path delegates to the search service.
status: active
semantic_text: Query-filter path delegates to the search service.
semantic_clauses:
  - Query-filter path delegates to the search service
logic_claims:
  - CLAIM-7A7053862DEEA829
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d02da19c2f4b1b19fc17c1e6919db4e8ff927be3b8e00a3a4265fa5cc719d4e4
semantic_inventory:
  - claim_key: CLAIM-7A7053862DEEA829
    claim_text: Query-filter path delegates to the search service
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 49
    subjects:
      - documents.tag_documents_batch
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1077'
  recorded_at: '2026-01-03T11:42:04.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-query-filter-path-delegates-to-search-service
type: req
---
Query-filter path delegates to the search service.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > tagDocumentsBatch).

## Source

Source: Papra server behaviour notes - SRV-1077
