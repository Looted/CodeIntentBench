---
title: Amount:>=150 amount:<=200 (AND) returns only doc_2.
status: active
semantic_text: Amount:>=150 amount:<=200 (AND) returns only doc_2.
semantic_clauses:
  - Amount:>=150 amount:<=200 (AND) returns only doc_2
logic_claims:
  - CLAIM-999A02197629EFEE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5de4c54809c8362abc386493f712cc66698e61fda6772c4a2abac6945225efdc
semantic_inventory:
  - claim_key: CLAIM-999A02197629EFEE
    claim_text: Amount:>=150 amount:<=200 (AND) returns only doc_2
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 50
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-759'
  recorded_at: '2025-03-03T15:23:58.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-amount-150-amount-200-and-returns-only
type: req
---
Amount:>=150 amount:<=200 (AND) returns only doc_2.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > number property).

## Source

Source: Papra server behaviour notes - SRV-759
