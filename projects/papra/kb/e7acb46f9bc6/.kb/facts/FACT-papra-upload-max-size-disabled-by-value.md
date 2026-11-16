---
title: upload.max_size disabled_by_value = 0
status: active
fact_kind: property_value
subject_key: upload.max_size
property_key: disabled_by_value
operator: eq
value_type: int
value_int: 0
claim_key: CLAIM-4860648D208BEAEC
claim_text: Setting the maximum upload size to 0 disables the limit
text_ref: REQ-papra-max-upload-size-can-be-disabled
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.2 changelog, #501: Fix an issue preventing to disable the max upload size'
  recorded_at: '2026-11-16T10:23:15.217Z'
id: FACT-papra-upload-max-size-disabled-by-value
type: fact
---
Setting the maximum upload size to 0 disables the limit.

Modeled from REQ-papra-max-upload-size-can-be-disabled so the claim can be checked for contradictions.
