---
title: A present value is transformed instead of using the fallback.
status: active
semantic_text: A present value is transformed instead of using the fallback.
semantic_clauses:
  - A present value is transformed instead of using the fallback
logic_claims:
  - CLAIM-4BA1611281B82D01
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ecdf0ac4794e9c14358725d07b8a6277b3b1ad97420ccbb586017643311e5f36
semantic_inventory:
  - claim_key: CLAIM-4BA1611281B82D01
    claim_text: A present value is transformed instead of using the fallback
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - documents.evaluate_storage_pattern_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1289'
  recorded_at: '2025-04-08T15:28:44.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-present-value-is-transformed-instead-of-using
type: req
---
A present value is transformed instead of using the fallback.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > evaluateStoragePatternExpression).

## Source

Source: Papra server behaviour notes - SRV-1289
