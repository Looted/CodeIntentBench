---
title: At most 10 tag aliases can be added or removed in one request in the papra CLI.
status: active
semantic_text: At most 10 tag aliases can be added or removed in one request in the papra CLI.
semantic_clauses:
  - At most 10 tag aliases can be added or removed in one request in the papra CLI
logic_claims:
  - CLAIM-32FB2CE3A165A658
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8fb5d2235a7671584179640e5e2f2ae73fef32c3745c36c2b04d9d5b0631486c
semantic_inventory:
  - claim_key: CLAIM-32FB2CE3A165A658
    claim_text: At most 10 tag aliases can be added or removed in one request in the papra CLI
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - cli.tag_aliases
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-130'
  recorded_at: '2025-03-18T08:20:18.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: Requests with more than 10 tag aliases timed out on slow connections.
id: REQ-cli-tag-aliases-batch-size
type: req
---
At most 10 tag aliases can be added or removed in one request in the papra CLI.

## Context

Requests with more than 10 tag aliases timed out on slow connections.

## Source

> feat(cli): batch tag aliases, 10 per request (CLI-130)

Source: CLI design notes (packages/cli) - CLI-130
