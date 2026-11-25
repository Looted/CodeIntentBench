---
title: Returns error for unsupported expression types.
status: active
semantic_text: Returns error for unsupported expression types.
semantic_clauses:
  - Returns error for unsupported expression types
logic_claims:
  - CLAIM-BE6A063EB30A668C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bd62710f522b32b36135bdc1fa51f4e4bb45c652ffa054bc6438e07fd88a8040
semantic_inventory:
  - claim_key: CLAIM-BE6A063EB30A668C
    claim_text: Returns error for unsupported expression types
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 46
    subjects:
      - document_search.handle_unsupported_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-954'
  recorded_at: '2026-04-24T14:24:53.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-returns-error-for-unsupported-expression-types
type: req
---
Returns error for unsupported expression types.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleUnsupportedExpression).

## Source

Source: Papra server behaviour notes - SRV-954
