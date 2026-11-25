---
title: Resetting the password of a support portal account signs out every session of that account.
status: active
semantic_text: Resetting the password of a support portal account signs out every session of that account.
semantic_clauses:
  - Resetting the password of a support portal account signs out every session of that account
logic_claims:
  - CLAIM-C0016CE190ECA819
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 689d52fa7d1dd0ca2e0ee3f5147c9b33bdb20c102ed12daad9ff15df2f4f8b6c
semantic_inventory:
  - claim_key: CLAIM-C0016CE190ECA819
    claim_text: Resetting the password of a support portal account signs out every session of that account
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - support.support_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-211'
  recorded_at: '2025-07-08T11:43:59.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: A reset is what people do when they think someone else is in their account.
id: REQ-support-support-portal-accounts-reset-and-sessions
type: req
---
Resetting the password of a support portal account signs out every session of that account.

## Context

A reset is what people do when they think someone else is in their account.

## Source

> feat(support): sessions after a password reset (SUP-211)

Source: Support portal decision log - SUP-211
