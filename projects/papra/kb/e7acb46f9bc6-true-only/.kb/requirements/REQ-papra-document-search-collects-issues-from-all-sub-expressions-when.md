---
title: Collects issues from all sub-expressions when combining with AND.
status: active
semantic_text: Collects issues from all sub-expressions when combining with AND.
semantic_clauses:
  - Collects issues from all sub-expressions when combining with AND
logic_claims:
  - CLAIM-1799467974AF4BE8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e89cace65754c6d2bfd65bceb08c9c9a93f980108cf451304bec6b74528f181c
semantic_inventory:
  - claim_key: CLAIM-1799467974AF4BE8
    claim_text: Collects issues from all sub-expressions when combining with AND
    role: normative
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - document_search.handle_and_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-929'
  recorded_at: '2025-04-03T17:09:56.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-collects-issues-from-all-sub-expressions-when
type: req
---
Collects issues from all sub-expressions when combining with AND.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleAndExpression).

## Source

Source: Papra server behaviour notes - SRV-929
