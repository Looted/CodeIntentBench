---
title: Warranty:FALSE is accepted as a valid boolean value.
status: active
semantic_text: Warranty:FALSE is accepted as a valid boolean value.
semantic_clauses:
  - Warranty:FALSE is accepted as a valid boolean value
logic_claims:
  - CLAIM-BB3D60ED341BC5BE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6740774259b410670165dc85a26d4ced611529ff6dbf5d5df7753f7ba4a0216a
semantic_inventory:
  - claim_key: CLAIM-BB3D60ED341BC5BE
    claim_text: Warranty:FALSE is accepted as a valid boolean value
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 51
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-882'
  recorded_at: '2025-02-08T16:24:38.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-false-is-accepted-as-valid-boolean
type: req
---
Warranty:FALSE is accepted as a valid boolean value.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-882
