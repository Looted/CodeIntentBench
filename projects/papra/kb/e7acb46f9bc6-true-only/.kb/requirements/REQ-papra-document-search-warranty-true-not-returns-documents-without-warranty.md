---
title: -warranty:true (NOT) returns documents without warranty = true.
status: active
semantic_text: -warranty:true (NOT) returns documents without warranty = true.
semantic_clauses:
  - -warranty:true (NOT) returns documents without warranty = true
logic_claims:
  - CLAIM-8D8FEA13061E058D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1dca785f19c79f9fd8e2680ceb30d7a03f489a26cd86f921b2c79b9d387969d0
semantic_inventory:
  - claim_key: CLAIM-8D8FEA13061E058D
    claim_text: -warranty:true (NOT) returns documents without warranty = true
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-748'
  recorded_at: '2025-04-26T14:48:21.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-true-not-returns-documents-without-warranty
type: req
---
-warranty:true (NOT) returns documents without warranty = true.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > boolean property).

## Source

Source: Papra server behaviour notes - SRV-748
