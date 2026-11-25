---
title: Uploading documents with various UTF-8 characters in filenames.
status: active
semantic_text: Uploading documents with various UTF-8 characters in filenames.
semantic_clauses:
  - Uploading documents with various UTF-8 characters in filenames
logic_claims:
  - CLAIM-AE1975EEC4457DB7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 25d50c9b2ad6cd611e586369d0208c9a6182173fe37a6cb11114772d44828ead
semantic_inventory:
  - claim_key: CLAIM-AE1975EEC4457DB7
    claim_text: Uploading documents with various UTF-8 characters in filenames
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - documents.documents_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1261'
  recorded_at: '2026-05-05T11:38:29.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-uploading-documents-with-various-utf-8-characters
type: req
---
Uploading documents with various UTF-8 characters in filenames.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/e2e/upload-documents.e2e.test.ts (documents e2e > document upload).

## Source

Source: Papra server behaviour notes - SRV-1261
