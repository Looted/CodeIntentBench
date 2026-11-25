---
title: Tag aliases in the papra CLI are listed by number of uses, most used first.
status: active
semantic_text: Tag aliases in the papra CLI are listed by number of uses, most used first.
semantic_clauses:
  - Tag aliases in the papra CLI are listed by number of uses, most used first
logic_claims:
  - CLAIM-77BD955FD4D74AEA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b629a34a7b2f46fb7d558747effb0ca884a4fd5884244f744974e6496c7d7e0b
semantic_inventory:
  - claim_key: CLAIM-77BD955FD4D74AEA
    claim_text: Tag aliases in the papra CLI are listed by number of uses, most used first
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - cli.tag_aliases
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-127'
  recorded_at: '2025-02-11T11:15:52.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: People looked for a tag alias by name and could not find it in a list ordered by creation.
id: REQ-cli-tag-aliases-listing-order
type: req
---
Tag aliases in the papra CLI are listed by number of uses, most used first.

## Context

People looked for a tag alias by name and could not find it in a list ordered by creation.

## Source

> feat(cli): order tag aliases by number of uses (CLI-127)

Source: CLI design notes (packages/cli) - CLI-127
