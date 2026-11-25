---
title: Uses the random suffix fallback after incremental attempts are exhausted.
status: active
semantic_text: Uses the random suffix fallback after incremental attempts are exhausted.
semantic_clauses:
  - Uses the random suffix fallback after incremental attempts are exhausted
logic_claims:
  - CLAIM-2E5AB542C9E1EF8E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f4fff475a5348cc419e2ba22cd3a45aab003886228eff49f77f876844fc73238
semantic_inventory:
  - claim_key: CLAIM-2E5AB542C9E1EF8E
    claim_text: Uses the random suffix fallback after incremental attempts are exhausted
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - documents.create_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1026'
  recorded_at: '2026-07-28T17:09:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-uses-random-suffix-fallback-after-incremental-attempts
type: req
---
Uses the random suffix fallback after incremental attempts are exhausted.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (document-storage usecases > createDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1026
