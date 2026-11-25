---
title: Builds query to find documents with a date.
status: active
semantic_text: Builds query to find documents with a date.
semantic_clauses:
  - Builds query to find documents with a date
logic_claims:
  - CLAIM-ED897F5705AA8ADE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e9f197c2f3599e71cae7ebfdc7524cbac513693cb50ca10247266a3df8fedbd5
semantic_inventory:
  - claim_key: CLAIM-ED897F5705AA8ADE
    claim_text: Builds query to find documents with a date
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 42
    subjects:
      - document_search.handle_document_has_date_filter
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-924'
  recorded_at: '2026-08-23T12:21:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:document-search
id: REQ-papra-document-search-builds-query-to-find-documents-with-date
type: req
---
Builds query to find documents with a date.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-search/database-fts5/query-builder/query-builder.test.ts (query-builder > handleDocumentHasDateFilter).

## Source

Source: Papra server behaviour notes - SRV-924
