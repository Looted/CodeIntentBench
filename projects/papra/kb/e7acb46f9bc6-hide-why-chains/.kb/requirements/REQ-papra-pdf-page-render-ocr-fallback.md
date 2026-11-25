---
title: A PDF page with neither text nor images suitable for OCR is rendered as an image and read with OCR.
status: active
semantic_text: A PDF page with neither text nor images suitable for OCR is rendered as an image and read with OCR.
semantic_clauses:
  - A PDF page with neither text nor images suitable for OCR is rendered as an image and read with OCR
logic_claims:
  - CLAIM-C62103F73D79A67E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1cbc7eec91667aa64e4c8d3fb27ac74db9246a84480132ea320f4ae5fe93bc3c
semantic_inventory:
  - claim_key: CLAIM-C62103F73D79A67E
    claim_text: A PDF page with neither text nor images suitable for OCR is rendered as an image and read with OCR
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 98
    subjects:
      - content_extraction.pdf_fallback
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.3.0 changelog, #948: When extracting text from PDF documents, if neither text nor'
  recorded_at: '2026-11-16T13:19:36.806Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:content-extraction
rationale: 'The changeset of #948 (2026-03-11): it adds "support for vectorized text".'
id: REQ-papra-pdf-page-render-ocr-fallback
type: req
---
A PDF page with neither text nor images suitable for OCR is rendered as an image and read with OCR.

## Context

The changeset of #948 (2026-03-11): it adds "support for vectorized text".

## Source

> When extracting text from PDF documents, if neither text nor images suitable for OCR are found, the pages are rendered as images and processed with OCR. Adding support for vectorized text.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.3.0 changelog, #948: When extracting text from PDF documents, if neither text nor
