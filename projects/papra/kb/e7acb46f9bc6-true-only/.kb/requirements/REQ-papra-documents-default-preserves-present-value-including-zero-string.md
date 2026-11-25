---
title: Default preserves a present value including a zero string.
status: active
semantic_text: Default preserves a present value including a zero string.
semantic_clauses:
  - Default preserves a present value including a zero string
logic_claims:
  - CLAIM-A78E07DDBB5A73C3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d96f53f6b2727fdc94d4632d3538e2eb5fd4bf318b941e30b6e3b7babe152a1e
semantic_inventory:
  - claim_key: CLAIM-A78E07DDBB5A73C3
    claim_text: Default preserves a present value including a zero string
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
  ref: 'Papra server behaviour notes: SRV-1304'
  recorded_at: '2026-08-27T16:38:32.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-default-preserves-present-value-including-zero-string
type: req
---
Default preserves a present value including a zero string.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > evaluateStoragePatternExpression).

## Source

Source: Papra server behaviour notes - SRV-1304
