---
title: With multiple tags per documents, the page size is respected.
status: active
semantic_text: With multiple tags per documents, the page size is respected.
semantic_clauses:
  - With multiple tags per documents, the page size is respected
logic_claims:
  - CLAIM-A24600E4548206E7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5b17fb1193eff7f23b4d53bb3b3f628a5cc7ca502784ff9fa57e6049a24338d8
semantic_inventory:
  - claim_key: CLAIM-A24600E4548206E7
    claim_text: With multiple tags per documents, the page size is respected
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - document_search.pagination
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-846'
  recorded_at: '2026-09-09T13:03:12.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-with-multiple-tags-per-documents-page-size
type: req
---
With multiple tags per documents, the page size is respected.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > searchOrganizationDocuments > pagination).

## Source

Source: Papra server behaviour notes - SRV-846
