---
title: Pagination permits retrieving subsequent pages of results.
status: active
semantic_text: Pagination permits retrieving subsequent pages of results.
semantic_clauses:
  - Pagination permits retrieving subsequent pages of results
logic_claims:
  - CLAIM-89D9E90DB0A0C72F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 874992f3cf889e210c7b53691973b5d292d7424526ac6139b8e6d39ce345017a
semantic_inventory:
  - claim_key: CLAIM-89D9E90DB0A0C72F
    claim_text: Pagination permits retrieving subsequent pages of results
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - document_search.pagination
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-812'
  recorded_at: '2026-07-02T14:32:41.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-pagination-permits-retrieving-subsequent-pages-of-results
type: req
---
Pagination permits retrieving subsequent pages of results.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > searchOrganizationDocuments > pagination).

## Source

Source: Papra server behaviour notes - SRV-812
