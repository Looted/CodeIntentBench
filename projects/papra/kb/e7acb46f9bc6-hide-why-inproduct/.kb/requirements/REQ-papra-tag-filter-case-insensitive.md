---
title: 'The tag: search filter matches tag names case-insensitively.'
status: active
semantic_text: 'The tag: search filter matches tag names case-insensitively.'
semantic_clauses:
  - 'The tag: search filter matches tag names case-insensitively'
logic_claims:
  - CLAIM-B38983B8C70AC3A5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1bdfafe307938f3e9efd809d602c97ee39728f25d7ca06042d7de03274a81292
semantic_inventory:
  - claim_key: CLAIM-B38983B8C70AC3A5
    claim_text: 'The tag: search filter matches tag names case-insensitively'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - search.tag_name_matching
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.2.0 changelog, #827: In the search queries, tag filters are now case-insensitive,'
  recorded_at: '2026-11-16T13:18:14.863Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:search
rationale: 'The changeset of #827 (2026-01-28): tag filters are case-insensitive "as tags names are case-insensitive".'
id: REQ-papra-tag-filter-case-insensitive
type: req
---
The tag: search filter matches tag names case-insensitively.

## Context

The changeset of #827 (2026-01-28): tag filters are case-insensitive "as tags names are case-insensitive".

## Source

> In the search queries, tag filters are now case-insensitive, so `tag:Important` and `tag:important` will match the same tag (as tags names are case-insensitive).

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.2.0 changelog, #827: In the search queries, tag filters are now case-insensitive,
