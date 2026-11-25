---
title: Amount:>100 returns documents with amount greater than 100.
status: active
semantic_text: Amount:>100 returns documents with amount greater than 100.
semantic_clauses:
  - Amount:>100 returns documents with amount greater than 100
logic_claims:
  - CLAIM-0F06495D9598F151
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ef8e09d1a3ed8e21c7de63e5be34cfef4a322fba824eabdf23a61fd9385876a4
semantic_inventory:
  - claim_key: CLAIM-0F06495D9598F151
    claim_text: Amount:>100 returns documents with amount greater than 100
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-758'
  recorded_at: '2026-08-26T08:36:38.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-amount-100-returns-documents-with-amount-greater
type: req
---
Amount:>100 returns documents with amount greater than 100.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > number property).

## Source

Source: Papra server behaviour notes - SRV-758
