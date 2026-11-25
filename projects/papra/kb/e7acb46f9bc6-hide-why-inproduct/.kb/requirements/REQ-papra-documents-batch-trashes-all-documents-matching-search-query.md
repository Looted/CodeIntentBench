---
title: Batch-trashes all documents matching a search query.
status: active
semantic_text: Batch-trashes all documents matching a search query.
semantic_clauses:
  - Batch-trashes all documents matching a search query
logic_claims:
  - CLAIM-B6BAD1D26CB064F7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f869e748f295e86edb68a0625b5af92e9b1d3ee50787dcee8bcbf2228fad3373
semantic_inventory:
  - claim_key: CLAIM-B6BAD1D26CB064F7
    claim_text: Batch-trashes all documents matching a search query
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 51
    subjects:
      - documents.documents_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1232'
  recorded_at: '2026-03-09T12:00:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-batch-trashes-all-documents-matching-search-query
type: req
---
Batch-trashes all documents matching a search query.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/e2e/batch-trash.e2e.test.ts (documents e2e > batch trash).

## Source

Source: Papra server behaviour notes - SRV-1232
