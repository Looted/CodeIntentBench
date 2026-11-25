---
title: Profiles in the papra CLI are unique per config file regardless of letter case; a duplicate is reported as profile-already-exists.
status: active
semantic_text: Profiles in the papra CLI are unique per config file regardless of letter case; a duplicate is reported as profile-already-exists.
semantic_clauses:
  - Profiles in the papra CLI are unique per config file regardless of letter case
  - a duplicate is reported as profile-already-exists
logic_claims:
  - CLAIM-22AF5F219590243D
  - CLAIM-1375A3C1B3F7D387
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bfc032c2700fa63d1d95bf9d050260f39df6679ef94acc4355be25e2f2cd7739
semantic_inventory:
  - claim_key: CLAIM-22AF5F219590243D
    claim_text: Profiles in the papra CLI are unique per config file regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - cli.profiles
  - claim_key: CLAIM-1375A3C1B3F7D387
    claim_text: a duplicate is reported as profile-already-exists
    role: descriptive
    status: modeled
    span:
      start: 80
      end: 129
    subjects:
      - cli.profiles
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-135'
  recorded_at: '2025-09-25T09:48:44.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: Two profiles that differed only by capitalisation were being created by accident and then merged by hand.
id: REQ-cli-profiles-unique-ignoring-case
type: req
---
Profiles in the papra CLI are unique per config file regardless of letter case; a duplicate is reported as profile-already-exists.

## Context

Two profiles that differed only by capitalisation were being created by accident and then merged by hand.

## Source

> feat(cli): case-insensitive unique profile names (CLI-135)

Source: CLI design notes (packages/cli) - CLI-135
