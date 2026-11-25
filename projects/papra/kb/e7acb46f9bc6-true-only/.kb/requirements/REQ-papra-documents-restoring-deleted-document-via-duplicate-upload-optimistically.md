---
title: When restoring a deleted document via duplicate upload, the optimistically saved new file should be cleaned up to prevent orphan files.
status: active
semantic_text: When restoring a deleted document via duplicate upload, the optimistically saved new file should be cleaned up to prevent orphan files.
semantic_clauses:
  - When restoring a deleted document via duplicate upload, the optimistically saved new file should be cleaned up to prevent orphan files
logic_claims:
  - CLAIM-5D31E796C728E763
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 92db1422d51093854a0e88eaa1910fd2f068d403b3ff51ed7303a7924c37b042
semantic_inventory:
  - claim_key: CLAIM-5D31E796C728E763
    claim_text: When restoring a deleted document via duplicate upload, the optimistically saved new file should be cleaned up to prevent orphan files
    role: condition
    status: modeled
    span:
      start: 0
      end: 134
    subjects:
      - documents.create_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1224'
  recorded_at: '2026-08-08T10:48:29.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-restoring-deleted-document-via-duplicate-upload-optimistically
type: req
---
When restoring a deleted document via duplicate upload, the optimistically saved new file should be cleaned up to prevent orphan files.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > createDocument).

## Source

Source: Papra server behaviour notes - SRV-1224
