---
title: The dedicated Backblaze B2 storage driver is no longer supported; B2 is used through the S3 storage driver.
status: active
semantic_text: The dedicated Backblaze B2 storage driver is no longer supported; B2 is used through the S3 storage driver.
semantic_clauses:
  - The dedicated Backblaze B2 storage driver is no longer supported
  - B2 is used through the S3 storage driver
logic_claims:
  - CLAIM-62D9AECF8E96ED54
  - CLAIM-7E1D31913C479BA8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7041cf6444771bb9d8a59d020d9156c11b0a5e2e59febd367b298e3a44082ee1
semantic_inventory:
  - claim_key: CLAIM-62D9AECF8E96ED54
    claim_text: The dedicated Backblaze B2 storage driver is no longer supported
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - storage.b2_driver
  - claim_key: CLAIM-7E1D31913C479BA8
    claim_text: B2 is used through the S3 storage driver
    role: descriptive
    status: modeled
    span:
      start: 66
      end: 106
    subjects:
      - storage.b2_driver
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.0 changelog, #472: Dropped support for the dedicated backblaze b2 storage drive'
  recorded_at: '2026-11-25T19:27:06.526Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:storage
rationale: 'The changeset of #472 (2025-08-20): "Dropped support for the dedicated backblaze b2 storage driver as b2 now fully support s3 client".'
id: REQ-papra-b2-storage-driver-dropped
type: req
---
The dedicated Backblaze B2 storage driver is no longer supported; B2 is used through the S3 storage driver.

## Context

The changeset of #472 (2025-08-20): "Dropped support for the dedicated backblaze b2 storage driver as b2 now fully support s3 client".

## Why this changed

The changeset of #472 (2025-08-20) gives the reason for the change: "Dropped support for the dedicated backblaze b2 storage driver as b2 now fully support s3 client".

## Source

> Dropped support for the dedicated backblaze b2 storage driver as b2 now fully support s3 client

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 0.9.0 changelog, #472: Dropped support for the dedicated backblaze b2 storage drive
