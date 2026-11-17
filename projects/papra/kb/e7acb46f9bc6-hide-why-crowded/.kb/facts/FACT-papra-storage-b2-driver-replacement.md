---
title: storage.b2_driver replacement = s3_driver
status: active
fact_kind: property_value
subject_key: storage.b2_driver
property_key: replacement
operator: eq
value_type: string
value_string: s3_driver
claim_key: CLAIM-7E1D31913C479BA8
claim_text: B2 is used through the S3 storage driver
text_ref: REQ-papra-b2-storage-driver-dropped
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.0 changelog, #472: Dropped support for the dedicated backblaze b2 storage drive'
  recorded_at: '2026-11-16T13:16:48.112Z'
id: FACT-papra-storage-b2-driver-replacement
type: fact
---
B2 is used through the S3 storage driver.

Modeled from REQ-papra-b2-storage-driver-dropped so the claim can be checked for contradictions.
