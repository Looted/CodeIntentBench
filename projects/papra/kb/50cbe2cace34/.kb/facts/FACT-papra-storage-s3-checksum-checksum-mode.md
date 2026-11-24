---
title: storage.s3_checksum checksum_mode = when_required
status: active
fact_kind: property_value
subject_key: storage.s3_checksum
property_key: checksum_mode
operator: eq
value_type: string
value_string: when_required
claim_key: CLAIM-CAA74AE0C45E8613
claim_text: The S3 storage driver sends checksum verification headers only when required
text_ref: REQ-papra-s3-checksum-when-required
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1172: Set S3 checksum verification headers to "when required" to f'
  recorded_at: '2026-11-16T10:30:56.196Z'
id: FACT-papra-storage-s3-checksum-checksum-mode
type: fact
---
The S3 storage driver sends checksum verification headers only when required.

Modeled from REQ-papra-s3-checksum-when-required so the claim can be checked for contradictions.
