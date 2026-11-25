---
title: A stale storage-key update cannot replace a newer database key or cross organizations.
status: active
semantic_text: A stale storage-key update cannot replace a newer database key or cross organizations.
semantic_clauses:
  - A stale storage-key update cannot replace a newer database key or cross organizations
logic_claims:
  - CLAIM-50959C9F6E0B20C8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ec175bfc07eb33b44a3199145dae1ba62947b1dd070ef9e13b72d08fdeeb9fe0
semantic_inventory:
  - claim_key: CLAIM-50959C9F6E0B20C8
    claim_text: A stale storage-key update cannot replace a newer database key or cross organizations
    role: normative
    status: modeled
    span:
      start: 0
      end: 85
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-994'
  recorded_at: '2026-04-24T11:01:18.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-stale-storage-key-update-cannot-replace-newer
type: req
---
A stale storage-key update cannot replace a newer database key or cross organizations.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-994
