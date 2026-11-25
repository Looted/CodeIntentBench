---
title: Amount:150 returns only the document with amount = 150.
status: active
semantic_text: Amount:150 returns only the document with amount = 150.
semantic_clauses:
  - Amount:150 returns only the document with amount = 150
logic_claims:
  - CLAIM-794064AC9F07EB52
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: aa9089068653d2a9dd157e17458e95f93ef4ffa28446f00b71e7145f76474223
semantic_inventory:
  - claim_key: CLAIM-794064AC9F07EB52
    claim_text: Amount:150 returns only the document with amount = 150
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-757'
  recorded_at: '2025-09-06T15:29:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-amount-150-returns-only-document-with-amount
type: req
---
Amount:150 returns only the document with amount = 150.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > number property).

## Source

Source: Papra server behaviour notes - SRV-757
