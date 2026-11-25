---
title: Creating a document save the file to the storage and registers a record in the db.
status: active
semantic_text: Creating a document save the file to the storage and registers a record in the db.
semantic_clauses:
  - Creating a document save the file to the storage and registers a record in the db
logic_claims:
  - CLAIM-A19B5E4E94FB82AF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9e437664037c6b1fd439be126dca22e8d40ca66f2aa172f35b9742a43c0ced46
semantic_inventory:
  - claim_key: CLAIM-A19B5E4E94FB82AF
    claim_text: Creating a document save the file to the storage and registers a record in the db
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - documents.create_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1181'
  recorded_at: '2025-10-11T17:08:15.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-creating-document-save-file-to-storage-and
type: req
---
Creating a document save the file to the storage and registers a record in the db.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > createDocument).

## Source

Source: Papra server behaviour notes - SRV-1181
