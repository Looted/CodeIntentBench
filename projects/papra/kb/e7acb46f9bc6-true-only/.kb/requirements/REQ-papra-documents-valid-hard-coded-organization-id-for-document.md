---
title: A valid, hard-coded organization id for document storage pattern validation.
status: active
semantic_text: A valid, hard-coded organization id for document storage pattern validation.
semantic_clauses:
  - A valid, hard-coded organization id for document storage pattern validation
logic_claims:
  - CLAIM-3A4E0C78A360E5F2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d61ca79a17a5d3261e44ffd960d623a092d498f288fd413d4f3c8b5dba7bf3ec
semantic_inventory:
  - claim_key: CLAIM-3A4E0C78A360E5F2
    claim_text: A valid, hard-coded organization id for document storage pattern validation
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - documents.storage_pattern_constants
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1278'
  recorded_at: '2025-03-25T09:52:38.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-valid-hard-coded-organization-id-for-document
type: req
---
A valid, hard-coded organization id for document storage pattern validation.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.constants.test.ts (storage-pattern constants > dummy organization id).

## Source

Source: Papra server behaviour notes - SRV-1278
