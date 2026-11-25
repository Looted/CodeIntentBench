---
title: Category:invoice builds an exact-match subquery on textValue.
status: active
semantic_text: Category:invoice builds an exact-match subquery on textValue.
semantic_clauses:
  - Category:invoice builds an exact-match subquery on textValue
logic_claims:
  - CLAIM-E999EFB27A887A6A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1c4c7f0f218389f89515a5f5afd3393d5241afa37e42fcddcdada0f135ae549d
semantic_inventory:
  - claim_key: CLAIM-E999EFB27A887A6A
    claim_text: Category:invoice builds an exact-match subquery on textValue
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-858'
  recorded_at: '2025-05-24T14:08:35.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-category-invoice-builds-exact-match-subquery-on
type: req
---
Category:invoice builds an exact-match subquery on textValue.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > text property filter).

## Source

Source: Papra server behaviour notes - SRV-858
