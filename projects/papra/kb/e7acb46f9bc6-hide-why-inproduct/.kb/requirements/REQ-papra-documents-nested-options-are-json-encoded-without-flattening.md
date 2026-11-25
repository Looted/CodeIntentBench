---
title: Nested options are JSON-encoded without flattening their values.
status: active
semantic_text: Nested options are JSON-encoded without flattening their values.
semantic_clauses:
  - Nested options are JSON-encoded without flattening their values
logic_claims:
  - CLAIM-BA313B1A8F703AFF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 12ff1a4262c16c47cd7904e491a1d748d53de3a808dc29cf55edc9fe4a85aa0c
semantic_inventory:
  - claim_key: CLAIM-BA313B1A8F703AFF
    claim_text: Nested options are JSON-encoded without flattening their values
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 63
    subjects:
      - documents.build_docling_request_body
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-698'
  recorded_at: '2026-07-05T13:14:55.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-nested-options-are-json-encoded-without-flattening
type: req
---
Nested options are JSON-encoded without flattening their values.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/docling/docling.content-extraction-strategy.models.test.ts (docling.content-extraction-strategy.models > buildDoclingRequestBody).

## Source

Source: Papra server behaviour notes - SRV-698
