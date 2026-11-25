---
title: A null value uses the fallback without formatting it as a date.
status: active
semantic_text: A null value uses the fallback without formatting it as a date.
semantic_clauses:
  - A null value uses the fallback without formatting it as a date
logic_claims:
  - CLAIM-756BDE71003B0F54
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 273179e21124fe7187dc7a8f7bf28d0de96feb6e65e8d35864bad1dbe04f4f5a
semantic_inventory:
  - claim_key: CLAIM-756BDE71003B0F54
    claim_text: A null value uses the fallback without formatting it as a date
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - documents.evaluate_storage_pattern_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1286'
  recorded_at: '2025-07-04T14:38:51.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-null-value-uses-fallback-without-formatting-it
type: req
---
A null value uses the fallback without formatting it as a date.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > evaluateStoragePatternExpression).

## Source

Source: Papra server behaviour notes - SRV-1286
