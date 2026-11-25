---
title: Returns the provided documentIds without invoking the search service.
status: active
semantic_text: Returns the provided documentIds without invoking the search service.
semantic_clauses:
  - Returns the provided documentIds without invoking the search service
logic_claims:
  - CLAIM-1AABE3ADEA6AAD12
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 473ab975e0ef65a72128af15d1d1af9b403d943e052e83511aacce1fc6504b75
semantic_inventory:
  - claim_key: CLAIM-1AABE3ADEA6AAD12
    claim_text: Returns the provided documentIds without invoking the search service
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - documents.resolve_batch_target_document_ids
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1087'
  recorded_at: '2026-09-18T15:27:56.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-returns-provided-documentids-without-invoking-search-service
type: req
---
Returns the provided documentIds without invoking the search service.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.usecases.test.ts (documents-batch usecases > resolveBatchTargetDocumentIds).

## Source

Source: Papra server behaviour notes - SRV-1087
