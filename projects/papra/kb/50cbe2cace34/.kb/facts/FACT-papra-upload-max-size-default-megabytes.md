---
title: upload.max_size default_megabytes = 25
status: active
fact_kind: property_value
subject_key: upload.max_size
property_key: default_megabytes
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-01F82D849FD9F893
claim_text: The default maximum upload size is 25MB (it was 10MB)
text_ref: REQ-papra-max-upload-default-25mb
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1067: Increased default max file size from 10MB to 25MB (can still'
  recorded_at: '2026-11-16T10:34:33.059Z'
id: FACT-papra-upload-max-size-default-megabytes
type: fact
---
The default maximum upload size is 25MB (it was 10MB).

Modeled from REQ-papra-max-upload-default-25mb so the claim can be checked for contradictions.
