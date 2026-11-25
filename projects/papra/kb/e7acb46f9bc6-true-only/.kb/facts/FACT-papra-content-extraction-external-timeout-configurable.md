---
title: content_extraction.external_timeout configurable = True
status: active
fact_kind: property_value
subject_key: content_extraction.external_timeout
property_key: configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-EBA6397BDCFF2DAB
claim_text: each timeout is configurable (DOCLING_REQUEST_TIMEOUT_MS, MISTRAL_OCR_REQUEST_TIMEOUT_MS, AZURE_DI_REQUEST_TIMEOUT_MS)
text_ref: REQ-papra-external-extraction-timeout-5-min
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.2 changelog, #1365: Increased and made configurable the timeout of content extra'
  recorded_at: '2026-11-16T10:22:42.826Z'
id: FACT-papra-content-extraction-external-timeout-configurable
type: fact
---
Each timeout is configurable (DOCLING_REQUEST_TIMEOUT_MS, MISTRAL_OCR_REQUEST_TIMEOUT_MS, AZURE_DI_REQUEST_TIMEOUT_MS).

Modeled from REQ-papra-external-extraction-timeout-5-min so the claim can be checked for contradictions.
