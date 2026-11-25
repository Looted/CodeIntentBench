---
title: Default does not hide an invalid date.
status: active
semantic_text: Default does not hide an invalid date.
semantic_clauses:
  - Default does not hide an invalid date
logic_claims:
  - CLAIM-3244C365AD1C1B9B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0090a2c587ab327e7bfc6dcc33c94f6cacd5b49a058cabc7c066be04d2b25794
semantic_inventory:
  - claim_key: CLAIM-3244C365AD1C1B9B
    claim_text: Default does not hide an invalid date
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 37
    subjects:
      - documents.evaluate_storage_pattern_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1300'
  recorded_at: '2026-04-23T14:14:28.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-default-does-not-hide-invalid-date
type: req
---
Default does not hide an invalid date.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > evaluateStoragePatternExpression).

## Source

Source: Papra server behaviour notes - SRV-1300
