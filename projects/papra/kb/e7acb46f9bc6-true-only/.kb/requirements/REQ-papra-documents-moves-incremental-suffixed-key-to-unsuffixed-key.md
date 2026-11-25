---
title: Moves an incremental-suffixed key to the unsuffixed key when available.
status: active
semantic_text: Moves an incremental-suffixed key to the unsuffixed key when available.
semantic_clauses:
  - Moves an incremental-suffixed key to the unsuffixed key when available
logic_claims:
  - CLAIM-5A2613B77936A553
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 87f9d23e661f7aea1b1af2301e241a7d64bd895f840a68308ec2137ab9a381bc
semantic_inventory:
  - claim_key: CLAIM-5A2613B77936A553
    claim_text: Moves an incremental-suffixed key to the unsuffixed key when available
    role: normative
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1012'
  recorded_at: '2026-08-11T15:09:27.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-moves-incremental-suffixed-key-to-unsuffixed-key
type: req
---
Moves an incremental-suffixed key to the unsuffixed key when available.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1012
