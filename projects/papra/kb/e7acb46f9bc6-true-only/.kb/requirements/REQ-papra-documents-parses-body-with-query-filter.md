---
title: Parses a body with query filter.
status: active
semantic_text: Parses a body with query filter.
semantic_clauses:
  - Parses a body with query filter
logic_claims:
  - CLAIM-50E20276DE1153CB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f3ffda1a29659f0f2fafcb0ddad332ad80d78752826707bc107d4a5c7d56081a
semantic_inventory:
  - claim_key: CLAIM-50E20276DE1153CB
    claim_text: Parses a body with query filter
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 31
    subjects:
      - documents.batch_trash_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1041'
  recorded_at: '2025-12-23T11:11:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-parses-body-with-query-filter
type: req
---
Parses a body with query filter.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.schemas.test.ts (documents-batch.schemas > batchTrashBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1041
