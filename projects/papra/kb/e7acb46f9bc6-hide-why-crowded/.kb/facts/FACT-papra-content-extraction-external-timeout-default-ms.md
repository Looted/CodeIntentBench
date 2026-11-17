---
title: content_extraction.external_timeout default_ms = 300000
status: active
fact_kind: property_value
subject_key: content_extraction.external_timeout
property_key: default_ms
operator: eq
value_type: int
value_int: 300000
claim_key: CLAIM-8AB44286EDE78801
claim_text: External extraction services (Docling, Mistral OCR, Azure DI) may take up to 5 minutes per document instead of 30 seconds
text_ref: REQ-papra-external-extraction-timeout-5-min
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.2 changelog, #1365: Increased and made configurable the timeout of content extra'
  recorded_at: '2026-11-16T13:19:49.252Z'
id: FACT-papra-content-extraction-external-timeout-default-ms
type: fact
---
External extraction services (Docling, Mistral OCR, Azure DI) may take up to 5 minutes per document instead of 30 seconds.

Modeled from REQ-papra-external-extraction-timeout-5-min so the claim can be checked for contradictions.
