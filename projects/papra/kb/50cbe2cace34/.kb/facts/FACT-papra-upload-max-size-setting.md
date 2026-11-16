---
title: upload.max_size setting = DOCUMENT_STORAGE_MAX_UPLOAD_SIZE
status: active
fact_kind: property_value
subject_key: upload.max_size
property_key: setting
operator: eq
value_type: string
value_string: DOCUMENT_STORAGE_MAX_UPLOAD_SIZE
claim_key: CLAIM-8CBC2CEB237393DB
claim_text: DOCUMENT_STORAGE_MAX_UPLOAD_SIZE changes it and 0 disables it
text_ref: REQ-papra-max-upload-default-25mb
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1067: Increased default max file size from 10MB to 25MB (can still'
  recorded_at: '2026-11-16T10:34:33.704Z'
id: FACT-papra-upload-max-size-setting
type: fact
---
DOCUMENT_STORAGE_MAX_UPLOAD_SIZE changes it and 0 disables it.

Modeled from REQ-papra-max-upload-default-25mb so the claim can be checked for contradictions.
