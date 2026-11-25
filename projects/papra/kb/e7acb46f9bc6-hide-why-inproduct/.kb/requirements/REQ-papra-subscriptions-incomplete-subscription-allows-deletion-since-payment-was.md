---
title: Incomplete subscription allows deletion since payment was never completed.
status: active
semantic_text: Incomplete subscription allows deletion since payment was never completed.
semantic_clauses:
  - Incomplete subscription allows deletion since payment was never completed
logic_claims:
  - CLAIM-CF61BCA9AFD3FBD5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3593aa8f56bf0eca8bab4c60b815eac59710c577a60309f48e9260c52bc57696
semantic_inventory:
  - claim_key: CLAIM-CF61BCA9AFD3FBD5
    claim_text: Incomplete subscription allows deletion since payment was never completed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - subscriptions.does_subscription_block_deletion
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1771'
  recorded_at: '2025-03-02T10:40:40.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:subscriptions
id: REQ-papra-subscriptions-incomplete-subscription-allows-deletion-since-payment-was
type: req
---
Incomplete subscription allows deletion since payment was never completed.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/subscriptions/subscriptions.models.test.ts (subscriptions models > doesSubscriptionBlockDeletion > organization deletion is allowed when subscription is terminated or user has canceled).

## Source

Source: Papra server behaviour notes - SRV-1771
