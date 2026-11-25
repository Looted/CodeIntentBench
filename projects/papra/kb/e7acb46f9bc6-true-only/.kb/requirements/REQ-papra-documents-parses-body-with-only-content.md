---
title: Parses a body with only content.
status: active
semantic_text: Parses a body with only content.
semantic_clauses:
  - Parses a body with only content
logic_claims:
  - CLAIM-463FD0DC9B5F877A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1909efa6e28942e59987780f291b0638a013d1fb3c73919bce743d2fabe25929
semantic_inventory:
  - claim_key: CLAIM-463FD0DC9B5F877A
    claim_text: Parses a body with only content
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 31
    subjects:
      - documents.update_document_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1160'
  recorded_at: '2025-12-22T14:49:24.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-parses-body-with-only-content
type: req
---
Parses a body with only content.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.schemas.test.ts (documents.schemas > updateDocumentBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1160
