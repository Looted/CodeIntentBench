---
title: Batch-trashes documents by id, leaving non-targeted documents untouched.
status: active
semantic_text: Batch-trashes documents by id, leaving non-targeted documents untouched.
semantic_clauses:
  - Batch-trashes documents by id, leaving non-targeted documents untouched
logic_claims:
  - CLAIM-325D095E66013D3D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2dd09e48bba952515c757b535a9bb3cc2f6ac9d587a87554dd3fb93f011f8d26
semantic_inventory:
  - claim_key: CLAIM-325D095E66013D3D
    claim_text: Batch-trashes documents by id, leaving non-targeted documents untouched
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - documents.documents_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1235'
  recorded_at: '2025-03-04T14:55:29.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-batch-trashes-documents-by-id-leaving-non
type: req
---
Batch-trashes documents by id, leaving non-targeted documents untouched.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/e2e/batch-trash.e2e.test.ts (documents e2e > batch trash).

## Source

Source: Papra server behaviour notes - SRV-1235
