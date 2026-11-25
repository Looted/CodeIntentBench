---
title: -assignee:usr_1 (NOT) returns documents not assigned to that user.
status: active
semantic_text: -assignee:usr_1 (NOT) returns documents not assigned to that user.
semantic_clauses:
  - -assignee:usr_1 (NOT) returns documents not assigned to that user
logic_claims:
  - CLAIM-23CC4A9040A6E269
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 78bf4611b56788689814aa528a241539c2deea5d699319b3129e982cd3a3b55f
semantic_inventory:
  - claim_key: CLAIM-23CC4A9040A6E269
    claim_text: -assignee:usr_1 (NOT) returns documents not assigned to that user
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-744'
  recorded_at: '2026-08-16T08:47:18.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-assignee-usr-1-not-returns-documents-not
type: req
---
-assignee:usr_1 (NOT) returns documents not assigned to that user.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > user_relation property).

## Source

Source: Papra server behaviour notes - SRV-744
