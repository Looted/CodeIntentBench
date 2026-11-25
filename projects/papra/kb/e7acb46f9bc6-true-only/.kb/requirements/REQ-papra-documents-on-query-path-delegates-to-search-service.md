---
title: On the query path, delegates to the search service without enforcing a cap.
status: active
semantic_text: On the query path, delegates to the search service without enforcing a cap.
semantic_clauses:
  - On the query path, delegates to the search service without enforcing a cap
logic_claims:
  - CLAIM-6A89111DADA742AE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 36b98534c16244e20f88049c7c500e747c56980bce1a896604d6c9ee63cc7be5
semantic_inventory:
  - claim_key: CLAIM-6A89111DADA742AE
    claim_text: On the query path, delegates to the search service without enforcing a cap
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - documents.resolve_batch_target_document_ids
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1073'
  recorded_at: '2025-08-17T11:53:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-on-query-path-delegates-to-search-service
type: req
---
On the query path, delegates to the search service without enforcing a cap.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > resolveBatchTargetDocumentIds).

## Source

Source: Papra server behaviour notes - SRV-1073
