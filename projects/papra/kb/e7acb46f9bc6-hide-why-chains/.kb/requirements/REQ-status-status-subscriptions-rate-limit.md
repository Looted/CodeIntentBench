---
title: At most 5 requests per IP address per hour are accepted in status page subscriptions.
status: active
semantic_text: At most 5 requests per IP address per hour are accepted in status page subscriptions.
semantic_clauses:
  - At most 5 requests per IP address per hour are accepted in status page subscriptions
logic_claims:
  - CLAIM-A3F8D2204144B9F0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 47aebee0d0d561d3583ee0eac6aabdf072177d3f7ae64d02647df35f49580c1c
semantic_inventory:
  - claim_key: CLAIM-A3F8D2204144B9F0
    claim_text: At most 5 requests per IP address per hour are accepted in status page subscriptions
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - status.status_subscriptions
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-247'
  recorded_at: '2026-04-19T09:54:51.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-status-subscriptions-rate-limit
type: req
---
At most 5 requests per IP address per hour are accepted in status page subscriptions.

## Context

Reason not stated.

## Source

> feat(status): rate limit status subscriptions (STA-247)

Source: Status page runbook - STA-247
