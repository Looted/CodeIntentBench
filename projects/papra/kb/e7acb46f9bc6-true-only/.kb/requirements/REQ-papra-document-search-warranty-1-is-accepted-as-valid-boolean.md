---
title: Warranty:1 is accepted as a valid boolean value.
status: active
semantic_text: Warranty:1 is accepted as a valid boolean value.
semantic_clauses:
  - Warranty:1 is accepted as a valid boolean value
logic_claims:
  - CLAIM-2DECD6BC408FBB47
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 297d200e51d8a0c11b1f1f9ec6d0382b7d91c6d4a31296d7f679c74f81ce7c43
semantic_inventory:
  - claim_key: CLAIM-2DECD6BC408FBB47
    claim_text: Warranty:1 is accepted as a valid boolean value
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
  ref: 'Papra server behaviour notes: SRV-876'
  recorded_at: '2026-03-11T09:03:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-1-is-accepted-as-valid-boolean
type: req
---
Warranty:1 is accepted as a valid boolean value.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-876
