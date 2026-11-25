---
title: Parses a body with documentIds filter.
status: active
semantic_text: Parses a body with documentIds filter.
semantic_clauses:
  - Parses a body with documentIds filter
logic_claims:
  - CLAIM-6D46848CFEFFD5EA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 42cdab402d7309121e829482240df1890fcea5eb2ae225f77824fd2e16385599
semantic_inventory:
  - claim_key: CLAIM-6D46848CFEFFD5EA
    claim_text: Parses a body with documentIds filter
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 37
    subjects:
      - documents.batch_trash_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1037'
  recorded_at: '2026-07-02T17:19:32.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-parses-body-with-documentids-filter
type: req
---
Parses a body with documentIds filter.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.schemas.test.ts (documents-batch.schemas > batchTrashBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1037
