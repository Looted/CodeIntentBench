---
title: Users can restore a document from the trash, the document is no longer marked as deleted and the deletedBy and deletedAt fields are cleared.
status: active
semantic_text: Users can restore a document from the trash, the document is no longer marked as deleted and the deletedBy and deletedAt fields are cleared.
semantic_clauses:
  - Users can restore a document from the trash, the document is no longer marked as deleted and the deletedBy and deletedAt fields are cleared
logic_claims:
  - CLAIM-6C3D4F412C621789
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 52569a86310c8f48405f691cea9498929be8a8b88b9e939e76edd597ca0317e7
semantic_inventory:
  - claim_key: CLAIM-6C3D4F412C621789
    claim_text: Users can restore a document from the trash, the document is no longer marked as deleted and the deletedBy and deletedAt fields are cleared
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 139
    subjects:
      - documents.restore_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1207'
  recorded_at: '2026-09-02T08:02:34.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-users-can-restore-document-from-trash-document
type: req
---
Users can restore a document from the trash, the document is no longer marked as deleted and the deletedBy and deletedAt fields are cleared.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > restoreDocument).

## Source

Source: Papra server behaviour notes - SRV-1207
