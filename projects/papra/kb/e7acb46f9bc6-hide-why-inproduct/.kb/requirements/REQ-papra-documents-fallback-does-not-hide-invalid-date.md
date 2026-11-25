---
title: A fallback does not hide an invalid date.
status: active
semantic_text: A fallback does not hide an invalid date.
semantic_clauses:
  - A fallback does not hide an invalid date
logic_claims:
  - CLAIM-D84581F5C819D5A2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 344ac136473505b8fed53cc392de10a59b7b35df48baebb13c22b17e22c10805
semantic_inventory:
  - claim_key: CLAIM-D84581F5C819D5A2
    claim_text: A fallback does not hide an invalid date
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 40
    subjects:
      - documents.evaluate_storage_pattern_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1281'
  recorded_at: '2026-02-08T16:55:10.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-fallback-does-not-hide-invalid-date
type: req
---
A fallback does not hide an invalid date.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > evaluateStoragePatternExpression).

## Source

Source: Papra server behaviour notes - SRV-1281
