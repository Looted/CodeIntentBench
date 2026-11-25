---
title: Warranty:true AND category:invoice returns only documents matching both conditions.
status: active
semantic_text: Warranty:true AND category:invoice returns only documents matching both conditions.
semantic_clauses:
  - Warranty:true AND category:invoice returns only documents matching both conditions
logic_claims:
  - CLAIM-3E0D6B9CD54147CD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c67f8ee93a2d97608094be72b08b60361b4a0ad6882cda9850a4f889a614546a
semantic_inventory:
  - claim_key: CLAIM-3E0D6B9CD54147CD
    claim_text: Warranty:true AND category:invoice returns only documents matching both conditions
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-837'
  recorded_at: '2026-07-26T08:24:51.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-true-and-category-invoice-returns-only
type: req
---
Warranty:true AND category:invoice returns only documents matching both conditions.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > combined filters).

## Source

Source: Papra server behaviour notes - SRV-837
