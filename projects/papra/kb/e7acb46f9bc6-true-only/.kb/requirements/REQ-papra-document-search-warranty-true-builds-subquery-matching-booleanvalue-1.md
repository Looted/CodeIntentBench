---
title: Warranty:true builds a subquery matching booleanValue = 1.
status: active
semantic_text: Warranty:true builds a subquery matching booleanValue = 1.
semantic_clauses:
  - Warranty:true builds a subquery matching booleanValue = 1
logic_claims:
  - CLAIM-F97CD66FAA61A4C6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f041e0eefca33b2c5cb1dc27877fad70b696c4b319236bd61d3612a5b17a94c9
semantic_inventory:
  - claim_key: CLAIM-F97CD66FAA61A4C6
    claim_text: Warranty:true builds a subquery matching booleanValue = 1
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-908'
  recorded_at: '2025-11-26T09:48:39.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-true-builds-subquery-matching-booleanvalue-1
type: req
---
Warranty:true builds a subquery matching booleanValue = 1.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-908
