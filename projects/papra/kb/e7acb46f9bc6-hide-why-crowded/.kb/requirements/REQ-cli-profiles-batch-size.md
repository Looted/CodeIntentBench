---
title: At most 5 profiles can be added or removed in one request in the papra CLI.
status: active
semantic_text: At most 5 profiles can be added or removed in one request in the papra CLI.
semantic_clauses:
  - At most 5 profiles can be added or removed in one request in the papra CLI
logic_claims:
  - CLAIM-F75668BC29CD0974
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4cf67982b3f5aaa8b4561ed7ac4536cafefd16d4dea507329b0a23457f8eca68
semantic_inventory:
  - claim_key: CLAIM-F75668BC29CD0974
    claim_text: At most 5 profiles can be added or removed in one request in the papra CLI
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - cli.profiles
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-150'
  recorded_at: '2025-02-24T13:28:20.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
id: REQ-cli-profiles-batch-size
type: req
---
At most 5 profiles can be added or removed in one request in the papra CLI.

## Context

Reason not stated.

## Source

> feat(cli): batch profiles, 5 per request (CLI-150)

Source: CLI design notes (packages/cli) - CLI-150
