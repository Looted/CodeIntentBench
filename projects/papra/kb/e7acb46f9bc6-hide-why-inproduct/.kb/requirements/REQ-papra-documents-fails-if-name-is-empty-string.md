---
title: Fails if name is an empty string.
status: active
semantic_text: Fails if name is an empty string.
semantic_clauses:
  - Fails if name is an empty string
logic_claims:
  - CLAIM-D85764ACF09CEA35
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2d1155ff4cfca65c420be0d0d272af4465a83fa4d9f3d1f320507a98e158e5c9
semantic_inventory:
  - claim_key: CLAIM-D85764ACF09CEA35
    claim_text: Fails if name is an empty string
    role: normative
    status: modeled
    span:
      start: 0
      end: 32
    subjects:
      - documents.update_document_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1148'
  recorded_at: '2026-09-16T17:05:44.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-fails-if-name-is-empty-string
type: req
---
Fails if name is an empty string.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.schemas.test.ts (documents.schemas > updateDocumentBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1148
