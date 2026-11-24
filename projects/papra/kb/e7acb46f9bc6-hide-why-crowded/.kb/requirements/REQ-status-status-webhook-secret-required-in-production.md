---
title: The status page refuses to start in production without STATUS_WEBHOOK_SECRET.
status: active
semantic_text: The status page refuses to start in production without STATUS_WEBHOOK_SECRET.
semantic_clauses:
  - The status page refuses to start in production without STATUS_WEBHOOK_SECRET
logic_claims:
  - CLAIM-1D9C934E5AB634C5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c25a51c7925823b31a8a6d39827a1f8f870271773b062e3884c8e2be8f888893
semantic_inventory:
  - claim_key: CLAIM-1D9C934E5AB634C5
    claim_text: The status page refuses to start in production without STATUS_WEBHOOK_SECRET
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - status.status_webhook_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-215'
  recorded_at: '2025-04-18T10:30:39.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-status-webhook-secret-required-in-production
type: req
---
The status page refuses to start in production without STATUS_WEBHOOK_SECRET.

## Context

Reason not stated.

## Source

> feat(status): require STATUS_WEBHOOK_SECRET in production (STA-215)

Source: Status page runbook - STA-215
