---
title: Fails if an unknown property is present.
status: active
semantic_text: Fails if an unknown property is present.
semantic_clauses:
  - Fails if an unknown property is present
logic_claims:
  - CLAIM-06D6542F58060BB8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8187ae1d5a81c3d83120e759d2e6b41674f9401e3c8e967680cdfc55e1649360
semantic_inventory:
  - claim_key: CLAIM-06D6542F58060BB8
    claim_text: Fails if an unknown property is present
    role: normative
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
  ref: 'Papra server behaviour notes: SRV-1141'
  recorded_at: '2026-07-21T11:47:02.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-fails-if-unknown-property-is-present
type: req
---
Fails if an unknown property is present.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents.schemas.test.ts (documents.schemas > updateDocumentBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1141
