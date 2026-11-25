---
title: upload.client_guard rejects_too_big_files = True
status: active
fact_kind: property_value
subject_key: upload.client_guard
property_key: rejects_too_big_files
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D8DF8E2B0D2A5AB0
claim_text: The web client rejects a file larger than the allowed size before uploading it
text_ref: REQ-papra-client-rejects-too-big-files
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.1 changelog, #492: Added a client side guard for rejecting too-big files'
  recorded_at: '2026-11-25T19:29:34.339Z'
id: FACT-papra-upload-client-guard-rejects-too-big-files
type: fact
---
The web client rejects a file larger than the allowed size before uploading it.

Modeled from REQ-papra-client-rejects-too-big-files so the claim can be checked for contradictions.
