---
title: A database error after committing retains the referenced destination and source.
status: active
semantic_text: A database error after committing retains the referenced destination and source.
semantic_clauses:
  - A database error after committing retains the referenced destination and source
logic_claims:
  - CLAIM-B2FAA41591603D40
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6d7b99776cb14d088ceccb79d7ea624e2ae230aedc692837dcdad79ab5fab96a
semantic_inventory:
  - claim_key: CLAIM-B2FAA41591603D40
    claim_text: A database error after committing retains the referenced destination and source
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-982'
  recorded_at: '2026-01-24T14:32:27.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-database-error-after-committing-retains-referenced-destination
type: req
---
A database error after committing retains the referenced destination and source.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-982
