---
title: The S3 storage driver uses the zero-dependency s3mini client instead of the AWS S3 SDK.
status: active
semantic_text: The S3 storage driver uses the zero-dependency s3mini client instead of the AWS S3 SDK.
semantic_clauses:
  - The S3 storage driver uses the zero-dependency s3mini client instead of the AWS S3 SDK
logic_claims:
  - CLAIM-899704D280CBD251
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c774fd0e060d6d6814a8fd2e37370e10a1ffe9a85ffb007d6dce4d5200353054
semantic_inventory:
  - claim_key: CLAIM-899704D280CBD251
    claim_text: The S3 storage driver uses the zero-dependency s3mini client instead of the AWS S3 SDK
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - storage.s3_client
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1179: Replace the AWS S3 SDK (`@aws-sdk/client-s3` + `@aws-sdk/lib'
  recorded_at: '2026-11-16T10:30:59.746Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:storage
rationale: 'The changeset of #1179 (2026-06-19): it "removes 97 transitive packages (~23 MB unpacked) from the server, replacing them with a single more performant and dependency-free package".'
id: REQ-papra-s3-driver-uses-s3mini
type: req
---
The S3 storage driver uses the zero-dependency s3mini client instead of the AWS S3 SDK.

## Context

The changeset of #1179 (2026-06-19): it "removes 97 transitive packages (~23 MB unpacked) from the server, replacing them with a single more performant and dependency-free package".

## Source

> Replace the AWS S3 SDK (`@aws-sdk/client-s3` + `@aws-sdk/lib-storage`) with the zero-dependency `s3mini` for document S3 storage. This removes 97 transitive packages (~23 MB unpacked) from the server, replacing them with a single more performant and dependency-free package.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.6.0 changelog, #1179: Replace the AWS S3 SDK (`@aws-sdk/client-s3` + `@aws-sdk/lib
