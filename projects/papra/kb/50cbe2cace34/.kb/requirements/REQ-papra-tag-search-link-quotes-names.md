---
title: The search link of a tag whose name has spaces quotes the name (tag:"my tag").
status: active
semantic_text: The search link of a tag whose name has spaces quotes the name (tag:"my tag").
semantic_clauses:
  - The search link of a tag whose name has spaces quotes the name (tag:"my tag")
logic_claims:
  - CLAIM-A0BF7A66EFAD7438
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5f2a6640c10460b3e3f9e5587415a8705f541ce8ce8eeddb60dbb592bb68cf53
semantic_inventory:
  - claim_key: CLAIM-A0BF7A66EFAD7438
    claim_text: The search link of a tag whose name has spaces quotes the name (tag:"my tag")
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - tags.search_link
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.1.0 changelog, #783: Fix tag automatic search link issue when tags have spaces, b'
  recorded_at: '2026-11-16T10:32:51.943Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:tags
id: REQ-papra-tag-search-link-quotes-names
type: req
---
The search link of a tag whose name has spaces quotes the name (tag:"my tag").

## Context

Reason not stated.

## Source

> Fix tag automatic search link issue when tags have spaces, before `tag:my tag` would not work, now generate `tag:"my tag"` to fix it.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.1.0 changelog, #783: Fix tag automatic search link issue when tags have spaces, b
