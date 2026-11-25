---
title: Rejects when both addTagIds and removeTagIds are empty.
status: active
semantic_text: Rejects when both addTagIds and removeTagIds are empty.
semantic_clauses:
  - Rejects when both addTagIds and removeTagIds are empty
logic_claims:
  - CLAIM-D2E5791B3EE18F3F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e46b1acc39602864159349144ef235b5b8310bd31a67e6dde5a55fd0ecb4b91e
semantic_inventory:
  - claim_key: CLAIM-D2E5791B3EE18F3F
    claim_text: Rejects when both addTagIds and removeTagIds are empty
    role: normative
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - documents.batch_tags_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1051'
  recorded_at: '2025-02-26T13:53:51.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-rejects-when-both-addtagids-and-removetagids-are
type: req
---
Rejects when both addTagIds and removeTagIds are empty.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.schemas.test.ts (documents-batch.schemas > batchTagsBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1051
