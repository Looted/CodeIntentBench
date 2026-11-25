---
title: A failed copy retains the source and database key.
status: active
semantic_text: A failed copy retains the source and database key.
semantic_clauses:
  - A failed copy retains the source and database key
logic_claims:
  - CLAIM-D235ADC95DCB8D56
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0832f2bcb0668e625f272c4ed1a72599f0db30a468487561393c67df477f9690
semantic_inventory:
  - claim_key: CLAIM-D235ADC95DCB8D56
    claim_text: A failed copy retains the source and database key
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 49
    subjects:
      - documents.sync_document_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-989'
  recorded_at: '2026-09-04T15:05:24.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-failed-copy-retains-source-and-database-key
type: req
---
A failed copy retains the source and database key.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/document-storage.usecases.test.ts (syncDocumentStorageKey).

## Source

Source: Papra server behaviour notes - SRV-989
