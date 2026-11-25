---
title: When the expression is empty, it returns a no-op SQL query that always evaluates to true.
status: active
semantic_text: When the expression is empty, it returns a no-op SQL query that always evaluates to true.
semantic_clauses:
  - When the expression is empty, it returns a no-op SQL query that always evaluates to true
logic_claims:
  - CLAIM-590A791D7D6A7CCE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b0e850563cd4c8eb7496a72ccc8957e4cb105d6a57332db0350f503f2dba732d
semantic_inventory:
  - claim_key: CLAIM-590A791D7D6A7CCE
    claim_text: When the expression is empty, it returns a no-op SQL query that always evaluates to true
    role: condition
    status: modeled
    span:
      start: 0
      end: 88
    subjects:
      - document_search.handle_empty_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-961'
  recorded_at: '2025-07-15T10:12:32.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-expression-is-empty-it-returns-no-op
type: req
---
When the expression is empty, it returns a no-op SQL query that always evaluates to true.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleEmptyExpression).

## Source

Source: Papra server behaviour notes - SRV-961
