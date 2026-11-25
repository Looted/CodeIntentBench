---
title: ocr.tesseract_engine preferred_engine = native_cli_when_available
status: active
fact_kind: property_value
subject_key: ocr.tesseract_engine
property_key: preferred_engine
operator: eq
value_type: string
value_string: native_cli_when_available
claim_key: CLAIM-F146DEA4BB2005B3
claim_text: The native tesseract CLI is used for OCR when it is installed, and tesseract.js otherwise
text_ref: REQ-papra-native-tesseract-when-available
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): lecture 0.4.0 changelog, #621: Added support for native tesseract cli when available'
  recorded_at: '2026-11-25T19:29:09.567Z'
id: FACT-papra-ocr-tesseract-engine-preferred-engine
type: fact
---
The native tesseract CLI is used for OCR when it is installed, and tesseract.js otherwise.

Modeled from REQ-papra-native-tesseract-when-available so the claim can be checked for contradictions.
