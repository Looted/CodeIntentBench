---
title: The default maximum upload size is 25MB (it was 10MB); DOCUMENT_STORAGE_MAX_UPLOAD_SIZE changes it and 0 disables it.
status: active
semantic_text: The default maximum upload size is 25MB (it was 10MB); DOCUMENT_STORAGE_MAX_UPLOAD_SIZE changes it and 0 disables it.
semantic_clauses:
  - The default maximum upload size is 25MB (it was 10MB)
  - DOCUMENT_STORAGE_MAX_UPLOAD_SIZE changes it and 0 disables it
logic_claims:
  - CLAIM-01F82D849FD9F893
  - CLAIM-8CBC2CEB237393DB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9c28b53de51c6cf66134d869339c2afdecc9840f0a46b8894e7439ee9caaf2ef
semantic_inventory:
  - claim_key: CLAIM-01F82D849FD9F893
    claim_text: The default maximum upload size is 25MB (it was 10MB)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 53
    subjects:
      - upload.max_size
  - claim_key: CLAIM-8CBC2CEB237393DB
    claim_text: DOCUMENT_STORAGE_MAX_UPLOAD_SIZE changes it and 0 disables it
    role: descriptive
    status: modeled
    span:
      start: 55
      end: 116
    subjects:
      - upload.max_size
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1067: Increased default max file size from 10MB to 25MB (can still'
  recorded_at: '2026-11-16T10:23:37.717Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:upload
id: REQ-papra-max-upload-default-25mb
type: req
---
The default maximum upload size is 25MB (it was 10MB); DOCUMENT_STORAGE_MAX_UPLOAD_SIZE changes it and 0 disables it.

## Context

Reason not stated.

## Source

> Increased default max file size from 10MB to 25MB (can still be customized using `DOCUMENT_STORAGE_MAX_UPLOAD_SIZE`, disable by setting it to 0).

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.4.1 changelog, #1067: Increased default max file size from 10MB to 25MB (can still
