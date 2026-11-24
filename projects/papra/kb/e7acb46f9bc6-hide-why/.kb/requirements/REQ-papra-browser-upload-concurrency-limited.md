---
title: The web client limits how many files it uploads at once.
status: active
semantic_text: The web client limits how many files it uploads at once.
semantic_clauses:
  - The web client limits how many files it uploads at once
logic_claims:
  - CLAIM-45DBF2EFFFF043BF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: aefa753271b4f1514c6d7d3caf64ba7008aaefa5e29ab2d9a8b4bfb4ca0c2b8f
semantic_inventory:
  - claim_key: CLAIM-45DBF2EFFFF043BF
    claim_text: The web client limits how many files it uploads at once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - upload.concurrency
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.11.0 changelog, #619: Limit concurrent browser upload to avoid network crashes'
  recorded_at: '2026-11-16T13:20:33.709Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:upload
rationale: 'The changeset of #619 (2025-11-09): "to avoid network crashes".'
id: REQ-papra-browser-upload-concurrency-limited
type: req
---
The web client limits how many files it uploads at once.

## Context

The changeset of #619 (2025-11-09): "to avoid network crashes".

## Source

> Limit concurrent browser upload to avoid network crashes

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 25.11.0 changelog, #619: Limit concurrent browser upload to avoid network crashes
