---
title: The full-text search index is maintained by event handlers on document created, updated, trashed and restored events, not by database triggers.
status: active
semantic_text: The full-text search index is maintained by event handlers on document created, updated, trashed and restored events, not by database triggers.
logic_claims:
  - CLAIM-5E984BDF0E20280A
  - CLAIM-2FEB93685A109E95
semantic_clauses:
  - The full-text search index is maintained by event handlers on document created, updated, trashed and restored events
  - not by database triggers
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0bf9ef00e1e2c6cd26084c8c979681b65fc03724701a4f270ae8f5c252444084
semantic_inventory:
  - claim_key: CLAIM-5E984BDF0E20280A
    claim_text: The full-text search index is maintained by event handlers on document created, updated, trashed and restored events
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 116
    subjects:
      - search.index
  - claim_key: CLAIM-2FEB93685A109E95
    claim_text: not by database triggers
    role: descriptive
    status: modeled
    span:
      start: 118
      end: 142
    subjects:
      - search.index
firmness: firm
origin:
  kind: import
  ref: 'papra-hq/papra merged pull requests: #683'
  recorded_at: '2026-10-14T12:11:24.265Z'
tags:
  - bootstrap
  - knowledge-source:papra-prs
  - component:search
id: REQ-the-full-text-search-index-is-maintained-b-1B169822
type: req
required_evidence: asserted
---
The full-text search index is maintained by event handlers on document created, updated, trashed and restored events, not by database triggers.

## Context

Reason not stated.

## Source

> refactor(search): removed database fts triggers (#683)

Source: papra-hq/papra merged pull requests - #683
