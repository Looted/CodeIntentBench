---
title: Warranty:disabled is accepted as a valid boolean value.
status: active
semantic_text: Warranty:disabled is accepted as a valid boolean value.
semantic_clauses:
  - Warranty:disabled is accepted as a valid boolean value
logic_claims:
  - CLAIM-4F2EF284C85A36DF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 82eba7c412bb368589782858b62353cf85715c0b0bd0df5417869ec524c1ffe5
semantic_inventory:
  - claim_key: CLAIM-4F2EF284C85A36DF
    claim_text: Warranty:disabled is accepted as a valid boolean value
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-886'
  recorded_at: '2025-06-06T16:04:44.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-disabled-is-accepted-as-valid-boolean
type: req
---
Warranty:disabled is accepted as a valid boolean value.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-886
