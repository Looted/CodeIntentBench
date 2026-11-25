---
title: Multiple column names are joined with a space and wrapped in curly braces.
status: active
semantic_text: Multiple column names are joined with a space and wrapped in curly braces.
semantic_clauses:
  - Multiple column names are joined with a space and wrapped in curly braces
logic_claims:
  - CLAIM-D3936C07305905C7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f3e6a7f56f8f6e1c2e6c38d779be1d1ced5ebb05bbc30ccab3ce0f64d5c7486b
semantic_inventory:
  - claim_key: CLAIM-D3936C07305905C7
    claim_text: Multiple column names are joined with a space and wrapped in curly braces
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - document_search.build_fts5_column_match_term
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-739'
  recorded_at: '2026-04-25T08:46:34.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-multiple-column-names-are-joined-with-space
type: req
---
Multiple column names are joined with a space and wrapped in curly braces.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.models.test.ts (database-fts5 models > buildFts5ColumnMatchTerm).

## Source

Source: Papra server behaviour notes - SRV-739
