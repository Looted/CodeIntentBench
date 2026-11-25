---
title: Parses a body with removeTagIds only.
status: active
semantic_text: Parses a body with removeTagIds only.
semantic_clauses:
  - Parses a body with removeTagIds only
logic_claims:
  - CLAIM-BE0A454D55DAFD5F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 96a1dc4b27ccd3f93f463671fb5fa17796ffd22678159a922e15129883f12e04
semantic_inventory:
  - claim_key: CLAIM-BE0A454D55DAFD5F
    claim_text: Parses a body with removeTagIds only
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 36
    subjects:
      - documents.batch_tags_body_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1043'
  recorded_at: '2026-06-26T08:33:35.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-parses-body-with-removetagids-only
type: req
---
Parses a body with removeTagIds only.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/documents-batch/documents-batch.schemas.test.ts (documents-batch.schemas > batchTagsBodySchema).

## Source

Source: Papra server behaviour notes - SRV-1043
