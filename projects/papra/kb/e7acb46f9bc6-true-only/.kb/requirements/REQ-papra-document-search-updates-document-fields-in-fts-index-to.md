---
title: Updates document fields in the FTS index to reflect changes in search results.
status: active
semantic_text: Updates document fields in the FTS index to reflect changes in search results.
semantic_clauses:
  - Updates document fields in the FTS index to reflect changes in search results
logic_claims:
  - CLAIM-A640541C3AAE7070
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b2ed33aed450f37fd4f70ab89985985bae4118883cbcda4951860253a2d0a106
semantic_inventory:
  - claim_key: CLAIM-A640541C3AAE7070
    claim_text: Updates document fields in the FTS index to reflect changes in search results
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - document_search.update_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-833'
  recorded_at: '2026-06-21T16:46:14.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-updates-document-fields-in-fts-index-to
type: req
---
Updates document fields in the FTS index to reflect changes in search results.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > updateDocuments).

## Source

Source: Papra server behaviour notes - SRV-833
