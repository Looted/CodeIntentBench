---
title: Default replaces an undefined value and subsequent transformers process it.
status: active
semantic_text: Default replaces an undefined value and subsequent transformers process it.
semantic_clauses:
  - Default replaces an undefined value and subsequent transformers process it
logic_claims:
  - CLAIM-09CE0C06C3BD3BE6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 62564b27294c4a0b52d7e3917e28f5e3ea614ad2df3d2ed2052690804d520513
semantic_inventory:
  - claim_key: CLAIM-09CE0C06C3BD3BE6
    claim_text: Default replaces an undefined value and subsequent transformers process it
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - documents.evaluate_storage_pattern_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1311'
  recorded_at: '2025-05-27T11:52:04.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-default-replaces-undefined-value-and-subsequent-transformers
type: req
---
Default replaces an undefined value and subsequent transformers process it.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > evaluateStoragePatternExpression).

## Source

Source: Papra server behaviour notes - SRV-1311
