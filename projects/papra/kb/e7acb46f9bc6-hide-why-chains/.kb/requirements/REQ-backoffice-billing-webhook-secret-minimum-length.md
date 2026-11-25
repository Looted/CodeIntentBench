---
title: BILLING_WEBHOOK_SECRET must be at least 16 characters long.
status: active
semantic_text: BILLING_WEBHOOK_SECRET must be at least 16 characters long.
semantic_clauses:
  - BILLING_WEBHOOK_SECRET must be at least 16 characters long
logic_claims:
  - CLAIM-38D489C2ABD0C6B5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eeb306039aabede566cada99a28e689e47d709c941674189b85ba4c62538694f
semantic_inventory:
  - claim_key: CLAIM-38D489C2ABD0C6B5
    claim_text: BILLING_WEBHOOK_SECRET must be at least 16 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - backoffice.billing_webhook_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-381'
  recorded_at: '2025-10-24T10:03:54.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Short values of the webhook signing secret can be guessed offline from one signed value.
id: REQ-backoffice-billing-webhook-secret-minimum-length
type: req
---
BILLING_WEBHOOK_SECRET must be at least 16 characters long.

## Context

Short values of the webhook signing secret can be guessed offline from one signed value.

## Source

> feat(backoffice): BILLING_WEBHOOK_SECRET minimum length 16 (OPS-381)

Source: Papra Cloud back office handbook - OPS-381
