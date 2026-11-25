---
title: Users can soft delete a document by moving it to the trash.
status: active
semantic_text: Users can soft delete a document by moving it to the trash.
semantic_clauses:
  - Users can soft delete a document by moving it to the trash
logic_claims:
  - CLAIM-E7F97BE00B6D7B23
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1473006c95bd9acd916f07c018031b839b382df824447b57cca664b69edbab92
semantic_inventory:
  - claim_key: CLAIM-E7F97BE00B6D7B23
    claim_text: Users can soft delete a document by moving it to the trash
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - documents.trash_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1208'
  recorded_at: '2025-05-22T12:35:27.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-users-can-soft-delete-document-by-moving
type: req
---
Users can soft delete a document by moving it to the trash.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > trashDocument).

## Source

Source: Papra server behaviour notes - SRV-1208
