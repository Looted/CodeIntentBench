---
title: Stripe api dates are represented as unix timestamps (in seconds) and should be converted to JavaScript dates.
status: active
semantic_text: Stripe api dates are represented as unix timestamps (in seconds) and should be converted to JavaScript dates.
semantic_clauses:
  - Stripe api dates are represented as unix timestamps (in seconds) and should be converted to JavaScript dates
logic_claims:
  - CLAIM-9558D6F9E46E0A63
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 501566185e1fda9072b2b4d6a9195b22e5017beaed29e853b0e516f2e563180e
semantic_inventory:
  - claim_key: CLAIM-9558D6F9E46E0A63
    claim_text: Stripe api dates are represented as unix timestamps (in seconds) and should be converted to JavaScript dates
    role: normative
    status: modeled
    span:
      start: 0
      end: 108
    subjects:
      - subscriptions.coerce_stripe_timestamp_to_date
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1775'
  recorded_at: '2025-12-25T17:54:18.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:subscriptions
id: REQ-papra-subscriptions-stripe-api-dates-are-represented-as-unix
type: req
---
Stripe api dates are represented as unix timestamps (in seconds) and should be converted to JavaScript dates.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/subscriptions/subscriptions.models.test.ts (subscriptions models > coerceStripeTimestampToDate).

## Source

Source: Papra server behaviour notes - SRV-1775
