---
title: When a document is restored, a "document.restored" event is triggered.
status: active
semantic_text: When a document is restored, a "document.restored" event is triggered.
semantic_clauses:
  - When a document is restored, a "document.restored" event is triggered
logic_claims:
  - CLAIM-F30905C0921E43D7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: af5c3be495be16abac641db87ee2b9d988920809affc5778205c853316717e63
semantic_inventory:
  - claim_key: CLAIM-F30905C0921E43D7
    claim_text: When a document is restored, a "document.restored" event is triggered
    role: condition
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - documents.restore_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1213'
  recorded_at: '2026-03-21T12:17:34.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-document-is-restored-document-restored-event-is
type: req
---
When a document is restored, a "document.restored" event is triggered.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.usecases.test.ts (documents usecases > restoreDocument).

## Source

Source: Papra server behaviour notes - SRV-1213
