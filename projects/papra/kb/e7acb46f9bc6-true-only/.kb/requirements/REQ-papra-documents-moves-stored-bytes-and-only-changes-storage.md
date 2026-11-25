---
title: Moves stored bytes and only changes the storage key, preserving encryption metadata.
status: active
semantic_text: Moves stored bytes and only changes the storage key, preserving encryption metadata.
semantic_clauses:
  - Moves stored bytes and only changes the storage key, preserving encryption metadata
logic_claims:
  - CLAIM-E2109BA26273BE6B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dc767f71658aead1cdc1b9a177711770a48301e09c23747bb4137ea163298a66
semantic_inventory:
  - claim_key: CLAIM-E2109BA26273BE6B
    claim_text: Moves stored bytes and only changes the storage key, preserving encryption metadata
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1013'
  recorded_at: '2025-11-13T08:20:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-moves-stored-bytes-and-only-changes-storage
type: req
---
Moves stored bytes and only changes the storage key, preserving encryption metadata.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1013
