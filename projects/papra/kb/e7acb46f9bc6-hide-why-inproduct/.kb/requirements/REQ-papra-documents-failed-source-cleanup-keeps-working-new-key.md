---
title: A failed source cleanup keeps the working new key and logs the failure.
status: active
semantic_text: A failed source cleanup keeps the working new key and logs the failure.
semantic_clauses:
  - A failed source cleanup keeps the working new key and logs the failure
logic_claims:
  - CLAIM-71A24A7628633EE5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7fc8fdbbb28dd3485f4fdb5530e07a5291a4e5eb8e476f7794da1806c12fce7d
semantic_inventory:
  - claim_key: CLAIM-71A24A7628633EE5
    claim_text: A failed source cleanup keeps the working new key and logs the failure
    role: descriptive
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
  ref: 'Papra server behaviour notes: SRV-992'
  recorded_at: '2025-09-27T10:57:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-failed-source-cleanup-keeps-working-new-key
type: req
---
A failed source cleanup keeps the working new key and logs the failure.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-992
