---
title: A pattern with a default argument is valid.
status: active
semantic_text: A pattern with a default argument is valid.
semantic_clauses:
  - A pattern with a default argument is valid
logic_claims:
  - CLAIM-EC3EFDEB30102873
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0140833f12a75e197836f492a1cd3340fa150814fb4779ced59d0074f46a22b3
semantic_inventory:
  - claim_key: CLAIM-EC3EFDEB30102873
    claim_text: A pattern with a default argument is valid
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 42
    subjects:
      - documents.is_storage_pattern_valid
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1363'
  recorded_at: '2025-08-01T14:00:12.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-pattern-with-default-argument-is-valid
type: req
---
A pattern with a default argument is valid.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > isStoragePatternValid).

## Source

Source: Papra server behaviour notes - SRV-1363
