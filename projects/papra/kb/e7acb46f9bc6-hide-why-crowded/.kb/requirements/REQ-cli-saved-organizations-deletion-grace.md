---
title: A deleted saved organization in the papra CLI can be restored for 60 days; after that it is removed for good.
status: active
semantic_text: A deleted saved organization in the papra CLI can be restored for 60 days; after that it is removed for good.
semantic_clauses:
  - A deleted saved organization in the papra CLI can be restored for 60 days
  - after that it is removed for good
logic_claims:
  - CLAIM-09F3B60F4267798B
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3225a01188bf44dccda819ffb678a22f82d1a06a07e9508a444fbc6dd1c2a766
semantic_inventory:
  - claim_key: CLAIM-09F3B60F4267798B
    claim_text: A deleted saved organization in the papra CLI can be restored for 60 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - cli.saved_organizations
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 75
      end: 108
    subjects:
      - cli.saved_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-257'
  recorded_at: '2026-02-25T12:11:50.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-cli-saved-organizations-deletion-grace
type: req
---
A deleted saved organization in the papra CLI can be restored for 60 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(cli): 60-day restore window for saved organizations (CLI-257)

Source: CLI design notes (packages/cli) - CLI-257
