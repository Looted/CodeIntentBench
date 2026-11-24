---
title: Tagging rules run on a new document only after its content has been extracted.
status: active
semantic_text: Tagging rules run on a new document only after its content has been extracted.
semantic_clauses:
  - Tagging rules run on a new document only after its content has been extracted
logic_claims:
  - CLAIM-F277A2ECBBA8C3FA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 62f8b4bfeda097db1808d11abcc0203ba47b05d3c4bc4605327740da7dbd5ec5
semantic_inventory:
  - claim_key: CLAIM-F277A2ECBBA8C3FA
    claim_text: Tagging rules run on a new document only after its content has been extracted
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - tagging_rules.execution_order
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.8.2 changelog, #461: Fix a regression bug that executed tagging rules before the'
  recorded_at: '2026-11-16T13:19:08.477Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:tagging-rules
id: REQ-papra-tagging-rules-after-extraction
type: req
---
Tagging rules run on a new document only after its content has been extracted.

## Context

Reason not stated.

## Source

> Fix a regression bug that executed tagging rules before the file content was extracted

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 0.8.2 changelog, #461: Fix a regression bug that executed tagging rules before the
