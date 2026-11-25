---
title: A missing value without a fallback throws an error.
status: active
semantic_text: A missing value without a fallback throws an error.
semantic_clauses:
  - A missing value without a fallback throws an error
logic_claims:
  - CLAIM-410B7D0CE887DE31
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fe58135d4c5b6e36712affbb1b9e229258474f1d5bce74c6499f735c0d16e505
semantic_inventory:
  - claim_key: CLAIM-410B7D0CE887DE31
    claim_text: A missing value without a fallback throws an error
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 50
    subjects:
      - documents.evaluate_storage_pattern_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1282'
  recorded_at: '2025-03-19T17:50:06.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-missing-value-without-fallback-throws-error
type: req
---
A missing value without a fallback throws an error.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > evaluateStoragePatternExpression).

## Source

Source: Papra server behaviour notes - SRV-1282
