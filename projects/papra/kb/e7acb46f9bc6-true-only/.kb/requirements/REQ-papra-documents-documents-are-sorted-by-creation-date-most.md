---
title: Documents are sorted by creation date, most recent first, by default.
status: active
semantic_text: Documents are sorted by creation date, most recent first, by default.
semantic_clauses:
  - Documents are sorted by creation date, most recent first, by default
logic_claims:
  - CLAIM-ADE51F26F6865318
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9b269e41c3cc2951bfc1d186a56b85a447f43089de1e83d127d9f6debfeea417
semantic_inventory:
  - claim_key: CLAIM-ADE51F26F6865318
    claim_text: Documents are sorted by creation date, most recent first, by default
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - documents.documents_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1243'
  recorded_at: '2026-05-21T10:32:15.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-documents-are-sorted-by-creation-date-most
type: req
---
Documents are sorted by creation date, most recent first, by default.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/e2e/list-documents-sorting.e2e.test.ts (documents e2e > list documents sorting).

## Source

Source: Papra server behaviour notes - SRV-1243
