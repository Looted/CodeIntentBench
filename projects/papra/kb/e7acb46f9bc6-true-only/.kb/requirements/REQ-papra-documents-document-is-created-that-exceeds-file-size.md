---
title: When a document is created that exceeds the file size limit, an error is thrown and nothing is saved in the db.
status: active
semantic_text: When a document is created that exceeds the file size limit, an error is thrown and nothing is saved in the db.
semantic_clauses:
  - When a document is created that exceeds the file size limit, an error is thrown and nothing is saved in the db
logic_claims:
  - CLAIM-D2996D94184844EB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2a179b956c47c20150f1e650a8c334a25f43833067bee4a31ed48535f39b1b30
semantic_inventory:
  - claim_key: CLAIM-D2996D94184844EB
    claim_text: When a document is created that exceeds the file size limit, an error is thrown and nothing is saved in the db
    role: condition
    status: modeled
    span:
      start: 0
      end: 110
    subjects:
      - documents.create_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1211'
  recorded_at: '2025-04-11T09:59:09.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-document-is-created-that-exceeds-file-size
type: req
---
When a document is created that exceeds the file size limit, an error is thrown and nothing is saved in the db.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > createDocument).

## Source

Source: Papra server behaviour notes - SRV-1211
