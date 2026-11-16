---
title: The inline tag picker suggests a new tag with the casing the user typed.
status: active
semantic_text: The inline tag picker suggests a new tag with the casing the user typed.
semantic_clauses:
  - The inline tag picker suggests a new tag with the casing the user typed
logic_claims:
  - CLAIM-EB1A02FB900F3D46
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 052c58347b107c8bce7f8fd9f56defc01f693d614444ab8d016e5effd51603f7
semantic_inventory:
  - claim_key: CLAIM-EB1A02FB900F3D46
    claim_text: The inline tag picker suggests a new tag with the casing the user typed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - tags.inline_picker_casing
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1296: Fixed the inline tag picker lowercasing the typed name when'
  recorded_at: '2026-11-16T10:32:58.319Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:tags
id: REQ-papra-inline-tag-picker-keeps-casing
type: req
---
The inline tag picker suggests a new tag with the casing the user typed.

## Context

Reason not stated.

## Source

> Fixed the inline tag picker lowercasing the typed name when suggesting a new tag, so newly created tags now keep their original casing (e.g. typing "Invoices" no longer suggests "invoices").

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.6.0 changelog, #1296: Fixed the inline tag picker lowercasing the typed name when
