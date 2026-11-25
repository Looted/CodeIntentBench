---
title: Warranty:enabled is accepted as a valid boolean value.
status: active
semantic_text: Warranty:enabled is accepted as a valid boolean value.
semantic_clauses:
  - Warranty:enabled is accepted as a valid boolean value
logic_claims:
  - CLAIM-36FE14D03152A256
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 93c009cd78525ac230e01ec24a3409bef1f8e71350578e61323a0f366ee44c1e
semantic_inventory:
  - claim_key: CLAIM-36FE14D03152A256
    claim_text: Warranty:enabled is accepted as a valid boolean value
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 53
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-887'
  recorded_at: '2026-07-07T11:12:44.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-warranty-enabled-is-accepted-as-valid-boolean
type: req
---
Warranty:enabled is accepted as a valid boolean value.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > boolean property filter).

## Source

Source: Papra server behaviour notes - SRV-887
