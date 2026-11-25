---
title: Supports "now" value to use the current date.
status: active
semantic_text: Supports "now" value to use the current date.
semantic_clauses:
  - Supports "now" value to use the current date
logic_claims:
  - CLAIM-0D471E955AAB5053
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 71dab708b9f3c53b34cc6ee2db957506acadc7e8642202c0929e60373fae16b5
semantic_inventory:
  - claim_key: CLAIM-0D471E955AAB5053
    claim_text: Supports "now" value to use the current date
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 44
    subjects:
      - document_search.handle_document_date_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-957'
  recorded_at: '2026-06-01T12:04:18.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-supports-now-value-to-use-current-date
type: req
---
Supports "now" value to use the current date.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleDocumentDateFilter).

## Source

Source: Papra server behaviour notes - SRV-957
