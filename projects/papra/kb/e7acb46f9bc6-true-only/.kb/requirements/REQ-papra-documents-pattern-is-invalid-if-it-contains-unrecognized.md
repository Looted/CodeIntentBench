---
title: A pattern is invalid if it contains an unrecognized expression.
status: active
semantic_text: A pattern is invalid if it contains an unrecognized expression.
semantic_clauses:
  - A pattern is invalid if it contains an unrecognized expression
logic_claims:
  - CLAIM-42D16A4499BA33A7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0da794c71f6c7b89e81499256be7fdb7cadbe67757e22c39faa526f6de0237dc
semantic_inventory:
  - claim_key: CLAIM-42D16A4499BA33A7
    claim_text: A pattern is invalid if it contains an unrecognized expression
    role: normative
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - documents.is_storage_pattern_valid
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1352'
  recorded_at: '2026-02-13T17:59:39.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-pattern-is-invalid-if-it-contains-unrecognized
type: req
---
A pattern is invalid if it contains an unrecognized expression.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > isStoragePatternValid).

## Source

Source: Papra server behaviour notes - SRV-1352
