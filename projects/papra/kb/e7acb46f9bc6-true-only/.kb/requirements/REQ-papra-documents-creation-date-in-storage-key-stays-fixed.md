---
title: The creation date in a storage key stays fixed when the current date changes.
status: active
semantic_text: The creation date in a storage key stays fixed when the current date changes.
semantic_clauses:
  - The creation date in a storage key stays fixed when the current date changes
logic_claims:
  - CLAIM-1B79512C4C89CCE7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ae74cb76b8d5571868b3d27b03b834818d80c66401dab0ba4aef5e2ead2a01c9
semantic_inventory:
  - claim_key: CLAIM-1B79512C4C89CCE7
    claim_text: The creation date in a storage key stays fixed when the current date changes
    role: normative
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1021'
  recorded_at: '2026-08-12T15:50:33.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-creation-date-in-storage-key-stays-fixed
type: req
---
The creation date in a storage key stays fixed when the current date changes.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1021
