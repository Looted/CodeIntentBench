---
title: External extraction services (Docling, Mistral OCR, Azure DI) may take up to 5 minutes per document instead of 30 seconds; each timeout is configurable (DOCL…
status: active
semantic_text: External extraction services (Docling, Mistral OCR, Azure DI) may take up to 5 minutes per document instead of 30 seconds; each timeout is configurable (DOCLING_REQUEST_TIMEOUT_MS, MISTRAL_OCR_REQUEST_TIMEOUT_MS, AZURE_DI_REQUEST_TIMEOUT_MS).
semantic_clauses:
  - External extraction services (Docling, Mistral OCR, Azure DI) may take up to 5 minutes per document instead of 30 seconds
  - each timeout is configurable (DOCLING_REQUEST_TIMEOUT_MS, MISTRAL_OCR_REQUEST_TIMEOUT_MS, AZURE_DI_REQUEST_TIMEOUT_MS)
logic_claims:
  - CLAIM-8AB44286EDE78801
  - CLAIM-EBA6397BDCFF2DAB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5db52c411d168d8c603ad3ddf6423f3174814e891e740cef9325e6f218ad1d14
semantic_inventory:
  - claim_key: CLAIM-8AB44286EDE78801
    claim_text: External extraction services (Docling, Mistral OCR, Azure DI) may take up to 5 minutes per document instead of 30 seconds
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 121
    subjects:
      - content_extraction.external_timeout
  - claim_key: CLAIM-EBA6397BDCFF2DAB
    claim_text: each timeout is configurable (DOCLING_REQUEST_TIMEOUT_MS, MISTRAL_OCR_REQUEST_TIMEOUT_MS, AZURE_DI_REQUEST_TIMEOUT_MS)
    role: descriptive
    status: modeled
    span:
      start: 123
      end: 241
    subjects:
      - content_extraction.external_timeout
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.2 changelog, #1365: Increased and made configurable the timeout of content extra'
  recorded_at: '2026-11-16T10:22:43.663Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:content-extraction
id: REQ-papra-external-extraction-timeout-5-min
type: req
---
External extraction services (Docling, Mistral OCR, Azure DI) may take up to 5 minutes per document instead of 30 seconds; each timeout is configurable (DOCLING_REQUEST_TIMEOUT_MS, MISTRAL_OCR_REQUEST_TIMEOUT_MS, AZURE_DI_REQUEST_TIMEOUT_MS).

## Context

Reason not stated.

## Source

> Increased and made configurable the timeout of content extraction external service. Docling, Mistral OCR, and Azure DI can now take up to 5 minutes to process a document, instead of the previous 30 seconds, configurable via `DOCLING_REQUEST_TIMEOUT_MS`, `MISTRAL_OCR_REQUEST_TIMEOUT_MS` and `AZURE_DI_REQUEST_TIMEOUT_MS` respectively.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.6.2 changelog, #1365: Increased and made configurable the timeout of content extra
