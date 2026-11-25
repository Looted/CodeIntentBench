---
title: Adds a document to the FTS index and makes it searchable.
status: active
semantic_text: Adds a document to the FTS index and makes it searchable.
semantic_clauses:
  - Adds a document to the FTS index and makes it searchable
logic_claims:
  - CLAIM-B8B6DD12E71C67E8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2ba4cf1d68e3d97016147ea48653133b9d8011a50553ed5d6d3ab3721d6ca740
semantic_inventory:
  - claim_key: CLAIM-B8B6DD12E71C67E8
    claim_text: Adds a document to the FTS index and makes it searchable
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 56
    subjects:
      - document_search.index_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-755'
  recorded_at: '2025-06-21T14:37:14.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-adds-document-to-fts-index-and-makes
type: req
---
Adds a document to the FTS index and makes it searchable.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > indexDocuments).

## Source

Source: Papra server behaviour notes - SRV-755
