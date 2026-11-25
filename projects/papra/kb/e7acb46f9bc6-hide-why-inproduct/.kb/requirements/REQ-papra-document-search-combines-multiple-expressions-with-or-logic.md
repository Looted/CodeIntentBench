---
title: Combines multiple expressions with OR logic.
status: active
semantic_text: Combines multiple expressions with OR logic.
semantic_clauses:
  - Combines multiple expressions with OR logic
logic_claims:
  - CLAIM-D84449FB877781EB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f4a6c62a6f552f149a05463b5910e32858f59bf0738c1da471733065d20c35cc
semantic_inventory:
  - claim_key: CLAIM-D84449FB877781EB
    claim_text: Combines multiple expressions with OR logic
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 43
    subjects:
      - document_search.handle_or_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-933'
  recorded_at: '2025-02-28T14:40:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-combines-multiple-expressions-with-or-logic
type: req
---
Combines multiple expressions with OR logic.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleOrExpression).

## Source

Source: Papra server behaviour notes - SRV-933
