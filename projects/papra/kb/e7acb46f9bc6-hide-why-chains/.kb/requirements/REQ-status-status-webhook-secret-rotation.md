---
title: STATUS_WEBHOOK_SECRET is rotated every 180 days; the previous value stays valid for 72 hours after a rotation.
status: active
semantic_text: STATUS_WEBHOOK_SECRET is rotated every 180 days; the previous value stays valid for 72 hours after a rotation.
semantic_clauses:
  - STATUS_WEBHOOK_SECRET is rotated every 180 days
  - the previous value stays valid for 72 hours after a rotation
logic_claims:
  - CLAIM-A397E792F85017DC
  - CLAIM-2B1E92178189FEAE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b76b2d3ea7cf98713735c7fd49d6a52e31d2e58c455a71265541795b1ee47b3e
semantic_inventory:
  - claim_key: CLAIM-A397E792F85017DC
    claim_text: STATUS_WEBHOOK_SECRET is rotated every 180 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 47
    subjects:
      - status.status_webhook_secret
  - claim_key: CLAIM-2B1E92178189FEAE
    claim_text: the previous value stays valid for 72 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 49
      end: 109
    subjects:
      - status.status_webhook_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-222'
  recorded_at: '2026-05-28T17:05:45.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Without an overlap, a rotation of the webhook signing secret broke requests already on their way.
id: REQ-status-status-webhook-secret-rotation
type: req
---
STATUS_WEBHOOK_SECRET is rotated every 180 days; the previous value stays valid for 72 hours after a rotation.

## Context

Without an overlap, a rotation of the webhook signing secret broke requests already on their way.

## Source

> chore(status): rotate STATUS_WEBHOOK_SECRET every 180 days (STA-222)

Source: Status page runbook - STA-222
