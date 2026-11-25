---
title: Combines multiple expressions with AND logic.
status: active
semantic_text: Combines multiple expressions with AND logic.
semantic_clauses:
  - Combines multiple expressions with AND logic
logic_claims:
  - CLAIM-DD9CFBB2D2D09146
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 69d5487183aa8c4debeb345df6d2310e1a6aec495d073eee9b561d760dae58e3
semantic_inventory:
  - claim_key: CLAIM-DD9CFBB2D2D09146
    claim_text: Combines multiple expressions with AND logic
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 44
    subjects:
      - document_search.handle_and_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-932'
  recorded_at: '2026-03-14T11:26:55.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-combines-multiple-expressions-with-and-logic
type: req
---
Combines multiple expressions with AND logic.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleAndExpression).

## Source

Source: Papra server behaviour notes - SRV-932
