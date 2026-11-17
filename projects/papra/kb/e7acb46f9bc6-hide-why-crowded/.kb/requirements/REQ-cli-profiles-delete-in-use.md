---
title: Deleting a profile in the papra CLI that is still in use is refused until nothing refers to it.
status: active
semantic_text: Deleting a profile in the papra CLI that is still in use is refused until nothing refers to it.
semantic_clauses:
  - Deleting a profile in the papra CLI that is still in use is refused until nothing refers to it
logic_claims:
  - CLAIM-F6617CA1135AFEA1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 88a9b5e3951011ede5147493c3f7da07f91bc14d666302e561619fa33d4f27f0
semantic_inventory:
  - claim_key: CLAIM-F6617CA1135AFEA1
    claim_text: Deleting a profile in the papra CLI that is still in use is refused until nothing refers to it
    role: definition
    status: modeled
    span:
      start: 0
      end: 94
    subjects:
      - cli.profiles
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-145'
  recorded_at: '2025-03-28T11:36:16.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
rationale: A deleted profile silently disappeared from everything that used it and nobody could tell what had been there.
id: REQ-cli-profiles-delete-in-use
type: req
---
Deleting a profile in the papra CLI that is still in use is refused until nothing refers to it.

## Context

A deleted profile silently disappeared from everything that used it and nobody could tell what had been there.

## Source

> feat(cli): refuse deleting profiles in use (CLI-145)

Source: CLI design notes (packages/cli) - CLI-145
