---
title: Just the equality operator is supported ("=") for has filters, other operators return an issue and a no-op SQL query that evaluates to false.
status: active
semantic_text: Just the equality operator is supported ("=") for has filters, other operators return an issue and a no-op SQL query that evaluates to false.
semantic_clauses:
  - Just the equality operator is supported ("=") for has filters, other operators return an issue and a no-op SQL query that evaluates to false
logic_claims:
  - CLAIM-25020DE0A246AE3F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c7c500c795d543271ceea0edc5861ac2976ed0c60e90db1f2ba611c35e2b9b09
semantic_inventory:
  - claim_key: CLAIM-25020DE0A246AE3F
    claim_text: Just the equality operator is supported ("=") for has filters, other operators return an issue and a no-op SQL query that evaluates to false
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 140
    subjects:
      - document_search.handle_document_has_date_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-944'
  recorded_at: '2025-05-02T15:42:41.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-just-equality-operator-is-supported-for-has
type: req
---
Just the equality operator is supported ("=") for has filters, other operators return an issue and a no-op SQL query that evaluates to false.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleDocumentHasDateFilter).

## Source

Source: Papra server behaviour notes - SRV-944
