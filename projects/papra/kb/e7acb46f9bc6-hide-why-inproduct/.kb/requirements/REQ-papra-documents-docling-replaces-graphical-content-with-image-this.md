---
title: Docling replaces graphical content with <!-- image -->, this function removes it.
status: active
semantic_text: Docling replaces graphical content with <!-- image -->, this function removes it.
semantic_clauses:
  - Docling replaces graphical content with <!-- image -->, this function removes it
logic_claims:
  - CLAIM-7D2D8B9F1D06C01C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3fb2d4b68fab629d3b64eabea12f46990c350b026cd91780536b8ba2ed6055be
semantic_inventory:
  - claim_key: CLAIM-7D2D8B9F1D06C01C
    claim_text: Docling replaces graphical content with <!-- image -->, this function removes it
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - documents.strip_docling_image_placeholders
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-693'
  recorded_at: '2025-04-16T10:22:15.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-docling-replaces-graphical-content-with-image-this
type: req
---
Docling replaces graphical content with <!-- image -->, this function removes it.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/docling/docling.content-extraction-strategy.models.test.ts (docling.content-extraction-strategy.models > stripDoclingImagePlaceholders).

## Source

Source: Papra server behaviour notes - SRV-693
