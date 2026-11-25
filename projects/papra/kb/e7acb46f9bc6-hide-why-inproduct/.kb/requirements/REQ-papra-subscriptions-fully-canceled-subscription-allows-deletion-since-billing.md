---
title: Fully canceled subscription allows deletion since billing has ended.
status: active
semantic_text: Fully canceled subscription allows deletion since billing has ended.
semantic_clauses:
  - Fully canceled subscription allows deletion since billing has ended
logic_claims:
  - CLAIM-87CD5DB325C590E3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 512904b536927c995fbf19ea4a09b58d1572704590491eb51d8f0e683b1a0601
semantic_inventory:
  - claim_key: CLAIM-87CD5DB325C590E3
    claim_text: Fully canceled subscription allows deletion since billing has ended
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - subscriptions.does_subscription_block_deletion
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1770'
  recorded_at: '2025-11-05T13:23:21.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:subscriptions
id: REQ-papra-subscriptions-fully-canceled-subscription-allows-deletion-since-billing
type: req
---
Fully canceled subscription allows deletion since billing has ended.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/subscriptions/subscriptions.models.test.ts (subscriptions models > doesSubscriptionBlockDeletion > organization deletion is allowed when subscription is terminated or user has canceled).

## Source

Source: Papra server behaviour notes - SRV-1770
