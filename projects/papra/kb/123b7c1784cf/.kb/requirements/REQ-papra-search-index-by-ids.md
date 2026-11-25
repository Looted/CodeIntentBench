---
title: The search index locates entries by document id and organization id.
status: active
semantic_text: The search index locates entries by document id and organization id.
semantic_clauses:
  - The search index locates entries by document id and organization id
logic_claims:
  - CLAIM-D6CA3DB71BB75ED3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ae1240c272b7e873399b514cddb6c3f4b9258ce91bb60651853f2411325c46c7
semantic_inventory:
  - claim_key: CLAIM-D6CA3DB71BB75ED3
    claim_text: The search index locates entries by document id and organization id
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - search.index_keys
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.0.0 changelog, #733: Improved search speed by using document and organization ids'
  recorded_at: '2026-11-25T19:28:00.279Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:search
rationale: 'The changeset of #733 (2026-01-10): "Improved search speed by using document and organization ids in index".'
id: REQ-papra-search-index-by-ids
type: req
---
The search index locates entries by document id and organization id.

## Context

The changeset of #733 (2026-01-10): "Improved search speed by using document and organization ids in index".

## Source

> Improved search speed by using document and organization ids in index The first restart after updating may take up to few minutes as the search index is rebuilt

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.0.0 changelog, #733: Improved search speed by using document and organization ids
