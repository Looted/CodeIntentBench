---
title: Storage drivers report a missing file as a dedicated file-not-found error instead of a generic failure.
status: active
semantic_text: Storage drivers report a missing file as a dedicated file-not-found error instead of a generic failure.
semantic_clauses:
  - Storage drivers report a missing file as a dedicated file-not-found error instead of a generic failure
logic_claims:
  - CLAIM-0253F688E5E7C8D5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7d707bda85a66ad76b0a69d084551a011a213f13b9f6332865998cb322256611
semantic_inventory:
  - claim_key: CLAIM-0253F688E5E7C8D5
    claim_text: Storage drivers report a missing file as a dedicated file-not-found error instead of a generic failure
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 102
    subjects:
      - storage.driver_delete
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.0 changelog, #472: Properly handle missing files errors in storage drivers'
  recorded_at: '2026-11-16T13:16:51.943Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:storage
id: REQ-papra-storage-missing-file-errors
type: req
---
Storage drivers report a missing file as a dedicated file-not-found error instead of a generic failure.

## Context

Reason not stated.

## Source

> Properly handle missing files errors in storage drivers

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 0.9.0 changelog, #472: Properly handle missing files errors in storage drivers
