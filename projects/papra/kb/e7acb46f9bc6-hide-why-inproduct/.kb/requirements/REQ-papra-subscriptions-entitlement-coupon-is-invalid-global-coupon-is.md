---
title: When the entitlement coupon is invalid, the global coupon is applied.
status: active
semantic_text: When the entitlement coupon is invalid, the global coupon is applied.
semantic_clauses:
  - When the entitlement coupon is invalid, the global coupon is applied
logic_claims:
  - CLAIM-644562CE5689C90E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 71b83f0af75d82e75c623e25450e21b9def1562c9fe545ebf7c2da94a0a59947
semantic_inventory:
  - claim_key: CLAIM-644562CE5689C90E
    claim_text: When the entitlement coupon is invalid, the global coupon is applied
    role: condition
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - subscriptions.resolve_checkout_discount
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1784'
  recorded_at: '2025-02-24T16:28:39.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:subscriptions
id: REQ-papra-subscriptions-entitlement-coupon-is-invalid-global-coupon-is
type: req
---
When the entitlement coupon is invalid, the global coupon is applied.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/subscriptions/subscriptions.services.test.ts (subscriptions services > resolveCheckoutDiscount).

## Source

Source: Papra server behaviour notes - SRV-1784
