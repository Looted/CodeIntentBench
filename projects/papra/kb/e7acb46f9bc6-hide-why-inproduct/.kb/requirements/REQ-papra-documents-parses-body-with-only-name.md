---
title: Parses a body with only name.
status: active
semantic_text: Parses a body with only name.
semantic_clauses:
  - Parses a body with only name
logic_claims:
  - CLAIM-0D7397A700AA5CD0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c8378b8b746baf958cabcfcbdf7930502b05ed64cf6d32d3906aa25f3f168047
semantic_inventory:
  - claim_key: CLAIM-0D7397A700AA5CD0
    claim_text: Parses a body with only name
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 28
    subjects:
      - documents.update_document_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1165'
  recorded_at: '2025-10-10T10:51:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-parses-body-with-only-name
type: req
---
Parses a body with only name.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.schemas.test.ts (documents.schemas > updateDocumentBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1165
