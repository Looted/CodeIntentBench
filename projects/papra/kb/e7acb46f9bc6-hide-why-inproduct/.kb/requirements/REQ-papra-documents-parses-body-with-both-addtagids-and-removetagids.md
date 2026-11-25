---
title: Parses a body with both addTagIds and removeTagIds.
status: active
semantic_text: Parses a body with both addTagIds and removeTagIds.
semantic_clauses:
  - Parses a body with both addTagIds and removeTagIds
logic_claims:
  - CLAIM-9BD3C8AD681CE280
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 58aa48ccede9a346be6c6644b6a6ab083325d6888cc19e70230208ef7a14e642
semantic_inventory:
  - claim_key: CLAIM-9BD3C8AD681CE280
    claim_text: Parses a body with both addTagIds and removeTagIds
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 50
    subjects:
      - documents.batch_tags_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1035'
  recorded_at: '2025-03-16T13:52:53.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-parses-body-with-both-addtagids-and-removetagids
type: req
---
Parses a body with both addTagIds and removeTagIds.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.schemas.test.ts (documents-batch.schemas > batchTagsBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1035
