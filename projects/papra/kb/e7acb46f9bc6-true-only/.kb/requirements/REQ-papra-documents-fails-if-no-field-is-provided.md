---
title: Fails if no field is provided.
status: active
semantic_text: Fails if no field is provided.
semantic_clauses:
  - Fails if no field is provided
logic_claims:
  - CLAIM-527CE9AC8F9FEF01
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1cabb86a0f044c3676bbebe6684275c3cc160fa700c3abb288eea22d2c73598f
semantic_inventory:
  - claim_key: CLAIM-527CE9AC8F9FEF01
    claim_text: Fails if no field is provided
    role: normative
    status: modeled
    span:
      start: 0
      end: 29
    subjects:
      - documents.update_document_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1151'
  recorded_at: '2025-12-05T12:59:10.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-fails-if-no-field-is-provided
type: req
---
Fails if no field is provided.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.schemas.test.ts (documents.schemas > updateDocumentBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1151
