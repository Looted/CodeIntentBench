---
title: A pattern is invalid if it ends with a slash.
status: active
semantic_text: A pattern is invalid if it ends with a slash.
semantic_clauses:
  - A pattern is invalid if it ends with a slash
logic_claims:
  - CLAIM-BE1796640F454905
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a2010917c9cd6e248dc323184151fc6a73f9957adc3fbb11aa7c3433d1a0a7f6
semantic_inventory:
  - claim_key: CLAIM-BE1796640F454905
    claim_text: A pattern is invalid if it ends with a slash
    role: normative
    status: modeled
    span:
      start: 0
      end: 44
    subjects:
      - documents.is_storage_pattern_valid
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1357'
  recorded_at: '2026-07-08T15:46:02.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-pattern-is-invalid-if-it-ends-with
type: req
---
A pattern is invalid if it ends with a slash.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > isStoragePatternValid).

## Source

Source: Papra server behaviour notes - SRV-1357
