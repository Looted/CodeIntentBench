---
title: Ownership of a saved organization in the papra CLI can be transferred only to someone who is already a member of it.
status: active
semantic_text: Ownership of a saved organization in the papra CLI can be transferred only to someone who is already a member of it.
semantic_clauses:
  - Ownership of a saved organization in the papra CLI can be transferred only to someone who is already a member of it
logic_claims:
  - CLAIM-6B686C696C91F28B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f7aa491a744ebd517cd739a4d374123725bb2ba49bdef6e8129863cce2445fa5
semantic_inventory:
  - claim_key: CLAIM-6B686C696C91F28B
    claim_text: Ownership of a saved organization in the papra CLI can be transferred only to someone who is already a member of it
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - cli.saved_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-265'
  recorded_at: '2026-04-13T15:57:59.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: A transfer to a mistyped address had handed a workspace to a stranger.
id: REQ-cli-saved-organizations-ownership-transfer
type: req
---
Ownership of a saved organization in the papra CLI can be transferred only to someone who is already a member of it.

## Context

A transfer to a mistyped address had handed a workspace to a stranger.

## Source

> feat(cli): transferring a saved organization (CLI-265)

Source: CLI design notes (packages/cli) - CLI-265
