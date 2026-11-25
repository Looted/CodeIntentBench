---
title: A valid, hard-coded document id for document storage pattern validation.
status: active
semantic_text: A valid, hard-coded document id for document storage pattern validation.
semantic_clauses:
  - A valid, hard-coded document id for document storage pattern validation
logic_claims:
  - CLAIM-2CCFCB0FECEACE74
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 94f101aecdd9af13ea33f57eb6e229a121463d41ae31c5590910fb639dc09a03
semantic_inventory:
  - claim_key: CLAIM-2CCFCB0FECEACE74
    claim_text: A valid, hard-coded document id for document storage pattern validation
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - documents.storage_pattern_constants
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1276'
  recorded_at: '2026-01-01T13:18:06.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-valid-hard-coded-document-id-for-document
type: req
---
A valid, hard-coded document id for document storage pattern validation.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.constants.test.ts (storage-pattern constants > dummy document id).

## Source

Source: Papra server behaviour notes - SRV-1276
