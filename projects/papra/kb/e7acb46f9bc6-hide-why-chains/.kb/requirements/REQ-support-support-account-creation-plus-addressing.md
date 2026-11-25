---
title: Plus-addressed emails in support portal account creation are treated as the same address as the one without the plus part.
status: active
semantic_text: Plus-addressed emails in support portal account creation are treated as the same address as the one without the plus part.
semantic_clauses:
  - Plus-addressed emails in support portal account creation are treated as the same address as the one without the plus part
logic_claims:
  - CLAIM-F4E7BCFEF532BD39
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a17b10e2ab8b5a5e2f13f30e863ce66964434436f425c17fac9de753718fc983
semantic_inventory:
  - claim_key: CLAIM-F4E7BCFEF532BD39
    claim_text: Plus-addressed emails in support portal account creation are treated as the same address as the one without the plus part
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 121
    subjects:
      - support.support_account_creation
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-270'
  recorded_at: '2025-12-06T11:26:27.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: One person had registered forty times with plus addresses.
id: REQ-support-support-account-creation-plus-addressing
type: req
---
Plus-addressed emails in support portal account creation are treated as the same address as the one without the plus part.

## Context

One person had registered forty times with plus addresses.

## Source

> feat(support): plus addressing in support account creation (SUP-270)

Source: Support portal decision log - SUP-270
