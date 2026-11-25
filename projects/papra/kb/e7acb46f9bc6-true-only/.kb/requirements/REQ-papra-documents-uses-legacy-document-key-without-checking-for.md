---
title: Uses the legacy document key without checking for collisions or loading organization names.
status: active
semantic_text: Uses the legacy document key without checking for collisions or loading organization names.
semantic_clauses:
  - Uses the legacy document key without checking for collisions or loading organization names
logic_claims:
  - CLAIM-5120530C46850D22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e8f77eca9fddb443077261178e74af1832afaf8c3bc61bcf83c7da2c6afcfc23
semantic_inventory:
  - claim_key: CLAIM-5120530C46850D22
    claim_text: Uses the legacy document key without checking for collisions or loading organization names
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - documents.create_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1025'
  recorded_at: '2025-06-27T10:34:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-uses-legacy-document-key-without-checking-for
type: req
---
Uses the legacy document key without checking for collisions or loading organization names.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (document-storage usecases > createDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1025
