---
title: A pattern is valid if it only contains recognized expressions and transformers.
status: active
semantic_text: A pattern is valid if it only contains recognized expressions and transformers.
semantic_clauses:
  - A pattern is valid if it only contains recognized expressions and transformers
logic_claims:
  - CLAIM-46C0D1069FF62DF2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e1243550c8827ed8dd982917497f9df42f997b5d3e1308bc6016bb127453a764
semantic_inventory:
  - claim_key: CLAIM-46C0D1069FF62DF2
    claim_text: A pattern is valid if it only contains recognized expressions and transformers
    role: normative
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - documents.is_storage_pattern_valid
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1359'
  recorded_at: '2025-11-28T10:00:12.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-pattern-is-valid-if-it-only-contains
type: req
---
A pattern is valid if it only contains recognized expressions and transformers.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > isStoragePatternValid).

## Source

Source: Papra server behaviour notes - SRV-1359
