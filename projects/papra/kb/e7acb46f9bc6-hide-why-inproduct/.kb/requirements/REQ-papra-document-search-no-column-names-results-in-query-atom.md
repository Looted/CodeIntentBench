---
title: No column names results in a query atom without column prefix.
status: active
semantic_text: No column names results in a query atom without column prefix.
semantic_clauses:
  - No column names results in a query atom without column prefix
logic_claims:
  - CLAIM-E681C1DFB1C8AFC2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f62b3488393fdc1348d59a6e4f616d827be460deab37e197d89255879fa37f94
semantic_inventory:
  - claim_key: CLAIM-E681C1DFB1C8AFC2
    claim_text: No column names results in a query atom without column prefix
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - document_search.build_fts5_column_match_term
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-740'
  recorded_at: '2025-08-11T11:15:27.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-no-column-names-results-in-query-atom
type: req
---
No column names results in a query atom without column prefix.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.models.test.ts (database-fts5 models > buildFts5ColumnMatchTerm).

## Source

Source: Papra server behaviour notes - SRV-740
