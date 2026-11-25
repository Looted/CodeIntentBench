---
title: An empty default argument is rejected.
status: active
semantic_text: An empty default argument is rejected.
semantic_clauses:
  - An empty default argument is rejected
logic_claims:
  - CLAIM-02B486D3F1C7C5A0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2bfb30e58e3491fa709cbcde9e410eba74795d71edb87518c5dc08fd31b1c146
semantic_inventory:
  - claim_key: CLAIM-02B486D3F1C7C5A0
    claim_text: An empty default argument is rejected
    role: normative
    status: modeled
    span:
      start: 0
      end: 37
    subjects:
      - documents.is_storage_pattern_valid
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1364'
  recorded_at: '2026-01-14T08:40:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-empty-default-argument-is-rejected
type: req
---
An empty default argument is rejected.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > isStoragePatternValid).

## Source

Source: Papra server behaviour notes - SRV-1364
