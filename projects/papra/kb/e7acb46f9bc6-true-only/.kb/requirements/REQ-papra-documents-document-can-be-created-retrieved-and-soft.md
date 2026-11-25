---
title: A document can be created, retrieved, and soft deleted.
status: active
semantic_text: A document can be created, retrieved, and soft deleted.
semantic_clauses:
  - A document can be created, retrieved, and soft deleted
logic_claims:
  - CLAIM-A3D774B2EC24A861
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 450337b5cba1a59e57aa476ec02b8fcf5ed1557d00fe3a44efd8865b046bdcf8
semantic_inventory:
  - claim_key: CLAIM-A3D774B2EC24A861
    claim_text: A document can be created, retrieved, and soft deleted
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - documents.documents_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1123'
  recorded_at: '2026-05-26T08:48:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-document-can-be-created-retrieved-and-soft
type: req
---
A document can be created, retrieved, and soft deleted.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.repository.test.ts (documents repository > crud operations on document collection).

## Source

Source: Papra server behaviour notes - SRV-1123
