---
title: An undefined value uses the fallback without transformers.
status: active
semantic_text: An undefined value uses the fallback without transformers.
semantic_clauses:
  - An undefined value uses the fallback without transformers
logic_claims:
  - CLAIM-30C0199EBF30B151
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8cd7a8ffd8fc038c80b4d61f5381db5f9cc0e24f0aa2cf37790d691ce4199c49
semantic_inventory:
  - claim_key: CLAIM-30C0199EBF30B151
    claim_text: An undefined value uses the fallback without transformers
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - documents.evaluate_storage_pattern_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1295'
  recorded_at: '2025-11-01T17:08:00.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-undefined-value-uses-fallback-without-transformers
type: req
---
An undefined value uses the fallback without transformers.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > evaluateStoragePatternExpression).

## Source

Source: Papra server behaviour notes - SRV-1295
