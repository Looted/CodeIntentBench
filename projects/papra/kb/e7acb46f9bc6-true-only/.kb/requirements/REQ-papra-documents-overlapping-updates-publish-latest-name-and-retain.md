---
title: Overlapping updates publish the latest name and retain the stale copy.
status: active
semantic_text: Overlapping updates publish the latest name and retain the stale copy.
semantic_clauses:
  - Overlapping updates publish the latest name and retain the stale copy
logic_claims:
  - CLAIM-DD76216B2D2934ED
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6ac35dc95df5b6b12c8fd7efab64ed5f703fafa210873f8f22d3ddc414a9f477
semantic_inventory:
  - claim_key: CLAIM-DD76216B2D2934ED
    claim_text: Overlapping updates publish the latest name and retain the stale copy
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1016'
  recorded_at: '2026-05-19T16:28:53.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-overlapping-updates-publish-latest-name-and-retain
type: req
---
Overlapping updates publish the latest name and retain the stale copy.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1016
