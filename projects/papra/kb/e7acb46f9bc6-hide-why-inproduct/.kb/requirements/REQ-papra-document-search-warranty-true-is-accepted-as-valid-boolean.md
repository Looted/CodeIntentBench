---
title: Warranty:TRUE is accepted as a valid boolean value.
status: active
semantic_text: Warranty:TRUE is accepted as a valid boolean value.
semantic_clauses:
  - Warranty:TRUE is accepted as a valid boolean value
logic_claims:
  - CLAIM-8CBA9DE1383EE4A8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1271d993eba6dd83f5e6ca3ed6488c185c30694beead95f04370557ac7fd1e8e
semantic_inventory:
  - claim_key: CLAIM-8CBA9DE1383EE4A8
    claim_text: Warranty:TRUE is accepted as a valid boolean value
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 50
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-884'
  recorded_at: '2026-06-11T15:54:20.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-true-is-accepted-as-valid-boolean
type: req
---
Warranty:TRUE is accepted as a valid boolean value.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-884
