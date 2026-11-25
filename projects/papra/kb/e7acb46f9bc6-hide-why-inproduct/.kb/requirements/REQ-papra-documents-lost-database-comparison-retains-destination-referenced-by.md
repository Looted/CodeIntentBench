---
title: A lost database comparison retains the destination referenced by a winning update.
status: active
semantic_text: A lost database comparison retains the destination referenced by a winning update.
semantic_clauses:
  - A lost database comparison retains the destination referenced by a winning update
logic_claims:
  - CLAIM-4976B3E3FACE1034
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6b157676d0c999679cbd1a68b414361814ac0466c622ceebf6bcbe9ff7181813
semantic_inventory:
  - claim_key: CLAIM-4976B3E3FACE1034
    claim_text: A lost database comparison retains the destination referenced by a winning update
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-993'
  recorded_at: '2025-04-27T16:21:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-lost-database-comparison-retains-destination-referenced-by
type: req
---
A lost database comparison retains the destination referenced by a winning update.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-993
