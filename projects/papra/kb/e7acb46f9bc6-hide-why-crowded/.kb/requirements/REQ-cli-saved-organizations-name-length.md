---
title: Saved organization names in the papra CLI are between 3 and 32 characters long.
status: active
semantic_text: Saved organization names in the papra CLI are between 3 and 32 characters long.
semantic_clauses:
  - Saved organization names in the papra CLI are between 3 and 32 characters long
logic_claims:
  - CLAIM-8B9DE82238ABF26D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b4153ddbc23c794696b13aa1d70dc5514a84df33d11e628e67562ca2abe5ba1a
semantic_inventory:
  - claim_key: CLAIM-8B9DE82238ABF26D
    claim_text: Saved organization names in the papra CLI are between 3 and 32 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - cli.saved_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-252'
  recorded_at: '2025-09-10T11:17:14.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: One-letter names were used for throwaway tests and never cleaned up.
id: REQ-cli-saved-organizations-name-length
type: req
---
Saved organization names in the papra CLI are between 3 and 32 characters long.

## Context

One-letter names were used for throwaway tests and never cleaned up.

## Source

> feat(cli): saved organization name length (CLI-252)

Source: CLI design notes (packages/cli) - CLI-252
