---
title: Default requires an argument even when the value is missing.
status: active
semantic_text: Default requires an argument even when the value is missing.
semantic_clauses:
  - Default requires an argument even when the value is missing
logic_claims:
  - CLAIM-55B2456A603754D4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bfff3dff2cfd82022c157780fe977685ea02804181c545f675cbd9019d7b4ddb
semantic_inventory:
  - claim_key: CLAIM-55B2456A603754D4
    claim_text: Default requires an argument even when the value is missing
    role: normative
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - documents.evaluate_storage_pattern_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1312'
  recorded_at: '2026-07-13T08:09:22.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-default-requires-argument-even-when-value-is
type: req
---
Default requires an argument even when the value is missing.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > evaluateStoragePatternExpression).

## Source

Source: Papra server behaviour notes - SRV-1312
