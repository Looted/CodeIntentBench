---
title: The number of profiles per config file in the papra CLI is limited to 1000; the limit is configurable and 1000 is the default.
status: active
semantic_text: The number of profiles per config file in the papra CLI is limited to 1000; the limit is configurable and 1000 is the default.
semantic_clauses:
  - The number of profiles per config file in the papra CLI is limited to 1000
  - the limit is configurable and 1000 is the default
logic_claims:
  - CLAIM-EF131BCC8F0192D6
  - CLAIM-D14F54198D4B07D0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e1bd2da833ad69469e24b40e4069d5ca31cac0e3f7d04c2b0c37f71d0e64fd08
semantic_inventory:
  - claim_key: CLAIM-EF131BCC8F0192D6
    claim_text: The number of profiles per config file in the papra CLI is limited to 1000
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - cli.profiles
  - claim_key: CLAIM-D14F54198D4B07D0
    claim_text: the limit is configurable and 1000 is the default
    role: descriptive
    status: modeled
    span:
      start: 76
      end: 125
    subjects:
      - cli.profiles
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-136'
  recorded_at: '2025-08-22T13:43:47.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
id: REQ-cli-profiles-maximum-count
type: req
---
The number of profiles per config file in the papra CLI is limited to 1000; the limit is configurable and 1000 is the default.

## Context

Reason not stated.

## Source

> feat(cli): limit profiles per config file (CLI-136)

Source: CLI design notes (packages/cli) - CLI-136
