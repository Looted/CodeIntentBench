---
title: BILLING_WEBHOOK_SECRET is rotated every 90 days; the previous value stays valid for 72 hours after a rotation.
status: active
semantic_text: BILLING_WEBHOOK_SECRET is rotated every 90 days; the previous value stays valid for 72 hours after a rotation.
semantic_clauses:
  - BILLING_WEBHOOK_SECRET is rotated every 90 days
  - the previous value stays valid for 72 hours after a rotation
logic_claims:
  - CLAIM-CDBE67D4E0DEB15B
  - CLAIM-2B1E92178189FEAE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b7b77de96940408d04220e2a2db742444d594a6d986f90303240d63d7ff70d60
semantic_inventory:
  - claim_key: CLAIM-CDBE67D4E0DEB15B
    claim_text: BILLING_WEBHOOK_SECRET is rotated every 90 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 47
    subjects:
      - backoffice.billing_webhook_secret
  - claim_key: CLAIM-2B1E92178189FEAE
    claim_text: the previous value stays valid for 72 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 49
      end: 109
    subjects:
      - backoffice.billing_webhook_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-390'
  recorded_at: '2026-01-22T09:49:48.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: Without an overlap, a rotation of the webhook signing secret broke requests already on their way.
id: REQ-backoffice-billing-webhook-secret-rotation
type: req
---
BILLING_WEBHOOK_SECRET is rotated every 90 days; the previous value stays valid for 72 hours after a rotation.

## Context

Without an overlap, a rotation of the webhook signing secret broke requests already on their way.

## Source

> chore(backoffice): rotate BILLING_WEBHOOK_SECRET every 90 days (OPS-390)

Source: Papra Cloud back office handbook - OPS-390
