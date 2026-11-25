---
title: Parses a body with only documentDate as an ISO string.
status: active
semantic_text: Parses a body with only documentDate as an ISO string.
semantic_clauses:
  - Parses a body with only documentDate as an ISO string
logic_claims:
  - CLAIM-87431E0DC0B4F461
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fc886468e1bcd200e44a7d8ba06f8da9654d337ce932102f776203b52f915871
semantic_inventory:
  - claim_key: CLAIM-87431E0DC0B4F461
    claim_text: Parses a body with only documentDate as an ISO string
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 53
    subjects:
      - documents.update_document_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1164'
  recorded_at: '2026-09-05T14:42:21.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-parses-body-with-only-documentdate-as-iso
type: req
---
Parses a body with only documentDate as an ISO string.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.schemas.test.ts (documents.schemas > updateDocumentBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1164
