---
title: storage.s3_client library = s3mini
status: active
fact_kind: property_value
subject_key: storage.s3_client
property_key: library
operator: eq
value_type: string
value_string: s3mini
claim_key: CLAIM-899704D280CBD251
claim_text: The S3 storage driver uses the zero-dependency s3mini client instead of the AWS S3 SDK
text_ref: REQ-papra-s3-driver-uses-s3mini
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1179: Replace the AWS S3 SDK (`@aws-sdk/client-s3` + `@aws-sdk/lib'
  recorded_at: '2026-11-16T10:19:52.632Z'
id: FACT-papra-storage-s3-client-library
type: fact
---
The S3 storage driver uses the zero-dependency s3mini client instead of the AWS S3 SDK.

Modeled from REQ-papra-s3-driver-uses-s3mini so the claim can be checked for contradictions.
