---
title: Profile names in the papra CLI are limited to 64 characters.
status: active
semantic_text: Profile names in the papra CLI are limited to 64 characters.
semantic_clauses:
  - Profile names in the papra CLI are limited to 64 characters
logic_claims:
  - CLAIM-E33D2C99A2C01E22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 58063a5c67a86431ea30b343a02268ff203bda5e4481ab6063226c9a824c758b
semantic_inventory:
  - claim_key: CLAIM-E33D2C99A2C01E22
    claim_text: Profile names in the papra CLI are limited to 64 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - cli.profiles
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-138'
  recorded_at: '2025-05-10T15:35:12.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: The column that stores the name is 64 characters wide.
id: REQ-cli-profiles-name-length
type: req
---
Profile names in the papra CLI are limited to 64 characters.

## Context

The column that stores the name is 64 characters wide.

## Source

> feat(cli): cap profile name length at 64 (CLI-138)

Source: CLI design notes (packages/cli) - CLI-138
