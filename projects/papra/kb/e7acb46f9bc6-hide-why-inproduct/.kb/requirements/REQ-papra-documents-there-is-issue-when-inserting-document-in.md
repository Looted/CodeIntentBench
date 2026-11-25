---
title: When there is an issue when inserting the document in the db, the file should not be saved in the storage.
status: active
semantic_text: When there is an issue when inserting the document in the db, the file should not be saved in the storage.
semantic_clauses:
  - When there is an issue when inserting the document in the db, the file should not be saved in the storage
logic_claims:
  - CLAIM-A72919CF5CF8DF43
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c6ad65b728cce740e3c6f6a5bed843e974f600889a795a21859bea4a44f73e4e
semantic_inventory:
  - claim_key: CLAIM-A72919CF5CF8DF43
    claim_text: When there is an issue when inserting the document in the db, the file should not be saved in the storage
    role: condition
    status: modeled
    span:
      start: 0
      end: 105
    subjects:
      - documents.create_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1226'
  recorded_at: '2025-12-13T10:51:12.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-there-is-issue-when-inserting-document-in
type: req
---
When there is an issue when inserting the document in the db, the file should not be saved in the storage.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > createDocument).

## Source

Source: Papra server behaviour notes - SRV-1226
