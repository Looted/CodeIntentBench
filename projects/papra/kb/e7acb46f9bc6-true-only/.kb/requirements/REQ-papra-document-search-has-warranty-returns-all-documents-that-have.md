---
title: Has:warranty returns all documents that have any value set for the property.
status: active
semantic_text: Has:warranty returns all documents that have any value set for the property.
semantic_clauses:
  - Has:warranty returns all documents that have any value set for the property
logic_claims:
  - CLAIM-565E67462C37639B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c4f6b3b6e1d8220cb1921f3fb858e65a67a651f134e7a6d94de0fccac28133e6
semantic_inventory:
  - claim_key: CLAIM-565E67462C37639B
    claim_text: Has:warranty returns all documents that have any value set for the property
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-796'
  recorded_at: '2026-08-09T13:17:04.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-has-warranty-returns-all-documents-that-have
type: req
---
Has:warranty returns all documents that have any value set for the property.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > has: filter for custom properties).

## Source

Source: Papra server behaviour notes - SRV-796
