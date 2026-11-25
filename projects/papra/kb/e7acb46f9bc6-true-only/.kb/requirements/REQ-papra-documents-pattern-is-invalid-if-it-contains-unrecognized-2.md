---
title: A pattern is invalid if it contains an unrecognized transformer.
status: active
semantic_text: A pattern is invalid if it contains an unrecognized transformer.
semantic_clauses:
  - A pattern is invalid if it contains an unrecognized transformer
logic_claims:
  - CLAIM-A2A7C000278400CB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 64f2cc1b38d20c2d0f81a39b5511d5a9af695373551bda128c01f6307716c9e1
semantic_inventory:
  - claim_key: CLAIM-A2A7C000278400CB
    claim_text: A pattern is invalid if it contains an unrecognized transformer
    role: normative
    status: modeled
    span:
      start: 0
      end: 63
    subjects:
      - documents.is_storage_pattern_valid
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1356'
  recorded_at: '2026-04-14T11:29:21.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-pattern-is-invalid-if-it-contains-unrecognized-2
type: req
---
A pattern is invalid if it contains an unrecognized transformer.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > isStoragePatternValid).

## Source

Source: Papra server behaviour notes - SRV-1356
