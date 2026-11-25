---
title: Related:doc_1 returns only documents whose relation points to doc_1.
status: active
semantic_text: Related:doc_1 returns only documents whose relation points to doc_1.
semantic_clauses:
  - Related:doc_1 returns only documents whose relation points to doc_1
logic_claims:
  - CLAIM-A500D10274331F17
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2791dedbcd728b426ab663c9b4b0371635f0cc5772bc0d709fce6809f8628698
semantic_inventory:
  - claim_key: CLAIM-A500D10274331F17
    claim_text: Related:doc_1 returns only documents whose relation points to doc_1
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-817'
  recorded_at: '2026-03-09T09:30:56.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-related-doc-1-returns-only-documents-whose
type: req
---
Related:doc_1 returns only documents whose relation points to doc_1.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > document_relation property).

## Source

Source: Papra server behaviour notes - SRV-817
