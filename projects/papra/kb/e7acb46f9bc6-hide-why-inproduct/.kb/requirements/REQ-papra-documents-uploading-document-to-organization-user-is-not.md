---
title: Uploading a document to an organization the user is not a member of returns a 403.
status: active
semantic_text: Uploading a document to an organization the user is not a member of returns a 403.
semantic_clauses:
  - Uploading a document to an organization the user is not a member of returns a 403
logic_claims:
  - CLAIM-AB6FDC8DA3D409A4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: dbf55ce963df7e4b9880dde18d08aba22125ff502babb4d7bf041aa98e33bfc8
semantic_inventory:
  - claim_key: CLAIM-AB6FDC8DA3D409A4
    claim_text: Uploading a document to an organization the user is not a member of returns a 403
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - documents.documents_e2e
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1260'
  recorded_at: '2025-03-19T09:06:11.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-uploading-document-to-organization-user-is-not
type: req
---
Uploading a document to an organization the user is not a member of returns a 403.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/e2e/upload-documents.e2e.test.ts (documents e2e > document upload).

## Source

Source: Papra server behaviour notes - SRV-1260
