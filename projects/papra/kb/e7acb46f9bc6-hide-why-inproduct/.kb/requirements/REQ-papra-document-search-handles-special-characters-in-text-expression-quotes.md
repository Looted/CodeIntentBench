---
title: Handles special characters in text expression (quotes are stripped by the formatter).
status: active
semantic_text: Handles special characters in text expression (quotes are stripped by the formatter).
semantic_clauses:
  - Handles special characters in text expression (quotes are stripped by the formatter)
logic_claims:
  - CLAIM-E54CED3A07B33578
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b07e3b81ace373ab63e7b02d944c26fa505044e6d56ea2e8fe1c9f6cc2735aa6
semantic_inventory:
  - claim_key: CLAIM-E54CED3A07B33578
    claim_text: Handles special characters in text expression (quotes are stripped by the formatter)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - document_search.handle_text_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-936'
  recorded_at: '2025-12-08T15:04:05.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-handles-special-characters-in-text-expression-quotes
type: req
---
Handles special characters in text expression (quotes are stripped by the formatter).

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleTextExpression).

## Source

Source: Papra server behaviour notes - SRV-936
