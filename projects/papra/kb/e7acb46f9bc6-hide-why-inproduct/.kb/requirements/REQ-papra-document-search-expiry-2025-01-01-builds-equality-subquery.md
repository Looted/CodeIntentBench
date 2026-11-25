---
title: Expiry:2025-01-01 builds an equality subquery on dateValue.
status: active
semantic_text: Expiry:2025-01-01 builds an equality subquery on dateValue.
semantic_clauses:
  - Expiry:2025-01-01 builds an equality subquery on dateValue
logic_claims:
  - CLAIM-6F322B36DD801907
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f9148a2680306e0e1ed3af2abcbc7221976e704b963da768ead9ed45e07842a4
semantic_inventory:
  - claim_key: CLAIM-6F322B36DD801907
    claim_text: Expiry:2025-01-01 builds an equality subquery on dateValue
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-862'
  recorded_at: '2026-04-09T15:06:48.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-expiry-2025-01-01-builds-equality-subquery
type: req
---
Expiry:2025-01-01 builds an equality subquery on dateValue.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > date property filter).

## Source

Source: Papra server behaviour notes - SRV-862
