---
title: Active subscription with ongoing billing blocks deletion.
status: active
semantic_text: Active subscription with ongoing billing blocks deletion.
semantic_clauses:
  - Active subscription with ongoing billing blocks deletion
logic_claims:
  - CLAIM-BC989E2FA2DB4377
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6f1bcfa153472e0f031b3ac8ed99086ba2929c48fe41bf0597ef6fa56fc1e168
semantic_inventory:
  - claim_key: CLAIM-BC989E2FA2DB4377
    claim_text: Active subscription with ongoing billing blocks deletion
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 56
    subjects:
      - subscriptions.does_subscription_block_deletion
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1767'
  recorded_at: '2026-09-09T16:38:01.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:subscriptions
id: REQ-papra-subscriptions-active-subscription-with-ongoing-billing-blocks-deletion
type: req
---
Active subscription with ongoing billing blocks deletion.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/subscriptions/subscriptions.models.test.ts (subscriptions models > doesSubscriptionBlockDeletion > organization deletion is blocked to prevent orphaned active subscriptions).

## Source

Source: Papra server behaviour notes - SRV-1767
