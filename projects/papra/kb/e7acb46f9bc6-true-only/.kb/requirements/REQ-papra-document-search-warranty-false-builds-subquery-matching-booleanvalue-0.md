---
title: Warranty:false builds a subquery matching booleanValue = 0.
status: active
semantic_text: Warranty:false builds a subquery matching booleanValue = 0.
semantic_clauses:
  - Warranty:false builds a subquery matching booleanValue = 0
logic_claims:
  - CLAIM-C8424E50C65CD385
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a76f9b157b4814b6cf900e65460e6ad519142218e4fe3fcc66d596ff2683ed5b
semantic_inventory:
  - claim_key: CLAIM-C8424E50C65CD385
    claim_text: Warranty:false builds a subquery matching booleanValue = 0
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-889'
  recorded_at: '2026-05-21T12:24:55.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-false-builds-subquery-matching-booleanvalue-0
type: req
---
Warranty:false builds a subquery matching booleanValue = 0.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-889
