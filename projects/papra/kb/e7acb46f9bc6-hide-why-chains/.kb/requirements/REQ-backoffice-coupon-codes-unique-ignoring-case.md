---
title: Coupon codes in the Papra Cloud back office are unique per campaign regardless of letter case; a duplicate is reported as coupon-code-already-exists.
status: active
semantic_text: Coupon codes in the Papra Cloud back office are unique per campaign regardless of letter case; a duplicate is reported as coupon-code-already-exists.
semantic_clauses:
  - Coupon codes in the Papra Cloud back office are unique per campaign regardless of letter case
  - a duplicate is reported as coupon-code-already-exists
logic_claims:
  - CLAIM-8CE6CA7F3F11560A
  - CLAIM-C1D5B516FCF0423D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ea7941d950bb569032a0b0961f75789efa6f5f113e2bd36a3ea51d68c37c84a7
semantic_inventory:
  - claim_key: CLAIM-8CE6CA7F3F11560A
    claim_text: Coupon codes in the Papra Cloud back office are unique per campaign regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - backoffice.coupon_codes
  - claim_key: CLAIM-C1D5B516FCF0423D
    claim_text: a duplicate is reported as coupon-code-already-exists
    role: descriptive
    status: modeled
    span:
      start: 95
      end: 148
    subjects:
      - backoffice.coupon_codes
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-154'
  recorded_at: '2026-08-02T12:54:30.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-coupon-codes-unique-ignoring-case
type: req
---
Coupon codes in the Papra Cloud back office are unique per campaign regardless of letter case; a duplicate is reported as coupon-code-already-exists.

## Context

Reason not stated.

## Source

> feat(backoffice): case-insensitive unique coupon code names (OPS-154)

Source: Papra Cloud back office handbook - OPS-154
