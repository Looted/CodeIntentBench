---
title: Uploading a document that exceeds the upload size limit returns a 413.
status: active
semantic_text: Uploading a document that exceeds the upload size limit returns a 413.
semantic_clauses:
  - Uploading a document that exceeds the upload size limit returns a 413
logic_claims:
  - CLAIM-C5DA73F4FA5B4754
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 40f4f47eda68dd72b9d9f7fbe3dede610c374d0463bf2893cd155842a845804d
semantic_inventory:
  - claim_key: CLAIM-C5DA73F4FA5B4754
    claim_text: Uploading a document that exceeds the upload size limit returns a 413
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - documents.documents_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1256'
  recorded_at: '2026-05-11T17:12:22.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-uploading-document-that-exceeds-upload-size-limit
type: req
---
Uploading a document that exceeds the upload size limit returns a 413.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/e2e/upload-documents.e2e.test.ts (documents e2e > document upload).

## Source

Source: Papra server behaviour notes - SRV-1256
