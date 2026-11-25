---
title: Has:warranty builds a subquery checking for any row with that property definition id.
status: active
semantic_text: Has:warranty builds a subquery checking for any row with that property definition id.
semantic_clauses:
  - Has:warranty builds a subquery checking for any row with that property definition id
logic_claims:
  - CLAIM-D86666FA66A271DE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1f601ef46e44b21f256f779ef1dcbbf3c09af9b5a3eb15308d1ffa3b6a07a286
semantic_inventory:
  - claim_key: CLAIM-D86666FA66A271DE
    claim_text: Has:warranty builds a subquery checking for any row with that property definition id
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-864'
  recorded_at: '2025-08-13T09:15:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-has-warranty-builds-subquery-checking-for-any
type: req
---
Has:warranty builds a subquery checking for any row with that property definition id.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > has custom property filter).

## Source

Source: Papra server behaviour notes - SRV-864
