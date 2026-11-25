---
title: Parses a body with addTagIds only.
status: active
semantic_text: Parses a body with addTagIds only.
semantic_clauses:
  - Parses a body with addTagIds only
logic_claims:
  - CLAIM-859DCB23DF19ED84
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 49148b45f5e02c3d11b992e29c878413436b6d6049b4474cc66316699bdb4ac6
semantic_inventory:
  - claim_key: CLAIM-859DCB23DF19ED84
    claim_text: Parses a body with addTagIds only
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 33
    subjects:
      - documents.batch_tags_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1031'
  recorded_at: '2026-09-24T08:15:06.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-parses-body-with-addtagids-only
type: req
---
Parses a body with addTagIds only.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.schemas.test.ts (documents-batch.schemas > batchTagsBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1031
