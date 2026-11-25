---
title: A new document key uses its persisted creation timestamp and the missing-date fallback.
status: active
semantic_text: A new document key uses its persisted creation timestamp and the missing-date fallback.
semantic_clauses:
  - A new document key uses its persisted creation timestamp and the missing-date fallback
logic_claims:
  - CLAIM-72610440635CC03A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ddcc2ea9043281b557d49a248f8d92589110eeba56b848106aac62f309a86145
semantic_inventory:
  - claim_key: CLAIM-72610440635CC03A
    claim_text: A new document key uses its persisted creation timestamp and the missing-date fallback
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - documents.create_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1179'
  recorded_at: '2026-02-10T13:28:19.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-new-document-key-uses-its-persisted-creation
type: req
---
A new document key uses its persisted creation timestamp and the missing-date fallback.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > createDocument).

## Source

Source: Papra server behaviour notes - SRV-1179
