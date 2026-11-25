---
title: Category:invoice returns only documents where category text = "invoice".
status: active
semantic_text: Category:invoice returns only documents where category text = "invoice".
semantic_clauses:
  - Category:invoice returns only documents where category text = "invoice"
logic_claims:
  - CLAIM-2C2FD442C2F4EFBF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f9b300b9b21ee9a312179240c512aa95c4a2ecdc3dfad65cba8315163d33825d
semantic_inventory:
  - claim_key: CLAIM-2C2FD442C2F4EFBF
    claim_text: Category:invoice returns only documents where category text = "invoice"
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-771'
  recorded_at: '2026-08-04T16:52:55.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-category-invoice-returns-only-documents-where-category
type: req
---
Category:invoice returns only documents where category text = "invoice".

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > text property).

## Source

Source: Papra server behaviour notes - SRV-771
