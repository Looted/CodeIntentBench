---
title: upload.concurrency limited = True
status: active
fact_kind: property_value
subject_key: upload.concurrency
property_key: limited
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-45DBF2EFFFF043BF
claim_text: The web client limits how many files it uploads at once
text_ref: REQ-papra-browser-upload-concurrency-limited
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.11.0 changelog, #619: Limit concurrent browser upload to avoid network crashes'
  recorded_at: '2026-11-16T13:20:32.810Z'
id: FACT-papra-upload-concurrency-limited
type: fact
---
The web client limits how many files it uploads at once.

Modeled from REQ-papra-browser-upload-concurrency-limited so the claim can be checked for contradictions.
