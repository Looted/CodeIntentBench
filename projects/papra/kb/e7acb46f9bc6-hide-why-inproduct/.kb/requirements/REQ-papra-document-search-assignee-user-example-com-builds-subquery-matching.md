---
title: Assignee:user@example.com builds a subquery matching by email via left join.
status: active
semantic_text: Assignee:user@example.com builds a subquery matching by email via left join.
semantic_clauses:
  - Assignee:user@example.com builds a subquery matching by email via left join
logic_claims:
  - CLAIM-5A5ED3F692A7D285
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b77bceec5b74a21cf51252f73db8a2e52e93e85d7c955a2190a92581bf981ba0
semantic_inventory:
  - claim_key: CLAIM-5A5ED3F692A7D285
    claim_text: Assignee:user@example.com builds a subquery matching by email via left join
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-852'
  recorded_at: '2026-08-07T08:27:24.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-assignee-user-example-com-builds-subquery-matching
type: req
---
Assignee:user@example.com builds a subquery matching by email via left join.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > user_relation property filter).

## Source

Source: Papra server behaviour notes - SRV-852
