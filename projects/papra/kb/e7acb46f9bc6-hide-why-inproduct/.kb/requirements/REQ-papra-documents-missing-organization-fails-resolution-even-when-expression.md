---
title: A missing organization fails resolution even when the expression has a default.
status: active
semantic_text: A missing organization fails resolution even when the expression has a default.
semantic_clauses:
  - A missing organization fails resolution even when the expression has a default
logic_claims:
  - CLAIM-0FC4294576F6174D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2c26d02b895484dbfd8869d9fe5bf8c3e2d497e11b4b0d5bf9489d1d7ff2454d
semantic_inventory:
  - claim_key: CLAIM-0FC4294576F6174D
    claim_text: A missing organization fails resolution even when the expression has a default
    role: normative
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - documents.resolve_storage_pattern_context
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1346'
  recorded_at: '2026-04-14T10:23:10.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-missing-organization-fails-resolution-even-when-expression
type: req
---
A missing organization fails resolution even when the expression has a default.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > resolveStoragePatternContext).

## Source

Source: Papra server behaviour notes - SRV-1346
