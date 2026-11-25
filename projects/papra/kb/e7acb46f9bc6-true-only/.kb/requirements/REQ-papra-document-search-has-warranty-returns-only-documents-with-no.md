---
title: -has:warranty returns only documents with no value set for the property.
status: active
semantic_text: -has:warranty returns only documents with no value set for the property.
semantic_clauses:
  - -has:warranty returns only documents with no value set for the property
logic_claims:
  - CLAIM-1071F05DA65EB23D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 31d6bf1942e4611609085c1cafcd79fc5d38a4d62156d288b1f2dc2b585ade50
semantic_inventory:
  - claim_key: CLAIM-1071F05DA65EB23D
    claim_text: -has:warranty returns only documents with no value set for the property
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-745'
  recorded_at: '2026-07-24T15:43:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-has-warranty-returns-only-documents-with-no
type: req
---
-has:warranty returns only documents with no value set for the property.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > has: filter for custom properties).

## Source

Source: Papra server behaviour notes - SRV-745
