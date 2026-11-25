---
title: Content and notes updates do not synchronize the storage key.
status: active
semantic_text: Content and notes updates do not synchronize the storage key.
semantic_clauses:
  - Content and notes updates do not synchronize the storage key
logic_claims:
  - CLAIM-EBF3B766B356BBDE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4e3bd982c7a18aa94951d7a8ce272b3c6a1b9af76c71f27505741f05318ce8c5
semantic_inventory:
  - claim_key: CLAIM-EBF3B766B356BBDE
    claim_text: Content and notes updates do not synchronize the storage key
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - documents.storage_key_document_updated_handler
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1269'
  recorded_at: '2026-02-03T12:59:25.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-content-and-notes-updates-do-not-synchronize
type: req
---
Content and notes updates do not synchronize the storage key.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/events/storage-key.document-updated.test.ts (storage-key document.updated handler).

## Source

Source: Papra server behaviour notes - SRV-1269
