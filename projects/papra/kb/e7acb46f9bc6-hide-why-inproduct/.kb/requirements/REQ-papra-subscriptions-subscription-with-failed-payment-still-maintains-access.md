---
title: Subscription with failed payment still maintains access and blocks deletion.
status: active
semantic_text: Subscription with failed payment still maintains access and blocks deletion.
semantic_clauses:
  - Subscription with failed payment still maintains access and blocks deletion
logic_claims:
  - CLAIM-5B180D41A8D6B010
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 95b6f72b33502852db0e0fe2f34b64a59d8371a18dea26e1b0b5976c97b420d9
semantic_inventory:
  - claim_key: CLAIM-5B180D41A8D6B010
    claim_text: Subscription with failed payment still maintains access and blocks deletion
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - subscriptions.does_subscription_block_deletion
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1778'
  recorded_at: '2025-08-24T10:55:49.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:subscriptions
id: REQ-papra-subscriptions-subscription-with-failed-payment-still-maintains-access
type: req
---
Subscription with failed payment still maintains access and blocks deletion.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/subscriptions/subscriptions.models.test.ts (subscriptions models > doesSubscriptionBlockDeletion > organization deletion is blocked to prevent orphaned active subscriptions).

## Source

Source: Papra server behaviour notes - SRV-1778
