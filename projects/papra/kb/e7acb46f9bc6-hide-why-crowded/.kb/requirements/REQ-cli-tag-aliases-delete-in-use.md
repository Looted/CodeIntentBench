---
title: Deleting a tag alias in the papra CLI removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a tag alias in the papra CLI removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a tag alias in the papra CLI removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-CB177E4FA7F1A71A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7949cb5da532a37e4e95f43922e9ea1d0522f9b73ef4265be1f633ac293fd90b
semantic_inventory:
  - claim_key: CLAIM-CB177E4FA7F1A71A
    claim_text: Deleting a tag alias in the papra CLI removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 112
    subjects:
      - cli.tag_aliases
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-128'
  recorded_at: '2026-05-21T16:56:34.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
id: REQ-cli-tag-aliases-delete-in-use
type: req
---
Deleting a tag alias in the papra CLI removes it from everything that uses it, without confirmation for each use.

## Context

Reason not stated.

## Source

> feat(cli): deleting a tag alias detaches it (CLI-128)

Source: CLI design notes (packages/cli) - CLI-128
