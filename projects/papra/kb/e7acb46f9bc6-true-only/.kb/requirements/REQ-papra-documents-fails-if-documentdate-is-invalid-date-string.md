---
title: Fails if documentDate is an invalid date string.
status: active
semantic_text: Fails if documentDate is an invalid date string.
semantic_clauses:
  - Fails if documentDate is an invalid date string
logic_claims:
  - CLAIM-4BAD8108B3035736
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 490065c9937259ec0bb1b8fbcf742bd7cd9ac7498410e6e24a4c3182612875ef
semantic_inventory:
  - claim_key: CLAIM-4BAD8108B3035736
    claim_text: Fails if documentDate is an invalid date string
    role: normative
    status: modeled
    span:
      start: 0
      end: 47
    subjects:
      - documents.update_document_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1144'
  recorded_at: '2025-12-09T10:01:48.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-fails-if-documentdate-is-invalid-date-string
type: req
---
Fails if documentDate is an invalid date string.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.schemas.test.ts (documents.schemas > updateDocumentBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1144
