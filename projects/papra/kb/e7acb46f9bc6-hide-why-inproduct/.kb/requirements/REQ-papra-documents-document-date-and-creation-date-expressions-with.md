---
title: Document date and creation date expressions with formatting are valid.
status: active
semantic_text: Document date and creation date expressions with formatting are valid.
semantic_clauses:
  - Document date and creation date expressions with formatting are valid
logic_claims:
  - CLAIM-06896B67055FA806
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a3c6b09fbbb923c92515296d717e839f2f673809035e744fde2000e59562ce3d
semantic_inventory:
  - claim_key: CLAIM-06896B67055FA806
    claim_text: Document date and creation date expressions with formatting are valid
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - documents.is_storage_pattern_valid
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1370'
  recorded_at: '2026-08-16T10:39:14.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-document-date-and-creation-date-expressions-with
type: req
---
Document date and creation date expressions with formatting are valid.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > isStoragePatternValid).

## Source

Source: Papra server behaviour notes - SRV-1370
