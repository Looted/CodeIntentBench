---
title: Warranty:on is accepted as a valid boolean value.
status: active
semantic_text: Warranty:on is accepted as a valid boolean value.
semantic_clauses:
  - Warranty:on is accepted as a valid boolean value
logic_claims:
  - CLAIM-9C5F400132CBC4D1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 23d9a8697b62d205b70a05c5cead25f40ea606391cf72ac6861b7e82582cf60d
semantic_inventory:
  - claim_key: CLAIM-9C5F400132CBC4D1
    claim_text: Warranty:on is accepted as a valid boolean value
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 48
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-904'
  recorded_at: '2025-05-10T11:02:23.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-on-is-accepted-as-valid-boolean
type: req
---
Warranty:on is accepted as a valid boolean value.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-904
