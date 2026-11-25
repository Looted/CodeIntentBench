---
title: The billing webhook receiver requires BILLING_WEBHOOK_SECRET in every environment, development included.
status: active
semantic_text: The billing webhook receiver requires BILLING_WEBHOOK_SECRET in every environment, development included.
semantic_clauses:
  - The billing webhook receiver requires BILLING_WEBHOOK_SECRET in every environment, development included
logic_claims:
  - CLAIM-EFCF354F79AEDA09
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f03813173349be60b564d29404ec7bedd1aad18e9f6a477ff822fc28491d1ae7
semantic_inventory:
  - claim_key: CLAIM-EFCF354F79AEDA09
    claim_text: The billing webhook receiver requires BILLING_WEBHOOK_SECRET in every environment, development included
    role: normative
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - backoffice.billing_webhook_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-201'
  recorded_at: '2026-09-22T10:52:37.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
id: REQ-backoffice-billing-webhook-secret-development-default
type: req
---
The billing webhook receiver requires BILLING_WEBHOOK_SECRET in every environment, development included.

## Context

Reason not stated.

## Source

> feat(backoffice): BILLING_WEBHOOK_SECRET outside production (OPS-201)

Source: Papra Cloud back office handbook - OPS-201
