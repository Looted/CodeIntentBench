---
title: Parses a body with all fields.
status: active
semantic_text: Parses a body with all fields.
semantic_clauses:
  - Parses a body with all fields
logic_claims:
  - CLAIM-F3DD1CBF33D45C05
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 45b35ed8d4036e0eadd117fbbd3fb8c430332eb1cad284288b51a37f4e49dbc7
semantic_inventory:
  - claim_key: CLAIM-F3DD1CBF33D45C05
    claim_text: Parses a body with all fields
    role: descriptive
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
  ref: 'Papra server behaviour notes: SRV-1153'
  recorded_at: '2025-04-01T16:49:37.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-parses-body-with-all-fields
type: req
---
Parses a body with all fields.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.schemas.test.ts (documents.schemas > updateDocumentBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1153
