---
title: Default replaces a null date after formatting and overrides the definition fallback.
status: active
semantic_text: Default replaces a null date after formatting and overrides the definition fallback.
semantic_clauses:
  - Default replaces a null date after formatting and overrides the definition fallback
logic_claims:
  - CLAIM-E359A3896F8257B7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9f4ca94379b6e7be8f251ec06934c7ba87f5da5e8477056c3e0d45650ad18491
semantic_inventory:
  - claim_key: CLAIM-E359A3896F8257B7
    claim_text: Default replaces a null date after formatting and overrides the definition fallback
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - documents.evaluate_storage_pattern_expression
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1308'
  recorded_at: '2026-05-14T08:20:16.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-default-replaces-null-date-after-formatting-and
type: req
---
Default replaces a null date after formatting and overrides the definition fallback.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > evaluateStoragePatternExpression).

## Source

Source: Papra server behaviour notes - SRV-1308
