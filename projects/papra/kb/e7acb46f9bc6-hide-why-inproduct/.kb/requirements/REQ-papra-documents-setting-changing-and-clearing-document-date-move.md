---
title: Setting, changing, and clearing a document date move the file to the matching key.
status: active
semantic_text: Setting, changing, and clearing a document date move the file to the matching key.
semantic_clauses:
  - Setting, changing, and clearing a document date move the file to the matching key
logic_claims:
  - CLAIM-491C01A56EB6E919
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 448f73f62891f20a3b8f49e88e10c4f646a5040908a5611c4607613e3eaf7342
semantic_inventory:
  - claim_key: CLAIM-491C01A56EB6E919
    claim_text: Setting, changing, and clearing a document date move the file to the matching key
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - documents.storage_key_document_updated_handler
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1270'
  recorded_at: '2025-03-24T10:31:37.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-setting-changing-and-clearing-document-date-move
type: req
---
Setting, changing, and clearing a document date move the file to the matching key.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/events/storage-key.document-updated.test.ts (storage-key document.updated handler).

## Source

Source: Papra server behaviour notes - SRV-1270
