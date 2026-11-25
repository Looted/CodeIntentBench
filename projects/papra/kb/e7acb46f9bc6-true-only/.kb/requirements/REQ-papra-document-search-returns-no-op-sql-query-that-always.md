---
title: Returns a no-op SQL query that always evaluates to false.
status: active
semantic_text: Returns a no-op SQL query that always evaluates to false.
semantic_clauses:
  - Returns a no-op SQL query that always evaluates to false
logic_claims:
  - CLAIM-DECC7B078FDD9369
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9e49cf90fc9cfc193cac60c76fe2a5e8fec64dd5eacc0a2195e702ed051f516f
semantic_inventory:
  - claim_key: CLAIM-DECC7B078FDD9369
    claim_text: Returns a no-op SQL query that always evaluates to false
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 56
    subjects:
      - document_search.handle_unsupported_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-951'
  recorded_at: '2025-11-18T14:04:20.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-returns-no-op-sql-query-that-always
type: req
---
Returns a no-op SQL query that always evaluates to false.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleUnsupportedExpression).

## Source

Source: Papra server behaviour notes - SRV-951
