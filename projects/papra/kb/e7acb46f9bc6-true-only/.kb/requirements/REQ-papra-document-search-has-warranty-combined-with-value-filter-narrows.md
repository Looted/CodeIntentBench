---
title: Has:warranty combined with a value filter narrows results correctly.
status: active
semantic_text: Has:warranty combined with a value filter narrows results correctly.
semantic_clauses:
  - Has:warranty combined with a value filter narrows results correctly
logic_claims:
  - CLAIM-755B3A264D65FDD1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 64d8e932ca9205a9fba18ccc34d2a4fb7c3c46865d58580c37b939a153793dbe
semantic_inventory:
  - claim_key: CLAIM-755B3A264D65FDD1
    claim_text: Has:warranty combined with a value filter narrows results correctly
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - document_search.database_fts5_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-792'
  recorded_at: '2026-07-23T14:29:14.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-has-warranty-combined-with-value-filter-narrows
type: req
---
Has:warranty combined with a value filter narrows results correctly.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/database-fts5.repository.test.ts (database-fts5 repository > custom property filters > has: filter for custom properties).

## Source

Source: Papra server behaviour notes - SRV-792
