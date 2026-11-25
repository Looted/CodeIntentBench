---
title: Warranty:maybe returns an INVALID_BOOLEAN_VALUE issue and a no-match query.
status: active
semantic_text: Warranty:maybe returns an INVALID_BOOLEAN_VALUE issue and a no-match query.
semantic_clauses:
  - Warranty:maybe returns an INVALID_BOOLEAN_VALUE issue and a no-match query
logic_claims:
  - CLAIM-3E46B7D5682BE803
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6251d64baf1fcbe8beaf36c49f66a2c8e0cbc30ec184e18bf54177ce3beb8e7a
semantic_inventory:
  - claim_key: CLAIM-3E46B7D5682BE803
    claim_text: Warranty:maybe returns an INVALID_BOOLEAN_VALUE issue and a no-match query
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-891'
  recorded_at: '2026-04-17T16:52:46.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-maybe-returns-invalid-boolean-value-issue
type: req
---
Warranty:maybe returns an INVALID_BOOLEAN_VALUE issue and a no-match query.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-891
