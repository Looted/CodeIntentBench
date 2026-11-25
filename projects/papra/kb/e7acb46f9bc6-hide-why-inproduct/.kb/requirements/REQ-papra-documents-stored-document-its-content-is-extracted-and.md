---
title: Given a stored document, its content is extracted and saved in the db.
status: active
semantic_text: Given a stored document, its content is extracted and saved in the db.
semantic_clauses:
  - Given a stored document, its content is extracted and saved in the db
logic_claims:
  - CLAIM-4FA414A4B0E229C5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cadd813b11f6377b8d5ff056699ac3d7f9c63b0e1b48cdea859382ac507e763c
semantic_inventory:
  - claim_key: CLAIM-4FA414A4B0E229C5
    claim_text: Given a stored document, its content is extracted and saved in the db
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - documents.extract_and_save_document_file_content
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1186'
  recorded_at: '2025-11-19T12:56:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-stored-document-its-content-is-extracted-and
type: req
---
Given a stored document, its content is extracted and saved in the db.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > extractAndSaveDocumentFileContent).

## Source

Source: Papra server behaviour notes - SRV-1186
