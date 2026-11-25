---
title: When a document is updated, a "document.updated" event is triggered.
status: active
semantic_text: When a document is updated, a "document.updated" event is triggered.
semantic_clauses:
  - When a document is updated, a "document.updated" event is triggered
logic_claims:
  - CLAIM-515254C2DE4B00DF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 45559ba63b1d06a69a5adb6ed562754d38559e16e7a5dc88fd1b3991f4ece392
semantic_inventory:
  - claim_key: CLAIM-515254C2DE4B00DF
    claim_text: When a document is updated, a "document.updated" event is triggered
    role: condition
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - documents.update_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1219'
  recorded_at: '2025-05-26T15:21:34.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-document-is-updated-document-updated-event-is
type: req
---
When a document is updated, a "document.updated" event is triggered.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > updateDocument).

## Source

Source: Papra server behaviour notes - SRV-1219
