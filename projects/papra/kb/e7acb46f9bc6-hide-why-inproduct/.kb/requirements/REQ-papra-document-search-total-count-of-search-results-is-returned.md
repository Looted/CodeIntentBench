---
title: The total count of search results is returned for pagination.
status: active
semantic_text: The total count of search results is returned for pagination.
semantic_clauses:
  - The total count of search results is returned for pagination
logic_claims:
  - CLAIM-68B89EB693278110
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 23d4c20801d4fe6fa4b323523bd31e18f2d32b2c8ec4b8dac859d2693904a626
semantic_inventory:
  - claim_key: CLAIM-68B89EB693278110
    claim_text: The total count of search results is returned for pagination
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - document_search.search_organization_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-830'
  recorded_at: '2026-02-28T11:33:35.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-total-count-of-search-results-is-returned
type: req
---
The total count of search results is returned for pagination.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > searchOrganizationDocuments > documents count).

## Source

Source: Papra server behaviour notes - SRV-830
