---
title: Labels:urgent builds a subquery joining select options by key (same as select).
status: active
semantic_text: Labels:urgent builds a subquery joining select options by key (same as select).
semantic_clauses:
  - Labels:urgent builds a subquery joining select options by key (same as select)
logic_claims:
  - CLAIM-007D67E82E8D2ECF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 519fdd4c2561fb74a87c862ba504b0135c4b778265fd567b45566e5b327ab2dd
semantic_inventory:
  - claim_key: CLAIM-007D67E82E8D2ECF
    claim_text: Labels:urgent builds a subquery joining select options by key (same as select)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-868'
  recorded_at: '2026-02-18T16:53:57.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-labels-urgent-builds-subquery-joining-select-options
type: req
---
Labels:urgent builds a subquery joining select options by key (same as select).

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > multi_select property filter).

## Source

Source: Papra server behaviour notes - SRV-868
