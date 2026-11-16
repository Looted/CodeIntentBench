---
title: Uploaded file names are decoded as UTF-8, not latin1, so non-ASCII names are kept.
status: active
semantic_text: Uploaded file names are decoded as UTF-8, not latin1, so non-ASCII names are kept.
semantic_clauses:
  - Uploaded file names are decoded as UTF-8, not latin1, so non-ASCII names are kept
logic_claims:
  - CLAIM-AC1F9BA332D96F53
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 383d333ef8de9d2fef24ca43905438038dbd759dc0de9586a494c1f9879d8f9f
semantic_inventory:
  - claim_key: CLAIM-AC1F9BA332D96F53
    claim_text: Uploaded file names are decoded as UTF-8, not latin1, so non-ASCII names are kept
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - documents.filename_encoding
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.5 changelog, #521: Properly handle file names encoding (utf8 instead of latin1)'
  recorded_at: '2026-11-16T10:20:16.597Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:documents
id: REQ-papra-file-names-decoded-as-utf8
type: req
---
Uploaded file names are decoded as UTF-8, not latin1, so non-ASCII names are kept.

## Context

Reason not stated.

## Source

> Properly handle file names encoding (utf8 instead of latin1) to support non-ASCII characters.
> Fix content disposition header to support non-ascii filenames

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 0.9.5 changelog, #521: Properly handle file names encoding (utf8 instead of latin1)
