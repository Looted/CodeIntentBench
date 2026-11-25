---
title: A profile can own at most 25 saved organizations in the papra CLI; the limit is the same for everyone.
status: active
semantic_text: A profile can own at most 25 saved organizations in the papra CLI; the limit is the same for everyone.
semantic_clauses:
  - A profile can own at most 25 saved organizations in the papra CLI
  - the limit is the same for everyone
logic_claims:
  - CLAIM-AD0F2372BCA98336
  - CLAIM-950BC8C0A4D47D22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a32a97e6e783b03ca63a3b49c73414364e5346b7272e45687b35caa2eaea6c01
semantic_inventory:
  - claim_key: CLAIM-AD0F2372BCA98336
    claim_text: A profile can own at most 25 saved organizations in the papra CLI
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - cli.saved_organizations
  - claim_key: CLAIM-950BC8C0A4D47D22
    claim_text: the limit is the same for everyone
    role: descriptive
    status: modeled
    span:
      start: 67
      end: 101
    subjects:
      - cli.saved_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-234'
  recorded_at: '2025-07-22T15:19:20.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
id: REQ-cli-saved-organizations-maximum-count
type: req
---
A profile can own at most 25 saved organizations in the papra CLI; the limit is the same for everyone.

## Context

Reason not stated.

## Source

> feat(cli): limit saved organizations per profile (CLI-234)

Source: CLI design notes (packages/cli) - CLI-234
