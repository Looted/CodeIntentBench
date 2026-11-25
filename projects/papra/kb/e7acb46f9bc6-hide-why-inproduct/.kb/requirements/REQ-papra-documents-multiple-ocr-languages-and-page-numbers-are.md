---
title: Multiple OCR languages and page numbers are sent as repeated fields.
status: active
semantic_text: Multiple OCR languages and page numbers are sent as repeated fields.
semantic_clauses:
  - Multiple OCR languages and page numbers are sent as repeated fields
logic_claims:
  - CLAIM-B34408164B398136
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 07b7944c8d76917966576c24066410d9068206fa1b9580e22244c6a86d14365b
semantic_inventory:
  - claim_key: CLAIM-B34408164B398136
    claim_text: Multiple OCR languages and page numbers are sent as repeated fields
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - documents.build_docling_request_body
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-696'
  recorded_at: '2025-05-25T09:04:52.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-multiple-ocr-languages-and-page-numbers-are
type: req
---
Multiple OCR languages and page numbers are sent as repeated fields.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/docling/docling.content-extraction-strategy.models.test.ts (docling.content-extraction-strategy.models > buildDoclingRequestBody).

## Source

Source: Papra server behaviour notes - SRV-696
