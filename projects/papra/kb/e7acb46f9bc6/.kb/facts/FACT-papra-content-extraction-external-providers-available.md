---
title: content_extraction.external_providers available = True
status: active
fact_kind: property_value
subject_key: content_extraction.external_providers
property_key: available
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6104915F80EC362A
claim_text: Content extraction can use external providers (Mistral OCR, Azure Document Intelligence, Docling, a custom HTTP endpoint), combined by document type with fallback
text_ref: REQ-papra-external-extraction-providers
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1283: Add support for external document content extraction/ocr, wi'
  recorded_at: '2026-11-16T10:22:38.265Z'
id: FACT-papra-content-extraction-external-providers-available
type: fact
---
Content extraction can use external providers (Mistral OCR, Azure Document Intelligence, Docling, a custom HTTP endpoint), combined by document type with fallback.

Modeled from REQ-papra-external-extraction-providers so the claim can be checked for contradictions.
