---
title: An explicitly empty fallback is preserved.
status: active
semantic_text: An explicitly empty fallback is preserved.
semantic_clauses:
  - An explicitly empty fallback is preserved
logic_claims:
  - CLAIM-0737DC97857453EB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4b118135df2373960c9b78fd05f49a3a21f37cb525d1819a4feba186c6ec0b4b
semantic_inventory:
  - claim_key: CLAIM-0737DC97857453EB
    claim_text: An explicitly empty fallback is preserved
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 41
    subjects:
      - documents.evaluate_storage_pattern_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1294'
  recorded_at: '2025-12-28T12:32:19.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-explicitly-empty-fallback-is-preserved
type: req
---
An explicitly empty fallback is preserved.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > evaluateStoragePatternExpression).

## Source

Source: Papra server behaviour notes - SRV-1294
