---
title: When no coupon is configured, promotion codes are allowed.
status: active
semantic_text: When no coupon is configured, promotion codes are allowed.
semantic_clauses:
  - When no coupon is configured, promotion codes are allowed
logic_claims:
  - CLAIM-46FC88AFE15230DC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 88840b3486790e1cff2d4d0b0333e527d67d3ff6f1ee549087ca7d15860198b0
semantic_inventory:
  - claim_key: CLAIM-46FC88AFE15230DC
    claim_text: When no coupon is configured, promotion codes are allowed
    role: condition
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - subscriptions.resolve_checkout_discount
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1783'
  recorded_at: '2025-08-28T17:41:48.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:subscriptions
id: REQ-papra-subscriptions-no-coupon-is-configured-promotion-codes-are
type: req
---
When no coupon is configured, promotion codes are allowed.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/subscriptions/subscriptions.services.test.ts (subscriptions services > resolveCheckoutDiscount).

## Source

Source: Papra server behaviour notes - SRV-1783
