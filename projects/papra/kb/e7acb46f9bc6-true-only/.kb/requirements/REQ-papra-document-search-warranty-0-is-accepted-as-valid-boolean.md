---
title: Warranty:0 is accepted as a valid boolean value.
status: active
semantic_text: Warranty:0 is accepted as a valid boolean value.
semantic_clauses:
  - Warranty:0 is accepted as a valid boolean value
logic_claims:
  - CLAIM-F88953EF9347B6C8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fa4efc85059f6b8c3562d39782869d80dbebb99d6ad995b9ea2d89c3caafad42
semantic_inventory:
  - claim_key: CLAIM-F88953EF9347B6C8
    claim_text: Warranty:0 is accepted as a valid boolean value
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
  ref: 'Papra server behaviour notes: SRV-875'
  recorded_at: '2026-01-16T09:29:25.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-0-is-accepted-as-valid-boolean
type: req
---
Warranty:0 is accepted as a valid boolean value.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-875
