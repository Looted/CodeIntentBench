---
title: The first default supplies the value for later defaults.
status: active
semantic_text: The first default supplies the value for later defaults.
semantic_clauses:
  - The first default supplies the value for later defaults
logic_claims:
  - CLAIM-BFCFD9AACB1C43BA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c7d3e412900f9d2fa7c8c78a0cf2dd8dfbf21dd5933e8b1dd4ff0b0e641b7725
semantic_inventory:
  - claim_key: CLAIM-BFCFD9AACB1C43BA
    claim_text: The first default supplies the value for later defaults
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - documents.evaluate_storage_pattern_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1330'
  recorded_at: '2025-05-12T08:55:07.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-first-default-supplies-value-for-later-defaults
type: req
---
The first default supplies the value for later defaults.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > evaluateStoragePatternExpression).

## Source

Source: Papra server behaviour notes - SRV-1330
