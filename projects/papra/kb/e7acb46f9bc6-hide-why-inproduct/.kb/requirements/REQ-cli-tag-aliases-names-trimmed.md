---
title: Tag alias names in the papra CLI are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Tag alias names in the papra CLI are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Tag alias names in the papra CLI are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-190009BD01488A1A
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c26555ae9a1c553eba6e5e19a140388c50a715f793007f0e48bcdbba34384a38
semantic_inventory:
  - claim_key: CLAIM-190009BD01488A1A
    claim_text: Tag alias names in the papra CLI are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 101
    subjects:
      - cli.tag_aliases
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 103
      end: 149
    subjects:
      - cli.tag_aliases
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-119'
  recorded_at: '2025-12-15T16:51:43.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
id: REQ-cli-tag-aliases-names-trimmed
type: req
---
Tag alias names in the papra CLI are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(cli): trim tag alias names (CLI-119)

Source: CLI design notes (packages/cli) - CLI-119
