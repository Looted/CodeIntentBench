---
title: Subscription with payment issues still has access and blocks deletion.
status: active
semantic_text: Subscription with payment issues still has access and blocks deletion.
semantic_clauses:
  - Subscription with payment issues still has access and blocks deletion
logic_claims:
  - CLAIM-165EE83A872B660F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 94270cd24e1f27314daf0b0443a32b0a928c9cbb62ab524858f243ea2273dd46
semantic_inventory:
  - claim_key: CLAIM-165EE83A872B660F
    claim_text: Subscription with payment issues still has access and blocks deletion
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - subscriptions.does_subscription_block_deletion
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1779'
  recorded_at: '2026-09-07T15:41:49.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:subscriptions
id: REQ-papra-subscriptions-subscription-with-payment-issues-still-has-access
type: req
---
Subscription with payment issues still has access and blocks deletion.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/subscriptions/subscriptions.models.test.ts (subscriptions models > doesSubscriptionBlockDeletion > organization deletion is blocked to prevent orphaned active subscriptions).

## Source

Source: Papra server behaviour notes - SRV-1779
