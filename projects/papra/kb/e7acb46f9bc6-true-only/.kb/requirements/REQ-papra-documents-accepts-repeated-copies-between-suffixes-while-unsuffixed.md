---
title: Accepts repeated copies between suffixes while the unsuffixed key remains occupied.
status: active
semantic_text: Accepts repeated copies between suffixes while the unsuffixed key remains occupied.
semantic_clauses:
  - Accepts repeated copies between suffixes while the unsuffixed key remains occupied
logic_claims:
  - CLAIM-928AAA9D08A94D2C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a86b770896ab4c8e86b19fe5d55933cb2082d8190618421e67b889068ba712ef
semantic_inventory:
  - claim_key: CLAIM-928AAA9D08A94D2C
    claim_text: Accepts repeated copies between suffixes while the unsuffixed key remains occupied
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-997'
  recorded_at: '2026-01-21T08:00:22.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-accepts-repeated-copies-between-suffixes-while-unsuffixed
type: req
---
Accepts repeated copies between suffixes while the unsuffixed key remains occupied.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-997
