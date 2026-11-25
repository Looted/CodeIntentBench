---
title: Null options and empty lists are omitted so Docling uses its defaults.
status: active
semantic_text: Null options and empty lists are omitted so Docling uses its defaults.
semantic_clauses:
  - Null options and empty lists are omitted so Docling uses its defaults
logic_claims:
  - CLAIM-844FC43F46D07B90
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a7fe11fe118a14e578fb3617d93e7667ed5f1f2eb4fe40b050dbaebc13cc4423
semantic_inventory:
  - claim_key: CLAIM-844FC43F46D07B90
    claim_text: Null options and empty lists are omitted so Docling uses its defaults
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - documents.build_docling_request_body
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-702'
  recorded_at: '2026-08-02T10:14:16.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-null-options-and-empty-lists-are-omitted
type: req
---
Null options and empty lists are omitted so Docling uses its defaults.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/docling/docling.content-extraction-strategy.models.test.ts (docling.content-extraction-strategy.models > buildDoclingRequestBody).

## Source

Source: Papra server behaviour notes - SRV-702
