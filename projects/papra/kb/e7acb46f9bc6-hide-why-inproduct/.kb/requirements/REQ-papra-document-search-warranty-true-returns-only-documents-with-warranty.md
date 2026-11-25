---
title: Warranty:true returns only documents with warranty = true.
status: active
semantic_text: Warranty:true returns only documents with warranty = true.
semantic_clauses:
  - Warranty:true returns only documents with warranty = true
logic_claims:
  - CLAIM-94172AF19A69ECD6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6f8d671fd4e03d5b50d152b1e77386146ecf5673611096b436db1f30f43c6ac4
semantic_inventory:
  - claim_key: CLAIM-94172AF19A69ECD6
    claim_text: Warranty:true returns only documents with warranty = true
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-838'
  recorded_at: '2026-04-09T17:40:15.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-true-returns-only-documents-with-warranty
type: req
---
Warranty:true returns only documents with warranty = true.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > boolean property).

## Source

Source: Papra server behaviour notes - SRV-838
