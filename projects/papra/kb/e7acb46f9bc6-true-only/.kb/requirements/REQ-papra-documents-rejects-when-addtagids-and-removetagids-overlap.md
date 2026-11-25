---
title: Rejects when addTagIds and removeTagIds overlap.
status: active
semantic_text: Rejects when addTagIds and removeTagIds overlap.
semantic_clauses:
  - Rejects when addTagIds and removeTagIds overlap
logic_claims:
  - CLAIM-25DB3FC11FB94F8F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e7715ccba8b2ce1df28c43f3345735e671d389c638a11a69c59d0d3163f40adf
semantic_inventory:
  - claim_key: CLAIM-25DB3FC11FB94F8F
    claim_text: Rejects when addTagIds and removeTagIds overlap
    role: normative
    status: modeled
    span:
      start: 0
      end: 47
    subjects:
      - documents.batch_tags_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1050'
  recorded_at: '2026-01-03T17:17:13.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-rejects-when-addtagids-and-removetagids-overlap
type: req
---
Rejects when addTagIds and removeTagIds overlap.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.schemas.test.ts (documents-batch.schemas > batchTagsBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1050
