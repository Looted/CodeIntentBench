---
title: Unknown transformers are rejected even when the value is missing.
status: active
semantic_text: Unknown transformers are rejected even when the value is missing.
semantic_clauses:
  - Unknown transformers are rejected even when the value is missing
logic_claims:
  - CLAIM-85174201E2EABD8C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3a5c60f50c408e4a96e32c1ddf38c7066494114b150d5a7463e150e4e61edad6
semantic_inventory:
  - claim_key: CLAIM-85174201E2EABD8C
    claim_text: Unknown transformers are rejected even when the value is missing
    role: normative
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - documents.evaluate_storage_pattern_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1332'
  recorded_at: '2025-08-14T17:07:46.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-unknown-transformers-are-rejected-even-when-value
type: req
---
Unknown transformers are rejected even when the value is missing.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > evaluateStoragePatternExpression).

## Source

Source: Papra server behaviour notes - SRV-1332
