---
title: Tag alias names in the papra CLI are limited to 120 characters.
status: active
semantic_text: Tag alias names in the papra CLI are limited to 120 characters.
semantic_clauses:
  - Tag alias names in the papra CLI are limited to 120 characters
logic_claims:
  - CLAIM-53B3B33FDBA82FB2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b1c627c646a5216eca9719413df640a596aacd6eac9bd81d822372324e251ff5
semantic_inventory:
  - claim_key: CLAIM-53B3B33FDBA82FB2
    claim_text: Tag alias names in the papra CLI are limited to 120 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - cli.tag_aliases
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-116'
  recorded_at: '2025-04-23T10:30:17.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: The column that stores the name is 120 characters wide.
id: REQ-cli-tag-aliases-name-length
type: req
---
Tag alias names in the papra CLI are limited to 120 characters.

## Context

The column that stores the name is 120 characters wide.

## Source

> feat(cli): cap tag alias name length at 120 (CLI-116)

Source: CLI design notes (packages/cli) - CLI-116
