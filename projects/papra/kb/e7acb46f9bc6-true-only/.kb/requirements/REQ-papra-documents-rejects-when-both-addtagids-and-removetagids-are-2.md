---
title: Rejects when both addTagIds and removeTagIds are omitted.
status: active
semantic_text: Rejects when both addTagIds and removeTagIds are omitted.
semantic_clauses:
  - Rejects when both addTagIds and removeTagIds are omitted
logic_claims:
  - CLAIM-15F05E71F9C37F42
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 028a01b6fe2353204d23cda8212a7690b78f3b6a6f59eff803e7134db04f3a19
semantic_inventory:
  - claim_key: CLAIM-15F05E71F9C37F42
    claim_text: Rejects when both addTagIds and removeTagIds are omitted
    role: normative
    status: modeled
    span:
      start: 0
      end: 56
    subjects:
      - documents.batch_tags_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1052'
  recorded_at: '2025-12-02T17:24:37.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-rejects-when-both-addtagids-and-removetagids-are-2
type: req
---
Rejects when both addTagIds and removeTagIds are omitted.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.schemas.test.ts (documents-batch.schemas > batchTagsBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1052
