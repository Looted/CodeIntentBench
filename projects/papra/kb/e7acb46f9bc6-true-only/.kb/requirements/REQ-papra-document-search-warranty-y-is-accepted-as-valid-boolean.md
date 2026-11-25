---
title: Warranty:y is accepted as a valid boolean value.
status: active
semantic_text: Warranty:y is accepted as a valid boolean value.
semantic_clauses:
  - Warranty:y is accepted as a valid boolean value
logic_claims:
  - CLAIM-FE019232977CA382
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2d653bd31c149c7f32768274323a46d69cafa98fb9cf5205e7709ae78e28352e
semantic_inventory:
  - claim_key: CLAIM-FE019232977CA382
    claim_text: Warranty:y is accepted as a valid boolean value
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 47
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-911'
  recorded_at: '2026-08-21T11:06:51.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-y-is-accepted-as-valid-boolean
type: req
---
Warranty:y is accepted as a valid boolean value.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-911
