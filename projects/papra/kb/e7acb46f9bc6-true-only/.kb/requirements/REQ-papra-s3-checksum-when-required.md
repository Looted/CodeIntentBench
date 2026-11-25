---
title: The S3 storage driver sends checksum verification headers only when required.
status: active
semantic_text: The S3 storage driver sends checksum verification headers only when required.
semantic_clauses:
  - The S3 storage driver sends checksum verification headers only when required
logic_claims:
  - CLAIM-CAA74AE0C45E8613
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3fa35e9f8e340459a952a4c913d838560bd977b00d5f7cb674944f2ea54069b5
semantic_inventory:
  - claim_key: CLAIM-CAA74AE0C45E8613
    claim_text: The S3 storage driver sends checksum verification headers only when required
    role: normative
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - storage.s3_checksum
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1172: Set S3 checksum verification headers to "when required" to f'
  recorded_at: '2026-11-16T10:19:50.222Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:storage
rationale: 'The changeset of #1172 (2026-06-16): "Set S3 checksum verification headers to \"when required\" to fix Backblaze B2 storage issues."'
id: REQ-papra-s3-checksum-when-required
type: req
---
The S3 storage driver sends checksum verification headers only when required.

## Context

The changeset of #1172 (2026-06-16): "Set S3 checksum verification headers to \"when required\" to fix Backblaze B2 storage issues."

## Source

> Set S3 checksum verification headers to "when required" to fix Backblaze B2 storage issues.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.6.0 changelog, #1172: Set S3 checksum verification headers to "when required" to f
