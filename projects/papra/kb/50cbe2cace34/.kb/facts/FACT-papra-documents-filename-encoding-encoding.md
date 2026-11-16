---
title: documents.filename_encoding encoding = utf8
status: active
fact_kind: property_value
subject_key: documents.filename_encoding
property_key: encoding
operator: eq
value_type: string
value_string: utf8
claim_key: CLAIM-AC1F9BA332D96F53
claim_text: Uploaded file names are decoded as UTF-8, not latin1, so non-ASCII names are kept
text_ref: REQ-papra-file-names-decoded-as-utf8
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.5 changelog, #521: Properly handle file names encoding (utf8 instead of latin1)'
  recorded_at: '2026-11-16T10:31:20.138Z'
id: FACT-papra-documents-filename-encoding-encoding
type: fact
---
Uploaded file names are decoded as UTF-8, not latin1, so non-ASCII names are kept.

Modeled from REQ-papra-file-names-decoded-as-utf8 so the claim can be checked for contradictions.
