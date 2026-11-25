---
title: An empty string uses the fallback.
status: active
semantic_text: An empty string uses the fallback.
semantic_clauses:
  - An empty string uses the fallback
logic_claims:
  - CLAIM-A726B94D7F7D226D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3684e9c9f8fcfdc45c3b90b1dda8e097ce6a17b56002b0174eae32aeeba56e3b
semantic_inventory:
  - claim_key: CLAIM-A726B94D7F7D226D
    claim_text: An empty string uses the fallback
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 33
    subjects:
      - documents.evaluate_storage_pattern_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1292'
  recorded_at: '2025-10-09T08:25:32.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-empty-string-uses-fallback
type: req
---
An empty string uses the fallback.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > evaluateStoragePatternExpression).

## Source

Source: Papra server behaviour notes - SRV-1292
