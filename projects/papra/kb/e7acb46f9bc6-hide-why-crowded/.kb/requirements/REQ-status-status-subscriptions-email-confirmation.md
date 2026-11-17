---
title: An address given in status page subscriptions counts only after it is confirmed through an emailed link.
status: active
semantic_text: An address given in status page subscriptions counts only after it is confirmed through an emailed link.
semantic_clauses:
  - An address given in status page subscriptions counts only after it is confirmed through an emailed link
logic_claims:
  - CLAIM-588698CEE39CA403
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1ed4d92db3118223e4812e10be667706c5fc995cbc82728be60812955d5cd110
semantic_inventory:
  - claim_key: CLAIM-588698CEE39CA403
    claim_text: An address given in status page subscriptions counts only after it is confirmed through an emailed link
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 103
    subjects:
      - status.status_subscriptions
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-248'
  recorded_at: '2026-07-15T14:11:30.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Mistyped addresses were receiving mail meant for someone else.
id: REQ-status-status-subscriptions-email-confirmation
type: req
---
An address given in status page subscriptions counts only after it is confirmed through an emailed link.

## Context

Mistyped addresses were receiving mail meant for someone else.

## Source

> feat(status): email confirmation for status subscriptions (STA-248)

Source: Status page runbook - STA-248
