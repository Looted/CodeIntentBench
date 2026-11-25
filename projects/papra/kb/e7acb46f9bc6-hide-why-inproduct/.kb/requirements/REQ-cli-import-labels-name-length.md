---
title: Import label names in the papra CLI are limited to 64 characters.
status: active
semantic_text: Import label names in the papra CLI are limited to 64 characters.
semantic_clauses:
  - Import label names in the papra CLI are limited to 64 characters
logic_claims:
  - CLAIM-57D503C1FE93EB93
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3294ad3d0385f9d3d50c1c578da0dd5665eee055a7cc4107bf40cc37fcad3bf8
semantic_inventory:
  - claim_key: CLAIM-57D503C1FE93EB93
    claim_text: Import label names in the papra CLI are limited to 64 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - cli.import_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-159'
  recorded_at: '2025-07-25T14:09:52.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: Longer names broke the layout of the list where import labels are shown.
id: REQ-cli-import-labels-name-length
type: req
---
Import label names in the papra CLI are limited to 64 characters.

## Context

Longer names broke the layout of the list where import labels are shown.

## Source

> feat(cli): cap import label name length at 64 (CLI-159)

Source: CLI design notes (packages/cli) - CLI-159
