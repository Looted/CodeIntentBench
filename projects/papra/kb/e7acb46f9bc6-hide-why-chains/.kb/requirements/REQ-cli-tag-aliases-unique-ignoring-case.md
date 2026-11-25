---
title: Tag aliases in the papra CLI are unique per mapping file regardless of letter case; a duplicate is reported as tag-alias-already-exists.
status: active
semantic_text: Tag aliases in the papra CLI are unique per mapping file regardless of letter case; a duplicate is reported as tag-alias-already-exists.
semantic_clauses:
  - Tag aliases in the papra CLI are unique per mapping file regardless of letter case
  - a duplicate is reported as tag-alias-already-exists
logic_claims:
  - CLAIM-6E64603E4AC78572
  - CLAIM-529AC15A76713C31
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0a487563863b0820511fa38b979c1ef453cb5d71eacac4f49abe72810a228028
semantic_inventory:
  - claim_key: CLAIM-6E64603E4AC78572
    claim_text: Tag aliases in the papra CLI are unique per mapping file regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - cli.tag_aliases
  - claim_key: CLAIM-529AC15A76713C31
    claim_text: a duplicate is reported as tag-alias-already-exists
    role: descriptive
    status: modeled
    span:
      start: 84
      end: 135
    subjects:
      - cli.tag_aliases
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-105'
  recorded_at: '2025-04-14T15:39:38.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
id: REQ-cli-tag-aliases-unique-ignoring-case
type: req
---
Tag aliases in the papra CLI are unique per mapping file regardless of letter case; a duplicate is reported as tag-alias-already-exists.

## Context

Reason not stated.

## Source

> feat(cli): case-insensitive unique tag alias names (CLI-105)

Source: CLI design notes (packages/cli) - CLI-105
