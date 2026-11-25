---
title: Status:approved builds a subquery joining select options by key.
status: active
semantic_text: Status:approved builds a subquery joining select options by key.
semantic_clauses:
  - Status:approved builds a subquery joining select options by key
logic_claims:
  - CLAIM-8526E4B480822662
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d9d6cac95044bf5bea3ecbb66577b2f4b33c7568a9ac4cdfc90b0e2cf1e416eb
semantic_inventory:
  - claim_key: CLAIM-8526E4B480822662
    claim_text: Status:approved builds a subquery joining select options by key
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 63
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-873'
  recorded_at: '2025-05-19T15:05:52.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-status-approved-builds-subquery-joining-select-options
type: req
---
Status:approved builds a subquery joining select options by key.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > select property filter).

## Source

Source: Papra server behaviour notes - SRV-873
