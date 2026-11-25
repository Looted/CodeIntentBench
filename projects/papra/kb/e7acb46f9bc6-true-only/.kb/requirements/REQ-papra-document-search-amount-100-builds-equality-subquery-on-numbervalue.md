---
title: Amount:100 builds an equality subquery on numberValue.
status: active
semantic_text: Amount:100 builds an equality subquery on numberValue.
semantic_clauses:
  - Amount:100 builds an equality subquery on numberValue
logic_claims:
  - CLAIM-83056067F0A6F640
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0b42f87fc591a7ac97ede8cba5c1c7a2635ad51299f19be87c33a66eac494c9f
semantic_inventory:
  - claim_key: CLAIM-83056067F0A6F640
    claim_text: Amount:100 builds an equality subquery on numberValue
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
  ref: 'Papra server behaviour notes: SRV-848'
  recorded_at: '2025-05-12T16:20:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-amount-100-builds-equality-subquery-on-numbervalue
type: req
---
Amount:100 builds an equality subquery on numberValue.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > number property filter).

## Source

Source: Papra server behaviour notes - SRV-848
