---
title: Formats a document from the database into a user facing document by omitting the storage key and encryption related fields.
status: active
semantic_text: Formats a document from the database into a user facing document by omitting the storage key and encryption related fields.
semantic_clauses:
  - Formats a document from the database into a user facing document by omitting the storage key and encryption related fields
logic_claims:
  - CLAIM-7F147249F6DA42D5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cda1128067b87b7c5812b3fd95c69b4430dc244644539d51a71fde0f37b68dad
semantic_inventory:
  - claim_key: CLAIM-7F147249F6DA42D5
    claim_text: Formats a document from the database into a user facing document by omitting the storage key and encryption related fields
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 122
    subjects:
      - documents.format_document_for_api
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1100'
  recorded_at: '2025-10-03T09:45:34.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-formats-document-from-database-into-user-facing
type: req
---
Formats a document from the database into a user facing document by omitting the storage key and encryption related fields.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.models.test.ts (documents models > formatDocumentForApi).

## Source

Source: Papra server behaviour notes - SRV-1100
