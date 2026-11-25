---
title: Assignee:alice@example.com returns the document assigned to that email.
status: active
semantic_text: Assignee:alice@example.com returns the document assigned to that email.
semantic_clauses:
  - Assignee:alice@example.com returns the document assigned to that email
logic_claims:
  - CLAIM-A1A82D660F12D506
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 73df5ad78efe0e1476e0f6c11af542576809610749e94d2f9687fa472fb33ae9
semantic_inventory:
  - claim_key: CLAIM-A1A82D660F12D506
    claim_text: Assignee:alice@example.com returns the document assigned to that email
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-765'
  recorded_at: '2025-12-24T15:30:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-assignee-alice-example-com-returns-document-assigned
type: req
---
Assignee:alice@example.com returns the document assigned to that email.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > user_relation property).

## Source

Source: Papra server behaviour notes - SRV-765
