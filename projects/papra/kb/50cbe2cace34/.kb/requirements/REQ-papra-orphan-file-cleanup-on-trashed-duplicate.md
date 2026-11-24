---
title: When an upload matches a document in the trash, the file the upload wrote is deleted as an orphan once the trashed document is restored.
status: active
semantic_text: When an upload matches a document in the trash, the file the upload wrote is deleted as an orphan once the trashed document is restored.
semantic_clauses:
  - When an upload matches a document in the trash, the file the upload wrote is deleted as an orphan once the trashed document is restored
logic_claims:
  - CLAIM-598A32AC630EC71D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4e80775e76d0385cb9454279f8328bc49df5a9c1d0cf85cef02628d631bb4377
semantic_inventory:
  - claim_key: CLAIM-598A32AC630EC71D
    claim_text: When an upload matches a document in the trash, the file the upload wrote is deleted as an orphan once the trashed document is restored
    role: condition
    status: modeled
    span:
      start: 0
      end: 135
    subjects:
      - documents.orphan_cleanup
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.0.0 changelog, #715: Properly cleanup orphan file when the same document exists i'
  recorded_at: '2026-11-16T10:31:26.826Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:documents
id: REQ-papra-orphan-file-cleanup-on-trashed-duplicate
type: req
---
When an upload matches a document in the trash, the file the upload wrote is deleted as an orphan once the trashed document is restored.

## Context

Reason not stated.

## Source

> Properly cleanup orphan file when the same document exists in trash

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.0.0 changelog, #715: Properly cleanup orphan file when the same document exists i
