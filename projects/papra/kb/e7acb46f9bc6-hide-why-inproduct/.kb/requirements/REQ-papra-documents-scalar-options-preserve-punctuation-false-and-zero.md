---
title: Scalar options preserve punctuation, false, and zero values.
status: active
semantic_text: Scalar options preserve punctuation, false, and zero values.
semantic_clauses:
  - Scalar options preserve punctuation, false, and zero values
logic_claims:
  - CLAIM-324FD4CB76F57E5D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3ddddc6451dbf61ea490aef13bb2efbc3919196d1dfa6d9a4fd5558d825842bc
semantic_inventory:
  - claim_key: CLAIM-324FD4CB76F57E5D
    claim_text: Scalar options preserve punctuation, false, and zero values
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - documents.build_docling_request_body
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-706'
  recorded_at: '2025-07-14T09:24:01.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-scalar-options-preserve-punctuation-false-and-zero
type: req
---
Scalar options preserve punctuation, false, and zero values.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/docling/docling.content-extraction-strategy.models.test.ts (docling.content-extraction-strategy.models > buildDoclingRequestBody).

## Source

Source: Papra server behaviour notes - SRV-706
