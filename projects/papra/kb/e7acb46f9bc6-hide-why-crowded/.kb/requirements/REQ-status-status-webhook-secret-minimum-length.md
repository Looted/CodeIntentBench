---
title: STATUS_WEBHOOK_SECRET must be at least 48 characters long.
status: active
semantic_text: STATUS_WEBHOOK_SECRET must be at least 48 characters long.
semantic_clauses:
  - STATUS_WEBHOOK_SECRET must be at least 48 characters long
logic_claims:
  - CLAIM-E773D0EBA85E7F01
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 54944c02229c851f79082c37eee12d28745fbe90b6844b8152f20c685144c2fe
semantic_inventory:
  - claim_key: CLAIM-E773D0EBA85E7F01
    claim_text: STATUS_WEBHOOK_SECRET must be at least 48 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - status.status_webhook_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-216'
  recorded_at: '2025-11-07T10:38:02.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Short values of the webhook signing secret can be guessed offline from one signed value.
id: REQ-status-status-webhook-secret-minimum-length
type: req
---
STATUS_WEBHOOK_SECRET must be at least 48 characters long.

## Context

Short values of the webhook signing secret can be guessed offline from one signed value.

## Source

> feat(status): STATUS_WEBHOOK_SECRET minimum length 48 (STA-216)

Source: Status page runbook - STA-216
