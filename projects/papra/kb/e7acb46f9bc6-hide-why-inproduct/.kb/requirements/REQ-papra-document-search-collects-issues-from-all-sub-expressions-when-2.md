---
title: Collects issues from all sub-expressions when combining with OR.
status: active
semantic_text: Collects issues from all sub-expressions when combining with OR.
semantic_clauses:
  - Collects issues from all sub-expressions when combining with OR
logic_claims:
  - CLAIM-E301AF0CF411181F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1905767cba99548fb545e1b874a6b6147c3ea048d266ee7d16d512a47812b8cd
semantic_inventory:
  - claim_key: CLAIM-E301AF0CF411181F
    claim_text: Collects issues from all sub-expressions when combining with OR
    role: normative
    status: modeled
    span:
      start: 0
      end: 63
    subjects:
      - document_search.handle_or_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-931'
  recorded_at: '2025-05-24T17:31:25.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-collects-issues-from-all-sub-expressions-when-2
type: req
---
Collects issues from all sub-expressions when combining with OR.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleOrExpression).

## Source

Source: Papra server behaviour notes - SRV-931
