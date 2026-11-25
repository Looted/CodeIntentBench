---
title: Indexes multiple documents in a single call.
status: active
semantic_text: Indexes multiple documents in a single call.
semantic_clauses:
  - Indexes multiple documents in a single call
logic_claims:
  - CLAIM-D090F3E030E6A0B9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 70468e5e63a12ba1ef219ec120b8b1a2b8b3a734213ff9319bf818b0e63da009
semantic_inventory:
  - claim_key: CLAIM-D090F3E030E6A0B9
    claim_text: Indexes multiple documents in a single call
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 43
    subjects:
      - document_search.index_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-799'
  recorded_at: '2026-04-20T14:26:19.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-indexes-multiple-documents-in-single-call
type: req
---
Indexes multiple documents in a single call.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > indexDocuments).

## Source

Source: Papra server behaviour notes - SRV-799
