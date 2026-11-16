---
title: Tag colour hex codes are validated case-insensitively, so uppercase codes are accepted.
status: active
semantic_text: Tag colour hex codes are validated case-insensitively, so uppercase codes are accepted.
semantic_clauses:
  - Tag colour hex codes are validated case-insensitively, so uppercase codes are accepted
logic_claims:
  - CLAIM-4DC9730AB5408DC1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3c58efd867b6df0332d249ee2f1fb71c45ef6aaf1ee0b421b7c46cd891b96882
semantic_inventory:
  - claim_key: CLAIM-4DC9730AB5408DC1
    claim_text: Tag colour hex codes are validated case-insensitively, so uppercase codes are accepted
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - tags.color
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.9.6 changelog, #524: Fixed the api validation of tag colors to make it case incen'
  recorded_at: '2026-11-16T10:32:25.792Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:tags
id: REQ-papra-tag-colour-case-insensitive
type: req
---
Tag colour hex codes are validated case-insensitively, so uppercase codes are accepted.

## Context

Reason not stated.

## Source

> Fixed the api validation of tag colors to make it case incensitive
> Fixes 400 error when submitting tags with uppercase hex colour codes.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 0.9.6 changelog, #524: Fixed the api validation of tag colors to make it case incen
