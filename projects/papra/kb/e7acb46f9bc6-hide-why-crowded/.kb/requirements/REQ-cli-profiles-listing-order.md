---
title: Profiles in the papra CLI are listed in the order they were created.
status: active
semantic_text: Profiles in the papra CLI are listed in the order they were created.
semantic_clauses:
  - Profiles in the papra CLI are listed in the order they were created
logic_claims:
  - CLAIM-E185288A78B4BDF7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 742f5b712e45ffdbe0c44f5f974dd36c7726ee67f25856435f259a7da67b7246
semantic_inventory:
  - claim_key: CLAIM-E185288A78B4BDF7
    claim_text: Profiles in the papra CLI are listed in the order they were created
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - cli.profiles
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-143'
  recorded_at: '2025-07-14T14:54:15.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: People looked for a profile by name and could not find it in a list ordered by creation.
id: REQ-cli-profiles-listing-order
type: req
---
Profiles in the papra CLI are listed in the order they were created.

## Context

People looked for a profile by name and could not find it in a list ordered by creation.

## Source

> feat(cli): order profiles in the order they were created (CLI-143)

Source: CLI design notes (packages/cli) - CLI-143
