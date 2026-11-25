---
title: Related:doc_1 builds a subquery matching relatedDocumentId directly.
status: active
semantic_text: Related:doc_1 builds a subquery matching relatedDocumentId directly.
semantic_clauses:
  - Related:doc_1 builds a subquery matching relatedDocumentId directly
logic_claims:
  - CLAIM-FF86928544A00798
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ce42db2b57ce077ef22a4fba78c2a2f1a11d22b4506aace317c41b597be045ff
semantic_inventory:
  - claim_key: CLAIM-FF86928544A00798
    claim_text: Related:doc_1 builds a subquery matching relatedDocumentId directly
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-872'
  recorded_at: '2026-02-20T15:51:44.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-related-doc-1-builds-subquery-matching-relateddocumentid
type: req
---
Related:doc_1 builds a subquery matching relatedDocumentId directly.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > document_relation property filter).

## Source

Source: Papra server behaviour notes - SRV-872
