---
title: content_extraction.pdf_fallback renders_pages_for_ocr = True
status: active
fact_kind: property_value
subject_key: content_extraction.pdf_fallback
property_key: renders_pages_for_ocr
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C62103F73D79A67E
claim_text: A PDF page with neither text nor images suitable for OCR is rendered as an image and read with OCR
text_ref: REQ-papra-pdf-page-render-ocr-fallback
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.3.0 changelog, #948: When extracting text from PDF documents, if neither text nor'
  recorded_at: '2026-11-16T13:19:35.932Z'
id: FACT-papra-content-extraction-pdf-fallback-renders-pages-for-ocr
type: fact
---
A PDF page with neither text nor images suitable for OCR is rendered as an image and read with OCR.

Modeled from REQ-papra-pdf-page-render-ocr-fallback so the claim can be checked for contradictions.
