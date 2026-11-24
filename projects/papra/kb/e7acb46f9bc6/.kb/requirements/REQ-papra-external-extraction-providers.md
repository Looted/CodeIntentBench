---
title: Content extraction can use external providers (Mistral OCR, Azure Document Intelligence, Docling, a custom HTTP endpoint), combined by document type with fal…
status: active
semantic_text: Content extraction can use external providers (Mistral OCR, Azure Document Intelligence, Docling, a custom HTTP endpoint), combined by document type with fallback; Papra's internal extraction engine is the default.
semantic_clauses:
  - Content extraction can use external providers (Mistral OCR, Azure Document Intelligence, Docling, a custom HTTP endpoint), combined by document type with fallback
  - Papra's internal extraction engine is the default
logic_claims:
  - CLAIM-6104915F80EC362A
  - CLAIM-A94D228B6DA6C6A0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 72b5467121c0ff753b894743df49683270f126ca828eaf902da1a5d817e658df
semantic_inventory:
  - claim_key: CLAIM-6104915F80EC362A
    claim_text: Content extraction can use external providers (Mistral OCR, Azure Document Intelligence, Docling, a custom HTTP endpoint), combined by document type with fallback
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 162
    subjects:
      - content_extraction.external_providers
  - claim_key: CLAIM-A94D228B6DA6C6A0
    claim_text: Papra's internal extraction engine is the default
    role: descriptive
    status: modeled
    span:
      start: 164
      end: 213
    subjects:
      - content_extraction.external_providers
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1283: Add support for external document content extraction/ocr, wi'
  recorded_at: '2026-11-16T10:22:40.112Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:content-extraction
id: REQ-papra-external-extraction-providers
type: req
---
Content extraction can use external providers (Mistral OCR, Azure Document Intelligence, Docling, a custom HTTP endpoint), combined by document type with fallback; Papra's internal extraction engine is the default.

## Context

Reason not stated.

## Source

> Add support for external document content extraction/ocr, with multiple provider, and support for combining providers using document type filtering and fallback. Currently supported providers are: - Mistral OCR - Azure Document Intelligence - Docling server - Custom HTTP endpoint (configurable) - Internal Papra extraction engine (default)

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.6.0 changelog, #1283: Add support for external document content extraction/ocr, wi
