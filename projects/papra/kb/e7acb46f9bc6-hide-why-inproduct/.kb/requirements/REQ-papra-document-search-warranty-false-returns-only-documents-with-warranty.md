---
title: Warranty:false returns only documents with warranty = false.
status: active
semantic_text: Warranty:false returns only documents with warranty = false.
semantic_clauses:
  - Warranty:false returns only documents with warranty = false
logic_claims:
  - CLAIM-66D4D2F22034515D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3a465d9f2b131016bc539033747a08978d0ccf07b846fe40fb1bff196fbb7aa1
semantic_inventory:
  - claim_key: CLAIM-66D4D2F22034515D
    claim_text: Warranty:false returns only documents with warranty = false
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-836'
  recorded_at: '2025-04-17T08:57:53.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-false-returns-only-documents-with-warranty
type: req
---
Warranty:false returns only documents with warranty = false.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > boolean property).

## Source

Source: Papra server behaviour notes - SRV-836
