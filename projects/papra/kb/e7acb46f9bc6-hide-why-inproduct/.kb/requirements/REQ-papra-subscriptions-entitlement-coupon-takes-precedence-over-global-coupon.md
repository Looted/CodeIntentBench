---
title: The entitlement coupon takes precedence over the global coupon.
status: active
semantic_text: The entitlement coupon takes precedence over the global coupon.
semantic_clauses:
  - The entitlement coupon takes precedence over the global coupon
logic_claims:
  - CLAIM-2EA142970BDFE888
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: aaa27ea3fabcc56f89546aa3e6128bac5d3765212ec7be27b2e8acd6aae63296
semantic_inventory:
  - claim_key: CLAIM-2EA142970BDFE888
    claim_text: The entitlement coupon takes precedence over the global coupon
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - subscriptions.resolve_checkout_discount
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1781'
  recorded_at: '2025-05-01T13:08:11.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:subscriptions
id: REQ-papra-subscriptions-entitlement-coupon-takes-precedence-over-global-coupon
type: req
---
The entitlement coupon takes precedence over the global coupon.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/subscriptions/subscriptions.services.test.ts (subscriptions services > resolveCheckoutDiscount).

## Source

Source: Papra server behaviour notes - SRV-1781
