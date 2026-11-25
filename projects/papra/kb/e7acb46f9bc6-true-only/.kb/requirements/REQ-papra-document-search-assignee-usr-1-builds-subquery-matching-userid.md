---
title: Assignee:usr_1 builds a subquery matching userId directly.
status: active
semantic_text: Assignee:usr_1 builds a subquery matching userId directly.
semantic_clauses:
  - Assignee:usr_1 builds a subquery matching userId directly
logic_claims:
  - CLAIM-8AD56F4A9A24ACED
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 09a6c4f6156ca215081e355533a2c377077f7be73779006f15c6070b8f25e2cc
semantic_inventory:
  - claim_key: CLAIM-8AD56F4A9A24ACED
    claim_text: Assignee:usr_1 builds a subquery matching userId directly
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - document_search.query_builder_custom_properties
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-856'
  recorded_at: '2025-03-19T09:39:15.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-assignee-usr-1-builds-subquery-matching-userid
type: req
---
Assignee:usr_1 builds a subquery matching userId directly.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.custom-properties.test.ts (query-builder - custom properties > user_relation property filter).

## Source

Source: Papra server behaviour notes - SRV-856
