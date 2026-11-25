---
title: The billing webhook receiver refuses to start in production without BILLING_WEBHOOK_SECRET.
status: active
semantic_text: The billing webhook receiver refuses to start in production without BILLING_WEBHOOK_SECRET.
semantic_clauses:
  - The billing webhook receiver refuses to start in production without BILLING_WEBHOOK_SECRET
logic_claims:
  - CLAIM-349AFA15D146A9D9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5990e5e2af6dc9cdfcc643ea55676f4902b5fbbdbd21bf8aa71ab2d0042605b5
semantic_inventory:
  - claim_key: CLAIM-349AFA15D146A9D9
    claim_text: The billing webhook receiver refuses to start in production without BILLING_WEBHOOK_SECRET
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - backoffice.billing_webhook_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-165'
  recorded_at: '2026-04-04T15:05:36.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-billing-webhook-secret-required-in-production
type: req
---
The billing webhook receiver refuses to start in production without BILLING_WEBHOOK_SECRET.

## Context

Reason not stated.

## Source

> feat(backoffice): require BILLING_WEBHOOK_SECRET in production (OPS-165)

Source: Papra Cloud back office handbook - OPS-165
