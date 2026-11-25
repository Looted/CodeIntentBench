---
title: A filter for an unknown key returns no results without crashing.
status: active
semantic_text: A filter for an unknown key returns no results without crashing.
semantic_clauses:
  - A filter for an unknown key returns no results without crashing
logic_claims:
  - CLAIM-59CA9A3BF995A375
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6d7764aa8e4b93310fa74d461ff37e412e2379e2a0a0113626bf819fab64bfb2
semantic_inventory:
  - claim_key: CLAIM-59CA9A3BF995A375
    claim_text: A filter for an unknown key returns no results without crashing
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 63
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-754'
  recorded_at: '2025-09-25T15:20:51.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-filter-for-unknown-key-returns-no-results
type: req
---
A filter for an unknown key returns no results without crashing.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > unknown custom property key).

## Source

Source: Papra server behaviour notes - SRV-754
