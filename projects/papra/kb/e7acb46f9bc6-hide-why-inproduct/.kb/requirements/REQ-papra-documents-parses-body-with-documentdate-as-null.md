---
title: Parses a body with documentDate as null.
status: active
semantic_text: Parses a body with documentDate as null.
semantic_clauses:
  - Parses a body with documentDate as null
logic_claims:
  - CLAIM-63AEC6F6541D6894
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0856633e0afa1a3567e4501c54a801bd24f6ba70d8511588863f15ad560ab79e
semantic_inventory:
  - claim_key: CLAIM-63AEC6F6541D6894
    claim_text: Parses a body with documentDate as null
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 39
    subjects:
      - documents.update_document_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1156'
  recorded_at: '2026-02-09T13:37:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-parses-body-with-documentdate-as-null
type: req
---
Parses a body with documentDate as null.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.schemas.test.ts (documents.schemas > updateDocumentBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1156
