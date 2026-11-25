---
title: Warranty:yes is accepted as a valid boolean value.
status: active
semantic_text: Warranty:yes is accepted as a valid boolean value.
semantic_clauses:
  - Warranty:yes is accepted as a valid boolean value
logic_claims:
  - CLAIM-055FF3D442104ED3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0122b4a15d7e74c6c678aba3a87f74d7ec76042828f7bca7bd9fd8fa40090150
semantic_inventory:
  - claim_key: CLAIM-055FF3D442104ED3
    claim_text: Warranty:yes is accepted as a valid boolean value
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 49
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-914'
  recorded_at: '2025-04-21T08:54:27.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-yes-is-accepted-as-valid-boolean
type: req
---
Warranty:yes is accepted as a valid boolean value.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-914
