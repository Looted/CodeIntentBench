---
title: No results means total count is zero.
status: active
semantic_text: No results means total count is zero.
semantic_clauses:
  - No results means total count is zero
logic_claims:
  - CLAIM-506055409D2C394D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c171d82f07d5b09c11cc28de13c6c65b3006714e1d1d9c235eaf08cf92f58e96
semantic_inventory:
  - claim_key: CLAIM-506055409D2C394D
    claim_text: No results means total count is zero
    role: definition
    status: modeled
    span:
      start: 0
      end: 36
    subjects:
      - document_search.search_organization_documents
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-808'
  recorded_at: '2025-03-20T10:21:29.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-no-results-means-total-count-is-zero
type: req
---
No results means total count is zero.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > searchOrganizationDocuments > documents count).

## Source

Source: Papra server behaviour notes - SRV-808
